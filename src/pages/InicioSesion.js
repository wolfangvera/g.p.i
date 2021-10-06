import React from 'react'
import { Link } from 'react-router-dom'
import '../style/InicioSesion.css'

const InicioSesion = () => {
    return (
        <main className="mainInicioSesion">
            <section className="section1NombreEmpresa sectionInicioSesion">
                <div>
                    <h1>Genius <br />
                    the world of software
                    </h1>
                    <p className ="description">A un paso de gestionar tus ventas.<br />
                    Con nosotros tendrás una plataforma fácil de usar y con toda la información para conocer los estados de tus ventas.
                    </p>
                </div>
            </section>
            <section className="section2 sectionInicioSesion">
                <div className="section2ParteDos">
                    <h2>Iniciar sesión</h2>
                    <div className="input">
                        <i class="fas fa-users estilo"></i>
                        <h4>¡Bienvenido!</h4>
                        <i class="fas fa-user-check pad"></i><input type="text" id="user" placeholder="Usuario..." className="eliminar" required />
                    </div>
                    <div className="input">
                        <i class="fas fa-unlock pad"></i>
                        <input type="password" placeholder="Contraseña..." id="password" required />
                    </div>
                    <input type="submit" value="¡Ingresar ahora!" onclick="Funcion()" className="boton" />
                    <div>
                        <a href="" className="contraseña">¿Has olvidado la contraseña?</a>
                    </div>
                    <Link to="/Registro">

                        <input type="button" value="¡Registrarse!" name="" className="botonDos" />
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default InicioSesion