const db = require("../models");

module.exports = {
    getAll: async function (req, res) {
        const eagarLoad = req.query.eagarLoad;

        if (eagarLoad === "true") {
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
        const eagarLoad = req.query.eagarLoad;

        let customer = undefined;

        if (eagarLoad === "true") {
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

        if (!await db.Customer.findOne({ where: { id: customerId } })) {
            return res.status(404).send("cannot find customer");
        }

        const result = await db.Customer.destroy({where: {id: customerId}});
        res.json(result)
                
    },
/**customer update */
    updateCustomer: async function (req, res){
        const customerId = req.body.customerId;

        if (!await db.Customer.findOne({ where: { id: customerId } })) {
            return res.status(404).send("cannot find customer");
        }

        await db.Customer.update({...req.body},{where:{id:customerId}})
        const result = await db.Customer.findOne({ where: { id: customerId } });
        res.json(result)
    },

}