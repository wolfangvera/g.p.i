'use strict'

const { text } = require('body-parser')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VentaSchema = Schema ({
    idVenta : Number,
    fecha : {type:Date , default:Date.now()},
    nombreVendedor : String,
    estadoVenta : { type: String, default: 'En proceso', enum:['En proceso','Cancelada','Entregada']},
    descripcionVenta : String,
    valorTotal : Number,
    idCliente: Number,
    nombreCliente : String
})

module.exports = mongoose.model('Venta', VentaSchema)