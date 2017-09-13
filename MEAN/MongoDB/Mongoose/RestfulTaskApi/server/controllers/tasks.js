var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    readAll: function(req, res) {
        Task.find({},function(err, tasks) {
            res.json(tasks);
        });
    },
    readOne: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, task) {
            res.json(task);
        });
    },
    create: function(req, res) {
        var task = new Task(req.body);
        task.save(function(err) {
            if(err){
                console.log('error writting to the db');
            }else {
                res.redirect('/tasks');
            }

        });
    },
    update: function(req, res) {
        Task.findOne({ _id: req.params.id }, function(err, task) {
            // res.json(task);
            // TODO: set new params, req.body...
            task.save(function(err) {
                if(err){
                    console.log('error writting changes to the db');
                }else {
                    res.redirect('/tasks');
                }

            });
        });
    },
    delete: function(req, res) {
        Task.deleteOne({ _id: req.params.id },function(err) {
            if(err){
                console.log('something went wrong with the delete...');
            }else {
                res.redirect('/tasks');
            }
        });
    },

}
