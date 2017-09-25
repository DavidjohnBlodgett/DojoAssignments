var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bike = mongoose.model('Bike');

module.exports = {
    create: function(req, res, next) {
        var user = new User(req.body);
        user.save(function(err) {
            if(err){
                console.log('error writting to the db');
                console.log(err);
            }else {
                res.json(true);
            }

        });
    },
    createBike: function(req, res, next) {
        console.log('Im inside createBike()...');
        User.findOne({ _id: req.params.id }, function(err, user) {
                var bike = new Bike(req.body);
                bike._user = user._id;
                bike.save(function(err) {
                    user.bikes.push(bike);
                    user.save(function(err) {
                        if(err){
                            console.log('error writting to the db');
                            console.log(err);
                        }else {
                            res.json(true);
                        }
                    });
                });
        });

    },
    readAll: function(req, res, next) {
        User.find({},function(err, users) {
            res.json(users);
        });
    },
    readOne: function(req, res, next) {
        User.findOne({ _id: req.params.id })
        .populate('bikes')
        .exec(function (err, user) {
            res.json(user);
        });
    },
    update: function() {

        // TODO: no update...

    },
    delete: function(req, res, next) {
        // NOTE: this may need to be using req.body.id...
        User.deleteOne({ _id: req.params.id },function(err) {
            if(err){
                console.log('something went wrong with the delete...');
                res.json(false);
            }else {
                res.json(true);
            }
        });
    },

}
