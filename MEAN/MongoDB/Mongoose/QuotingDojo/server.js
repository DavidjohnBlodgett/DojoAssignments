// Dependencies...
const express = require('express');
const path = require('path');
const fs = require('fs');
const jquery = require('jquery');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dateformat = require('dateformat');

const app = express();

var QuoteSchema = mongoose.Schema({
    name: String,
    content: String,
},{ timestamps: true })

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote');

// connect to db...
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quotes');

// attach tooling...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './node_modules')));

// set static and view locations...
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Handle routes
app.get('/quotes', function(req, res) {
    Quote.find({},function(err, quotes) {
        if(quotes){
            for(var i in quotes) {
                quotes[i].created = dateformat(quotes[i].createdAt, 'mmmm dS, yyyy');
            }
            res.render("quotes", { quotes: quotes});
        }else {
            console.log('quotes is empty!');
        }
    })
})
app.get('/', function(req, res) {
    res.render("index");
})

app.post('/quotes', function(req, res) {
    var quote = new Quote({ name: req.body.name, content: req.body.content });
    quote.save(function(err) {
        if(err){
            // handle error...
            console.log('error writing to the db...');
        }else {
            // success...
            res.redirect('/quotes');
        }
    });
})

// Activate Server...
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
