var app = require('express')();
var http = require('http').Server(app);
<<<<<<< HEAD
var io = require('socket.io')(http);
=======
var io = require('socket.io').listen(http);

var users = [];
var connections = [];
>>>>>>> f41b8c4eb537c1af37b3dd3c8da2439e9373995d

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

<<<<<<< HEAD
var users = [];
io.on('connection', function(socket) {
	console.log('A user connected');
	socket.on('setUserName', function(data) {
		console.log(data);
		if (users.indexOf(data) > -1) {
			console.log(data);
			socket.emit('userExists', '<p class="bg-primary"> User ' + '<b>' + data + '</b>' + 'already exists, choose another name!</p>');
		} else {
			users.push(data);
			socket.emit('userSet', {userName: data});
		}
     });
	socket.on('message', function(data) {
		io.socket.emit('newMessage', data);
	})
});

http.listen(3000, function() {
    console.log('Go to chat at http://localhost:3000');
});

//http.listen(3000, '192.168.0.92' || 'localhost', function() {
//    console.log('Go to chat at http://localhost:3000');
//});

=======
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
>>>>>>> f41b8c4eb537c1af37b3dd3c8da2439e9373995d
