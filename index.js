var express = require('express'); // Use the express library. 
var app = express(); // Create our app. 

var http = require('http');
server = http.createServer(app); // Create an HTTP server.
server.listen(process.env.PORT || 4000); // Listen on the default port, or on 4000