const db = require("../models");

module.exports = {
    getAll: async function (req, res) {
        res.json(await db.Item.findAll({include: { all: true, nested: true }}));
    },

    /**
     * get an item from the items table, client must provide an itemId.
     */
    getById: async function (req, res) {
        const itemId = req.params.itemId;

        const item = await db.Item.findOne({where: {id: itemId}, include: { all: true, nested: true }});

        if(!item) {
            return res.status(404).send("cannot find item");
        }

        return res.json(item);
    }
}