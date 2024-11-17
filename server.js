const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Tiendas = require('./MODELS/tiendas');
const Productos = require('./MODELS/productos'); // Importar el modelo de productos
const app = express();
const port = 3000;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/BARRIO', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

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

app.get('/productos', async (req, res) => {
    try {
        const productos = await Productos.find().limit(5); // Obtener los primeros 5 productos
        res.json(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
