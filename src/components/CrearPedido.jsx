import React, { useState } from 'react';
import axios from 'axios';

const CrearPedido = ({ token }) => {
  const [clienteId, setClienteId] = useState('');
  const [tiendaId, setTiendaId] = useState('');
  const [ipUsuario, setIpUsuario] = useState('192.168.1.10');
  const [nombreVendedor, setNombreVendedor] = useState('');
  const [productos, setProductos] = useState([{ hawa: '', cantidad: 1 }]);
  const [respuesta, setRespuesta] = useState(null);

  const handleProductoChange = (index, field, value) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index][field] = value;
    setProductos(nuevosProductos);
  };

  const agregarProducto = () => {
    setProductos([...productos, { hawa: '', cantidad: 1 }]);
  };

  const enviarPedido = async () => {
    const payload = {
      clienteId: Number(clienteId),
      tiendaId: Number(tiendaId),
      ipUsuario,
      nombreVendedor,
      productos
    };

    try {
      const res = await axios.post('http://localhost:8080/api/pedidos', payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRespuesta(res.data);
    } catch (error) {
      alert("Error al crear el pedido. Revisa los datos.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Crear Pedido</h2>
      <input placeholder="Cliente ID" value={clienteId} onChange={e => setClienteId(e.target.value)} /><br />
      <input placeholder="Tienda ID" value={tiendaId} onChange={e => setTiendaId(e.target.value)} /><br />
      <input placeholder="Nombre del Vendedor" value={nombreVendedor} onChange={e => setNombreVendedor(e.target.value)} /><br />
      <input placeholder="IP del usuario" value={ipUsuario} onChange={e => setIpUsuario(e.target.value)} /><br />

      <h3>Productos</h3>
      {productos.map((producto, i) => (
        <div key={i}>
          <input
            placeholder="HAWA"
            value={producto.hawa}
            onChange={e => handleProductoChange(i, 'hawa', e.target.value)}
          />
          <input
            type="number"
            min="1"
            placeholder="Cantidad"
            value={producto.cantidad}
            onChange={e => handleProductoChange(i, 'cantidad', e.target.value)}
          />
        </div>
      ))}
      <button onClick={agregarProducto}>+ Producto</button><br /><br />
      <button onClick={enviarPedido}>Enviar Pedido</button>

      {respuesta && (
        <div>
          <h3>Respuesta del backend</h3>
          <pre>{JSON.stringify(respuesta, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CrearPedido;