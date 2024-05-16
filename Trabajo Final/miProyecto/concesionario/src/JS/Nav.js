import React from 'react';
import { NavLink } from "react-router-dom"
import Logo from "../IMAGES/logo-alfa-white.png"
import '../CSS/nav.css'

function Nav() {
    return (
        <nav>
            <div className="nav__left">

                <NavLink to="/modelos" className='menu'>MODELOS</NavLink>
                <NavLink to="/compra" className='menu'>COMPRA</NavLink>
                <NavLink to="/propietarios" className='menu'>PROPIETARIOS</NavLink>
                <NavLink to="/mundo" className='menu'>MUNDO ALFA ROMEO</NavLink>
                <NavLink to="/" className='menu menu__logo'><img className="logo" src={Logo}
                    alt="logo AR" /></NavLink>

            </div>
            <div className="nav__right">
                <NavLink to="/contacto" className='menu'>CONTACTO</NavLink>
            </div>
            
        </nav>
    );
}

export default Nav;