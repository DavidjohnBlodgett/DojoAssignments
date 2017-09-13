var mongoose = require('mongoose');

var PersonSchema = mongoose.Schema({
    name: String,
},{ timestamps: true });

// third param overrides mongo default collection names...
var Person = mongoose.model('Person', PersonSchema, 'persons');
