const {
  INTERNAL_SERVER_ERROR,
  BAD_REQUEST,
  NOT_FOUND,
  FORBIDDEN,
  UNAUTHORIZED,
} = require('http-status');
const {
  Forbidden,
  NotFound,
  BadRequest,
  Unauthorized,
  InternalServerError
} = require('./errors');

module.exports = (error, req, res, next) => {
  const genericErrorMessage = "Ops, aconteceu um erro. Tente novamente mais tarde!"
  let code = error.statusCode || error.code || error.response?.status || INTERNAL_SERVER_ERROR;
  let message = error.response?.data?.message || error.message || genericErrorMessage;

  if (error instanceof InternalServerError || code === INTERNAL_SERVER_ERROR) {
    code = INTERNAL_SERVER_ERROR
    errors = message
  }

  if (error instanceof BadRequest || code === BAD_REQUEST) {
    code = BAD_REQUEST
    errors = message
  }

  if (error instanceof NotFound || code === NOT_FOUND) {
    code = NOT_FOUND
    errors = message
  }

  if (error instanceof Forbidden || code === FORBIDDEN) {
    code = FORBIDDEN
    errors = message
  }

  if (error instanceof Unauthorized || code === UNAUTHORIZED) {
    code = UNAUTHORIZED
    errors = message
  }

  console.error({ code, message })
  res.status(code).json({ code, message });
};
