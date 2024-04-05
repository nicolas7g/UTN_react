var express = require('express');
var router = express.Router();
var login = express();
console.log('login')

login.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('login')
  res.render('admin/login',{layout: 'admin/layout'});

});

module.exports = router;
