import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const productosBackend = [
    {

        idProducto: "01",
        descripcion: "producto1",
        estadoProducto: "disponible",
        cantidadProducto: 1400,
        valorUnitarioProducto: 1200
    }


]


const Productos = () => {

    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    //const [mostrarProductosAdicionales, setMostrarProductosAdicionales] = useState(false);

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Agregar nueva venta");

    useEffect(() => {
        //obtener lista de ventas desde el back
        setProductos(productosBackend);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton("Agregar nuevo productos")
        } else {
            setTextoBoton("Mostrar productos")
        }
    });

    return (
        <div className="contenedor_gestionP">
            <button className="boton bt_adicion_producto" onClick={() => setMostrarTabla(!mostrarTabla)}> {textoBoton}</button>
            {mostrarTabla ? (
                <TablaProductos listaProductos={productos} />
            ) : (
                <FormularioAgregarProducto
                    setMostrarTabla={setMostrarTabla}
                    listaProductos={productos}
                    setProductos={setProductos}
                />
            )}
            <ToastContainer
                position="bottom-center"
                autoClose={3500}
            />
        </div>
    );
};


const TablaProductos = ({ listaProductos }) => {

    useEffect(() => {
        console.log("este es el estado de productos en el componente", listaProductos)

    }, [listaProductos])

    return (
        <div className="contenedor_gestionP">
            <h2 className="TituloPaginaP">Módulo Gestión de Productos</h2>
            <div class="informacion">
                <div className="Seccion1">

                    <h3 className="subtitulo_busqueda">Busqueda de productos</h3>
                    <div className="busquedaProducto">
                        <label className="form_productoG">
                            <label for="Busquedaproductos"> ID </label>
                            <input className="input_BuscarproductoD" type="text" name="Busquedaproductos" id="idProducto" />
                        </label>

                        <label className="form_productoG">

                            <label for="Busquedaproductos">
                                Descripcion
                            </label>

                            <input className="input_BuscarproductoD" type="text" name="Busquedaproductos" id="" />

                        </label>

                    </div>
                    <div className="centrar_boton" >


                        <button class="boton bt_busquedaP "> Buscar </button>

                    </div>

                </div>

                <hr />
                <div className="Seccion2">

                    <h3 className="subtitulo_busqueda">Lista de productos</h3>

                    <div class="Contenedor_Modificar_producto">
                        <table className="table_listarProductos">
                            <thead className="clase1">
                                <th className="th_listarP">ID</th>
                                <th className="th_listarP">Descripción</th>
                                <th className="th_listarP">Estado</th>
                                <th className="th_listarP">Cantidad Stock</th>
                                <th className="th_listarP">Vr. Unitario</th>
                                <th className="th_listarP">Editar/ Guardar</th>
                            </thead>
                            <tbody>
                                {listaProductos.map((productos) => {
                                    return (
                                        <tr>
                                            <td className="td_listarP">{productos.idProducto}</td>
                                            <td className="td_listarP">{productos.descripcion}</td>
                                            <td className="td_listarP">{productos.estadoProducto}</td>
                                            <td className="td_listarP">{productos.cantidadProducto}</td>
                                            <td className="td_listarP">{productos.valorUnitarioProducto}</td>
                                            <td className="td_listarP">
                                                <button type="button" className="input_editar" >Editar</button>
                                            </td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>



    );
};


const FormularioAgregarProducto = ({
    setMostrarTabla, listaProductos,
    setProductos
}) => {

    
    //datos de la tabla de productos
    const form =useRef(null);
 



    const submitForm=(e)=> {
        e.preventDefault();
        const fd = new FormData(form.current);
        
        const nuevoProducto ={};
        fd.forEach((value, key)=>{
            nuevoProducto[key]=value;
        });
        setMostrarTabla(true);
        toast.success("Producto agregado con exito" );
        setProductos([...listaProductos,nuevoProducto])
       
    };


    return (
        <div className="Contenedor_RegProductos">
            <h2 className="TituloPagina"> Módulo Registro de Producto</h2>
            <div className="Cuadro_ingresoProducto">

                <form ref={form} onSubmit={submitForm} className="ingreso_info">
                    <label className="form_producto" htmlFor="idProducto">ID producto
                        <input className="input_producto" type="number" placeholder="ID" name="idProducto"  required />
                    </label >

                    <label className="form_producto" htmlFor="descripcion">Descripción
                        <input className="input_producto" type="text" name="descripcion" required />
                    </label >

                    <label className="form_producto" htmlFor="valorUnitarioProducto">
                        Vlr unitario
                        <input className="input_producto" type="number" placeholder="$" name="valorUnitarioProducto"  required />
                    </label >

                    <label className="form_producto" htmlFor="cantidadProducto">
                        Cantidad
                        <input className="input_producto" type="number" placeholder="" name="cantidadProducto"required />

                    </label >

                    <label className="form_producto" htmlFor="estadoProducto"> Estado de producto
                        <select className="select_producto" defaultValue="" name="estadoProducto"  required>
                            <option disabled value=""> Seleccione...</option>
                            <option> Disponible</option>
                            <option> No Disponible</option>

                        </select>
                    </label>

                    <button
                        type='submit'
                        className="boton bt_registro_producto bt_centrado"
                        //onClick={() => { enviarProductosBackend() }}
                    >
                        Registrar producto
                    </button>

                </form>


            </div>


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

export default Productos