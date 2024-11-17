import { Schema, model } from 'mongoose';

const productoSchema = new Schema({
    nombre: String,
    tienda: String,
    precio: Number,
    disponible: String
});

export default model('Producto', productoSchema);
