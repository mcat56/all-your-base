class Location {

  constructor(response){
    this.location = response.results[0].formatted_address.split(',')[0] + ', ' + response.results[0].formatted_address.split(',')[1]
  }
}

module.exports = Location;
