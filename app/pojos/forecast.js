const CurrentWeather = require('./current_weather')
const HourlyForecast = require('./hourly_forecast')
const DailyForecast = require('./daily_forecast')
const Location = require('./location')

class Forecast {

  constructor(json, loc){
    this.location = loc.location
    this.current_weather = new CurrentWeather(json)
    this.hourly_forecast = new HourlyForecast(json)
    this.daily_forecast = new DailyForecast(json)
  }
}


module.exports = Forecast;
