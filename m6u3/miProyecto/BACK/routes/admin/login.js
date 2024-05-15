var express = require('express');
var router = express.Router();
//var login = express();
var usuariosModel = require('../../models/usuariosModel');

//login.use(express.static('public'));

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('admin/login', { layout: 'admin/layout' });

});

router.get('/logout', function (req, res, next) {

  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;
    var remember = req.body.remember;


    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);


    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.usuario = data.usuario;
      req.session.nombre = data.nombre;
      req.session.cargo = data.cargo;

      if (remember) {
        req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7; // Establece la duración de la sesión a una semana
      }

      res.redirect('/admin/acciones');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout', error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
}
);


module.exports = router;
