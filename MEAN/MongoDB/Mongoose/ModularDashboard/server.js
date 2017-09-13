// Dependencies...
const express = require('express');
const path = require('path');
// const fs = require('fs');
// const jquery = require('jquery');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const dateformat = require('dateformat');

const app = express();

// connect to db...
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/my_first_db', { useMongoClient: true });

// attach tooling...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
// app.use(express.static(path.join(__dirname, './node_modules')));

// set static and view locations...
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// Handle routes
var routes_setter = require('./server/config/routes');
routes_setter(app);

// Activate Server...
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
