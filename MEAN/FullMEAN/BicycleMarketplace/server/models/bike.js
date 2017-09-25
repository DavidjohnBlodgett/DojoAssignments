var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    pic_url: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false,
        trim: true
    },
    desc: {
        type: String,
        required: false,
        trim: true
    },
    price: {
        type: Number,
        required: false
    },
    location: {
        type: String,
        required: false
    }

},{ timestamps: true });

// NOTE: add a method to model

// myModelSchema.methods.addJayToString = function(input){
//   return input+"Jay";
// }

// NOTE: add actions prior to saving

// UserSchema.pre('save', function(done){
//   this.validate(function (err) {
//         if (err) {
//             console.log('validation error');
//         }
//         else {
//             done();
//         }
//     });
// });


// NOTE: third param overrides mongo default collection names...

var User = mongoose.model('Bike', UserSchema, 'bikes');
