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
                        <li  ><a href="#"><i class="fab fa-facebook "></i></a></li>
                        <li  ><a href="#"><i class="fab fa-github "></i></a></li>
                        <li  ><a href="#"><i class="fab fa-linkedin"></i></a></li>

                    </ul> 
                </div>
            </div>

        </footer>
    )
}

export default Footer
