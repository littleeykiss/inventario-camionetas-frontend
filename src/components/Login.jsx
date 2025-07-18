import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [tokenValue, setTokenValue] = useState('');

  const handleLogin = async () => {
    try {
const res = await axios.post(`http://localhost:8080/api/auth/login?username=${username}`);
      onLogin(res.data);
      setTokenValue(res.data);
      setShowModal(true);
    } catch (error) {
      alert("Error al generar el token");
      console.error(error);
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <input
        className="input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button className="btn" onClick={handleLogin}>
        Generar Token
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Token generado</h3>
            <p style={{ wordBreak: 'break-all' }}>{tokenValue}</p>
            <button className="btn-close" onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;