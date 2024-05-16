var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    const botonEnabled = `<button class="btn btn-lg btn-primary btn-block" type="button" onclick="window.location.href='/admin/usuarios/listado'">USUARIOS</button>`;
    const botonDisabled = `<button class="btn btn-lg btn-primary btn-block btn-disabled" type="button" onclick="window.location.href='/admin/usuarios/listado'">USUARIOS</button>`;
    const botonUsuarios = req.session.cargo === 'Admin' ? botonEnabled  : botonDisabled;


    res.render('admin/acciones', { layout: 'admin/layout', botonUsuarios}); 

});




module.exports = router;