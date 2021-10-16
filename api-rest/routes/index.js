'use strict'

const express = require("express")
const registroCtrl = require("../controllers/registro")
const ventaCtrl =require('../controllers/ventas')
const productoCtrl =require('../controllers/productos')
const api = express.Router()

api.get('/product', registroCtrl.getRegistros)
api.get('/product/:productId', registroCtrl.getRegistro)
api.post('/product', registroCtrl.saveRegistro)
api.put('/product/:productId', registroCtrl.updateRegistro)
api.delete('/product/:productId', registroCtrl.deleteRegistro)

api.get('/venta', ventaCtrl.getVentas)
api.get('/venta/:ventaId', ventaCtrl.getVenta)
api.post('/venta', ventaCtrl.saveVenta)
api.put('/venta/:ventaId',ventaCtrl.updateVenta)
api.delete('/venta/:ventaId',ventaCtrl.deleteVenta)

api.get('/productos', productoCtrl.getProducto)
api.get('/productos', productoCtrl.getProductos)
api.post('/productos', productoCtrl.saveProductos)
api.put('/productos/:productoId', productoCtrl.updateProductos)
api.delete('/productos/:productoId', productoCtrl.deleteProductos)

module.exports = api
