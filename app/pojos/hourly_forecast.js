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
