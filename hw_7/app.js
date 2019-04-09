var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);

var users = [];
var connections = [];

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s socket connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data) {        
        users.splice(users.indexOf(socket.userName), 1);
        updateUserNames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    // Send Message
    socket.on('send message', function(data) {
        console.log(data);
        io.sockets.emit('new message', {message: data, user: socket.userName});
    });

    // New User
    socket.on('new user', function(data, callback) {
        callback(true);
        socket.userName = data;
        users.push(socket.userName);
        updateUserNames();
    });

    function updateUserNames() {
        io.sockets.emit('get users', users);
    }
    
});

http.listen(3000, function(){
    console.log('Go to chat at http://localhost:3000');
});

// http.listen(3000, '192.168.31.19' || 'localhost', function() {
//    console.log('Go to chat at http://localhost:3000');
// });
