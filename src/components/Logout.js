import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../style/Loginbutton.css'

export const LogoutButton = () => {
    const {logout} = useAuth0();

    return <button  className="botonLogout" onClick={() => logout({ returnTo: window.location.origin})}> Cerrar sesión</button>
}