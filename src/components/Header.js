import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importando o CSS específico do Header

// Componente Header que contém a navegação da aplicação
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Cadastro</Link></li>
          <li><Link to="/products">Produtos</Link></li>
          <li><Link to="/add-product">Adicionar Produto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
