const router = require("express").Router();

router.use("/login", require("./login"));
router.use("/order", require("./order"));
router.use('/item', require('./item'));

module.exports = router;
