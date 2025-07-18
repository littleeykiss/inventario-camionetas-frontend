import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
const res = await axios.post(`http://localhost:8080/api/auth/login?username=${username}`);
    onLogin(res.data);
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;