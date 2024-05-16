var express = require('express');
var router = express.Router();
var modelosModel = require('../../models/modelosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroyer = util.promisify(cloudinary.uploader.destroy);

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
        imagen = `<p style="font-size:12px;"><em>[Imagen no disponible.]</em></p>`;
    }

    if (modelo.img_ver_id) {
        imagen_ver = cloudinary.image(modelo.img_ver_id,
            {
                class: 'img_version'
            }
        );
    } else {
        imagen_ver = `<p style="font-size:12px;"><em>[Imagen no disponible.]</em></p>`;
    }

    return {
        ...modelo,
        imagen,
        imagen_ver
    }


    /*
        if (modelo.img_id) {
            const imagen = cloudinary.image(modelo.img_id,
                {
                    class: 'img_modelo'
                }
            );
            return {
                ...modelo,
                imagen
            }
        } else {
            return {
                ...modelo,
                imagen: `<p style="font-size:12px;"><em>[Imagen no disponible.]</em></p>`
            }
        }
    */
}


router.get('/', async function (req, res, next) {

    var modelos = await modelosModel.getModelos();

    modelos = modelos.map(modelo => {
        return obtenerImagen(modelo);

    })

    res.render('admin/modelos/listado', {
        layout: 'admin/modelos/layout',
        usuario: req.session.nombre,
        modelos

    });


});


router.get('/agregar', async function (req, res, next) {
    res.render('admin/modelos/agregar', {
        layout: 'admin/modelos/layout'

    });

});


router.post('/agregar', async function (req, res, next) {
    try {

        var img_id = '';
        var img_ver_id = ''; //imagen de la version del auto, trebol para el QV

        console.log("nombre", req.body.nombre);


        if (req.files && Object.keys(req.files).length > 0) {

            var imagen = req.files.imagen;
            if (imagen != "")
                img_id = (await uploader(imagen.tempFilePath)).public_id; //sube la imagen a cloudinary y devuelve el id para guardarlo en la bd

            imagen = req.files.imagen_ver;
            if (imagen != "")
                img_ver_id = (await uploader(imagen.tempFilePath)).public_id; //sube la imagen a cloudinary y devuelve el id para guardarlo en la bd


        }

        if (req.body.modelo != "" && req.body.nombre != "" && req.body.cargo != "" && req.files.imagen != "") {
            await modelosModel.insertModelo({
                ...req.body, //spread > modelo, descripcion, version, motor, etc
                img_id,
                img_ver_id
            });

            res.redirect('/admin/modelos/listado')
        } else {
            res.render('admin/modelos/agregar', {
                layout: 'admin/modelos/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }

    } catch (error) {
        console.log(error);
        res.render('admin/modelos/agregar', {
            layout: 'admin/modelos/layout',
            error: true,
            message: 'No se cargo el modelo'
        })

    }



});

router.get('/eliminar/:id', async function (req, res, next) {

    const id = req.params.id;

    var modelo = await modelosModel.getModeloById(id);

    if (modelo.img_id) {
        await (destroyer(modelo.img_id));
    }

    await modelosModel.deleteModelo(id);
    res.redirect('/admin/modelos/listado')


});

router.get('/modificar/:id', async function (req, res, next) {

    const id = req.params.id;
    var modelo = await modelosModel.getModeloById(id);


    modelo = obtenerImagen(modelo);

    res.render('admin/modelos/modificar', {
        layout: 'admin/modelos/layout',
        modelo
    });

});



router.post('/modificar', async function (req, res, next) {

    try {
        const id = req.body.id;
        var img_id = req.body.img_original;
        var img_ver_id = req.body.img_ver_original;


        if (req.body.img_delete === "1"){
            img_id = null;
            await (destroyer(req.body.img_original));
        
        }

        if (req.body.img_ver_delete === "1"){
            img_ver_id = null;
            await (destroyer(req.body.img_ver_original));
        
        }    
        
        if (req.files && Object.keys(req.files).length > 0) {

            var imagen = req.files.imagen;
            console.log("image2",imagen);
            if (imagen != undefined)
                img_id = (await uploader(imagen.tempFilePath)).public_id; //sube la imagen a cloudinary y devuelve el id para guardarlo en la bd

            imagen = req.files.imagen_ver;
            console.log("image1", imagen);
            if (imagen != undefined)
                img_ver_id = (await uploader(imagen.tempFilePath)).public_id; //sube la imagen a cloudinary y devuelve el id para guardarlo en la bd


        }



        const obj = {

            nombre: req.body.nombre,
            desc: req.body.desc,
            version: req.body.version,
            motor: req.body.motor,
            precio: req.body.precio,
            img_id: img_id,
            img_ver_id: img_ver_id


        }

        await modelosModel.updateModelo(obj, id);
        res.redirect('/admin/modelos/listado');

    } catch (error) {
        console.log(error);
        res.render('admin/modelos/modificar', {
            layout: 'admin/modelos/layout',
            error: true,
            message: 'Error: no se pudo actualizar el registro'
        });
    }


});




module.exports = router;