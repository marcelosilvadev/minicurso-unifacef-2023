const router = require("express").Router();
const AddressController = require("./address.controller")

const addressController = new AddressController();

router.get(
  "/:zipcode",
  addressController.getAddressByZipcode()
)

module.exports = router;