const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Tiendas = require('./MODELS/tiendas');
const Productos = require('./MODELS/productos');
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

// Ruta para comprobar que el servidor está corriendo
app.get('/', (req, res) => {
    res.send('Conectado al servidor');
});

// Ruta para obtener todas las tiendas
app.get('/tiendas', async (req, res) => {
    try {
        const tiendas = await Tiendas.find();
        res.json(tiendas);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta para obtener todos los productos
app.get('/productos', async (req, res) => {
    try {
        const productos = await Productos.find();
        res.json(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta para buscar en todas las tiendas
app.get('/buscar/tiendas', async (req, res) => {
    try {
        const query = req.query.query || ''; // Obtener el parámetro de búsqueda
        const tiendas = await Tiendas.find({
            $or: [
                { nombre: { $regex: query, $options: 'i' } },
                { actividad: { $regex: query, $options: 'i' } },
                { direccion: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(tiendas);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Ruta para buscar en todos los productos
app.get('/buscar/productos', async (req, res) => {
    try {
        const query = req.query.query || ''; // Obtener el parámetro de búsqueda
        const productos = await Productos.find({
            $or: [
                { nombre: { $regex: query, $options: 'i' } },
                { tienda: { $regex: query, $options: 'i' } },
                { disponible: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(productos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

