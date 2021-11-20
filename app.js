var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')

var persons = require('./routes/personsRouter');
var animals = require('./routes/animalsRouter');
var members = require('./routes/membersRouter');

const app = express();

app.use(bodyParser.json()); 
/* main reqest file for heroku deploymwnt */
app.get('/', function(req, res, next) {
    res.send("<h1><center>welcome to balink israel rosenfeld</center></h1>");
  })
  

app.use('/api/persons', persons);
app.use('/api/animals', animals);
app.use('/api/members', members);

module.exports = app;
