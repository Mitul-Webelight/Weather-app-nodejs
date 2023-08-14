const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
} else {
  geocode(address, (error, {latitude, longitude, location}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}

// const request = require('request');

// const url =
//   'http://api.weatherstack.com/current?access_key=69f4a8a81b918a6138cd265c533c5137&query=Ahmedabad&units=f';

// request({url: url, json: true}, (error, response) => {
//   // console.log(response.body);
//   console.log(
//     `Today's weather is ${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} Fahrenheit out and It feelslike ${response.body.current.feelslike}. There is a ${response.body.current.precip}% chance of rain.`
//   );
// });

// const url =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Ahmedabad.json?access_token=pk.eyJ1IjoibWl0dWxrIiwiYSI6ImNsbGFqM2h1czFsejgzcW96OHBhM3NtbXYifQ.ac8idNsFyF0KzggvDP82Zw';

// request({url: url, json: true}, (error, response) => {
//   const latitute = response.body.features[0].center[1];
//   const longitutde = response.body.features[0].center[0];
//   console.log(
//     `For ${response.body.query[0]}, latitute: ${latitute} and longitude: ${longitutde}`
//   );
// });
