import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [productAdded, setProductAdded] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();

    console.log('Add Product button clicked'); // Log para depuração

    fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, image }),
    })
      .then(response => {
        console.log('Response received from server:', response); // Log para depuração
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data); // Log para depuração
        if (data.message === 'Product added successfully') {
          setProductAdded(true);
          setName('');
          setPrice('');
          setImage('');
        } else {
          console.error('Product addition failed:', data.message); // Log para depuração
        }
      })
      .catch(error => {
        console.error('Error during product addition:', error); // Log para depuração
      });
  };

  return (
    <div className="product-form-container">
      <form onSubmit={handleAddProduct}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <button type="submit">Add Product</button>
        {productAdded && <p className="success">Product added successfully!</p>}
      </form>
    </div>
  );
}

export default ProductForm;
