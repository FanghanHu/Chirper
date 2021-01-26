const router = require("express").Router();
const orderController = require("../../controllers/orderController");


// Matches with "/api/books"
router.route("/get/:orderId").get(orderController.getOrder);
router.route('/getWithOrderNumber').get(orderController.getOrderWithOrderNumber);
router.route("/getall").get(orderController.getAllOrders);
router.route("/create").post(orderController.createOrder);
router.route("/orderItem").post(orderController.orderItem);
router.route("/voidItem").post(orderController.voidItem);
router.route("/addPayment").post(orderController.addPayment);

module.exports = router;
