const { NO_CONTENT } = require('http-status');

class Controller {
  render(res) {
    return (data, status = NO_CONTENT) => {

      if (!data?.records) {
        res.status(NO_CONTENT).json();
        return;
      }

      res.status(status).json(data);
    };
  }
}

module.exports = Controller;
