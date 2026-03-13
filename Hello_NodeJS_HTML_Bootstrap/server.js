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
  if (err) {
   console.error('Server error:', err);
   process.exit(1); // Stop the app if it can't start
  }
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server running at http://${host}:${port}/`);
  });