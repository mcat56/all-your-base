var shell = require('shelljs');
var request = require("supertest");
var app = require('../app');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

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
  test('it should return error for no location', async () => {
    const res = await request(app)
      .get('/api/v1/forecast')
      .send({api_key: '123456897'})

      expect(res.status).toBe(400)
      expect(res.body.error_message).toBe('Location required')

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
      location: 'new york,ny', user_id: user.id };
    await database('favorites').insert(favorite1, 'id')
    await database('favorites').insert(favorite2, 'id')
  });
  afterEach(() => {
    database.raw('truncate table users cascade')
  });
  test('it should return favorites', async () => {
    const res = await request(app)
      .get('/api/v1/favorites')
      .send({api_key: '123456897'})

      expect(res.status).toBe(200)
  })
  test('it should return error if no api key given', async () => {
    const res = await request(app)
      .get('/api/v1/favorites')

      expect(res.status).toBe(401)
      expect(res.body.error_message).toBe('Unauthorized request')
  })
  test('it should post favorite', async () => {
    const res = await request(app)
      .post('/api/v1/favorites')
      .send({api_key: '123456897', location: 'seattle,wa'})

      expect(res.status).toBe(201)
      expect(res.body.message).toBe('Seattle, WA has been added to your favorites')
  })
  test('it should delete favorite', async () => {
    const res = await request(app)
      .delete('/api/v1/favorites')
      .send({api_key: '123456897', location: 'new york,ny'})

      expect(res.status).toBe(204)
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


describe('test user post endpoint', () => {
  it('tests post user', async () => {
    const res = await request(app).post('/api/v1/users').send({email: 'favoriteseason@gmail.com', password: 'fall'})

    expect(res.status).toBe(201);
    expect(res.body.success).toBe('Account created');

    async function getUser() {
      var user = await database('users').orderBy('created_at').limit(1).select()
      return user
    }
    getUser()
    .then((user) => {
      expect(user.email).toBe('favoriteseasons@gmail.com')
    })
  })
})
