import React from 'react'

import '../style/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row"> 


            <ul className="info_footer">
                    <li  ><a className="Enlaces" href="#">Acerca de nosotros</a></li>
                    <li  ><a className="Enlaces" href="#">Contactanos</a></li>
                    <small>&copy; 2021</small>
                </ul>


                <div className="Redes">
                    <h3 className="Titulo_footer">Follow us</h3>
                    <ul className="siguenos">
                        <li  ><a className="Enlaces" href="https://www.facebook.com"><i class="fab fa-facebook "></i></a></li>
                        <li  ><a className="Enlaces" to="https://github.com/Santiago9j/ProyectoMinTIC"><i class="fab fa-github "></i></a></li>
                        <li  ><a className="Enlaces" to="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a></li>

                    </ul> 
                </div>
            </div>

        </footer>
    )
}

export default Footer
