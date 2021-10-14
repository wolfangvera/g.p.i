import React from 'react'
import '../style/ListarVentas.css'

const ModListarVentas = () => {
    return (
        <div className="contenedor_listarventas">
            <h2 className="titulo_pagina_listarventas">Módulo Administración de Ventas</h2>

            <div className="cuadro_info">
                <div className="busqueda">
                <button className="boton bt_busqueda"> Buscar </button>
                    <label className="label_listarventas">
                        
                        <input className="input_listarventas"
                            type="number" placeholder="Digite el # de orden" />
                    </label>
                    <label className="label_listarventas"
                        for="fecha desde:">
                        Fecha desde:
                        <input className="input_listarventas"
                            type="datetime-local" />
                    </label>
                    <label className="label_listarventas"
                        for="fecha desde:">
                        hasta:
                        <input className="input_listarventas"
                            type="datetime-local" />
                    </label>
                </div>
                <hr />
                <section className="listado">
                    <table className="table_listarventas">
                        <thead className="clase1">
                            <th className="th_listar"  >#Orden</th>
                            <th className="th_listar" >Fecha</th>
                            <th className="th_listar"> Responsable</th>
                            <th className="th_listar"> Estado </th>
                            <th className="th_listar"> Descripción</th>
                            <th className="th_listar"> Precio Total</th>
                            <th className="th_listar"> Editar/ Guardar</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td_listar"> *Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required>
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit" type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required>
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required>
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit" type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required>
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required >
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required>
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required >
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required>
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required>
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <select className="select_listarventas" defaultValue="" required>
                                        <option disabled value="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">*Campo vacio*</td>
                                <td className="td_listar">
                                    <input className="input_edit"
                                        type="button" value="Editar" />
                                </td>
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
            </div>

        </div>
    )
}

export default ModListarVentas
