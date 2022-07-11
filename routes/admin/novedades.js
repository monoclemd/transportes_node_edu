var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');



// diseño y listado de novedades//




router.get('/', async function (req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
        layout: 'admin/layout', // admin/layout.hbs
        persona: req.session.nombre,
        novedades


    }); // view/admin/novedades.hbs
});

// => o function (funciones de flecha)
// srive para dar de alta las novedas
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', { //agregar hbs
        layout: 'admin/layout'

    })


})

module.exports = router;