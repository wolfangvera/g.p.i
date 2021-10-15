import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../style/Loginbutton.css' 

export const LoginButton =() => {
    const { loginWithRedirect } = useAuth0();

    return <button className="botonAuth0" onClick={() => loginWithRedirect()}>Ingrese con google</button>
}

