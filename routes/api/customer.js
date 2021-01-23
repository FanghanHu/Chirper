const router = require("express").Router();
const customerController = require("../../controllers/customerController");


// Matches with "/api/books"
router.route("/getAll").get(customerController.getAll);
router.route("/get/:customerId").get(customerController.getAll);
router.route("/add").post(customerController.addCustomer);
router.route("/delete/:customerId").delete(customerController.deleteCustomer);
router.route("/update").post(customerController.updateCustomer);
module.exports = router;
