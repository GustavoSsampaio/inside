import React, { useEffect, useState } from 'react';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        console.log('Products received:', data); // Log para depuração
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error); // Log para depuração
      });
  };

  const handleDelete = (id) => {
    console.log(`Attempting to delete product with ID: ${id}`); // Log para depuração

    fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        console.log('Response status:', response.status); // Log para depuração
        if (!response.ok) {
          return response.json().then(error => { throw new Error(error.message); });
        }
        return response.json();
      })
      .then(data => {
        console.log('Product deleted:', data); // Log para depuração
        fetchProducts(); // Atualizar a lista de produtos
      })
      .catch(error => {
        console.error('Error deleting product:', error); // Log para depuração
      });
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <img src={product.image} alt={product.name} />
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
