import React from 'react'
import '../style/Index.css';
import imagen1Index from '../media/inicioQuienesSomos.jpg'
import imagen1IndexSegunda from '../media/gestin_-de_ventas_1-1024x660.jpg'

const Index = () => {
    return (
        <main>
            <div>
                <section id="Inico" className="sectionPart">
                    <div className="contenedor headIndex">
                        <h1>Genius - Software - World</h1>
                        <p>Gestiona tus ventas de manera fácil...</p>
                    </div>
                </section>
                <section id="quienesSomos" className="contenedor">
                    <h2 className="subtitulo">¿Quiénes Somos?</h2>
                    <div className="contenedor-servicio">
                        <div className="contenedor-parrafos">
                            <div className="service">
                                <h3 className="n-service"><span className="Span">1</span>Una empresa</h3>
                                <p>Somos una empresa que trabaja todos  los días con la mayor actitud y aptitud para traer a nuestros usuarios las mejores herramientas que les permita gestionar de manera correcta sus negocios.</p>
                            </div>
                            <div className="service">
                                <h3 className="n-service"><span className="Span">2</span>Una familia</h3>
                                <p>En nuestros equipo de trabajo todos somos una familia. Trabajar con respeto, amabalidad, tranqulidad y con mucha felicidad, nos permite estar más unidos y lograr los mejores resultados.</p>
                            </div>
                            <div className="service">
                                <h3 className="n-service"><span className="Span">3</span>Un aliado</h3>
                                <p>Somos aliados de todas las personas que quieran obterner una herrámienta que les permita gestionar sus productos y ventas de la mejor manera posible.</p>
                            </div>
                        </div>
                        <img src={imagen1Index} alt="Imagen de empresa" />
                    </div>
                </section>
                <section id="queHacemos" className="contenedor">
                    <h2 className="subtitulo">¿Qué hacemos?</h2>
                    <div className="contenedor-servicio">
                        <img src={imagen1IndexSegunda} alt="Imagen de empresa" />
                        <div className="contenedor-parrafos">
                            <div className="service">
                                <h3 className="n-service"><span className="Span">1</span>Seguimiento de ventas</h3>
                                <p>Realizamos el seguimiento de las ventas de un producto y/o servicio en una empresa.</p>
                            </div>
                            <div className="service">
                                <h3 className="n-service"><span className="Span">2</span>Actualizamiento de ventas</h3>
                                <p>Con nuestro Software puedes editar, actualizar y/o eliminar los productos que se han almacenado. </p>
                            </div>
                            <div className="service">
                                <h3 className="n-service"><span className="Span">3</span>Administrar los productos y ventas</h3>
                                <p>Puedes crear nuevos productos y ventas, que serán almacenados en una base de datos en donde también podrás  realizar las modificaciones que consideres pertinente.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>





        </main>
    )
}

export default Index