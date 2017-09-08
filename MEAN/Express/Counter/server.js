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
    var context = {}
    if(req.session.count){
        context['count'] = req.session.count
    }else{
        req.session.count = 0;
        context['count'] = req.session.count
    }
    res.render("index", context);
})

app.post('/addOne', function(req, res) {
    //  console.log("POST DATA", req.body);
    req.session.count = req.session.count + 1;
    res.redirect('/');
})

app.post('/addTwo', function(req, res) {
    req.session.count = req.session.count + 2;
    res.redirect('/');
})

app.post('/reset', function(req, res) {
    req.session.count = 1;
    res.redirect('/');
})

// Activate Server...
app.listen(8000, function() {
    console.log("listening on port 8000");
});
