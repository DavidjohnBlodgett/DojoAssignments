// Dependencies...
var express = require("express");

var path = require("path");
var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');

// attach tooling...
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./static")));

app.use(session({secret: 'codingdojorocks'}));

// set static and view locations...
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Handle routes
app.get('/', function(req, res) {
    res.render("index");
})

app.post('/survey/process', function(req, res) {
    req.session.user = req.body;
    res.redirect('/result')
})

app.get('/result',function(req, res) {
    var context = req.session.user;
    res.render("result", context);
})

// Activate Server...
app.listen(8000, function() {
    console.log("listening on port 8000");
});
