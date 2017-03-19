'use strict';


//mongoose file must be loaded before all other files in order to provide
// models to other modules
var express = require('express'),
  router = require('express').Router();


var app = express();
router.route('/health-check').get(function(req, res) {
  res.status(200);
  res.send('Hello World');
});

app.use('/api/v1', router);

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');