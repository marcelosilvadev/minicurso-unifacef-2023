"use strict";
const {
  OK,
} = require('http-status');

const request = require('supertest');

const {
  bootstrap, shutdown
} = require('../../../server/server');

describe('Routes /address', () => {
  let server, agent;

  beforeAll(async () => {
    return new Promise(function (resolve) {
      bootstrap().then(boot => {
        server = boot;
        agent = request(server);
        resolve();
      });
    });
  });

  afterAll(() => {
    shutdown();
    return server && server.close();
  });

  describe('GET /address/:zipcode', () => {

  })

});
