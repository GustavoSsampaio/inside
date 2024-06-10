import React, { useState } from 'react';
import './ProductForm.css'; // Importando o CSS específico do ProductForm

// Componente para o formulário de cadastro de produtos
function ProductForm() {
  // Estados para armazenar os dados do produto
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  // Função para lidar com o submit do formulário de cadastro de produto
  const handleAddProduct = (e) => {
    e.preventDefault();
    // Implementar lógica de adicionar produto
  };

  return (
    <form onSubmit={handleAddProduct}>
      <div>
        <label>Produto:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Preço:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Imagem:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      </div>
      <button type="submit">Adicionar Produto</button>
    </form>
  );
}

export default ProductForm;
