const { Forbidden, Unauthorized } = require("../../server/errors");

module.exports = (...permissions) => {
  return (req, resp, next) => {
    if (req.authenticated !== undefined && req.authenticated.permissions) {
      if (
        permissions.some(
          (permission) =>
            req.authenticated.permissions.indexOf(permission) !== -1
        )
      ) {
        next();
      } else {
        next(new Forbidden("Parmissão negada"));
      }
    } else {
      next(new Unauthorized("Usuário não autorizado!"));
    }
  };
};