// Dependencies...
const express = require("express");
const path = require("path");
const fs = require("fs")
const jquery = require("jquery");
const app = express();
const map = require('./lib/map');

//console.log(map);

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
        users[socket.id] = {
            name: name,
            location: {
                x:5,
                y:5,
            },
            map: [
                [1,1,1,1,1,1,1,1,1,1],
                [1,2,2,2,2,2,2,2,2,1],
                [1,2,2,2,2,2,2,2,2,1],
                [1,2,2,2,2,2,2,2,2,1],
                [1,2,2,2,2,2,2,2,2,1],
                [1,2,2,2,2,3,2,2,2,1],
                [1,2,2,2,2,2,2,2,2,1],
                [1,2,2,2,2,2,2,2,2,1],
                [1,2,2,2,2,2,2,2,2,1],
                [1,1,1,1,1,1,1,1,1,1],
            ],
            key: {
                0: 'ground',
                1: 'wall',
                2: 'food',
                3: 'pacman',
            },
            score: 0,
        }
        console.log(users);
        socket.emit('load', {messages: messages, player_status: users[socket.id] });
    });

    socket.on('submit_message',function(data) {

        var message = {'name': users[socket.id].name, 'content': data};
        messages.push(message);
        console.log(messages);
        io.emit('update_messages',message);
    });

    // TODO: make a function for updating the players map...

    // remember y axis is reversed...
    socket.on('move_down',function(data) {
        console.log(`${users[socket.id].name} down`);

        // replace player on map with ground
        if(users[socket.id].map[(users[socket.id].location.y)++] ){
            users[socket.id].map[users[socket.id].location.y][users[socket.id].location.x] = 0;
        } else {
            console.log('I hit a wall!');
        }

        // than replace new location with player... if it's not a wall

        // y + 1
        users[socket.id].location.y++

        // update map...


        io.emit('update', {players_status: users});
    })
    socket.on('move_up',function(data) {
        console.log(`${users[socket.id].name} up`);
        // y - 1
        io.emit('update', {players_status: users});
    })
    socket.on('move_left',function(data) {
        console.log(`${users[socket.id].name} left`);
        // x - 1
        io.emit('update', {players_status: users});
    })
    socket.on('move_right',function(data) {
        console.log(`${users[socket.id].name} right`);
        // x + 1
        io.emit('update', {players_status: users});
    })

})
