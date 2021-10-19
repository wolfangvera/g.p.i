import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ventasBackend = [
    {
        idVenta: "25",
        fecha: "Fecha cmabiada",
        estadoVenta: "En proceso",
        descripcion: "losproductos comprados",
        idCliente:1035,
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
                            type="text" placeholder="Nombre del Cliente"/>
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


const FormularioAgregarVenta = ({ setMostrarTabla, listaVentas,/*listaProductosVenta,*/ funcionParaAgregarProductos, setVentas }) => {
   

    const form =useRef(null);

    const submitForm=(e)=> {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevaVenta = {};
        fd.forEach((value,key)=>{
            nuevaVenta[key]=value;
        });
        setMostrarTabla(true);
        toast.success("Venta agregada con exito");
        setVentas([...listaVentas,nuevaVenta])
    };

    return (
        <div className="contenedor_RegVentas">
            <h2 className="Titulo_RegVentas">Modulo Registro de Ventas</h2>
            <form ref={form} onSubmit={submitForm} className="Cuadro_ingreso">
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
                    <div className="seccion_tabla">
                        <table className="tabla_registro">
                            <caption className="Titulo_tabla">Registro de productos</caption>
                            <thead className="thead">
                                <th className="th_regventa">ID Producto</th>
                                <th className="th_regventa">Cantidad</th>
                                <th className="th_regventa">Precio unitario</th>
                            </thead>
                            <tbody>
                                <td name="id_producto" className="td_regventa"><input name="idProducto" value={idProducto} onChange={(e) => { setIdProducto(e.target.value) }} className="input_info" type="text" /> </td>
                                <td name="cantidad" className="td_regventa"><input name="cantidadProducto" value={cantidadProducto} onChange={(e) => { setCantidadProducto(e.target.value) }} className="input_info" type="text" /> </td>
                                <td name="precio_unitario" className="td_regventa"><input name="valorUnitarioProducto" value={valorUnitarioProducto} onChange={(e) => { setValorUnitProducto(e.target.value) }} className="input_info" type="text" /> </td>
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


                    </div>
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
                        
                        className="boton bt_registro_venta"
                    >
                        Registrar venta
                    </button>
                </div>
            </form>

        </div>

    );
}

/*
const Ventas = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setVentas] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [mostrarProductosAdicionales, setMostrarProductosAdicionales] = useState(false);

    useEffect(() => {
        console.log('Hola soy usefect')
        //pasos

    }, []);

    useEffect(() => {
        console.log("Se ejecuta cuando cambia la variable", ventas)
    }, [ventas]);


    const enviarDatosAlBackend = () => {
        console.log(`Esta es la marca`, ventas)
    }



    return (
        <div className="contenedor_RegVentas">
            <h2 className="Titulo_RegVentas">Modulo Registro de Ventas</h2>
            <div className="Cuadro_ingreso">
                <div className="ingreso_info">
                    <div className="info_venta">
                        <label className="form">
                            <label className="label_regventa">ID VENTA</label>
                            <input onChange={(e) => { setVentas(e.target.value) }} className="input_info" type="number" placeholder="ID" required />
                        </label>
                        <label className="form">
                            <label className="label_regventa">VALOR TOTAL</label>
                            <input onChange={(e) => { console.log(e.target.value) }} className="input_info" type="number" placeholder="$" required />
                        </label>
                    </div>
                    <hr />
                    <div className="seccion_tabla">
                        <table className="tabla_registro">
                            <caption className="Titulo_tabla">Registro de productos</caption>
                            <thead className="thead">
                                <th className="th_regventa">ID Producto</th>
                                <th className="th_regventa">Cantidad</th>
                                <th className="th_regventa">Precio unitario</th>
                            </thead>
                            <tbody>
                                <td className="td_regventa"><input onChange={(e) => { console.log(e.target.value) }} className="input_info" type="text" /> </td>
                                <td className="td_regventa"><input onChange={(e) => { console.log(e.target.value) }} className="input_info" type="text" /> </td>
                                <td className="td_regventa"><input onChange={(e) => { console.log(e.target.value) }} className="input_info" type="text" /> </td>
                            </tbody>
                        </table>
                        <div>
                            <button onClick={() => setMostrarProductosAdicionales(true)} className="boton bt_adicion_producto"> Adicionar producto</button>
                        </div>

                        {mostrarProductosAdicionales &&
                            <div>
                                Hola
                            </div>
                        }
                    </div>
                    <hr />
                    <div className="info_cliente">
                        <table className="tabla_cliente">
                            <caption className="Titulo_tabla">Datos del Cliente</caption>
                            <thead className="thead">

                                <th className="th_regventa">Nombre</th>

                            </thead>
                            <tbody>

                                <td className="td_regventa"><input onChange={(e) => { console.log(e.target.value) }} id="nombreCliente" className="input_info" type="text" /> </td>

                            </tbody>
                        </table>

                    </div>
                    <hr />
                    <div className="info_vendedor">
                        <div> Vendedor
                            <select className="selector_vendedor" defaultValue="" required>

                                <option disabled value="">seleccionar ..</option>
                                <option> Vendedor 1</option>
                                <option> Vendedor 1</option>
                                <option> Vendedor 1</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bt_centrado">
                <button onClick={enviarDatosAlBackend} className="boton bt_registro_venta">Registrar venta</button>
            </div>
        </div>
    )

};

*/

export default Ventas