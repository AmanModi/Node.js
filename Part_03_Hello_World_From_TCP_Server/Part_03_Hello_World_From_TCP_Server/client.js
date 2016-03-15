var net = require('net');

var client = new net.Socket();

client.connect(7007, "127.0.0.1");

client.on('data', function (data) {
    console.log('Data from TCP Server - ' + data);
    client.destroy();
});

client.on('close', function () {
    console.log("Connection Closed");
});