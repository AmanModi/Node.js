var net = require('net');

var server = net.createServer(function (socket) {
    console.log("Connection from - " + socket.remoteAddress);
    socket.end('Hello World From TCP Server\n');
});

server.listen(7007, "127.0.0.1");