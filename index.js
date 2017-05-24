var express = require('express');
var app = express();
var path = require('path');
var firebase=require('firebase');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(bodyParser.json()); 


// viewed at http://localhost:8080
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use("../public", express.static(__dirname + '../public'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 


app.listen(8080);