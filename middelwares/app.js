const express = require('express');
const app = express();

// Middleware de registro de solicitudes
app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next(); // Llama a la función next() para pasar la solicitud al siguiente middleware
});

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola mundo!');
});

// Escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
