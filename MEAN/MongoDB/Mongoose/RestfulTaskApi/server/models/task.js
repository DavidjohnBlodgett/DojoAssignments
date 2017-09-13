var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: ''},
    completed: { type: Boolean, default: false},
},{
    timestamps: true,
    setDefaultsOnInsert: true,
 });

// third param overrides mongo default collection names...
var Task = mongoose.model('Task', TaskSchema, 'tasks');
