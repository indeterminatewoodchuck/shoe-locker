var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));
app.use('/library', express.static(__dirname + '/../library'));

// app.use('/library', function(req, res) {
//   // res.sendFile(path.resolve(__dirname, '/../library/chatLibrary.js'));
//   // res.sendFile(path.resolve('./library/library.js'));
//   // res.sendFile('library');
//   console.log(path.resolve('./library'));
// });

app.get('/blank', function(req, res) {
  res.sendFile(__dirname + '/../blank.html');
});

module.exports = app;
