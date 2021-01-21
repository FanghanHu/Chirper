const db = require("../models");

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

        try {
            const order = await db.Order.findOne({where: {id: orderId}});
            const server = await db.User.findOne({where: {id: serverId}});

            if(!order) {
                return res.status(404).send("cannot find order");
            }

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
            return res.json(await db.Order.findOne({where: {id: orderId}}))
        } catch (err) {
            console.log(err);
            res.status(500).json(e.stack);
        }
    },

    /**
     * remove an item from an order, client must provide the index of item to remove, and also order id, and server id.
     */
    removeItem: function (req, res) {

    },

    /**
     * 
     */
    addPayment: function (req, res) {

    }

    //TODO: remove payment
}