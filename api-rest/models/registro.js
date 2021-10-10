'use strict'
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RegistroSchema = Schema({
    nombre: String,
    usuario: String,
    estado: {type: String, default: "Pendiente", enum:['Pendiente', 'Autorizado', 'No autorizado']},
    password: String
})

module.exports = mongoose.model('Registro', RegistroSchema)