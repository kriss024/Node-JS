const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const calculator = require('./module');

const app = express();
const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

// Setting path for public directory
const static_path = path.join(__dirname, 'public')
app.use(express.static(static_path));

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let y;
if (y == null) y = 0;

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// Handling request
app.post("/add", (req, res) => {
  const x = Number(req.body.x);
  y = calculator.add(y, x);

   res.json({
      x_recieved: x,
      y_recieved: y
   })
})

app.post("/subtr", (req, res) => {
  const x = Number(req.body.x);
  y = calculator.sub(y, x);

   res.json({
      x_recieved: x,
      y_recieved: y
   })
})

app.post("/multi", (req, res) => {
  const x = Number(req.body.x);
  y = calculator.mult(y, x);

   res.json({
      x_recieved: x,
      y_recieved: y
   })
})

app.post("/div", (req, res) => {
  const x = Number(req.body.x);
  y = calculator.div(y, x);

   res.json({
      x_recieved: x,
      y_recieved: y
   })
})

// Server Setup
const server = app.listen(port, hostname, function (err) {
  if (err) {
   console.error('Server error:', err.message);
   process.exit(1); // Stop the app if it can't start
  } else {
   const host = server.address().address;
   const port = server.address().port;
   console.log(`Server is running at http://${host}:${port}/`);
  }
  });