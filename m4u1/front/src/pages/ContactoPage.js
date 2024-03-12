import React from 'react'

function ContactoPage(props) {
  return (
    <main className='holder contacto'>
        <div>
                    <h2>Contacto Rápido</h2>
                    <form action="" method="" class="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name=""/>
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name=""/>
                        </p>
                        <p>
                            <label for="telefono">Telefono</label>
                            <input type="text" name=""/>
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name=""></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar"/>
                        </p>
                    </form>
                </div>
                <div class="datos">
                    <h2>Otras vias de comunicación</h2>
                    <p>TAmbién puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Telefono: 123456455 </li>
                        <li>Email: contacto@transportesx.com.ar </li>
                        <li>Fb: </li>
                        <li>X: </li>
                        <li>Ig: </li>
                    </ul>
                </div>
        </main>
  )
}

export default ContactoPage