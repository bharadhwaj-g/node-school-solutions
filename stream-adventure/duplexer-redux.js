// Make sure to `npm install duplexer2` in the directory where your solution file lives.
let duplexer = require('duplexer2');
// Ensure to install through2 module, `npm install through2`
let through = require('through2').obj;

module.exports = function (counter) {
  // Create a through stream with a `write` and `end` function:
  let stream = through(write, end);
  let counts = {};
  // The `write` function is called for every buffer of available input:
  function write(countryObj, _, next) {
    counts[countryObj.country] = (counts[countryObj.country] || 0) + 1;
    next(); // When we are ready to recieve next chunk
  }

  // The  `end` function is called when there is no more data:
  function end(done) {
    counter.setCounts(counts);
    done();
  }

  return duplexer({objectMode: true}, stream, counter);
}