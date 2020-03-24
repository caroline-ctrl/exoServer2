const http = require('http');

const index = require('./index');

const server = http.createServer(index);

server.listen(3000);