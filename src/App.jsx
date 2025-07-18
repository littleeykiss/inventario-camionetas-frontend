import React, { useState } from 'react';
import Login from './components/Login';
import CrearPedido from './components/CrearPedido';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      <h1>Sistema de Pedidos - Tiendas Patito</h1>
      {!token ? (
        <Login onLogin={setToken} />
      ) : (
        <CrearPedido token={token} />
      )}
    </div>
  );
};

export default App;