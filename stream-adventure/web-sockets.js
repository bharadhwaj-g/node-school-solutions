// Make sure to `npm install websocket-stream` in the directory where your solution file lives.
let ws = require('websocket-stream');
let stream = ws('ws://localhost:8099');
// write the content
stream.write('hello\n');