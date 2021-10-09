import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Registro.css'
const Registro = () => {
    return (
        <div className="Container_registro">
            <h1 className="titulo_registro">A un paso de gestionar tus ventas... </h1>
            <div className="contenedor_registro">
                <h1 className="Titulo_registrate">Registrate</h1>
                <hr />
                <form className="formRegistro">
                    <ul>
                        <li>
                            <label>Nombre</label>
                            <input className="input_registro_user" type="text" required />
                        </li>
                        <li>
                            <label>Correo electrónico </label>
                            <input className="input_registro_user" type="email" required />
                        </li>
                        <li>
                            <label>Contraseña</label>
                            <input className="input_registro_user" type="password" required />
                        </li>
                    </ul>
                    <div className="centrar_boton">
                        <ul className="Lista_botones">
                            <li>

                                <button type="submit" className="botonRegistro">¡Registrarse ahora!</button>
                            </li>

                            <li>

                                <button type="reset" className="botonRegistro">Limpiar datos</button>
                            </li>

                            <li>
                                <Link to="/InicioSesion">
                                    <button type="button" className="botonRegistro">¡Ya tengo una cuenta!</button>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </form>


            </div>

        </div >
    )
}

export default Registro