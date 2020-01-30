
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => knex('favorites').del())

    .then(() => {
      return Promise.all([

        knex('users').insert([
          {api_key: '123456789', email: 'whereswaldo123@gmail.com' },
          {api_key: '987654321', email: 'carmensandiego456@gmail.com' },
          {api_key: '024681357', email: 'harrietthespy789@gmail.com' }
        ], 'id')
        .then(users => {
          return knex('favorites').insert([
            { location: 'denver,co', user_id: users[0]},
            { location: 'new york,ny', user_id: users[0]},
            { location: 'seattle,washington', user_id: users[1]},
            { location: 'portland,oregon', user_id: users[1]},
            { location: 'portland,maine', user_id: users[2]},
            { location: 'burlington,vt', user_id: users[2]},
          ])
        })
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) //promise
    })
    .then(() => console.log('Seeding complete'))
    .catch(error => console.log(`Error seeding data: ${error}`))
};
