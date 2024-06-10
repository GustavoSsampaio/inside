import React, { useState } from 'react';
import './Login.css'; // Importando o CSS específico do Login

// Componente para a página de login
function Login() {
  // Estados para armazenar email e senha do usuário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o submit do formulário de login
  const handleLogin = (e) => {
    e.preventDefault();
    // Implementar lógica de login
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
