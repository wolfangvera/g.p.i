import React from 'react'
import Footer from '../components/Footer.js'
import HeaderPrivate from '../components/HeaderPrivate.js'

const PrivateLayout = ({children}) => {
    return (
        <div>
            <HeaderPrivate />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default PrivateLayout