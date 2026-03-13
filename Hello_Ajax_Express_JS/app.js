const express = require("express")
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

// Setting path for public directory
const static_path = path.join(__dirname, 'public')
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// Handling request
app.post("/request", (req, res) => {
  let name = req.body.name;
  let designation = req.body.designation;
  console.log(name + ', ' + designation);

  res.json([{
      name_recieved: req.body.name,
      designation_recieved: req.body.designation
   }])
})

// Server Setup
const server = app.listen(port, hostname, function (err) {
  if (err) console.log("Error in server setup")
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server is running at http://${host}:${port}/`);
  });