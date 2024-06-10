const express = require('express');
const router = express.Router();

let products = [];

router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const { name, price, image } = req.body;
  products.push({ id: products.length + 1, name, price, image });
  res.status(201).json({ message: 'Product added successfully' });
});

module.exports = router;
