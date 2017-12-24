/*
 * Instead of transforming every line as in the previous "TRANSFORM" example,
 * for this challenge, convert even-numbered lines to upper-case and odd-numbered
 * lines to lower-case. Consider the first line to be odd-numbered.
 */

// Ensure to install through2 module, `npm install through2`
let through = require('through2');

// Make sure to `npm install split through2` in the directory where your solution file lives
let split = require('split');

let stream = through(function (line, _, next) {
  this.push(getString(line.toString()));
  next();
});

let index = 1;

function getString(line) {
  let convertedString = (index % 2 === 0) ? line.toUpperCase() : line.toLowerCase();
  index++;
  return convertedString + '\n';
}

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout);