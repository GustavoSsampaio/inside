import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Login button clicked'); // Log para depuração

    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        console.log('Response received from server:', response); // Log para depuração
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data); // Log para depuração
        if (data.message === 'Login successful') {
          // Armazenar o usuário no localStorage ou contexto de autenticação, se necessário
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate('/products'); // Redirecionar para a página de produtos após o login bem-sucedido
        } else {
          setLoginError(data.message);
          console.error('Login failed:', data.message); // Log para depuração
        }
      })
      .catch(error => {
        setLoginError('An error occurred during login.');
        console.error('Error during login:', error); // Log para depuração
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        {loginError && <p className="error">{loginError}</p>}
      </form>
    </div>
  );
}

export default Login;
