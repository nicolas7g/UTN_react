var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    console.log('login')
    res.render('admin/novedades', { layout: 'admin/layout', persona: req.session.nombre });

});

module.exports = router;
