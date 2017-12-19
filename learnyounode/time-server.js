let net = require('net');
let date = new Date();
// let dateTime = `${date.getFullYear()}-${('0' +date.getMonth()).slice(-2)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

function getCurrentDateTime() {
  let dateTime = (date.getFullYear()) + '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
  ('0' + date.getDate()).slice(-2) + ' ' +
  ('0' + date.getHours()).slice(-2) + ':' +
  ('0' + date.getMinutes()).slice(-2) + '\n';
  return dateTime;
}

let server = net.createServer(function listener(socket) {
  socket.end(getCurrentDateTime());
})
if (process.argv[2]) {
  server.listen(process.argv[2]);
}
