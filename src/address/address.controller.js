const AddressBusiness = require("./address.business")
const Controller = require("../../common/controller")
const { OK } = require("http-status")
class AddressController extends Controller {
  constructor() {
    super();
    this._addressBusiness = new AddressBusiness()
  }

  getAddressByZipcode() {
    return async (req, resp, next) => {
      try {
        const address = await this._addressBusiness.getAddressByZipcode(req.params.zipcode);
        this.render(resp)(address, OK);
      } catch (error) {
        next(error);
      }
    }
  }
}

module.exports = AddressController