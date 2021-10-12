'use strict'

const Venta = require('../models/ventas')

function getVenta(req, res){
    let ventaId = req.params.ventaId
    Venta.findById(ventaId, (err, venta) =>{
        if(err) return res.status(500).send({message:"Error al realizar la peticion."})
        if (!venta) return res.status(404).send({message:"La venta no se ha realizado"})

        res.status(200).send({venta:venta})
    })

}
function getVentas(req, res){
    Venta.find({}, (err, ventas) =>{
        if (err) return res.status(500).send({message:"Error al realizar la peticion."})
        if (!ventas) return res.status(404).send({message:"Aun no hay ventas"})
        res.status(200).send({ventas : ventas})
    })

}
function saveVenta(req, res){
    console.log(req.body)
    let venta = Venta()
    venta.id = req.body.id
    venta.fecha = req.body.usuario
    venta.vendedor = req.body.password
    venta.estado =req.body.estado
    venta.descripcion=req.body.description
    venta.valor_total=req.body.valor_total
    venta.id_cliente=req.body.id_cliente
    venta.nombre_cliente=req.body.nombre_cliente

    venta.save((err, ventaStored) =>{
        if (err) res.status(500).send({message:"Error al registrar la venta."})

        res.status(200).send({venta: ventaStored})
    })
}
function updateVenta(req, res){
    let ventaId = req.params.ventaId
    let update = req.body
    Venta.findByIdAndUpdate(ventaId,update, (err, ventaUpdated) =>{
        if (err) res.status(500).send({message:"Error al actualizar la venta."})

        res.status(200).send({venta:ventaUpdated})
    } )

}
function deleteVenta(req, res){
    let ventaId = req.params.ventaId

    Venta.findById(ventaId, (err, venta) =>{
        if (err) res.status(500).send({message:"Error al eliminar la venta."})

        venta.remove(err =>{
            if (err) res.status(500).send({message:"Error al eliminar la venta."})
            res.status(200).send({message:"La venta fue eliminada."})
        })
        
    })

}

module.exports = {
    getVenta,
    getVentas,
    saveVenta,
    updateVenta,
    deleteVenta

}