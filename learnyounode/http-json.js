let http = require('http');
let url = require('url');

// Function to parse the request date.
function getParseTime(date) {
  let dateObj = new Date(date);
  let resObj = {
    hour: dateObj.getHours(),
    minute: dateObj.getMinutes(),
    second: dateObj.getSeconds()
  };
  return resObj;
}

// Function to get unixtime.
function getUnixTime(date) {
  let resObj = {
    "unixtime": new Date(date).getTime()
  };
  return resObj;
}

// Create a http server
http.createServer(function (req, res) {
  if (req.method !== 'GET') {
    return res.end('Only accepts GET method.')
  }

  // Read the request properties.
  let reqProps = url.parse(req.url, true);
  let reqDate = reqProps.query.iso ? reqProps.query.iso : '';
  if (!reqDate) {
    return res.end('Hey! do you forget to send iso param?')
  }

  let pathName = (reqProps.pathname) ? reqProps.pathname.toLowerCase() : '';
  let response = '';
  if (pathName === '/api/parsetime') {
    response = getParseTime(reqDate);
  } else if (pathName === '/api/unixtime') {
    response = getUnixTime(reqDate);
  } else {
    res.writeHead(404);
    res.end('Hey!, path not found, please send proper path.')
  }

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(response));
}).listen(Number(process.argv[2]))