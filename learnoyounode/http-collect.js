let http = require('http');
http.get(process.argv[2], function (response) {
  let finalData = '';
  response.setEncoding('utf8');
  response.on('data', (data) => {
    finalData += data;
  });
  response.on('end', () => {
    console.log(finalData.length);
    console.log(finalData);
  })
}).on('error', function (error) {
  console.log(error);
})
