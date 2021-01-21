const db = require("../models");

module.exports = {
    getAll: async function (req, res) {
        res.json(await db.Item.findAll({include: { all: true, nested: true }}));
    }
}