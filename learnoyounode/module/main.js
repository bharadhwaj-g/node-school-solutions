let readDirModule = require('./read-directory.js');
let args = process.argv;

if (!args[2] || !args[3]) {
  console.log('Please provide folder path and file extension.');
}

readDirModule(args[2], args[3], function (err, data) {
  if (err) {
    console.log(err);
    return false;
  }
  data.forEach(function (filename) {
    console.log(filename);
  });
});