let http = require('http');
let args = process.argv;
let cbCount = 0;
let result = [];

// Method will print final result
function printFinalResult() {
  result.forEach(function (content) {
    console.log(content);
  });
}
for (let i = 2; i < args.length; i++) {
  http.get(process.argv[i], function (response) {
    let finalData = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      finalData += data;
    });
    response.on('end', () => {
      result[i - 2] = finalData;
      cbCount++;
      // if call back reaches max count then print the result
      if (cbCount === args.length - 2) {
        printFinalResult();
      }
    })
  }).on('error', function (error) {
    console.log(error);
  })
}