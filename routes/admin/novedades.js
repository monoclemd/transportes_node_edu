var express = require('express');
const { request } = require('../../app');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/novedades',{
        layout:'admin/layout', // admin/layout.hbs
        persona:req.session.nombre //flavia
    }); // view/admin/novedades.hbs
});

module.exports = router;