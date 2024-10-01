import React from "react";
import Reloj1 from '../assets/img/reloj1.jpg'
import Reloj2 from '../assets/img/reloj2.jpg'
import Reloj3 from '../assets/img/reloj3.jpg'
import Reloj4 from '../assets/img/reloj4.jpg'
function Producto(){
    return (
        <main className="productos">
            <h2 id="productos">Nuestros productos</h2>
            <article>
                <img src={Reloj1} alt="Reloj"/>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio
                impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam
                amet?</p>

                <h2>Precio: $450</h2>
                <button>Ver más</button>
            </article>

            <article>
                <img src={Reloj2} alt="Reloj"/>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio
                impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam
                amet?</p>

                <h2>Precio: $650</h2>
                <button>Ver más</button>
            </article>

            <article>
                <img src={Reloj3} alt="Reloj"/>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio
                impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam
                amet?</p>

                <h2>Precio: $945</h2>
                <button>Ver más</button>
            </article>

            <article>
                <img src={Reloj4} alt="Reloj"/>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio
                impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam
                amet?</p>

                <h2>Precio: $999</h2>
            <button>Ver más</button>
        </article>
        </main>
    );
}

export default Producto;