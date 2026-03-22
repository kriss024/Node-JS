const express = require('express');
const path = require('path');
const calculator = require('./module');

const app = express();
const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

// Setting path for public directory
const static_path = path.join(__dirname, 'public')
app.use(express.static(static_path));

// Parses the body for POST, PUT, DELETE, etc.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// Handling request
app.post("/add", (req, res) => {
  const x = Number(req.body.x);
  const y = Number(req.body.y);
  result = calculator.add(y, x);

   res.json({
      input_x: x,
      input_y: y,
      result: result
   });
})

app.post("/subtr", (req, res) => {
  const x = Number(req.body.x);
  const y = Number(req.body.y);
  result = calculator.sub(y, x);

   res.json({
      input_x: x,
      input_y: y,
      result: result
   });
})

app.post("/multi", (req, res) => {
  const x = Number(req.body.x);
  const y = Number(req.body.y);
  result = calculator.mult(y, x);

   res.json({
      input_x: x,
      input_y: y,
      result: result
   });
})

app.post("/div", (req, res) => {
  const x = Number(req.body.x);
  const y = Number(req.body.y);
  result = calculator.div(y, x);

   res.json({
      input_x: x,
      input_y: y,
      result: result
   });
})

app.post("/result", (req, res) => {
  const x = Number(req.body.x);
  const y = Number(req.body.y);
  result = y;

   res.json({
      input_x: x,
      input_y: y,
      result: result
   });
})

// Server Setup
const server = app.listen(port, hostname, function (err) {
  if (err) {
   console.error('Server error:', err);
   process.exit(1); // Stop the app if it can't start
  }
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server is running at http://${host}:${port}/`);
  });