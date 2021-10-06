import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Info_user.css'
import avatar from '../media/avatar.png'

const Info_user = () => {
    return (
        <div className="Info_user">
            <ul class="ordenar_info_usuario">
                <li>
                    <ul class="Opciones">
                        <li>
                            Usted ha ingresado como:<label>*Nombre usuario*</label>
                        </li>
                        <li>
                            Cargo: <label> *Cargo*</label>
                        </li>
                        <li>Actualizar perfil</li>
                    </ul>
                </li>
                
                    <img src={avatar} class="avatar" alt="avatar" width="50px" />
                
            </ul>

        </div>

    )
}

export default Info_user