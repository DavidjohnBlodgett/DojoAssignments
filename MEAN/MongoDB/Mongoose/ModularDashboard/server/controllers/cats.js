var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');
module.exports = {
    create: function(req, res) {
        var cat = new Cat({name: req.body.name, color: req.body.color, age: req.body.age});
        cat.save(function(err) {
            if(err){
                console.log('error writting to the db');
            }else {
                res.redirect('/');
            }

        })
    },
    readAll: function(req, res) {
        Cat.find({},function(err, cats) {
            res.render("index", {cats: cats});
        })
    },
    readOne: function(req, res) {
        Cat.findOne({_id: req.params.id}, function(err, cat) {
            res.render('read_cat', {cat: cat});
        })
    },
    updateOne: function(req, res) {
        Cat.findOne({_id: req.params.id}, function(err, cat) {
            res.render('update_cat', {cat: cat});
        })
    },
    update: function(req, res) {
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
    },
    delete: function(req, res) {
        Cat.deleteOne({ _id: req.params.id },function(err) {
            if(err){
                console.log('something went wrong with the delete...');
            }else {
                res.redirect('/');
            }
        })
    },

}
