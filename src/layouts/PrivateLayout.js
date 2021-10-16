import React from 'react'
import Footer from '../components/Footer.js'
import HeaderPrivate from '../components/HeaderPrivate.js'
import Info_user from '../components/Info_user.js'
import { useAuth0 } from '@auth0/auth0-react'

const PrivateLayout = ({children}) => {
    return (
        <div >
            <HeaderPrivate />
            <Info_user />
            <main >{children}</main>
            <Footer />
        </div>
    )
}

export default PrivateLayout