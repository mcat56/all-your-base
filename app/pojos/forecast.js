const CurrentWeather = require('./current_weather')
const HourlyForecast = require('./hourly_forecast')
const DailyForecast = require('./daily_forecast')
const Location = require('./location')

class Forecast {

  constructor(json, loc){
    // let letter = loc.split(',')[0][0]
    // this.location = loc.split(',')[0].replace(/^./, letter.toUpperCase()) + ', ' + loc.split(',')[1].toUpperCase()
    this.location = loc.location
    this.current_weather = new CurrentWeather(json)
    this.hourly_forecast = new HourlyForecast(json)
    this.daily_forecast = new DailyForecast(json)
  }
}


module.exports = Forecast;
