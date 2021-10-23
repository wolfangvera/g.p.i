import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

const ventasBackend =  [
    {
        idVenta: "25",
        fecha: "Fecha cmabiada",
        estadoVenta: "En proceso",
        descripcion: "producto 1: 5unidades       producto2 : 3unidades",
        idCliente: 103654556,
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
        axios.get(`http://localhost:3001/api/venta`)
        .then(result=>{
            const {ventas} =result.data;
            setVentas(ventas)
            console.log("esta es la informacion desde API" , ventas)
        }).catch(console.log)

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
                    listaProductosVenta={productosVenta}
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
    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);
  
    useEffect(() => {
      setVentasFiltradas(
        listaVentas.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );
    }, [busqueda, listaVentas]);

    useEffect(() => {
        console.log("este es el estado de ventas en el componente", listaVentas)

    }, [listaVentas])

    return (
        <div className="contenedor_listarventas">
            <h2 className="titulo_pagina_listarventas">Módulo Administración de Ventas</h2>

            <div className="cuadro_info">
                <div className="busqueda">
                    
                    <label className="label_listarventas"> Filtrar

                        <input value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="input_listarventas"
                            type="text" placeholder="Buscar" />
                    </label>
                    
                    
                </div>
                <hr />
                <section className="listado">
                    <table className="table_listarventas">
                        <thead className="clase1">
                            <th className="th_listar"  >#Orden</th>
                            <th className="th_listar" >Fecha</th>
                            <th className="th_listar"> Vendedor</th>
                            <th className="th_listar" >idCliente</th>
                            <th className="th_listar"> Nombre Cliente</th>
                            <th className="th_listar"> Estado </th>
                            <th className="th_listar"> Descripción</th>
                            <th className="th_listar"> Valor Total</th>
                            <th className="th_listar"> Editar/ Guardar</th>
                        </thead>
                        <tbody>
                            {
                            ventasFiltradas.map((ventas) => {
                                return (
                                    <tr>
                                        <td className="td_listar"> {ventas.idVenta}</td>
                                        <td className="td_listar">{ventas.fecha}</td>
                                        <td className="td_listar">{ventas.nombreVendedor}</td>
                                        <td className="td_listar"> {ventas.idCliente}</td>
                                        <td className="td_listar">{ventas.nombreCliente}</td>
                                        <td className="td_listar"> {ventas.estadoVenta}</td>
                                        <td className="td_listar">{ventas.descripcionVenta}</td>
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



const FormularioAgregarVenta = ({ setMostrarTabla, listaVentas, listaProductosVenta, setProductosVenta, setVentas }) => {
    //datos de la tabla de venta
    const [idVenta, setIdVenta] = useState('');
    const [fecha, setFecha] = useState('');
    const [nombreVendedor, setNombreVendedor] = useState('');
    const [estadoVenta, setEstadoVenta] = useState('');
    const [valorTotal, setValorTotal] = useState('');
    const [valorTotalVenta, setValorTotalVenta] = useState('');

    const [idCliente, setIdCliente] = useState('');
    const [nombreCliente, setNombreCliente] = useState('');
    const [descripcionVenta, setDescripcionVenta] = useState('');

    //productos
    const [idProducto, setIdProducto] = useState();
    const [cantidadProducto, setCantidadProducto] = useState();
    const [valorUnitarioProducto, setValorUnitProducto] = useState();

    const formProductos = useRef(null);



    const submitProductos = (e) => {
        e.preventDefault();
        const fpd = new FormData(formProductos.current);

        const nuevoProducto = {};
        fpd.forEach((value, key) => {
            nuevoProducto[key] = value;

        });

        toast.success("Producto añadido")
        setProductosVenta([...listaProductosVenta, nuevoProducto])

        //setDescripcion
        let listadotoString = JSON.stringify(listaProductosVenta);
        setDescripcionVenta(listadotoString)

    }

    const enviarVentasBackend = (e) => {

        console.log("id", idVenta, " vendedor", nombreVendedor, " nombre cliente", nombreCliente)
        if (idVenta === '' || idCliente === '' || /*descripcion === '' ||*/ nombreCliente === '' || nombreVendedor === '' || valorTotal === '') {
            toast.error('Ingrese todos los campos');
        } else {

            /*toast.success('Venta Registrada con Exito');
            setMostrarTabla(true);
            setVentas([...listaVentas, { idVenta: idVenta, nombreVendedor: nombreVendedor, idCliente:idCliente , nombreCliente:nombreCliente,valorTotal: valorTotal }])
        */
            const VentaSchema = {
                idVenta: idVenta,
                nombreVendedor: nombreVendedor,
                descripcionVenta: descripcionVenta,
                valorTotal: valorTotal,
                idCliente: idCliente,
                nombreCliente: nombreCliente
            };

            axios.post(`http://localhost:3001/api/venta/agregar`, VentaSchema)
                .then(res => {
                    toast.success('Venta Registrada con Exito');
                    setMostrarTabla(true);
                    setVentas([...listaVentas, { idVenta: idVenta, nombreVendedor: nombreVendedor, idCliente: idCliente, nombreCliente: nombreCliente, valorTotal: valorTotal }])

                });







        };
    };


    return (
        <div className="contenedor_RegVentas">
            <h2 className="Titulo_RegVentas">Modulo Registro de Ventas</h2>
            <div className="Cuadro_ingreso">
                <div className="ingreso_info">
                    <div className="info_venta">
                        <label className="form">
                            <label className="label_regventa">ID VENTA</label>
                            <input className="input_info" type="number" placeholder="ID" name="idVenta" value={idVenta} onChange={(e) => { setIdVenta(e.target.value) }} required />
                        </label>
                        <label className="form">
                            <label className="label_regventa">VALOR TOTAL</label>
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

                            >
                                Adicionar producto
                            </button>
                        </div>
                    </form>
                    <div className="nuevosProductos">
                        <table className="tableProductos">
                            <thead className="clase1">
                                <th className="th_listar"  >IdProducto</th>
                                <th className="th_listar" >Cantidad</th>
                                <th className="th_listar" >Valor unitario</th>
                                <th className="th_listar" >Valor total</th>
                            </thead>
                            <tbody>
                                {listaProductosVenta.map((productosVenta) => {
                                    return (
                                        <tr>
                                            <td className="td_listar"> {productosVenta.idProducto}</td>
                                            <td className="td_listar">{productosVenta.cantidadProducto}</td>
                                            <td className="td_listar">{productosVenta.valorUnitarioProducto}</td>
                                            <td className="td_listar">{productosVenta.cantidadProducto * productosVenta.valorUnitarioProducto}</td>

                                        </tr>

                                    );
                                })}
                            </tbody>
                        </table>
                    </div>



                    <hr />
                    <div className="info_cliente">
                        <table className="tabla_cliente">
                            <caption className="Titulo_tabla">Datos del Cliente</caption>
                            <thead className="thead">
                                <th className="th_regventa">Id Cliente</th>
                                <th className="th_regventa">Nombre</th>

                            </thead>
                            <tbody>
                                <td className="td_regventa"><input name="idCliente" value={idCliente} onChange={(e) => { setIdCliente(e.target.value) }} className="input_info" type="text" required /> </td>

                                <td className="td_regventa"><input name="nombreCliente" value={nombreCliente} onChange={(e) => { setNombreCliente(e.target.value) }} className="input_info" type="text" required /> </td>

                            </tbody>
                        </table>

                    </div>
                    <hr />
                    <div className="info_vendedor">
                        <div> Vendedor
                            <select className="selector_vendedor" defaultValue="" name="vendedor" value={nombreVendedor} onChange={(e) => { setNombreVendedor(e.target.value) }} required>

                                <option disabled value="">seleccionar ..</option>
                                <option> Vendedor 1</option>
                                <option> Vendedor 1</option>
                                <option> Vendedor 1</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="bt_centrado">
                    <button
                        type="submit"
                        onClick={() => { enviarVentasBackend() }}
                        className="boton bt_registro_venta"
                    >
                        Registrar venta
                    </button>
                </div>
            </div>

        </div >

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



