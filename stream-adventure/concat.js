// Ensure to install concat-stream module, `npm install concat-stream`
// `concat-stream` is a write stream that you can pass a callback to get the
// complete contents of a stream as a single buffer.
let concat = require('concat-stream');
process.stdin
  .pipe(concat(function (body) {
    let reverseString = body.toString().split('').reverse().join('');
    console.log(reverseString);
  }));