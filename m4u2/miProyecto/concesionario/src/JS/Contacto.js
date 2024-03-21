import React from 'react'
import '../CSS/contacto.css'
import Ig from '../IMAGES/ig.svg'
import Telefono from '../IMAGES/phone.svg'

function Contacto() {
    return (
        <div class="background__gradient">
            <main class="contacto__contenedor">
                <div class="tarjeta__contacto">
                    <div class="tarjeta__telefono">
                        <img src={Telefono} alt="phone" />
                        <p>4111-1111</p>
                    </div>
                    <div class="tarjeta__ig">
                        <img src={Ig} alt="ig" />
                        <p>Alfa Romeo Ig</p>
                    </div>

                </div>
            </main>
        </div >
    )
}

export default Contacto