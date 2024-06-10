const express = require('express');
const router = express.Router();

let products = []; // Simulação de armazenamento de produtos

router.get('/', (req, res) => {
  res.status(200).json(products);
});

router.post('/', (req, res) => {
  const { name, price, image } = req.body;

  console.log('Received product data:', req.body); // Log para depuração

  if (name && price && image) {
    const newProduct = { id: products.length + 1, name, price, image };
    products.push(newProduct);
    res.status(200).json({ message: 'Product added successfully' });
  } else {
    res.status(400).json({ message: 'Failed to add product' });
  }
});

router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  console.log('Received request to delete product with ID:', productId); // Log para depuração

  const initialLength = products.length;
  products = products.filter(product => product.id !== productId);

  if (products.length < initialLength) {
    res.status(200).json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
