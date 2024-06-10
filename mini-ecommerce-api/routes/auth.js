const express = require('express');
const router = express.Router();

let users = [];

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  users.push({ id: users.length + 1, name, email, password });
  res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
