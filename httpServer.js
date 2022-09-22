'use strict';

var http = require('http');
var pets = require("./pets.json")
var port = process.env.PORT || 8000;

var server = http.createServer(function(req, res) {
 
//   var guestsJSON = JSON.stringify(pets.json);

  res.setHeader('Content-Type', 'application/json');
  res.end(pets);
});

server.listen(port, function() {
  console.log('Listening on port', port);
});