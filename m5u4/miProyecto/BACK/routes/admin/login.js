var express = require('express');
var router = express.Router();
//var login = express();
var usuariosModel = require('../../models/usuarioModel');

//login.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('login')
  res.render('admin/login',{layout: 'admin/layout'});

});

router.get('/logout', function(req, res, next) {

  req.session.destroy();
  res.render('admin/login',{
      layout: 'admin/layout'
  });
});

router.post('/', async(req, res, next)=>{
  try{
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);
    console.log("data: ", data);

    if(data != undefined){
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      res.redirect('/admin/novedades');
    }else{
      res.render('admin/login',{
        layout: 'admin/layout', error: true});
      }
    }catch(error){
      console.log(error);
    }
  }
);


module.exports = router;
