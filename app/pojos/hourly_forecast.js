class HourlyForecast {

  constructor(forecast){
    this.summary = forecast.hourly.summary //?
    this.icon = forecast.hourly.icon  //?
    this.time = forecast.hourly.data[0].time
    this.summary = forecast.hourly.data[0].summary
    this.icon = forecast.hourly.data[0].icon
    this.precipIntensity = forecast.hourly.data[0].precipIntensity
    this.precipProbability = forecast.hourly.data[0].precipProbability
    this.temperature = forecast.hourly.data[0].temperature
    this.humidity = forecast.hourly.data[0].humidity
    this.pressure = forecast.hourly.data[0].pressure
    this.windSpeed = forecast.hourly.data[0].windSpeed
    this.windGust = forecast.hourly.data[0].windGust
    this.windBearing = forecast.hourly.data[0].windBearing
    this.cloudCover = forecast.hourly.data[0].cloudCover
    this.visibility = forecast.hourly.data[0].visibility
  }
}

module.exports = HourlyForecast;

//           OR
// const hourlyForecast = (hourlyForecast) =>
//   ({
//     summary: hourlyForecast.summary, //?
//     icon: hourlyForecast.icon,  //?
//     time: hourlyForecast.time,
//     summary: hourlyForecast.summary,
//     icon: hourlyForecast.icon,
//     precipIntensity: hourlyForecast.precipIntensity,
//     precipProbability: hourlyForecast.precipProbability,
//     temperature: hourlyForecast.temperature,
//     humidity: hourlyForecast.humidity,
//     pressure: hourlyForecast.pressure,
//     windSpeed: hourlyForecast.windSpeed,
//     windGust: hourlyForecast.windGust,
//     windBearing: hourlyForecast.windBearing,
//     cloudCover: hourlyForecast.cloudCover,
//     visibility: hourlyForecast.visibility,
//   })
