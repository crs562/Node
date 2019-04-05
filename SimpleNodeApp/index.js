// Create a simple Node.js application to read username from client application
// (use PostMan) and send back greeting to the client.
// 1. Send the username to server by queryString.
// 2. Send the username to server by path params.

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.route('/').get(function(req, res) {
    var user_name = (req.query.username);
    res.send("Hi, " + user_name + " How are you?");
});

app.route('/user/:username').get(function(req, res) {
    var user_name = (req.params.username);
    res.send("Hi, " + user_name + " How are you?");
});

http.listen(9001, function() {
    console.log('listening on *:9001');
});

