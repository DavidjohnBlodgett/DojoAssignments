// Dependencies...
const express = require("express");
const path = require("path");
const fs = require("fs")
const jquery = require("jquery");
const app = express();

// attach tooling...
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "./node_modules")));

// set static and view locations...
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Handle routes
app.get('/', function(req, res) {
    res.render("index");
})



// Activate Server...
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

// setup websocket
const io = require('socket.io').listen(server);

var users = {} // collection of userid->name pairs for all users logged in the room...
var messages = [] // list of message objects...

io.sockets.on('connection', function (socket) {

    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here
    socket.on('login',function(name) {
        users[socket.id] = name;
        console.log(users);
        socket.emit('load', messages);
    });

    socket.on('submit_message',function(data) {

        var message = {'name': users[socket.id], 'content': data};
        messages.push(message);
        console.log(messages);
        io.emit('update',message);
    });

    // socket.on('reset_clicked',function(data) {
    //     count = 0;
    //     io.emit('update', count);
    // })

})
