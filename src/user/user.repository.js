const Repository = require("../../common/repository");
const User = require("./user.model")

class UserRepository extends Repository{
  constructor(){
    super(User)
  }
}

module.exports = UserRepository;