// Make sure to `npm install request` in the directory where your solution file lives.
let request = require('request');
let http = require('http');
let req = request.post('http://localhost:8099');

process.stdin.pipe(req).pipe(process.stdout);