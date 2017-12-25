// Ensure to install through2 module, `npm install through2`
let through = require('through2');
let http = require('http');

// Create a through stream
let stream = through(function (buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
});

http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(stream).pipe(res);
  } else {
    res.end('Hey!, send me a POST request.')
  }
}).listen(parseInt(process.argv[2]));