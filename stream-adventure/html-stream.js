// Make sure to `npm install trumpet through2` in the directory where your solution file lives.
let through = require('through2');
let trumpet = require('trumpet');
let tr = trumpet();
let stream = tr.select('.loud').createStream();
stream.pipe(through(function (buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
})).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);

