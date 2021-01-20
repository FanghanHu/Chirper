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
    orderItem: function (req, res) {
        
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