const db = require("../models");

module.exports = {
    getAll: async function (req, res) {
        const eagarLoad = req.body.eagarLoad;

        if (eagarLoad) {
            res.json(await db.Customer.findAll({ include: { all: true, nested: true } }));
        } else {
            res.json(await db.Customer.findAll());
        }
    },

    /**
     * get an item from the items table, client must provide an itemId.
     */
    getById: async function (req, res) {
        const customerId = req.params.customerId;
        const eagarLoad = req.body.eagarLoad;

        let customer = undefined;

        if (eagarLoad) {
            customer = await db.Customer.findOne({ where: { id: customerId }, include: { all: true, nested: true } });
        } else {
            customer = await db.Customer.findOne({ where: { id: customerId } });
        }

        if (!customer) {
            return res.status(404).send("cannot find customer");
        }

        return res.json(customer);
    },
    /**create new customer */
    addCustomer: async function (req, res) {
        const customer = req.body;
        const result = await db.Customer.create(customer);
        res.json(result);
    },
    /**dele customer */
    deleteCustomer: async function (req, res) {
        const customerId = req.params.customerId;
        const result = await db.Customer.destroy({where: {id: customerId}});
        res.json(result)
        
        
        
        
    }



}