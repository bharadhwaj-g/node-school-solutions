let http = require('http');
let fs = require('fs');
// Here is the command to start the server - 'node http-file-server.js host port'
http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2]);