// Dependencies...
const express = require("express");
const path = require("path");
const fs = require("fs")
const jquery = require("jquery");
const app = express();

// quick random num gen
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const MIN = 1;
const MAX = 1000;

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

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);
  // all the server socket code goes in here
  socket.on('button_clicked',function(data) {
      data.num = getRandomArbitrary(MIN,MAX);
      socket.emit('display_req', data)
  })


})
