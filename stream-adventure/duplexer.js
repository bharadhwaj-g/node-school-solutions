// Make sure to `npm install duplexer2` in the directory where your solution file lives.
let duplexer = require('duplexer2');
let spawn = require('child_process').spawn;

module.exports = function(cmd, args) {
  let processStream = spawn(cmd, args);
  return duplexer(processStream.stdin, processStream.stdout);
}


