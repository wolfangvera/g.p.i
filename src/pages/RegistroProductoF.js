import React from 'react'
import '../style/RegistroProductoF.css'

const RegistroProductoF = () => {
    return (
        <div>
            <div className="Contenedor_RegProductos">
                <h2 className="TituloPagina"> Módulo Registro de Producto</h2>
                <div className="Cuadro_ingreso">

                    <div className="ingreso_info">

                        <ul className="ingreso_producto">
                            <li>
                                <label className="form_producto">
                                    <label className="label_producto">ID producto</label>
                                    <input className="input_producto" type="number" required />
                                </label >
                                <label className="form_producto">
                                    <label className="label_producto">Descripción</label>
                                    <input className="input_producto" type="text" required />
                                </label >
                            </li>
                            <li>

                                <label className="form_producto">
                                    <label className="label_producto">Vlr unitario</label>
                                    <input className="input_producto" type="number" placeholder="$" required />

                                </label >
                                <label className="form_producto">
                                    <label className="label_producto">Cantidad</label>
                                    <input className="input_producto" type="number" placeholder="" required />

                                </label >
                            </li>
                        </ul>


                        <div className="option">
                            <div> Estado de producto
                                <select className="select">
                                    <option> Seleccione...</option>
                                    <option> Disponible</option>
                                    <option> No Disponible</option>

                                </select>
                            </div>
                        </div>
                        <div className="center">
                            <button className="boton bt_registro_producto">Registrar producto</button>
                        </div>
                    </div>

                    <hr />


                    <section className="Seccion2">
                        <div className="seccion_tabla">

                            <table className="Tabla_Productos">
                                <caption className="Titulo_Tabla">Listado de Productos</caption>
                                <thead className="clase1">
                                <th className="th">ID Producto</th>
                                <th className="th">Descripcion</th>
                                <th className="th">Stock</th>
                                <th className="th">Estado</th>
                                <th className="th">Valor Unitario</th>
                                <th className="th">%Descuento</th>

                                </thead>
                                <tbody>
                                <tr className="fila">
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                </tr>
                                <tr className="fila">
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                </tr>
                                <tr className="fila">
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                </tr>
                                <tr className="fila">
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                </tr>
                                <tr className="fila">
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                </tr>
                                <tr className="fila">
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                </tr>
                                <tr className="fila">
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                <td className="td">*Campo vacio*</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul className="cambio_pag">
                            <li className="opt_cambio">

                                Siguiente

                            </li>
                            <li className="opt_cambio">1</li>
                            <li className="opt_cambio">2</li>
                            <li className="opt_cambio">3</li>
                            <li className="opt_cambio">4</li>
                            <li className="opt_cambio">5</li>
                            <li className="opt_cambio">...</li>
                        </ul>
                    </section>
                </div>


            </div>
        </div >
    )
}

export default RegistroProductoF
