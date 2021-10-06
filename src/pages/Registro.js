import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Registro.css'
const Registro = () => {
    return (
        <main>
            <h1 className="titulo_registro">A un paso de gestionar tus ventas... </h1>
            <div className="contenedor_registro">
                <h1>Registrate</h1>
                <form className="formRegistro">
                    <label>Nombre</label>
                    <input type="text" required />
                    <label>Apellidos</label>
                    <input type="text" required />
                    <label>Fecha de nacimiento </label>
                    <input type="date" required /> 
                    <label>Edad </label>
                    <input type="number" required />
                    <label>Celular </label>
                    <input type="number" required />
                    <label>Correo electrónico </label>
                    <input type="email" required />
                    <label>Nuevo usuario </label>
                    <input type="text" required />
                    <label>Nueva contraseña</label>
                    <input type="password" required />
                    <label>Contraseña (de nuevo) </label>
                    <input type="password" required />
                    <button type="submit" className="botonRegistro">¡Registrarse ahora!</button>
                    <button type="reset" className="botonRegistro">Limpiar datos</button>
                    <Link to="/InicioSesion">
                        <button type="button" className="botonRegistro">¡Ya tengo una cuenta!</button> 
                    </Link>
        </form>

            </div>

        </main>
    )
}

export default Registro