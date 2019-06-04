class LocationService {
  location;

  constructor() {
    this.location = window.navigator && window.navigator.geolocation;
    this.latLonFunction = this.latLonFunction.bind(this);
    this.getCity = this.getCity.bind(this);
  }

  getCity(resolve, error) {
    this.getLocation()
      .then(res => {
        fetch(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            res.lat +
            "," +
            res.lon +
            "&key=" +
            "AIzaSyDhWv-5q68AERgR8sZ2pxQiI1Yc7bqoGis"
        ).then(response => {
          response
            .json()
            .then(json => {
              resolve({
                lat: res.lat,
                lon: res.lon,
                city: json["results"][5]["formatted_address"] || "Bogotá, DC"
              });
            })
            .catch(err => error(err));
        });
      })
      .catch(err => error(err));
  }

  getCurrentCity() {
    return new Promise(this.getCity);
  }

  latLonFunction(res, error) {
    this.location.getCurrentPosition(
      position => {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        res({ lat: lat, lon: long });
      },
      err => error(err)
    );
  }

  getLocation() {
    return new Promise(this.latLonFunction);
  }
}

export default LocationService;
