const express = require('express');
const router = express.Router();

let users = []; // Simulação de armazenamento de usuários

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  console.log('Received registration data:', req.body); // Log para depuração

  if (email && password && name) {
    users.push({ name, email, password });
    res.status(200).json({ message: 'User registered successfully' });
  } else {
    res.status(400).json({ message: 'Registration failed' });
  }
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(400).json({ message: 'Login failed' });
  }
});

module.exports = router;
