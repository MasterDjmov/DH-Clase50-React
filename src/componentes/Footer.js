import React from "react";
import Logo from '../assets/img/logo-DH.png';
function Footer(){
    return (
        <footer className="pie">
            <nav id="logo">
                <a href="index.html">
                    <img src={Logo} alt="Logo Digital House"/>
                </a>
            </nav>
            <nav id="opciones">
                <ul>
                    <li><a href="www.faceboo.com">facebook</a></li>
                    <li><a href="www.instagram.com">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    );
}
export default Footer;