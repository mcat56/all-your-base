const CurrentWeather = require('./current_weather')

class Favorite {

  constructor(forecast, location){
    this.location = location.location
    this.current_weather = new CurrentWeather(forecast)
  }
}

module.exports = Favorite;

// const favorite = (favorite) =>
//   ({
//
//   })
