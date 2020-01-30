// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sweater_weather_dev',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/sweater_weather_express_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },
  // add heroku login information
  production: {
    client: 'pg',
    connection: 'postgres://mgabinfbsqxyvu:45aff5b61138f387a6e43b5bd6cd33e67d42837a163506dcf6c1ead79d337bfa@ec2-3-220-86-239.compute-1.amazonaws.com:5432/dfde5nqbce1jm2',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
