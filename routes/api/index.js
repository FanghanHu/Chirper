const router = require("express").Router();

router.use("/login", require("./login"));
router.use("/order", require("./order"));
router.use('/item', require('./item'));
router.use('/customer', require('./customer'));
router.use('/table', require('./table'));
router.use('/menu', require('./menu'));

module.exports = router;
