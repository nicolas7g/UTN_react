var express = require('express');
var router = express.Router();
var modelosModel = require('../models/modelosModel');
const cloudinary = require('cloudinary').v2;


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
        imagen =  "";//`<p style="font-size:12px;"><em>[Imagen no disponible.]</em></p>`;
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

module.exports = router;