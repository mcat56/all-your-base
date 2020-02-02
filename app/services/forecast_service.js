const fetch = require('node-fetch')
require('dotenv').config('/.env')
const Coordinate = require('../pojos/coordinate')
const Forecast = require('..//pojos/forecast')
const Favorite = require('../pojos/favorite')
const Location = require('../pojos/location')


class ForecastService {

  static getGeoInfo(location) {
    let key = process.env.GOOGLE_GEOCODE_API_KEY
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`
    return fetch(url)
    .then(response => response.json())
    .then(result => {
      let location_obj = new Location(result)
      let coordinate = new Coordinate(result)
      return {coordinate: coordinate, location: location_obj}
    })
    .catch((error) => {
      return {error_message: error.message};
    })
  };

  static async getFullForecast(location) {
      let geolocation = await ForecastService.getGeoInfo(location)
      let coord = geolocation.coordinate
      let location_obj = geolocation.location
      let key = process.env.DARKSKY_API_KEY
      let url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${coord.lat},${coord.lng}`
      return fetch(url)
      .then(response => response.json())
      .then(result => new Forecast(result, location_obj))
      .then((forecast) => {
        return forecast
      })
    .catch((error) => {
      return {error_message: error.message}
    })
  };

  static async getFavoriteForecast(location) {
    let geolocation = await ForecastService.getGeoInfo(location)
    let coord = geolocation.coordinate
    let location_obj = geolocation.location
    let key = process.env.DARKSKY_API_KEY
    let url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${coord.lat},${coord.lng}`
    return fetch(url)
    .then(response => response.json())
    .then(result => new Favorite(result, location_obj))
    .then((forecast) => {
      return forecast
    })
    .catch((error) =>{ return {error_message: error.message}})
  };

}

module.exports = ForecastService;
