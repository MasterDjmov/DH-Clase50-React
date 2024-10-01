import React from 'react';
import Logo from '../assets/img/logo-DH.png';
function Encabezado(){
  return (
    <header className='encabezado'>
        <nav id='logo'>
            <a href='index.html'>
                <img src={Logo} alt='Logo Ditital House' />
            </a>
        </nav>
        <nav id='opciones'>
            <ul>
                <li><a href='index.html'>Inicio</a></li>
                <li><a href='index.html'>Nosotros</a></li>
                <li><a href='#productos'>Productos</a></li>
                <li><a href='#contacto'>Contacto</a></li>
            </ul>
        </nav>
    </header>
  )

}
export default Encabezado;