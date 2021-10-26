import React from 'react'
import { Link } from 'react-router-dom'
import '../style/InicioSesion.css'
import { LoginButton } from "../components/Loginbutton"


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
                        <i class="fas fa-user-check pad"></i><input type="text" id="user" placeholder="Usuario..." className="input_inicio" required />
                    </div>
                    <div className="input">
                        <i class="fas fa-unlock pad"></i>
                        <input className="input_inicio" type="password" placeholder="Contraseña..." id="password" required />
                    </div>
                    <input type="submit" value="¡Ingresar ahora!" onclick="Funcion()" className="boton boton_ingreso" />
                    <div>
                        <LoginButton/>
                    </div>
                    <div>
                        <a href="" className="contraseña">¿Has olvidado la contraseña?</a>
                    </div>
                    <Link to="/Registro">

                        <input type="button" value="¡Registrarse!" name="" className="botonDos boton_registro" />
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default InicioSesion