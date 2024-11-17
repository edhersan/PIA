const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema({
    nombre: String,
    tienda: String,
    precio: Number,
    disponible: String,
});

module.exports = mongoose.model('Productos', productosSchema);
