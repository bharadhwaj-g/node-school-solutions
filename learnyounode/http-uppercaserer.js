let http = require('http');
// Ensure you have install through2-map,  $ npm install through2-map
let map = require('through2-map');

// Create a server which is lisening on the port passed as first argument.
http.createServer(function (req, res) {
  // Check the request method is post or not, if yes convert request data to Upper case and send as response using through2-map
  if (req.method !== 'POST') {
    return res.end('Request accepts only POST.');
  }
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res);
}).listen(Number(process.argv[2]));