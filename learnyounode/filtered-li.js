let fs = require('fs');
let args = process.argv;

if (!args[2] || !args[3]) {
  console.log('Provide folder path and extension.');
}

fs.readdir(args[2], function cbDoneReading(err, fileList) {
  if (err) {
    console.log(err);
    return false;
  }
  let path = require('path');
  fileList.forEach(function (filename) {
    if (path.extname(filename) === ('.' + args[3])) {
      console.log(filename);
    }
  });
});