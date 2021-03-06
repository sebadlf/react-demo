'use strict';

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var React = require('react');
var ReactDOMServer = require('react-dom/server');
 
require("babel/register");

var MyComponent = require('./components/helloReact');

var factory = React.createFactory(MyComponent);
 
var comp = ReactDOMServer.renderToString(factory());

app.use(express.static('build'));

app.get('/', function (req, res) {
    res.render('home', {
    	comp: comp
    });

});

app.listen(3000);