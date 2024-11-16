const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: String,
    tienda: String,
    precio: Number,
    disponible: String
});

module.exports = mongoose.model('Producto', productoSchema);
