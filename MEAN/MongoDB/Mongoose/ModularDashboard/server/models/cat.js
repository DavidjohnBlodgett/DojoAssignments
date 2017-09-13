// require mongoose
var mongoose = require('mongoose');
// create the schema
var CatSchema = mongoose.Schema({
    name: String,
    color: String,
    age: Number,
},{ timestamps: true })

// mongoose.model('Cat', CatSchema);
// register the schema as a model
var Cat = mongoose.model('Cat', CatSchema);
