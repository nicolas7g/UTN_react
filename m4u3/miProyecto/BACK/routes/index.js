var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index')
  res.redirect('./admin/login');

});

module.exports = router;
