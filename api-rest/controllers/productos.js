'use strict'

const Productos = require('../models/productos.js')

function getProducto(req, res){
    console.log('GET /productos/:productoId')
    let productoId = req.params.productoId
    Productos.findById(productoId, (err, productos) =>{
        if(err) return res.status(500).send({message:"Error al realizar la peticion."})
        if (!productos) return res.status(404).send({message:"El producto no existe."})

        res.status(200).send({productos})
    })

}
function getProductos(req, res){
    console.log('GET /productos')
    Productos.find({}, (err, productos) =>{
        if (err) return res.status(500).send({message:"Error al realizar la peticion."})
        if (!productos) return res.status(404).send({message:"No existen Productos"})
        res.send(200, {products : productos})
    })

}
function saveProductos(req, res){
    console.log('POST /productos/agregar')
    console.log(req.body)

    let productos = Productos()
    productos.idProducto = req.body.idProducto
    productos.valorUnitarioProducto = req.body.valorUnitarioProducto
    productos.cantidadProducto = req.body.cantidadProducto
    productos.descripcionProducto = req.body.descripcionProducto
    productos.estadoProducto = req.body.estadoProducto

    productos.save((err, productosStored) =>{
        if (err) {
            console.log(err)
            return res.status(500).send({message: `Error al guardar en la BD... ${err}`});
        }
        res.status(200).send({productos: productosStored});
    });
};

function updateProductos(req, res){
    let productoId = req.params.productoId
    let update = req.body
    Productos.findByIdAndUpdate(productoId,update, (err, productoUpdated) =>{
        if (err) res.status(500).send({message:"Error al actualizar el producto."})

        res.status(200).send({productos:productoUpdated})
    } )

}
function deleteProductos(req, res){
    let productoId = req.params.productoId;

    Productos.findById(productoId, (err, productos) =>{
        if (err) res.status(500).send({message:"Error al eliminar el producto."})

        productos.remove(err =>{
            if (err) res.status(500).send({message:"Error al eliminar el producto."})
            res.status(200).send({message:"El producto fue eliminado."})
        })
        
    })

}

module.exports = {
    getProducto,
    getProductos,
    saveProductos,
    updateProductos,
    deleteProductos,

}