// Ensure to install through2 module, `npm install through2`
let through = require('through2');

// Create a through stream with a `write` and `end` function:
let stream = through(write, end);

// The `write` function is called for every buffer of available input:
function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next(); // When we are ready to recieve next chunk
}

// The  `end` function is called when there is no more data:
function end(done) {
  done;
}

process.stdin.pipe(stream).pipe(process.stdout);