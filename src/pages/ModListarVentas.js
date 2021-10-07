import React from 'react'
import './style/ListarVentas.css'

const ModListarVentas = () => {
    return (
        <div>
            <h2 class="titulo_pagina_listarventas">
                Módulo Administración de Ventas</h2>

            <div class="cuadro_info">
                <div class="busqueda">


                    <label class="label_listarventas">
                        <button class="boton bt_busqueda"> Buscar </button>
                        <input class="input_listarventas"
                            type="number" placeholder="Digite el # de orden" />
                    </label>
                    <label class="label_listarventas"
                        for="fecha desde:">
                        Fecha desde:
                        <input class="input_listarventas"
                            type="datetime-local" />
                    </label>
                    <label class="label_listarventas"
                        for="fecha desde:">
                        hasta:
                        <input class="input_listarventas"
                            type="datetime-local" />
                    </label>
                </div>
                <hr />
                <section class="listado">
                    <table class="table_listarventas">
                        <thead class="clase1">
                            <th>#Orden</th>
                            <th>Fecha</th>
                            <th>Responsable</th>
                            <th>Estado</th>
                            <th>Descripción</th>
                            <th>Precio Total</th>
                            <th>Editar/ Guardar</th>

                        </thead>
                        <tbody>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas">
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas">
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas">
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas">
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas" >
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas">
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas" >
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas">
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas">
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>
                            <tr>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <select class="select_listarventas">
                                        <option selected disabled="">Selecciona una opción</option>
                                        <option>En proceso</option>
                                        <option>Cancelada</option>
                                        <option>Entregada</option>
                                    </select>
                                </td>
                                <td>*Campo vacio*</td>
                                <td>*Campo vacio*</td>
                                <td>
                                    <input class="input_listarventas"
                                        type="button" value="Editar" />
                                </td>
                            </tr>

                        </tbody>


                    </table>
                    <ul class="cambio_pag">
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
