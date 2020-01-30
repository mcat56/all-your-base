class DailyForecast {

  constructor(forecast){
    this.icon = forecast.daily.icon  //?
    this.summary = forecast.daily.summary //?
    this.time = forecast.daily.data[0].time
    this.summary = forecast.daily.data[0].summary
    this.icon = forecast.daily.data[0].icon
    this.sunriseTime = forecast.daily.data[0].sunriseTime
    this.sunsetTime = forecast.daily.data[0].sunsetTime
    this.precipIntensity = forecast.daily.data[0].precipIntensity
    this.precipIntensityMax = forecast.daily.data[0].precipIntensityMax
    this.precipIntensityMaxTime = forecast.daily.data[0].precipIntensityMaxTime
    this.precipProbability = forecast.daily.data[0].precipProbability
    this.precipType = forecast.daily.data[0].precipType
    this.temperatureHigh = forecast.daily.data[0].temperatureHigh
    this.temperatureLow = forecast.daily.data[0].temperatureLow
    this.humidity = forecast.daily.data[0].humidity
    this.pressure = forecast.daily.data[0].pressure
    this.windSpeed = forecast.daily.data[0].windSpeed
    this.windGust = forecast.daily.data[0].windGust
    this.cloudCover = forecast.daily.data[0].cloudCover
    this.visibility = forecast.daily.data[0].visibility
    this.temperatureMin = forecast.daily.data[0].temperatureMin
    this.temperatureMax = forecast.daily.data[0].temperatureMax
  }
}

module.exports = DailyForecast;
    // OR
// const dailyForecast = (dailyForecast) =>
//   ({
//     summary:  dailyForecast.summary, //?
//     icon:  dailyForecast.icon,  //?
//     time:  dailyForecast.time,
//     summary:  dailyForecast.summary,
//     icon:  dailyForecast.icon,
//     sunriseTime:  dailyForecast.sunriseTime,
//     sunsetTime:  dailyForecast.sunsetTime,
//     precipIntensity:  dailyForecast.precipIntensity,
//     precipIntensityMax:  dailyForecast.precipIntensityMax,
//     precipIntensityMaxTime:  dailyForecast.precipIntensityMaxTime,
//     precipProbability:  dailyForecast.precipProbability,
//     precipType:  dailyForecast.precipType,
//     temperatureHigh:  dailyForecast.temperatureHigh,
//     temperatureLow:  dailyForecast.temperatureLow,
//     humidity:  dailyForecast.humidity,
//     pressure:  dailyForecast.pressure,
//     windSpeed:  dailyForecast.windSpeed,
//     windGust:  dailyForecast.windGust,
//     cloudCover:  dailyForecast.cloudCover,
//     visibility:  dailyForecast.visibility,
//     temperatureMin:  dailyForecast.temperatureMin,
//     temperatureMax:  dailyForecast.temperatureMax,
//   })
