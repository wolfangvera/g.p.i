import React, { useEffect, useState, useRef, Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';


const Productos = () => {

    const [productos, setProductos] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    //const [mostrarProductosAdicionales, setMostrarProductosAdicionales] = useState(false);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textoBoton, setTextoBoton] = useState("Agregar nueva venta");

    useEffect(() => {
        //obtener lista de ventas desde el back
        axios.get(`http://localhost:3001/api/productos`)
            .then(result => {
                const { products } = result.data;
                setProductos(products)
                console.log("esta es la informacion desde API", products)
            }).catch(console.log)

    }, []);

    /*useEffect(() => {
        //obtener lista de ventas desde el back

        axios.get(`http://localhost:3001/api/productos?idProducto=01`)
            .then(result => {
                
                // setProductos(products)
                console.log( result)
            })


    }, []);*/



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
                <TablaProductos
                    listaProductos={productos}
                    listaProductosFiltrado={productosFiltrados}
                    setEjecutarConsulta={setEjecutarConsulta} />
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


const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {

    useEffect(() => {
        console.log("este es el estado de productos en el componente", listaProductos)

    }, [listaProductos])

    const submitEdit = (e) => {
        e.preventDefault();
        console.log(e)
    }

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

                    <div className="centrar_boton">
                        <button class="boton bt_busquedaP" > Buscar </button>

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
                                <th className="th_listarP"> Editar/ Eliminar</th>
                            </thead>
                            <tbody>
                                {listaProductos.map((productos) => {
                                    return (
                                        <FilaProducto
                                            //key={nanoid()}
                                            productos={productos}
                                        //setEjecutarConsulta={setEjecutarConsulta}
                                        />
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>



    );
};

const FilaProducto = ({ productos, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoProducto, setInfoNuevoProducto] = useState({
        //_id: productos._id,
        descripcion: productos.descripcion,
        estado: productos.estado,
        cantidad: productos.cantidad,
        valorU: productos.valorU,
    });

    const actualizarProducto = async () => {
        console.log(infoNuevoProducto);
        //enviar la info al backend

        const options = {
            method: "PUT",
            url: "http://localhost:3001/api/productos/:productoId",
            headers: { "Content-Type": "application/json" },
            data: { ...infoNuevoProducto, id: productos._id }
        }

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success("Prodcuto modificado con exito")
                setEdit(false)
            })
            .catch(function (error) {
                toast.error("Error modificando Prodcuto")
                console.error(error);
            })
    }



    return (
        <tr>
            {edit ? (
                <>
                    <td> {productos.idProducto} </td>
                    <td>
                        <input type="text"
                            value={infoNuevoProducto.descripcionProducto}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, descripcionProducto: e.target.value })}
                        />
                    </td>
                    <td>
                        <select className="select_producto"
                            value={infoNuevoProducto.estado}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, estado: e.target.value })}
                            name="estadoProducto"
                            id="estadoProducto" required>
                            <option disabled value=""> Seleccione...</option>
                            <option> Disponible</option>
                            <option> No Disponible</option>


                        </select>
                    </td>
                    <td>
                        <input type="text"
                            value={infoNuevoProducto.cantidad}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, cantidad: e.target.value })}
                        />
                    </td>
                    <td>
                        <input type="text"
                            value={infoNuevoProducto.valorU}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, valorU: e.target.value })}
                        />
                    </td>
                </>
            ) : (
                <>

                    <td className="td_listarP">{productos.idProducto}</td>
                    <td className="td_listarP">{productos.descripcionProducto}</td>
                    <td className="td_listarP">{productos.estadoProducto}</td>
                    <td className="td_listarP">{productos.cantidadProducto}</td>
                    <td className="td_listarP">{productos.valorUnitarioProducto}</td>
                </>
            )}
            <td className="td_listarP">
                <div className="flex w-full justify-around">
                    {edit ? (
                        <i
                            onClick={() => actualizarProducto()}
                            className="fas fa-check text-green-700 hover:text-green-500"
                        />


                    ) : (
                        <i
                            onClick={() => setEdit(!edit)}
                            className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                        />
                    )}

                    <i className="fas fa-trash text-red-700 hover:text-yellow-500" />
                </div>
            </td>
        </tr>
    );
};

const FormularioAgregarProducto = ({ setMostrarTabla, listaProductos, setProductos }) => {
    //datos de la tabla de productos
    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();

        //nivelacion-api
        const ProductoSchema = {
            idProducto: e.target.idProducto.value,
            valorUnitarioProducto: e.target.valorUnitarioProducto.value,
            cantidadProducto: e.target.cantidadProducto.value,
            descripcionProducto: e.target.descripcionProducto.value,
            estadoProducto: e.target.estadoProducto.value,

        };

        axios.post(`http://localhost:3001/api/productos/agregar`, ProductoSchema)
            .then(res => {
                const fd = new FormData(form.current);

                const nuevoProducto = {};
                fd.forEach((value, key) => {
                    nuevoProducto[key] = value;
                });
                setMostrarTabla(true);
                toast.success("Producto agregado con exito");
                setProductos([...listaProductos, nuevoProducto])

            });


    };


    return (
        <div className="Contenedor_RegProductos">
            <h2 className="TituloPagina"> Módulo Registro de Producto</h2>
            <div className="Cuadro_ingresoProducto">

                <form ref={form} onSubmit={submitForm} className="ingreso_info">
                    <label className="form_producto" htmlFor="idProducto">ID producto
                        <input className="input_producto" type="number" placeholder="ID" name="idProducto" id="idProducto" required />
                    </label >

                    <label className="form_producto" htmlFor="descripcion">Descripción
                        <input className="input_producto" type="text" name="descripcionProducto" id="descripcionProducto" required />
                    </label >

                    <label className="form_producto" htmlFor="valorUnitarioProducto">
                        Vlr unitario
                        <input className="input_producto" type="number" placeholder="$" name="valorUnitarioProducto" id="valorUnitarioProducto" required />
                    </label >

                    <label className="form_producto" htmlFor="cantidadProducto">
                        Cantidad
                        <input className="input_producto" type="number" placeholder="" name="cantidadProducto" id="cantidadProducto" required />

                    </label >

                    <label className="form_producto" htmlFor="estadoProducto"> Estado de producto
                        <select className="select_producto" defaultValue="" name="estadoProducto" id="estadoProducto" required>
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


export default Productos