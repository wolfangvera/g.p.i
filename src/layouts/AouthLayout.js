import React from 'react'
import Footer from '../components/Footer.js'

const AouthLayout = ({children}) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    )
}

export default AouthLayout