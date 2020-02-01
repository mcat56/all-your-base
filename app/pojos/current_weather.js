class CurrentWeather {

  constructor(response){
    this.summary = response.currently.summary
    this.icon = response.currently.icon
    this.precipIntensity = response.currently.precipIntensity
    this.precipProbability = response.currently.precipProbability
    this.temperature = response.currently.temperature
    this.humidity = response.currently.humidity
    this.pressure = response.currently.pressure
    this.windSpeed = response.currently.windSpeed
    this.windGust = response.currently.windGust
    this.windBearing = response.currently.windBearing
    this.cloudCover = response.currently.cloudCover
    this.visibility = response.currently.visibility
  }
}

module.exports = CurrentWeather;
