var mongoose = require('mongoose');
var Bike = mongoose.model('Bike');

module.exports = {
    create: function(req, res, next) {
        var bike = new Bike(req.body);
        bike.save(function(err) {
            if(err){
                console.log('error writting to the db');
                console.log(err);
            }else {
                res.json(true);
            }

        });
    },
    readAll: function(req, res, next) {
        Bike.find({},function(err, bikes) {
            res.json(bikes);
        });
    },
    update: function() {

        // TODO: no update...

    },
    delete: function(req, res, next) {
        // NOTE: this may need to be using req.body.id...
        Bike.deleteOne({ _id: req.params.id },function(err) {
            if(err){
                console.log('something went wrong with the delete...');
                res.json(false);
            }else {
                res.json(true);
            }
        });
    },

}
