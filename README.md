# 💻 Frontend - Sistema de Pedidos de Camionetas

Este frontend fue desarrollado en React con Vite. Permite crear pedidos, visualizar pedidos previos y consultar la información de forma visual.

## 🚀 Tecnologías utilizadas

- React 18
- Vite
- Axios
- CSS personalizado

## 🖥️ Funcionalidades

- Login con generación de token JWT
- Formulario para crear un nuevo pedido
- Modal de confirmación y éxito con resumen visual
- Historial de pedidos con modal de detalle

## 🔐 Seguridad

El token generado en login se utiliza para autorizar las peticiones:

```js
headers: {
  Authorization: "Bearer <token>"
}
```

## 🎯 Archivos clave

| Archivo | Función |
|--------|---------|
| `Login.jsx` | Login con modal visual |
| `CrearPedido.jsx` | Formulario con confirmación y resumen de pedido |
| `ListaPedidos.jsx` | Historial de pedidos y visualización detallada |
| `index.css` | Estilos modernos tipo tienda |

## 🌐 Conexión con backend

El backend debe estar disponible en:
```
http://localhost:8080
```
