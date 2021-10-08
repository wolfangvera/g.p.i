import React from 'react'
import '../style/GestionarProductos.css'

const GestionarProducto = () => {
    return (
        <div>
            <h2 className="TituloPaginaP"> Gestionar Productos</h2>
            <div className="busquedaProducto">
                <label className="Buscar_Producto">
                    <button className="boton bt_busquedaP"> Buscar </button>
                    <input className="input_BuscarproductoD"
                        type="number" placeholder="Digite ID de Producto" />
                </label>
                <label className="Buscar_Producto">
                    <button className="boton bt_busquedaP"> Buscar </button>
                    <input className="input_BuscarproductoD"
                        type="string" placeholder="Descripción de Producto" />
                </label>
            </div>
            <section className="listadoProductos">
                <table className="table_listarProductos">
                    <thead className="clase1">
                        <th className="th_listarP">ID</th>
                        <th className="th_listarP">Descripción</th>
                        <th className="th_listarP">Estado</th>
                        <th className="th_listarP">Cantidad Stock</th>
                        <th className="th_listarP">Vr. Unitario</th>
                        <th className="th_listarP">%Desceunto</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                        </tr>
                        <tr>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                        </tr>
                        <tr>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                        </tr>
                        <tr>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                        </tr>
                        <tr>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                            <td className="td_listarP">*Campo vacio*</td>
                        </tr>
                    </tbody>
                </table>
                <ul className="cambio_pag">
                    <li>
                        <a href="/siguiente">

                            Siguiente
                        </a>
                    </li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>...</li>
                </ul>

            </section>
            <section className="Contenedor_Modificar_producto">
                <div className="Cuadro_ModificarP">
                    <li>
                        <label className="form_productoG">
                            <label className="label_producto">ID producto</label>
                            <input className="input_producto" type="number" />
                        </label >
                        <label className="form_productoG">
                            <label className="label_producto">Descripción</label>
                            <input className="input_producto" type="text" />
                        </label >
                        <label className="form_productoG">
                            <label className="label_producto">Vlr unitario</label>
                            <input className="input_producto" type="number" placeholder="$" />

                        </label >
                        <label className="form_productoG">
                            <label className="label_producto">Cantidad</label>
                            <input className="input_producto" type="number" placeholder="" />
                        </label >
                        <label className="form_productoG">
                            <label className="label_producto">%Descuento</label>
                            <input className="input_producto" type="number" placeholder="" />
                        </label >
                    </li>
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
                        <button className="boton bt_modificar_producto">Modificar producto</button>
                    </div>
                </div>
            </section>

        </div>

    )
}
export default GestionarProducto