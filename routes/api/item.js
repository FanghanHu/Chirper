const router = require("express").Router();
const itemController = require("../../controllers/itemController");


// Matches with "/api/books"
router.route("/getAll").get(itemController.getAll);
router.route("/get/:itemId").get(itemController.getAll);

module.exports = router;
