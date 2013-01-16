/*###########################################
 #       M A S T E R T H E S I S            #
 #                                          #
 # Franz Mathauser                          #
 # Hochschule München                       #
 #                                          #
 ##########################################*/

 //setup server
var app = require('express')()
	, server = require('http').createServer(app)
	, io = require('socket.io').listen(server);

	//listen on port 4000
	server.listen(4000);

	io.sockets.on('connection', function (socket) {

		/**
		* received message will be broadcasted to all websocket-clients.
		**/
		socket.on('message', function (data) {
	    	console.log(data);
	    	io.sockets.emit('message', { xindex:data.xindex, user: data.user, message:data.message });

	  });
});

	

	

