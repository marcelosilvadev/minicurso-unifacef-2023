const joi = require("joi");

const postUserSchema = joi.object().keys({
  name: joi.string().required(),
  age: joi.number().integer(),
  email: joi.string().email(),
}).required()

const putUserSchema = joi.object().keys({
  name: joi.string().required(),
  age: joi.number().integer(),
  email: joi.string().email(),
}).required()

module.exports = {
  postUserSchema,
  putUserSchema
}