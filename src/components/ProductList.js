import React, { useState, useEffect } from 'react';
import './ProductList.css'; // Importando o CSS específico do ProductList

// Componente para exibir a lista de produtos
function ProductList() {
  // Estado para armazenar a lista de produtos
  const [products, setProducts] = useState([]);

  // useEffect para buscar os produtos da API quando o componente é montado
  useEffect(() => {
    // Fetch products from the API
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
