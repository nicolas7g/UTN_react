var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel')


router.get('/', async function (req, res, next) {

    var usuarios = await usuariosModel.getUsuarios();

    res.render('admin/usuarios/listado', {
        layout: 'admin/usuarios/layout',
        usuario: req.session.nombre,
        usuarios

    });


});


router.get('/agregar', async function (req, res, next) {
    res.render('admin/usuarios/agregar', {
        layout: 'admin/usuarios/layout'

    });

});


router.post('/agregar', async function (req, res, next) {
    try {
        if (req.body.usuario != "" && req.body.nombre != "" && req.body.cargo != "") {
            await usuariosModel.insertUsuario(req.body);
            res.redirect('/admin/usuarios/listado')
        } else {
            res.render('admin/usuarios/agregar', {
                layout: 'admin/usuarios/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }

    } catch (error) {
        
        res.render('admin/usuarios/agregar', {
            layout: 'admin/usuarios/layout',
            error: true,
            message: 'No se cargo el usuario'
        })

    }



});

router.get('/eliminar/:id', async function (req, res, next) {

    const id = req.params.id;
    await usuariosModel.deleteUsuario(id);
    res.redirect('/admin/usuarios/listado')


});

router.get('/modificar/:id', async function (req, res, next) {

    const id = req.params.id;
    const usuario = await usuariosModel.getUsuarioById(id);



    res.render('admin/usuarios/modificar', {
        layout: 'admin/usuarios/layout',
        usuario
    });

});

router.post('/modificar', async function (req, res, next) {

    try {
        const id = req.body.id;

        const obj = {

            nombre: req.body.nombre,
            cargo: req.body.cargo,

        }

        await usuariosModel.updateUsuario(obj, id);
        res.redirect('/admin/usuarios/listado');

    } catch (error) {
        res.render('admin/usuarios/modificar', {
            layout: 'admin/usuarios/layout',
            error: true,
            message: 'Error: no se pudo actualizar el registro'
        });
    }


});




module.exports = router;
