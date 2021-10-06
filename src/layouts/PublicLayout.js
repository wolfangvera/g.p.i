import React from 'react'
import Footer from '../components/Footer.js'
import HeaderPublic from '../components/HeaderPublic.js'
import '../style/PublicLayout.css'

const PublicLayout = ({children}) => {
    return (
        <div className="configuracionGeneralPublicLayout">
            <HeaderPublic />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default PublicLayout