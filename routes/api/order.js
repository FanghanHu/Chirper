const router = require("express").Router();
const orderController = require("../../controllers/orderController");


// Matches with "/api/books"
router.route("/create").post(orderController.createOrder);
router.route("/orderItem").post(orderController.orderItem);

module.exports = router;
