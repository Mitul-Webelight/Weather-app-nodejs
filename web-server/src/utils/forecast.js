const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=69f4a8a81b918a6138cd265c533c5137&query=' +
    latitude +
    ',' +
    longitude +
    '&units=f';

  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          '. It is currently ' +
          response.body.current.temperature +
          ' degress out.'
      );
    }
  });
};

module.exports = forecast;
