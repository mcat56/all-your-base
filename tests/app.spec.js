var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const res = await request(app)
      .get("/");

    expect(res.statusCode).toBe(200);
  });
});

describe('Test forecast endpoint', () => {
  beforeEach(async () => {
    await database.raw('truncate table users cascade');

    let user = {
      email: 'foobar@gmail.com', api_key: '123456897'
    };
    await database('users').insert(user, 'id')
  });

  afterEach(() => {
    database.raw('truncate table users cascade')
  });
  test('it should return forecast', async () => {
    const res = await request(app)
      .get('/api/v1/forecast')
      .send({api_key: '123456897'})
      .query({ location: 'denver,co'});

      expect(res.status).toBe(200)

  })
})

describe('Test favorite endpoint', () => {
  beforeEach(async () => {
    await database.raw('truncate table users cascade');

    let user = {
      email: 'foobar@gmail.com', api_key: '123456897'
    };
    await database('users').insert(user, 'id')
    let favorite1 = {
      location: 'denver,co', user_id: user.id };
    let favorite2 = {
      location: 'new york, ny', user_id: user.id };
    await database('favorites').insert(favorite1, 'id')
    await database('favorites').insert(favorite2, 'id')
  });
  afterEach(() => {
    database.raw('truncate table users cascade')
  });
  test('it should return favorite', async () => {
    const res = await request(app)
      .get('/api/v1/favorites')
      .send({api_key: '123456897'})

      expect(res.status).toBe(200)
  })
})

describe('users', () => {
  beforeEach(async () => {
    await database.raw('truncate table users cascade');

    let user = {
      email: 'foobar@gmail.com', api_key: '123456897'
    };
    await database('users').insert(user, 'id')
  });

  afterEach(() => {
    database.raw('truncate table users cascade')
  });

  describe('test users endpoint', () => {
    it('tests happy path', async () => {
      const res = await request(app).get('/api/v1/users');

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);

      expect(res.body[0]).toHaveProperty('email');
      expect(res.body[0].email).toBe('foobar@gmail.com');

      expect(res.body[0]).toHaveProperty('api_key');
      expect(res.body[0].api_key).toBe('123456897');
    })
  })
})
