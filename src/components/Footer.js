import React from 'react'
import { Link } from 'react-router-dom'
import '../style/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row"> 


            <ul className="info">
                    <li  ><a href="#">Acerca de nosotros</a></li>
                    <li  ><a href="#">Contactanos</a></li>
                    <small>&copy; 2021</small>
                </ul>


                <div className="Redes">
                    <h3>Follow us</h3>
                    <ul className="siguenos">
                        <li  ><Link href="https://www.facebook.com"><i class="fab fa-facebook "></i></Link></li>
                        <li  ><Link to="https://github.com/Santiago9j/ProyectoMinTIC"><i class="fab fa-github "></i></Link></li>
                        <li  ><Link to="https://www.linkedin.com"><i class="fab fa-linkedin"></i></Link></li>

                    </ul> 
                </div>
            </div>

        </footer>
    )
}

export default Footer
