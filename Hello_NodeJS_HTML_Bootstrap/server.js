const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

let public = path.join(__dirname, 'public')

app.use(express.static(public));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

const server = app.listen(port, hostname, function (err) {
  if (err) console.log("Error in server setup")
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server running at http://${host}:${port}/`);
  });