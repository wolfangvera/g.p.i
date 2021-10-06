import React from 'react'
import '../style/RegistroVenta.css'

const RegistroVenta = () => {
    return (
        <div className="contenedor_RegVentas">
            <h2 className="Titulo_RegVentas">Modulo Registro de Ventas</h2>
            <div className="Cuadro_ingreso">
                <div className="ingreso_info">
                    <div className="info_venta">
                        <label className="form">
                            <label className="label">ID VENTA</label>
                            <input className="input_info" type="number" required />
                        </label>
                        <label className="form">
                            <label className="label">VALOR TOTAL</label>
                            <input className="input_info" type="number" placeholder="$" required />
                        </label>
                        <label className="form">
                            <label className="label">FECHA</label>
                            <input className="input_info" type="date" required />

                        </label>
                    </div>
                    <hr />
                    <div className="seccion_tabla">
                        <table className="tabla_registro">
                            <caption className="Titulo_tabla">Registro de productos</caption>
                            <thead className="thead">
                                <th className="th">ID Producto</th>
                                <th className="th">Cantidad</th>
                                <th className="th">Precio unitario</th>
                            </thead>
                            <tbody>
                                <td className="td"><input className="input_info" type="text" /> </td>
                                <td className="td"><input className="input_info" type="text" /> </td>
                                <td className="td"><input className="input_info" type="text" /> </td>
                            </tbody>
                        </table>
                        <div>
                            <button className="boton bt_adicion_producto"> Adicionar producto</button>
                        </div>
                    </div>
                    <hr />
                    <div className="info_cliente">
                        <table className="table">
                            <caption className="Titulo_tabla">Datos del Cliente</caption>
                            <thead className="thead">
                                <th className="th">Identificación</th>
                                <th className="th">Nombre</th>

                            </thead>
                            <tbody>
                                <td className="td"><input className="input_info" type="text" /> </td>
                                <td className="td"><input className="input_info" type="text" /> </td>

                            </tbody>
                        </table>

                    </div>
                    <hr />
                    <div className="info_vendedor">
                        <div> Vendedor
                            <select className="selector_vendedor">

                                <option>seleccionar ..</option>
                                <option> Vendedor 1</option>
                                <option> Vendedor 1</option>
                                <option> Vendedor 1</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bt_centrado">
                <button className="boton bt_registro_venta">Registrar venta</button>
            </div>
        </div>
      
    )
}

export default RegistroVenta
