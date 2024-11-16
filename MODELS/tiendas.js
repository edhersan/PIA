const mongoose = require('mongoose');

const tiendasSchema = new mongoose.Schema({
    nombre: String,
    actividad: String,
    direccion: String,
});

module.exports = mongoose.model('Tiendas', tiendasSchema);
