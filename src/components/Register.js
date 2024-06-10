import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    console.log('Register button clicked'); // Log para depuração

    fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(response => {
        console.log('Response received from server:', response); // Log para depuração
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data); // Log para depuração
        if (data.message === 'User registered successfully') {
          setRegistrationSuccess(true);
        } else {
          console.error('Registration failed:', data.message); // Log para depuração
        }
      })
      .catch(error => {
        console.error('Error during registration:', error); // Log para depuração
      });
  };

  if (registrationSuccess) {
    return (
      <div className="registration-success">
        <p>Registration successful! You can now log in.</p>
        <Link to="/login"><button>Go to Login</button></Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
