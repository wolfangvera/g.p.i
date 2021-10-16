'use strict'
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProdcutoSchema = Schema({
    IDproducto: String,
    valorU: Number,
    cantidad: Number,
    descripcion: String,
    estado: {type: String, /*default: "", */  enum:['Disponible', 'No disponible']},
    
})

module.exports = mongoose.model('Producto', ProdcutoSchema)