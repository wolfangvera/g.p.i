
import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Info_user.css'
import { useAuth0 } from '@auth0/auth0-react'
import { LogoutButton } from './Logout'


const Info_user = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
        
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (

        <div className="Info_user">
            <ul class="ordenar_info_usuario">
                <li>
                    <ul class="Opciones">
                        <li>
                            Usted ha ingresado como: {user.name}
                        </li>
                        <li>
                            Email: {user.email}
                        </li>
                        <li><LogoutButton/></li>
                    </ul>
                </li>
                
                    <img src={user.picture} class="avatar" alt="avatar"  />
                
            </ul>

        </div>
        )
    )
}

export default Info_user