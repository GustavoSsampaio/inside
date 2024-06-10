import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importando o Link do react-router-dom
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);  // Estado para controlar o sucesso do registro

  const handleRegister = (e) => {
    e.preventDefault();

    // Enviar dados para a API
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'User registered successfully') {
          setRegistrationSuccess(true);  // Alterar estado para sucesso
        }
      });
  };

  if (registrationSuccess) {
    return (
      <div className="registration-success">
        <p>Registrado com sucesso!</p>
        <Link to="/login"><button>Logar com minha conta</button></Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Me Cadastrar</button>
    </form>
  );
}

export default Register;
