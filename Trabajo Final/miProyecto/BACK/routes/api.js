var express = require('express');
var router = express.Router();
var modelosModel = require('../models/modelosModel');
const cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

const obtenerImagen = (modelo) => {

    let imagen = {};
    let imagen_ver = {};

    if (modelo.img_id) {
        imagen = cloudinary.image(modelo.img_id,
            {
                class: 'img_modelo'
            }
        );
    } else {
        imagen = "";//`<p style="font-size:12px;"><em>[Imagen no disponible.]</em></p>`;
    }

    if (modelo.img_ver_id) {
        imagen_ver = cloudinary.image(modelo.img_ver_id,
            {
                class: 'img_version'
            }
        );
    } else {
        imagen_ver = "";// `<p style="font-size:12px;"><em>[Imagen no disponible.]</em></p>`;
    }

    return {
        ...modelo,
        imagen,
        imagen_ver
    }

}
router.get('/modelos', async function (req, res, next) {

    var modelos = await modelosModel.getModelos();

    modelos = modelos.map(modelo => {
        return obtenerImagen(modelo);

    })

    res.json(modelos);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'nicolas7g@hotmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a traves de la web y requiere más información a este correo: ${req.body.email} <br> 
        Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es; ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });

});



module.exports = router;