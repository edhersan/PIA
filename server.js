const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importar el paquete cors
const Tiendas = require('./MODELS/tiendas');
const app = express();
const port = 3000;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/BARRIO', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware para parsear JSON
app.use(express.json());
app.use(cors()); // Usar el middleware de cors

// Rutas
app.get('/', (req, res) => {
    res.send('conectado');
});

app.get('/tiendas', async (req, res) => {
    try {
        const tiendas = await Tiendas.find();
        res.json(tiendas);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});