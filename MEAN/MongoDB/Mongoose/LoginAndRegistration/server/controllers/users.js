var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    create: function(req, res) {
        res.send('I want to save a new users...');
        // make sure to set _id: req.session.id
        // var user = new User({ /* TODO: ... */ });
        // user.save(function(err) {
        //     if(err){
        //         console.log('error writting to the db');
        //     }else {
        //         res.redirect('/');
        //     }
        //
        // });
    },
    readAll: function(req, res) {
        User.find({},function(err, users) {
            res.json(users);
        });
    },
    readOne: function(req, res) {
        User.findOne({ _id: req.params.id }, function(err, user) {
            res.json(user);
        });
    },
    delete: function(req, res) {
        User.deleteOne({ _id: req.params.id },function(err) {
            if(err){
                console.log('something went wrong with the delete...');
            }else {
                res.redirect('/');
            }
        });
    },
    isLoggedin: function(req, res) {
        // res.send('I want to check if user is logged in');
        // TODO: check if user is logged in, if is... redirect to /users... else render login/reg page
        if(req.session){
            console.log(req.session);
            console.log(req.session.id);
            res.send('I found a logged in user...')
        }else {
            res.render('login');
        }

    }

}
