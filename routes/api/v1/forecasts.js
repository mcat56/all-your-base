const express = require('express');
const router  = express.Router();
require('dotenv').config('/.env')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);
const Coordinate = require('../../../app/pojos/coordinate')
const Forecast = require('../../../app/pojos/forecast')
const fetch = require('node-fetch')
const ForecastService = require('../../../app/services/forecast_service')

router.get('/', (req, res) => {
  async function getUser() {
    let user = await database('users').where({api_key: req.body.api_key}).first()
    return user
  }
  getUser()
    .then((user) => {
      if (user.api_key == req.body.api_key && req.query.location) {
        async function getForecast() {
          let forecast = await ForecastService.getFullForecast(req.query.location);
          res.status(200).send(forecast);
        }
        getForecast()
      } else if (!req.body.api_key ){
        res.status(401).json({error_message: 'Unauthorized request' })
      } else if (!req.query.location){
        res.status(400).json({error_message: 'Location required' })
      }
    })
    .catch((error) => {
      console.log({error:error, location: 'forecast get'});
      res.status(401).json({error_message: 'Unauthorized request' })
    })
})
module.exports = router;
