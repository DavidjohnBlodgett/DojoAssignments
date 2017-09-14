var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true,
        validate: {
            validator: function( value ) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test( value );
            },
            message: 'Email failed validation.',
        }
    },
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        // validate: {
        //   validator: function( value ) {
        //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
        //   },
        //   message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        // }
    },
    password_confirm: String,
    birthday: {},
},{ timestamps: true });

// myModelSchema.methods.addJayToString = function(input){
//   return input+"Jay";
// }

UserSchema.pre('save', function(done){
  // this.name = this.addJayToString(this.name);
  // TODO: envoke validations here...
  // if(this.password !== this.confirm_pass){
  //     // res.render('login', {errors: });
  //     console.log('validation error');
  // }else {}

  this.validate(function (err) {
        if (err) {
            //handleError(err);
            // res.render('login', err);
            console.log('validation error');
        }
        else {
            // validation passed
            done();
        }
    });
  // done();
});


// third param overrides mongo default collection names...
var User = mongoose.model('User', UserSchema, 'users');

// ^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$

// TODO: handle extracting out info from a format below in handleError...

// err = {
//       errors:
//           {
//           schemaInThing_that_had_error:
//               {
//                 message:"some string of errors",
//                 kind:"what didn't work",
//                 path:"reference to the schema's name",
//                 value:"cause of the initial error"
//               }
//           },
//       name: "Validation error"
//       }
