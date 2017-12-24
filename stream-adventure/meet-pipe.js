let fs = require('fs');

// As we know, first two are default arguments.
let file = process.argv[2];
fs.createReadStream(file).pipe(process.stdout);