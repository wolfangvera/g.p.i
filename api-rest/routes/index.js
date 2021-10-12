'use strict'

const express = require("express")
const registroCtrl = require("../controllers/registro")
const api = express.Router()

api.get('/product', registroCtrl.getRegistros)

api.get('/product/:productId', registroCtrl.getRegistro)

api.post('/product', registroCtrl.saveRegistro)

api.put('/product/:productId', registroCtrl.updateRegistro)
api.delete('/product/:productId', registroCtrl.deleteRegistro)

module.exports = api 
