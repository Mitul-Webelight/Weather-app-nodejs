const http = require('http');
const url =
  'http://api.weatherstack.com/current?access_key=69f4a8a81b918a6138cd265c533c5137&query=Ahmedabad&units=f';

const request = http.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error', error);
});

request.end();
