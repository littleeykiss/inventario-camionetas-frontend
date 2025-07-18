import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaPedidos = ({ token }) => {
  const [pedidos, setPedidos] = useState([]);
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    const cargarPedidos = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/pedidos', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPedidos(res.data);
      } catch (error) {
        alert("Error al cargar pedidos");
        console.error(error);
      }
    };

    cargarPedidos();
  }, [token]);

  return (
    <div className="card">
      <h2>📋 Historial de Pedidos</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6' }}>
            <th>ID</th>
            <th>Cliente</th>
            <th>Tienda</th>
            <th>Estatus</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.cliente}</td>
              <td>{p.tienda}</td>
              <td>{p.estatus}</td>
              <td>{new Date(p.fechaCreacion).toLocaleString()}</td>
              <td>
                <button className="btn" onClick={() => setDetalle(p)}>Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {detalle && (
        <div className="modal">
          <div className="modal-content">
            <h3>🧾 Detalle del Pedido #{detalle.id}</h3>
            <p><strong>Cliente:</strong> {detalle.cliente}</p>
            <p><strong>Tienda:</strong> {detalle.tienda}</p>
            <p><strong>Vendedor:</strong> {detalle.nombreVendedor}</p>
            <p><strong>Estatus:</strong> {detalle.estatus}</p>
            <p><strong>Fecha:</strong> {new Date(detalle.fechaCreacion).toLocaleString()}</p>

            <table style={{ width: '100%', marginTop: '1rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f3f4f6' }}>
                  <th>Producto</th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {detalle.productos?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.hawa}</td>
                    <td>{item.nombre}</td>
                    <td>{item.cantidad}</td>
                    <td>${item.subtotal.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn-close" onClick={() => setDetalle(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaPedidos;