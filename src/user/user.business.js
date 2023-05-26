const mongoose = require("mongoose")
const Business = require("../../common/business")
const User = require("./user.model")
const UserRepository = require("./user.repository")

class UserBusiness extends Business {
  constructor() {
    super(User)
    this._userRepository = new UserRepository();
  }

  async create(user) {
    const resp = await this._userRepository.create(new this.model(user))
    return this.envelope(resp)
  }

  async getAll() {
    const resp = await this._userRepository.findAll()
    if (!resp?.length) {
      return
    }
    return this.envelope(resp)
  }

  async getById(userId) {
    if (!mongoose.Types.ObjectId.isValid(userId))
      return

    const resp = await this._userRepository.findById(userId)
    if (!resp) {
      return
    }
    return this.envelope(resp)
  }

  async update(userId, user) {
    const resp = await this._userRepository.update(userId, user)
    return this.envelope(resp)
  }

  async delete(userId) {
    await this._userRepository.delete(userId);
  }
}

module.exports = UserBusiness;