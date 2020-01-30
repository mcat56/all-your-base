class Coordinate {

  constructor(response){
    this.lat = response.results[0].geometry.location.lat
    this.lng = response.results[0].geometry.location.lat
  }
}

module.exports = Coordinate;
