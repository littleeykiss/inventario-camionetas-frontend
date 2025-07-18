import React, { useState } from 'react';
import axios from 'axios';

const CrearPedido = ({ token }) => {
  const [clienteId, setClienteId] = useState('');
  const [tiendaId, setTiendaId] = useState('');
  const [ipUsuario, setIpUsuario] = useState('192.168.1.10');
  const [nombreVendedor, setNombreVendedor] = useState('');
  const [productos, setProductos] = useState([{ hawa: '', cantidad: 1 }]);
  const [respuesta, setRespuesta] = useState(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleProductoChange = (index, field, value) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index][field] = value;
    setProductos(nuevosProductos);
  };

  const agregarProducto = () => {
    setProductos([...productos, { hawa: '', cantidad: 1 }]);
  };

  const confirmarPedido = () => {
    setConfirmModal(true);
  };

  const enviarPedido = async () => {
    setConfirmModal(false);
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
      setSuccessModal(true);
    } catch (error) {
      alert("Error al crear el pedido. Revisa los datos.");
      console.error(error);
    }
  };

  const total = respuesta?.productos?.reduce((acc, item) => acc + item.subtotal, 0) || 0;

  return (
    <div className="card">
      <h2>🛒 Crear Pedido</h2>
      <input className="input" placeholder="Cliente ID" value={clienteId} onChange={e => setClienteId(e.target.value)} />
      <input className="input" placeholder="Tienda ID" value={tiendaId} onChange={e => setTiendaId(e.target.value)} />
      <input className="input" placeholder="Nombre del Vendedor" value={nombreVendedor} onChange={e => setNombreVendedor(e.target.value)} />
      <input className="input" placeholder="IP del usuario" value={ipUsuario} onChange={e => setIpUsuario(e.target.value)} />

      <h3>📦 Productos</h3>
      {productos.map((producto, i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <input
            className="input"
            placeholder="HAWA"
            value={producto.hawa}
            onChange={e => handleProductoChange(i, 'hawa', e.target.value)}
          />
          <input
            className="input"
            type="number"
            min="1"
            placeholder="Cantidad"
            value={producto.cantidad}
            onChange={e => handleProductoChange(i, 'cantidad', e.target.value)}
          />
        </div>
      ))}
      <button className="btn" onClick={agregarProducto}>+ Agregar Producto</button><br /><br />
      <button className="btn" onClick={confirmarPedido}>🧾 Confirmar y Enviar Pedido</button>

      {/* Modal de confirmación */}
      {confirmModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>¿Confirmar pedido?</h3>
            <p>Estás por enviar un pedido con <strong>{productos.length}</strong> producto(s).</p>
            <button className="btn" onClick={enviarPedido}>Confirmar</button>
            <button className="btn-close" onClick={() => setConfirmModal(false)}>Cancelar</button>
          </div>
        </div>
      )}

      {/* Modal de éxito estilizado */}
      {successModal && respuesta && (
        <div className="modal">
          <div className="modal-content">
            <h2 style={{ color: '#059669' }}>✔️ Pedido generado exitosamente</h2>
            <p><strong>Pedido ID:</strong> #{respuesta.id}</p>
            <p><strong>Cliente:</strong> {respuesta.cliente}</p>
            <p><strong>Tienda:</strong> {respuesta.tienda}</p>
            <p><strong>Vendedor:</strong> {respuesta.nombreVendedor}</p>
            <p><strong>Fecha:</strong> {new Date(respuesta.fechaCreacion).toLocaleString()}</p>
            <p><strong>Estatus:</strong> {respuesta.estatus}</p>

            <h4 style={{ marginTop: '1rem' }}>🧾 Resumen de productos</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f3f4f6' }}>
                  <th style={{ textAlign: 'left' }}>Producto</th>
                  <th style={{ textAlign: 'left' }}>Nombre</th>
                  <th style={{ textAlign: 'center' }}>Cantidad</th>
                  <th style={{ textAlign: 'right' }}>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {respuesta.productos?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.hawa}</td>
                    <td>{item.nombre}</td>
                    <td style={{ textAlign: 'center' }}>{item.cantidad}</td>
                    <td style={{ textAlign: 'right' }}>${item.subtotal.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ textAlign: 'right', marginTop: '1rem' }}>
              Total: <span style={{ color: '#10b981' }}>${total.toLocaleString()}</span>
            </h3>

            <button className="btn-close" onClick={() => setSuccessModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrearPedido;