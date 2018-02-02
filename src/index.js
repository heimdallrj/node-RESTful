const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('/*', function(req, res, next) {
  // Set Headers for CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');

  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use('/auth', function(req, res) {
  // TODO: Read the header and validate request with
  // `api-key` and `api-secret` and return generated `access_token`

  // const headers = req.headers;
  // const apiKey = headers['api-key'];
  // const apiSecret = headers['api-secret'];

  res.status(200)
   .send({
      "status": 200,
      "access_token": "(access_token)"
    }
  );
})

app.all('/v1/*', [require('./middlewares/auth')]);
app.use('/', require('./routes'));

// Handle 404 requests
app.use(function(req, res, next) {
  res.status(404)
   .send({
      "status": 404,
      "message": "Not Found"
    });
});

// Start the server
app.set('port', process.env.API_PORT || 3001);

var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + server.address().port);
});
