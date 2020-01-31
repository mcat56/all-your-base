class HourlyForecast {

  constructor(forecast){
    this.summary = forecast.hourly.summary //?
    this.icon = forecast.hourly.icon  //?
    this.data = forecast.hourly.data.splice(0,8).map((hour) => {
      return {
        time: hour.time,
        summary: hour.summary,
        icon: hour.icon,
        precipIntensity: hour.precipIntensity,
        precipProbability: hour.precipProbability,
        temperatur: hour.temperature,
        humidity: hour.humidity,
        pressure: hour.pressure,
        windSpeed: hour.windSpeed,
        windGust: hour.windGust,
        windBearing: hour.windBearing,
        cloudCover: hour.cloudCover,
        visibility: hour.visibility }
    });
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
