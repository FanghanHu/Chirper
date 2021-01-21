const router = require("express").Router();

router.use("/login", require("./login"));
router.use("/order", require("./order"));

module.exports = router;
