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

<img width="1919" height="1019" alt="image" src="https://github.com/user-attachments/assets/190204f5-3e37-497a-ae55-40d62402b47f" />
<img width="1919" height="1019" alt="image" src="https://github.com/user-attachments/assets/3a5efec2-329e-47f7-9326-229053c4dd6d" />
<img width="1917" height="1015" alt="image" src="https://github.com/user-attachments/assets/b4342743-8fed-4d88-aaf2-6b7ced2f6f03" />
<img width="1919" height="1020" alt="image" src="https://github.com/user-attachments/assets/40774d38-e284-485d-8647-cda47e198bb3" />
<img width="1919" height="1019" alt="image" src="https://github.com/user-attachments/assets/0a3a5a5a-a345-4dd1-88e9-aa826655040e" />
<img width="1919" height="1017" alt="image" src="https://github.com/user-attachments/assets/7a201c4c-6d20-4b86-86d9-25c2ca6de72d" />
<img width="1919" height="1017" alt="image" src="https://github.com/user-attachments/assets/1c9ebe3d-467a-47ae-b2d5-cff4bd692b2e" />
