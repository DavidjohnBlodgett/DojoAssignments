// Dependencies...
const path = require('path');
// const fs = require('fs');
const dateformat = require('dateformat');

// EXPRESS
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, './static')));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// EJS
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// JQUERY (if I want to server it static from a route...)
// const jquery = require('jquery');
// app.use(express.static(path.join(__dirname, './node_modules')));

// DATABASE SETUP
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/my_first_db', { useMongoClient: true });

// MODELS
var CatSchema = mongoose.Schema({
    name: String,
    color: String,
    age: Number,
},{ timestamps: true })
mongoose.model('Cat', CatSchema);
var Cat = mongoose.model('Cat');

// ROUTES
// res.render('pathToEjs',context);
// res.send('');
// res.redirect('url');

app.get('/', function(req, res) {
    // GET stuff...
})

app.post('/', function(req, res) {
    // POST stuff...
})

// Activate Server...
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
