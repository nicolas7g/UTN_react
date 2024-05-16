import React, { useState } from 'react'
import '../CSS/contacto.css'
import Ig from '../IMAGES/ig.svg'
import Telefono from '../IMAGES/phone.svg'
import axios from 'axios';

function Contacto() {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (

        <main className="contacto__contenedor">
            <div className="tarjeta__contacto">
                <div className="tarjeta__telefono">
                    <img src={Telefono} alt="phone" />
                    <p>4111-1111</p>
                </div>
                <div className="tarjeta__ig">
                    <img src={Ig} alt="ig" />
                    <p>Alfa Romeo Ig</p>
                </div>

            </div>


            <div className="tarjeta__formulario">
                <h3>Contacto Rápido</h3>
                <form action="" method="" onSubmit={handleSubmit} className='form_contacto'>

                    <label for="nombre">Nombre</label>
                    <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} />


                    <label for="email">Email</label>
                    <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} />

                    <label for="telefono">Teléfono</label>
                    <input type="text" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} />
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" className="form-control" onChange={handleChange} rows="8">{formData.mensaje}</textarea>

                    <p className="acciones"><input className="botonEnviar" type="submit" value="Enviar" /></p>


                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}


                </form>
            </div>

        </main>

    )
}

export default Contacto