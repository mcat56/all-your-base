const request = require('request')
require('dotenv').config({'/.env'})

class GoogleGeocodeService {

  static getLocation(location){
    getJSON(location)
  }

  static connection(location) {
    request(`https://maps.googleapis.com/maps/api/geocode/json`, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body.url);
      console.log(body.explanation);
    });
  }

  static getJSON(location) {
    response = connection(location)
    JSON.parse(response.body, symbolize_names: true)
  }
}
