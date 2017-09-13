// var mongoose = require('mongoose');
var cats = require('../controllers/cats');

module.exports = function(app) {
    app.get('/cats/new', function(req, res) {
        res.render("create_cat");
    })

    app.get('/cats/edit/:id', function(req, res) {
        cats.updateOne(req, res);
    })

    app.post('/cats/destroy/:id', function(req, res) {
        cats.delete(req, res);
    })

    app.get('/cats/:id', function(req, res) {
        cats.readOne(req, res);
    })

    app.post('/cats/:id', function(req, res) {
        cats.update(re, res);
    })

    app.post('/cats', function(req, res) {
        cats.create(req,res);
    })

    app.get('/', function(req, res) {
        cats.readAll(req, res);
    })
}
