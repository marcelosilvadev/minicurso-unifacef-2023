const axios = require("../../utils/axios/axios");

class AddressServices {
  async getAddressByZipcode(zipcode) {
    try {
      const resp = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)
      return resp.data
    } catch (error) {
      throw error;
    }
  }
}
module.exports = AddressServices