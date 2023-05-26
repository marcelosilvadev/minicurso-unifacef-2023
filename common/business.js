const os = require('os');

class Business {
  constructor(model) {
    this.model = model;
    this.basePath = `/${model?.collection.name}`;
  }

  envelope(document) {
    const resource = {
      meta: {
        self: os.hostname()
      },
      records: document
    };

    return resource;
  }
}

module.exports = Business;
