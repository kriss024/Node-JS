'use strict';
const http = require('http');
const calculator = require('./module');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  let x = 50, y = 10;
  let page = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Hello, world!</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <style>
      body { padding-top: 50px; }
    </style>
  </head>
  <body>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is Node.js web-based application.</p>
            <hr class="my-4">
            <p>Addition of 50 and 10 is ${calculator.add(x, y)} <br>
            Subtraction of 50 and 10 is ${calculator.sub(x, y)} <br>
            Multiplication of 50 and 10 is ${calculator.mult(x, y)} <br>
            Division of 50 and 10 is ${calculator.div(x, y)}</p>
        </div>
    </div>
  </body>
  </html>`

  res.write(page);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});