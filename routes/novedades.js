var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');



router.get('/', async function (req, res, next) {
    
var novedades = await novedadesModel.getNovedades();


    res.render('novedades', {
        isNovedades: true,
        novedades //tengo todos los registros para poder eimprimirlos en el hbs//
    }); 
})

module.exports = router;