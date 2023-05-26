const router = require("express").Router();
const UserController = require("./user.controller");
const {
  validateSchema,
  schemaType
} = require("../../server/middlewares/schemaValidate");
const {
  postUserSchema,
  putUserSchema
} = require("./user.schema")

const userController = new UserController();

router.post(
  "/",
  validateSchema(postUserSchema, schemaType.BODY),
  userController.create()
)

router.get(
  "/",
  userController.getAll()
)

router.get(
  "/:id",
  userController.getById()
)

router.put(
  "/:id",
  validateSchema(putUserSchema, schemaType.BODY),
  userController.update()
)

router.delete(
  "/:id",
  userController.delete()
)

module.exports = router;