const Business = require("../../common/business");
const AddressServices = require("./address.services");
const {addressResponse} = require("./address.serializable")

class AddressBusiness extends Business {
  constructor() {
    super()
    this._addressServices = new AddressServices()
  }

  async getAddressByZipcode(zipcode) {
    const address = await this._addressServices.getAddressByZipcode(zipcode)
    if (!address || address.erro) {
      return
    }
    return this.envelope(addressResponse(address))
  }
}

module.exports = AddressBusiness