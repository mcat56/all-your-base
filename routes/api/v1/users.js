const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    database('users').select()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({error_message: error});
    });
});

module.exports = router;


// // hard code lat and longs with city and state so you don't need
// // to keep hitting geocode api
