let router = require('express').Router();

const user = require("../../../src/user/user.routes")
const address = require("../../../src/address/address.routes")

router.use("/user", user)
router.use("/address", address)

module.exports = router;