const Controller = require("../../common/controller")
const UserBusiness = require("./user.business")
const {CREATED, OK} = require("http-status")

class UserController extends Controller {
  constructor(){
    super();
    this._userBusiness = new UserBusiness()
  }

  create(){
    return async (req, resp, next) => {
      try {
        const user = await this._userBusiness.create(req.body);
        this.render(resp)(user, CREATED);
      } catch (error) {
        next(error);
      }
    }
  }

  getAll(){
    return async (req, resp, next) => {
      try {
        const user = await this._userBusiness.getAll();
        this.render(resp)(user, OK);
      } catch (error) {
        next(error);
      }
    }
  }

  getById(){
    return async (req, resp, next) => {
      try {
        const user = await this._userBusiness.getById(req.params.id);
        this.render(resp)(user, OK);
      } catch (error) {
        next(error);
      }
    }
  }

  update(){
    return async (req, resp, next) => {
      try {
        const user = await this._userBusiness.update(req.params.id, req.body);
        this.render(resp)(user, OK);
      } catch (error) {
        next(error);
      }
    }
  }

  delete(){
    return async (req, resp, next) => {
      try {
        const user = await this._userBusiness.delete(req.params.id);
        this.render(resp)(user, OK);
      } catch (error) {
        next(error);
      }
    }
  }
}

module.exports = UserController