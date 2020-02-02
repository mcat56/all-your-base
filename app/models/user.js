const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const database = require('knex')(configuration);
const uuid = require('uuid');

const all = () => database('users')
  .select()

module.exports = {
  all,
}
