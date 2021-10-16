'use strict'

const { text } = require('body-parser')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VentaSchema = Schema ({
    id : Number,
    fecha : {type:Date , default:Date.now()},
    vendedor : String,
    estado : { type: String, default: 'En proceso', enum:['En proceso','Cancelada','Entregada']},
    descripcion : String,
    valor_total : Number,
    nombre_cliente : String
})

module.exports = mongoose.model('Venta', VentaSchema)