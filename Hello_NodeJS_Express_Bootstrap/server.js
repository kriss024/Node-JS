const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const calculator = require('./module');

const app = express();
const port = process.env.PORT || 8080;
const hostname = 'localhost';

// Setting path for public directory 
const static_path = path.join(__dirname, 'public')
app.use(express.static(static_path));

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let y = 0;

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// Handling request 
app.post("/add", (req, res) => {
  let x = Number(req.body.x);
  y = calculator.add(y, x);
  console.log(y);

   res.json([{
      x_recieved: x
   }])
})

app.post("/subtr", (req, res) => {
  let x = Number(req.body.x);
  y = calculator.sub(y, x);
  console.log(y);

   res.json([{
      x_recieved: x
   }])
})

app.post("/multi", (req, res) => {
  let x = Number(req.body.x);
  y = calculator.mult(y, x);
  console.log(y);

   res.json([{
      x_recieved: x
   }])
})

app.post("/div", (req, res) => {
  let x = Number(req.body.x);
  y = calculator.div(y, x);
  console.log(y);

   res.json([{
      x_recieved: x
   }])
})
  
// Server Setup
const server = app.listen(port, hostname, function (err) {
  if (err) console.log("Error in server setup")  
  const host = server.address().address;  
  const port = server.address().port;  
  console.log(`Server is running at http://${host}:${port}/`);  
  });