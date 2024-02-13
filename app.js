const express = require('express');
const path = require('path');
const app = express();

// Configuración para servir archivos estáticos desde el directorio 'public'
// app.use(express.static('public'));

// Definición de una ruta de ejemplo
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/js/archivo.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'js', 'archivo.js'));
  });


// Escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
