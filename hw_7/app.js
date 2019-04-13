var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

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

