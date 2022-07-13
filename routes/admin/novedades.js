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
// srive para dar de alta las novedasdes
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', { //agregar hbs
        layout: 'admin/layout'

    })


})


// AGREGAR NOVEDAD //

router.post('/agregar', async (req,res,next) =>{
    //console.log(req.body)
    try{
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
            await novedadesModel.insertNovedades(req.body);
            res.redirect('/admin/novedades')
            } else {
                res.render('admin/agregar',{
                    layout:'admin/layout',
                    error: true,
                    message: 'Todos los campos son requeridos'
                })
            }    
    }catch(error){
        console.log(error)
        res.render('admin/agregar',{
            layout: 'admin/layout',
            error: true,
            message: 'No carga la novedad'
        })
        
    }

})


// ELIMINAR NOVEDAD //


router.get('/eliminar/:id', async (req,res,next) => {
    //console.log(req.params.id);
    var id =req.params.id;
    await novedadesModel.deleteNovedadByID(id);
    res.redirect('/admin/novedades')
;})





module.exports = router;