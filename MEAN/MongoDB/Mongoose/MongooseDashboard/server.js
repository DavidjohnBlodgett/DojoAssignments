// Dependencies...
const express = require('express');
const path = require('path');
const fs = require('fs');
const jquery = require('jquery');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dateformat = require('dateformat');

const app = express();

var CatSchema = mongoose.Schema({
    name: String,
    color: String,
    age: Number,
},{ timestamps: true })

mongoose.model('Cat', CatSchema);

var Cat = mongoose.model('Cat');

// connect to db...
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/my_first_db');

// attach tooling...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './node_modules')));

// set static and view locations...
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Handle routes

// Create DONE
// Read : needs read one...
// U : DONE
// D : DONE

app.get('/cats/new', function(req, res) {
    res.render("create_cat");
})

app.get('/cats/edit/:id', function(req, res) {
    Cat.findOne({_id: req.params.id}, function(err, cat) {
        res.render('update_cat', {cat: cat});
    })
})

app.post('/cats/destroy/:id', function(req, res) {
    Cat.deleteOne({ _id: req.params.id },function(err) {
        if(err){
            console.log('something went wrong with the delete...');
        }else {
            res.redirect('/');
        }
    })
})

app.get('/cats/:id', function(req, res) {
    console.log(req.params.id);
    Cat.findOne({_id: req.params.id}, function(err, cat) {
        console.log(cat);
        res.render('read_cat', {cat: cat});
    })
})

app.post('/cats/:id', function(req, res) {
    var items = {};
    for(var i in req.body){
        if(req.body[i].length){
            items[i] = parseInt(req.body[i]);
        }
    }
    Cat.update({ _id: req.params.id }, items , function(err) {
        if(err){
            console.log('something went wrong with the update...');
        }else {
            res.redirect('/');
        }
    })
})

app.post('/cats', function(req, res) {
    var cat = new Cat({name: req.body.name, color: req.body.color, age: req.body.age});
    cat.save(function(err) {
        if(err){
            console.log('error writting to the db');
        }else {
            res.redirect('/');
        }

    })
})

app.get('/', function(req, res) {
    Cat.find({},function(err, cats) {
        res.render("index", {cats: cats});
    })

})

// Activate Server...
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
