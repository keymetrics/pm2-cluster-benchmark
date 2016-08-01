

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/100b', function (req, res) {
  res.send(Array.apply(null, new Array(25)).map(String.prototype.valueOf,"hi"));
});

app.get('/1k', function (req, res) {
  res.send(Array.apply(null, new Array(250)).map(String.prototype.valueOf,"hi"));
});

app.listen(process.env.PORT || 8000, function() {
  console.log('App listening on port %d', process.env.PORT || 8000);
});

return;

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('hey');
}).listen(process.env.PORT || 8000, function() {
  console.log('App listening on port %d', process.env.PORT || 8000);
});
