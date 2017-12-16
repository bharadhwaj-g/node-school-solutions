// Load global fs module
let fs = require('fs');
let fileContent = fs.readFileSync(process.argv[2]).toString();
// let fileContent = fs.readFileSync(process.argv[2], 'utf8'); // To get string
let noOfNewLines = fileContent.split('\n').length;
// Note that the test file does not have a newline character ('\n') at the end of the last line,
console.log(noOfNewLines - 1);