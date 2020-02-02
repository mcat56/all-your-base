const express = require('express');
const router  = express.Router();
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);


router.get('/', (req, res) => {
    database('users').select()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({error_message: error.message});
    });
});

router.post('/', (req, res) => {
  if (req.body.password && req.body.email) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      database('users').insert({ email: req.body.email, password: hash, api_key: uuid.v4()})
      .then((user) => {
        res.status(201).json({ success: 'Account created'});
      })
      .catch((error) => {
        res.status(500).json({error_message: error.message});
      })
      .catch((err) => {
        res.status(400).json({error_message: err.message})
      })
    });
  } else {
    res.status(400).json({error_message: 'Email and password required'})
  }
});

module.exports = router;


// // hard code lat and longs with city and state so you don't need
// // to keep hitting geocode api
