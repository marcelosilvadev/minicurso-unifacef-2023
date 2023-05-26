class Forbidden extends Error {
  constructor(message) {
    super(message);
  }
}

class NotFound extends Error {
  constructor(message) {
    super(message);
  }
}

class BadRequest extends Error {
  constructor(message) {
    super(message);
  }
}

class Unauthorized extends Error {
  constructor(message) {
    super(message);
  }
}

class InternalServerError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = {
  Forbidden,
  NotFound,
  BadRequest,
  Unauthorized,
  InternalServerError
};
