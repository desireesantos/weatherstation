var socket;

exports.listen = function (http) {
	socket = require('socket.io').listen(http, require('config').server);
	socket.sockets.on('connection', function (client) {
	client.emit('stationOut', 0);
	client.emit('station', 0);	
}); 
}

exports.callSocket = function () {
 return socket;
}


