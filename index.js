const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();

const DEFAULT_PORT = 4100;

app.get('/', (req, res) => {
  const sign = req.query.sign?.toLowerCase() || 'capricorn';
  const date = req.query.date?.toLowerCase() || 'today';

  if (!sign || !date) {
    return res.status(400).json({
      error: 'Missing required parameters. Please provide both "sign" and "date"'
    });
  }

  const url = 'https://www.astrology.com/horoscope/daily/' + date + '/' + sign + '.html';

  // console.log('url', url);

  // The structure of our request call
  // The first parameter is our URL
  // The callback function takes 3 parameters, an error, response status code and the html
  request(url, function(error, response, html) {

    // First we'll check to make sure no errors occurred when making the request
    if (!error) {

      // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
      const $ = cheerio.load(html);

      // Updated selector to match the span containing the prediction
      const prediction = $('#content p span').text();

      if (!prediction) {
        return res.status(404).json({
          error: 'No prediction found for the given sign and date',
          html: html
        });
      }

      // And now, the JSON format we are going to expose
      const json = {
        date: date,
        sign: sign,
        prediction: prediction
      };

      // Send the JSON as a response to the client
      res.send(json);
    }

  });

});

app.listen(process.env.PORT || DEFAULT_PORT);
module.exports = app;
