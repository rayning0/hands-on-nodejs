'use strict';
var express = require('express');
var superagent = require('superagent');
var app = express();

app.get('/', sendWeatherOfRandomCity);

function sendWeatherOfRandomCity(request, response) {
  getWeatherOfRandomCity(request, response);
  console.log('Hi!');
}

const CITIES = [
  'london',
  'newyork',
  'paris',
  'budapest',
  'warsaw',
  'rome',
  'madrid',
  'moscow',
  'beijing',
  'capetown',
];

function getWeatherOfRandomCity(request, response) {
  const city = CITIES[Math.floor(Math.random() * CITIES.length)];
  superagent.get(`wttr.in/${city}`)
    .end((err, res) => {
      if (err) {
        console.log('0 snap');
        return response.status(500).send('Got error getting weather. Look out the window!');
      }
      response.send(res.text);
      console.log('Got weather');
    });
  console.log('Fetching weather. Please wait.');
}

app.listen(3000, function() {
  console.log('Weather app listening on port 3000');
});
