const router = require("express").Router();
const loginController = require("../../controllers/loginController");


// Matches with "/api/books"
router.route("/accesscode").post(loginController.loginWithAccessCode);

module.exports = router;
