"use strict";
const {
  OK, NO_CONTENT,
} = require('http-status');

const request = require('supertest');

const axios = require('../../../utils/axios/axios')
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)

const { mockHTTPGetAddressByZipcode, mockHTTPGetAddressWithError } = require('./__data__/axios/axios.data')
const { addressResponse } = require('./__data__/mock.data')

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
    test("should return status code 200 when zipcode finded", async () => {
      mock
        .onGet('https://viacep.com.br/ws/14403734/json/')
        .reply(OK, mockHTTPGetAddressByZipcode)

      const response = await agent.get('/api/v1/address/14403734')
      expect(response.status).toEqual(OK)
      expect(response.body.records).toEqual(addressResponse)
    })

    test("should return status code 204 when zipcode not found", async () => {
      mock
        .onGet('https://viacep.com.br/ws/11111111/json/')
        .reply(OK, mockHTTPGetAddressWithError)

      const response = await agent.get('/api/v1/address/11111111')
      expect(response.status).toEqual(NO_CONTENT)
    })
  })

});
