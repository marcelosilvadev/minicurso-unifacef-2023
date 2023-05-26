const Business = require("../../common/business");
const AddressServices = require("./address.services");

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
    return this.envelope(address)
  }
}

module.exports = AddressBusiness