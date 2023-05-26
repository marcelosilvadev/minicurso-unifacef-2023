const { BAD_REQUEST } = require("http-status");

const schemaType = {
  BODY: 0,
  QUERY: 1,
};

function validateSchema (schema, type) {
  return (req, res, next) => {
    let errors = [];
    if (type === schemaType.QUERY) {
      const query = req.query;
      const queryResult = schema.validate(query, { abortEarly: false });

      req.query = queryResult.value
      errors = errors.concat(
        queryResult.error ? queryResult.error.details.map((m) => m.message) : []
      );
    } else {
      const body = req.body;
      const bodyResult = schema.validate(body, { abortEarly: false });

      req.body = bodyResult.value
      errors = errors.concat(
        bodyResult.error ? bodyResult.error.details.map((m) => m.message) : []
      );
    }

    if (errors.length) {
      const message = errors.join(", ");
      const code = BAD_REQUEST;
      res.status(code).json({ code, message });
    } else next();
  };
}

module.exports = {
  validateSchema,
  schemaType,
};
