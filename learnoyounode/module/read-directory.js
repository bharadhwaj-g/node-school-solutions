let fs = require('fs');
let path = require('path');
module.exports = function (folderPath, extension, cb) {
  fs.readdir(folderPath, function cbDoneReading(err, fileList) {
    if (err) {
      return cb(err);
    }
    let path = require('path');
    let filteredList = fileList.filter(function (filename) {
      return (path.extname(filename) === ('.' + extension));
    });
    return cb(null, filteredList);
  });
}