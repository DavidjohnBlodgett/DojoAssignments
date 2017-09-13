var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    create: function(req, res) {
        var person = new Person({ name: req.params.name });
        person.save(function(err) {
            if(err){
                console.log('error writting to the db');
            }else {
                res.redirect('/');
            }

        });
    },
    readAll: function(req, res) {
        Person.find({},function(err, persons) {
            res.json(persons);
        });
    },
    readOne: function(req, res) {
        Person.findOne({name: req.params.name}, function(err, person) {
            res.json(person);
        });
    },
    delete: function(req, res) {
        Person.deleteOne({ name: req.params.name },function(err) {
            if(err){
                console.log('something went wrong with the delete...');
            }else {
                res.redirect('/');
            }
        });
    },

}
