const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/BARRIO', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
