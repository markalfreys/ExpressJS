const express = require('express');
const router = express.Router();

// Keep products in memory. Restarting the server resets this list.
const products = [
  { id: 1, name: 'Notebook', price: 5 },
  { id: 2, name: 'Pen', price: 2 }
];

// Show all products.
router.get('/', (req, res) => {
  // Show a message when the list is empty.
  if (products.length === 0) {
    return res.json({ message: 'No products found.', products: [] });
  }

  res.json(products);
});

// Add a product.
router.post('/', (req, res) => {
  const { name, price } = req.body || {};

  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Please enter a product name.' });
  }

  if (typeof price !== 'number' || !Number.isFinite(price) || price < 0) {
    return res.status(400).json({ error: 'Price must be a number of 0 or more.' });
  }

  const product = { id: products.length + 1, name: name.trim(), price };
  products.push(product);
  res.status(201).json(product);
});

module.exports = router;

