const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

// Setting path for public directory
const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath));

// Middleware for parsing JSON
app.use(express.json());

let users = [
    { id: 1, name: 'Jan Kowalski', email: 'jan.kowalski@example.pl' },
    { id: 2, name: 'Anna Nowak', email: 'anna.nowak@example.pl' },
    { id: 3, name: 'Piotr Wiśniewski', email: 'piotr.wisniewski@example.pl' },
    { id: 4, name: 'Katarzyna Wójcik', email: 'katarzyna.wojcik@example.pl' },
    { id: 5, name: 'Tomasz Kaczmarek', email: 'tomasz.kaczmarek@example.pl' },
    { id: 6, name: 'Magdalena Mazur', email: 'magdalena.mazur@example.pl' },
    { id: 7, name: 'Michał Lewandowski', email: 'michal.lewandowski@example.pl' }
  ];

// GET - Retrieve all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET - Retrieve a specific user
app.get('/users/:id', (req, res) => {
  try {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) throw new Error('User not found');
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// POST - Create a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - Update a user completely
app.put('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// DELETE - Remove a user
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1); // Remove the user from the array
    res.send('User deleted');
  } else {
    res.status(404).send('User not found');
  }
});

// Server setup
const server = app.listen(port, hostname, function (err) {
    if (err) {
     console.error('Server error:', err);
     process.exit(1); // Stop the app if it can't start
    }
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server is running at http://${host}:${port}/`);
    });