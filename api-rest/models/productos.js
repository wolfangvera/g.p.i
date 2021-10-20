'use strict'
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductoSchema = Schema({
    idProducto: String,
    valorUnitario: Number,
    cantidadProducto: Number,
    descripcionProducto: String,
    estadoProducto: {type: String, /*default: "", */  enum:['Disponible', 'No Disponible']},
    
})

module.exports = mongoose.model('Producto', ProductoSchema)