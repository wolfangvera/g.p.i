import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ventasBackend = [
    {
        idVenta: "25",
        fecha: "Fecha cmabiada",
        estadoVenta: "En proceso",
        descripcion: "losproductos comprados",
        idCliente: 1035,
        nombreCliente: "juan comprador",
        nombreVendedor: "juan vendedor",
        valorTotal: 25000
    }

]


const Ventas = () => {

    const [ventas, setVentas] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    const [productosVenta, setProductosVenta] = useState([]);

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Agregar nueva venta");

    useEffect(() => {
        //obtener lista de ventas desde el back
        setVentas(ventasBackend);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton("Agregar nueva venta")
        } else {
            setTextoBoton("Mostrar ventas")
        }
    });



    return (
        <div className="contenedor_listarventas">
            <button className="boton bt_adicion_producto" onClick={() => setMostrarTabla(!mostrarTabla)}> {textoBoton}</button>
            {mostrarTabla ? (
                <TablaVentas listaVentas={ventas} />
            ) : (
                <FormularioAgregarVenta
                    setMostrarTabla={setMostrarTabla}
                    listaVentas={ventas}
                    setProductosVenta={setProductosVenta}
                    setVentas={setVentas}/*listaVendedores={vendedores}*/ />
            )}
            <ToastContainer
                position="bottom-center"
                autoClose={3500}
            />
        </div>
    );
};


const TablaVentas = ({ listaVentas }) => {

    useEffect(() => {
        console.log("este es el estado de ventas en el componente", listaVentas)

    }, [listaVentas])

    return (
        <div className="contenedor_listarventas">
            <h2 className="titulo_pagina_listarventas">Módulo Administración de Ventas</h2>

            <div className="cuadro_info">
                <div className="busqueda">
                    <button className="boton bt_busqueda"> Buscar </button>
                    <label className="label_listarventas" >

                        <input className="input_listarventas"
                            type="number" placeholder="Digite el # de orden" />
                    </label>
                    <label className="label_listarventas"
                        for="idCliente">
                        Id cliente
                        <input className="input_listarventas"
                            type="text" placeholder="Identificación cliente" />
                    </label>
                    <label className="label_listarventas"
                        for="fecha desde:">
                        Cliente
                        <input className="input_listarventas"
                            type="text" placeholder="Nombre del Cliente" />
                    </label>
                </div>
                <hr />
                <section className="listado">
                    <table className="table_listarventas">
                        <thead className="clase1">
                            <th className="th_listar"  >#Orden</th>
                            <th className="th_listar" >Fecha</th>

                            <th className="th_listar" >idCliente</th>

                            <th className="th_listar" >Cliente</th>
                            <th className="th_listar"> Vendedor</th>
                            <th className="th_listar"> Estado </th>
                            <th className="th_listar"> Descripción</th>
                            <th className="th_listar"> Precio Total</th>
                            <th className="th_listar"> Editar/ Guardar</th>
                        </thead>
                        <tbody>
                            {listaVentas.map((ventas) => {
                                return (
                                    <tr>
                                        <td className="td_listar"> {ventas.idVenta}</td>
                                        <td className="td_listar">{ventas.fecha}</td>
                                        <td className="td_listar">{ventas.idCliente}</td>
                                        <td className="td_listar">{ventas.nombreCliente}</td>
                                        <td className="td_listar">{ventas.nombreVendedor}</td>
                                        <td className="td_listar"> {ventas.estadoVenta}</td>
                                        <td className="td_listar">{ventas.descripcion}</td>
                                        <td className="td_listar">{ventas.valorTotal}</td>
                                        <td className="td_listar">
                                            <input className="input_edit" type="button" value="Editar" />
                                        </td>
                                    </tr>

                                );
                            })}


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


    );
};


const FormularioAgregarVenta = ({ setMostrarTabla, listaVentas, descripcion, listaProductosVenta, setDescripcion, setProductosVenta, setVentas }) => {


    const [idVenta, setIdVenta] = useState("");
    const [valorTotal, setValorTotal] = useState("");
    const [idCliente, setIdCliente] = useState("");
    const [nombreCliente, setNombreCliente] = useState("");
    const [nombreVendedor, setNombreVendedor] = useState("");


    const formProductos = useRef(null);

    const enviarDatosBackend = () => {
        console.log('idVenta', idVenta, 'valorTotal', valorTotal, 'idCliente', idCliente);
        if (idVenta === '' || valorTotal === '' || idCliente === '' || nombreCliente === '' || nombreVendedor === '') {
            toast.error('Ingrese todas las informaciones');
        } else {
            const nuevaVenta = {};
            nuevaVenta[idVenta] = idVenta;
            toast.success("Venta agregada con exito");
            setMostrarTabla(true);
            setVentas([...listaVentas, nuevaVenta]);
        }


        const submitProductos = (e) => {
            e.preventDefault();
            const fpd = new FormData(formProductos.current);

            const nuevoProducto = {};
            nuevoProducto[descripcion] = listaProductosVenta;
            fpd.forEach((value, key) => {
                nuevoProducto[key] = value;
            });

            toast.success("producto añadido")
            setProductosVenta([...listaProductosVenta, nuevoProducto])
            setDescripcion(descripcion)
            console.log("los productos añaddidos son", nuevoProducto)
            console.log("la decripcion es,", descripcion)
        }


        return (
            <div className="contenedor_RegVentas">
                <h2 className="Titulo_RegVentas">Modulo Registro de Ventas</h2>
                <div className="Cuadro_ingreso">
                    <div className="ingreso_info">
                        <div className="info_venta">
                            <label className="form">
                                <label className="label_regventa" htmlFor="idVenta">ID VENTA</label>
                                <input className="input_info" type="number" placeholder="ID" name="idVenta" value={idVenta} onChange={(e) => { setIdVenta(e.target.value) }} required />
                            </label>
                            <label className="form">
                                <label className="label_regventa" htmlFor="valorTotal">VALOR TOTAL</label>
                                <input className="input_info" type="number" placeholder="$" name="valorTotal" value={valorTotal} onChange={(e) => { setValorTotal(e.target.value) }} required />
                            </label>
                        </div>
                        <hr />
                        <form ref={formProductos} onSubmit={submitProductos} className="seccion_tabla">
                            <table className="tabla_registro">
                                <caption className="Titulo_tabla">Registro de productos</caption>
                                <thead className="thead">
                                    <th className="th_regventa">ID Producto</th>
                                    <th className="th_regventa">Cantidad</th>
                                    <th className="th_regventa">Precio unitario</th>
                                </thead>
                                <tbody>
                                    <td name="id_producto" className="td_regventa">
                                        <label htmlFor="idProducto">
                                            <input name="idProducto" className="input_info" type="text" required />
                                        </label>
                                    </td>
                                    <td name="cantidad" className="td_regventa">
                                        <label htmlFor="cantidadProducto">

                                            <input name="cantidadProducto" className="input_info" type="text" required />
                                        </label>
                                    </td>
                                    <td name="precio_unitario" className="td_regventa">
                                        <label htmlFor="valorUnitarioProducto">
                                            <input name="valorUnitarioProducto" className="input_info" type="text" required />
                                        </label>
                                    </td>
                                </tbody>
                            </table>
                            <div>
                                <button
                                    className="boton bt_adicion_producto"
                                    type="submit"
                                /*onClick={() => { enviarProductosVenta() }}*/
                                >
                                    Adicionar producto
                                </button>
                            </div>
                            <table className="tableProductos">
                                <thead className="clase1">
                                    <th className="th_listar"  >IdProducto</th>
                                    <th className="th_listar" >Cantidad</th>
                                    <th className="th_listar" >Valor unitario</th>

                                </thead>
                                <tbody>
                                    {listaProductosVenta.map((productosVenta) => {
                                        return (
                                            <tr>
                                                <td className="td_listar"> {productosVenta.idProducto}</td>
                                                <td className="td_listar">{productosVenta.cantidadProducto}</td>
                                                <td className="td_listar">{productosVenta.valorUnitarioProducto}</td>
                                            </tr>

                                        );
                                    })}
                                </tbody>
                            </table>


                        </form>
                        <hr />
                        <div className="info_cliente">
                            <caption className="Titulo_tabla">Datos del Cliente</caption>


                            <label className="td_regventa"> Id Cliente
                                <input name="idCliente" value={idCliente} onChange={(e) => { setIdCliente(e.target.value) }} className="input_info" type="text" required />
                            </label>
                            <label className="td_regventa"> Nombre Cliente
                                <input name="nombreCliente" value={nombreCliente} onChange={(e) => { setNombreCliente(e.target.value) }} className="input_info" type="text" required />
                            </label>


                        </div>
                        <hr />
                        <div className="info_vendedor">
                            <label htmlFor="nombreVendedor"> Vendedor
                                <select className="selector_vendedor" defaultValue="" name="nombreVendedor" value={nombreVendedor} onChange={(e) => { setNombreVendedor(e.target.value) }} required>

                                    <option disabled value="">seleccionar ..</option>
                                    <option> Vendedor 1</option>
                                    <option> Vendedor 1</option>
                                    <option> Vendedor 1</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="bt_centrado">
                        <button
                            type="submit"
                            onClick={enviarDatosBackend}
                            className="boton bt_registro_venta"
                        >
                            Registrar venta
                        </button>
                    </div>
                </div>

            </div>

        );
    }
}



export default Ventas