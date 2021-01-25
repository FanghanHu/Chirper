const db = require("../models");

module.exports = {
    getAll: async function (req, res) {
        const eagarLoad = req.query.eagarLoad;

        if(eagarLoad === "true") {
            return res.json(await db.Item.findAll({include: { all: true, nested: true }}));
        } else {
            return res.json(await db.Item.findAll());
        }
    },

    /**
     * get an item from the items table, client must provide an itemId.
     */
    getById: async function (req, res) {
        const itemId = req.params.itemId;
        const eagarLoad = req.query.eagarLoad;

        let item = undefined;

        if(eagarLoad === "true") {
            item = await db.Item.findOne({where: {id: itemId}, include: { all: true, nested: true }});
        } else {
            item = await db.Item.findOne({where: {id: itemId}});
        }

        if(!item) {
            return res.status(404).send("cannot find item");
        }

        return res.json(item);
    }
}