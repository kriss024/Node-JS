'use strict';
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
 
  fs.readFile('page.html', function(err, html) {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      return res.end('<h1>404 Not Found</h1>');
    } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    return res.end();
  }
  });

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});