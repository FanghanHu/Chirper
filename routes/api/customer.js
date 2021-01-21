const router = require("express").Router();
const customerController = require("../../controllers/customerController");


// Matches with "/api/books"
router.route("/getAll").get(customerController.getAll);
router.route("/get/:customerId").get(customerController.getAll);

module.exports = router;
