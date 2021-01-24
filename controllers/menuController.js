const db = require("../models");

module.exports = {
    getAll: async function (req, res) {
        const eagarLoad = req.body.eagarLoad;

        if (eagarLoad) {
            res.json(await db.Menu.findAll({ include: { all: true, nested: true } }));
        } else {
            res.json(await db.Menu.findAll());
        }
    },

    /**
     * get an item from the items table, client must provide an itemId.
     */
    getById: async function (req, res) {
        const menuId = req.params.menuId;
        const eagarLoad = req.body.eagarLoad;

        let menu = undefined;

        if (eagarLoad) {
            menu = await db.Menu.findOne({ where: { id: menuId }, include: { all: true, nested: true } });
        } else {
            menu = await db.Menu.findOne({ where: { id: menuId } });
        }

        if (!menu) {
            return res.status(404).send("cannot find menu");
        }

        return res.json(menu);
    }
}