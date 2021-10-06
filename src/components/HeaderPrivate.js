import React from 'react'
import { Link } from 'react-router-dom'
import '../style/HeaderPrivate.css'
import logoRegistro from '../media/logobuho.png'

const HeaderPrivate = () => {
    return (
        <header className="headerPrivate">
            <nav>
                <ul className="ulHeaderPrivate">
                    <li>
                        <a href='/'>
                            <img src={logoRegistro} class="logoHeaderPublic"alt="logo"/>
                        </a>
                    </li>
                    
                    <li><Link to="#Mod_RegistroProductos"><button className="botonPrincipal">Registro de Productos</button></Link></li>
                    <li><Link to="#Mod_GestionProductos"><button className="botonPrincipal">Gestión de Productos </button></Link></li>
                    <li><Link to="#Mod_RegistroVentas"><button className="botonPrincipal">Registro de Ventas</button></Link></li>
                    <li><Link to="#Mod_GestionVentas"><button className="botonPrincipal">Gestión de Ventas </button></Link></li>
                    <li><Link to="#Mod_GestionUsuarios"><button className="botonPrincipal">Gestión de Usuarios </button></Link></li>

                </ul>
            </nav>
            
        </header>
        
    )
}

export default HeaderPrivate


