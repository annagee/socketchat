var express = require('express'); // Use the express library. 
var app = express(); // Create our app./ var server = require('http').createServer(app);
var http = require('http');
server = http.createServer(app); // Create an HTTP server.
server.listen(process.env.PORT || 4000); // Listen on the default port, or on 4000



 app.set('views', './views');
 app.set('view engine', 'ejs');
 app.use(express.static(__dirname + '/public'));

 app.get('/', function(req, res){
  res.render('index')
 })



