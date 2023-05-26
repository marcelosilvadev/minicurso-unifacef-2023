"use strict";
const {
  OK,
} = require('http-status');

const request = require('supertest');

const {
  bootstrap, shutdown
} = require('../../../server/server');

describe('Routes /Health', () => {
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

  describe('Success to try execute health check', () => {
    test("Get ping health check", async () => {
      const res = await agent.get("/health");

      expect(res.status).toEqual(OK);
      expect(res.body).toEqual({
        status: "UP"
      });
    });
  });
});
