var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/'));

app.get('/blank', function(req, res) {
  res.sendFile(__dirname + '/../blank.html');
});

module.exports = app;
