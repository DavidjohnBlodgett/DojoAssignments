// Dependencies...
const path = require('path');
const bodyParser = require('body-parser');

const express = require('express');
var session = require('express-session')
const app = express();

app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


// attach tooling...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/static')));

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
