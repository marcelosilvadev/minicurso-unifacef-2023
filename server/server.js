//Dependencies
const express = require('express');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose')

//Files Imports
const environment = require('../config/environment');
const errorHandler = require('./errorHandler');
const health = require('../src/health/health.routes')
const masterRouterV1 = require('./middlewares/v1/masterRouter')
const tokenMiddleware = require('./middlewares/token')

const _app = express();

function _init() {
  return new Promise((resolve, reject) => {
    try {
      _app.use(cors());
      _app.use(express.json());
      _app.use(tokenMiddleware)

      _app.use('/health', health);
      _app.use('/api/v1', masterRouterV1);

      _app.use(errorHandler);

      const server = http.createServer(_app);
      server.listen(environment.application.port, () => resolve(server));
    }
    catch (err) {
      reject(err);
    }
  });
}

function initDb() {
  mongoose.Promise = global.Promise;
  const {
    username,
    password,
    host,
    name
  } = environment.db

  let url = `mongodb+srv://${username}:${encodeURIComponent(password)}@${host}/${name}?retryWrites=true&w=majority`

  return mongoose.connect(url);
}

async function bootstrap() {
  await initDb();
  return await _init();
}

function shutdown() {
  return mongoose.disconnect();
}

module.exports = {
  bootstrap,
  shutdown
};