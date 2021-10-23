'use strict'
const mongoose = require("mongoose")
const { text } = require('body-parser')
const Schema = mongoose.Schema

const RegistroSchema = Schema({
    identificador: String,
    nombre: String,
    usuario: String,
    estado: {type: String, default: "Pendiente", enum:['Pendiente', 'Autorizado', 'No autorizado']},
    rol: {type: String, default: "", enum:['Administrador', 'Vendedor']},
    password: String
})

module.exports = mongoose.model('Registro', RegistroSchema)