import React from 'react'
import logo from '../../images/logo.png'
import '../../styles/components/layout/Header.css';



function Header(props) {
  return (
    <header>
        <div className='holder'>
            <img src={logo}  width="100" alt="TransportesX"/>
            <h1>TransportesX</h1>

        </div>
    </header>
  )
}

export default Header;