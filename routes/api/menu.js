const router = require("express").Router();
const menuController = require("../../controllers/menuController");


// Matches with "/api/books"
router.route("/getAll").get(menuController.getAll);
router.route("/get/:menuId").get(menuController.getById);

module.exports = router;
