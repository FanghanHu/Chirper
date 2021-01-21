const db = require("../models");

function eagarLoadOrder(orderId) {
    return db.Order.findOne({where: {id: orderId}, include: { all: true, nested: true }});
}

module.exports = {
    /**
     * creates a new order, client must submit a creatorId.
     */
    createOrder: async function (req, res) {
        const creatorId = req.body.creatorId;
        
        const t = await db.sequelize.transaction();

        try {
            const orderNumber = await db.AppConfig.findOne({
                where: {itemName:"next order number"}, 
                lock: true, 
                transaction: t
            });

            const order = await db.Order.create({
                orderNumber: "#" + orderNumber.itemValue,
                creatorId: creatorId,
            }, {
                include: ["creator"], 
                transaction: t
            });

            await db.AppConfig.update({
                itemValue: orderNumber.itemValue + 1
            }, {
                where: {itemName:"next order number"}, 
                transaction: t
            });

            t.commit();
            res.json(order);
        } catch (e) {
            t.rollback();
            console.error(e);
            res.status(500).json(e.stack);
        }
    },

    /**
     * Add an item into an order, client must provide the whole item object, the order id, and also the server for this action
     */
    orderItem: async function (req, res) {
        const orderId = req.body.orderId;
        const item = req.body.item;
        const serverId = req.body.serverId;

        item.serverId = serverId;
        item.createdAt = new Date().toISOString();
        item.updatedAt = new Date().toISOString();
        item.status = "OPEN";
        item.actions = [];

        try {
            const order = await db.Order.findOne({where: {id: orderId}});

            if(!order) {
                return res.status(404).send("cannot find order");
            }
            
            const server = await db.User.findOne({where: {id: serverId}});

            if(!server) {
                return res.status(404).send("cannot find server");
            }

            if(!item || !item instanceof Object) {
                return res.status(400).send("invalid item");
            }

            //append the item to the items array without reading from the database again
            await db.sequelize.query(`UPDATE orders 
            SET items = JSON_ARRAY_APPEND(items, "$", CAST(:item AS JSON))
            WHERE id = :orderId;`, {replacements: {orderId, item: JSON.stringify(item)}});

            //success, return the whole order object
            return res.json(await eagarLoadOrder(orderId));
        } catch (err) {
            console.error(err);
            res.status(500).json(err.stack);
        }
    },

    /**
     * mark an item as voided, client must provide the index of item to remove, and also order id, and server id.
     */
    voidItem: async function (req, res) {
        const orderId = req.body.orderId;
        const itemIndex = req.body.itemIndex;
        const serverId = req.body.serverId;

        try {
            const order = await db.Order.findOne({where: {id: orderId}});

            if(!order) {
                return res.status(404).send("cannot find order");
            }
            
            const server = await db.User.findOne({where: {id: serverId}});

            if(!server) {
                return res.status(404).send("cannot find server");
            }

            if(!order.items[itemIndex]) {
                return res.status(404).send("Cannot find item");
            }

            //make a copy of existing item
            const item = {...order.items[itemIndex]};

            //add void information into the copy of item
            item.status = "VOIDED";
            if(!item.actions) item.actions = [];
            item.actions.push({
                timestamp: new Date().toISOString(),
                serverId: serverId,
                type: "VOID"
            });

            //replace the order's item with our modified item
            await db.sequelize.query(`UPDATE orders 
            SET items = JSON_SET(items, "$[:itemIndex]", CAST(:item AS JSON))
            WHERE id = :orderId;`, {replacements: {orderId, itemIndex, item: JSON.stringify(item)}});

            //success, return the whole order object
            return res.json(await eagarLoadOrder(orderId));
        } catch (err) {
            console.error(err);
            res.status(500).json(err.stack);
        }
    },

    /**
     * add a new payment into an order, also updates the order's status as the payment is received, 
     * client must provide the orderId, amount and type of the payment, and the serverId
     */
    addPayment: async function (req, res) {
        const orderId = req.body.orderId;
        const amount = parseFloat(req.body.amount);
        const type = req.body.type;
        const serverId = req.body.serverId;

        try {
            const order = await db.Order.findOne({where: {id: orderId}});

            if(!order) {
                return res.status(404).send("cannot find order");
            }
            
            const server = await db.User.findOne({where: {id: serverId}});

            if(!server) {
                return res.status(404).send("cannot find server");
            }

            if(amount <= 0) {
                return res.status(400).send("invalid amount");
            }

            if(!type) {
                return res.status(400).send("missing payment type");
            }

            await order.createPayment({amount, type, cashierId: server.id});

            const updatedOrder = await eagarLoadOrder(orderId);
            

            //success, return the whole order object
            return res.json(await eagarLoadOrder(orderId));
        } catch (err) {
            console.error(err);
            res.status(500).json(err.stack);
        }
    }

    //TODO: void payment
}