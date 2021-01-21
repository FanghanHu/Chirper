const router = require("express").Router();
const tableController = require("../../controllers/tableController");


// Matches with "/api/books"
router.route("/getAll").get(tableController.getAll);
router.route("/get/:tableId").get(tableController.getById);
router.route("/getAllAreas").get(tableController.getAllAreas);
router.route("/getArea/:areaId").get(tableController.getAreaById);

module.exports = router;
