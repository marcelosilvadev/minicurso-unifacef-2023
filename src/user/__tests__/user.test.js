"use strict";

const request = require('supertest');

const {mockRequestPostUser, mockRequestPutUser} = require('./__data__/mock.data')

const {
  bootstrap, shutdown
} = require('../../../server/server');
const { CREATED, OK } = require('http-status');
let userId;
describe('Routes /user', () => {
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

  describe('POST /user', () => {
    test("should return 201 when user created", async () => {
      const response = await agent
      .post("/api/v1/user")
      .set("Authorization", global.token)
      .send(mockRequestPostUser);
      userId = response.body.records._id
      expect(response.status).toEqual(CREATED)
      expect(response.body.records.name).toEqual("James Test")
      expect(response.body.records.age).toEqual(99)
    })
  })

  describe('GET /user', () => {
    test("should return 200 when user updated", async () => {
      const response = await agent
      .put(`/api/v1/user/${userId}`)
      .set("Authorization", global.token)
      .send(mockRequestPutUser);

      expect(response.status).toEqual(OK)
      expect(response.body.records.name).toEqual("Richard Test")
      expect(response.body.records.age).toEqual(55)
    })
  })

  describe('GET /user/:id', () => {

  })

  describe('PUT /user/:id', () => {

  })

  describe('DELETE /user/:id', () => {

  })

});
