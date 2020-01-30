class Location {

  constructor(response){
    this.location = response.results[0].formatted_address.split(',')[0] + ', ' + response.results[0].formatted_address.split(',')[1]
    // this.location = location.split(',')[0].capitalize + ', ' + location.split(',')[0].upcase
  }
}

module.exports = Location;


// const location = (location) =>
//   ({
//
//   })
