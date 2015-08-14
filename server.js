var http = require('http');
var express = require('express');
var app = express();

var controllers = require('./controllers');

//The view engine that you will use muse be setted
app.set('view engine', 'vash');

//set the public static resource folder
app.use(express.static(__dirname + '/public'));

//Map the routes
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);

