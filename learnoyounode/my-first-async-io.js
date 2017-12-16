// Load global fs module
let fs = require('fs');
fs.readFile(process.argv[2], function cb(err, fileContent) {
  if (err) {
    console.log(err);
    return false;
  }
  let noOfNewLines = fileContent.toString().split('\n').length;
  // Note that the test file does not have a newline character ('\n') at the end of the last line,
  console.log(noOfNewLines - 1);
});