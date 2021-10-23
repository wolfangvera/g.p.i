import React, { useEffect, useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { nanoid } from 'nanoid';
import '../style/ModuloUsuario.css'
import registro from '../../api-rest/models/registro';


const Usuario = () => {

    const [usuario, setUsuario] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    
    

    const obtenerUsuarios = async () => {
        const options = { method: 'GET', url: 'http://localhost:3001/api/product' };
        await axios
            .request(options)
            .then(function (response) {
                setUsuario(response.data.products);
            })
            .catch(function (error) {
                console.error(error);
            });
        setEjecutarConsulta(false);    
    };

    useEffect(() => {
        console.log('consulta', ejecutarConsulta);

        if (ejecutarConsulta) {
            obtenerUsuarios();
        }
    }, [ejecutarConsulta])

    return (
        <TablaUsuarios
            listaUsuarios = {usuario}
            setEjecutarConsulta = {setEjecutarConsulta}           
        />
        
        )

}


const TablaUsuarios =({listaUsuarios, setEjecutarConsulta}) => {
    useEffect(() => {
        console.log("este es el estado de usuarios en el componente", listaUsuarios)

    }, [listaUsuarios])


    return (
        <div>
                  
                <h2 className="h2MU">Módulo Gestión de Usuarios</h2>
                <div className="contenedorMU">
                     <table className="tableMU" border="1" align="center">
                        <thead className="trMU">
                            <th className="thMU">Identificador</th>
                            <th className="thMU">Nombre</th>
                            <th className="thMU">Estado</th>
                            <th className="thMU">Rol</th>
                            <th className="thMU"> Editar/ Eliminar</th>
                        </thead>

                        <tbody>                            
                        {listaUsuarios.map((usuarios) => {
                                return (
                                    <FilaUsuario
                                        key={nanoid()}
                                        usuarios={usuarios}
                                        setEjecutarConsulta={setEjecutarConsulta}
                                        listaUsuarios ={listaUsuarios}

                                    />
                                )
                            })
                        }   
                       
                        </tbody>                                            
                    </table>
                </div>
            
            
        </div>
    )
}


const FilaUsuario = ({ usuario, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
        nombre: usuario.nombre,
        usuario: usuario.usuario,
        estado: usuario.estado,
        rolUsuario: usuario.rol,
    });

    const actualizarUsuario = async () => {
        console.log(infoNuevoUsuario)

        const options = {
            method: 'PUT',
            url: `http://localhost:3001/api/product/${usuario._id}`,
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevoUsuario, productId: usuario._id}
        }

        await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setEdit(false);
            setEjecutarConsulta(true);
            //toast.success("usuario modificado con exito");

        }).catch(function (error) {
            console.error(error);
            //toast.error("Error modificando el usuario")            
        });
    }
    


    const eliminarUsuario = async () => {
        console.log(infoNuevoUsuario)

        const options = {
            method: 'PUT',
            url: `http://localhost:3001/api/product/${usuario._id}`,
            headers: { 'Content-Type': 'application/json' },
            data: { ...infoNuevoUsuario, productId: usuario._id}
        }

        await axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setEdit(false);
            setEjecutarConsulta(true);
            //toast.success("usuario eliminado");

        }).catch(function (error) {
            console.error(error);
            //toast.error("No se pudo eliminar el usuario")            
        });

    }
    
    
    return(
        <tr>
            {edit ? (
                <>
                    <td className="tdMU"> {usuario.identificador}</td>
                    <td className="tdMU"> {usuario.nombre} </td>
                    <td className="tdMU">
                        <select className="selectMU"
                            value ={infoNuevoUsuario.estado}
                            onChange={ (e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value})}
                            >
                            <option disabled value="">Selecciona una opción</option>
                            <option>Pendiente</option>
                            <option>Autorizado</option>
                            <option>No autorizado</option>        
                        </select>
                    </td>
                    <td className="tdMU">
                        <select className="selectMU"
                            value ={infoNuevoUsuario.rolUsuario}
                            onChange={ (e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value})}
                            > 
                            <option disabled value="">Selecciona una opción</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>        
                        </select>
                    </td>       
                </>
            ):(
                <>
                <td className="tdMU">{usuario.identificador}</td>
                <td className="tdMU">{usuario.nombre} </td>
                <td className="tdMU">{usuario.rol} </td>
                <td className="tdMU"> {usuario.estado} </td>                               
                </>
            )}

            <td className="tdMU">
                <div className="flex w-full justify-around">
                    {edit ? (
                        <i
                            onClick={() => actualizarUsuario()}
                            className="fas fa-check text-green-700 hover:text-green-500"
                        />


                    ) : (
                        <i
                            onClick={() => setEdit(!edit)}
                            className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                        />
                    )}

                    <i
                        onClick={() => eliminarUsuario()}
                        className="fas fa-trash text-red-700 hover:text-yellow-500" />
                </div>
            </td>
        </tr>
        
        )
    
} 
   

export default Usuario
