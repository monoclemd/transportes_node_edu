var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');




// diseño y listado de novedades//



router.get('/', async function (req, res, next) {

    //var novedades = await novedadesModel.getNovedades();



    var novedades
    if (req.query.q === undefined) {
        novedades = await novedadesModel.getNovedades();
    } else {
        novedades = await novedadesModel.buscarNovedades(req.query.q);
    }



    res.render('admin/novedades', {
        layout: 'admin/layout', // admin/layout.hbs
        persona: req.session.nombre,
        novedades,
        q: req.query.q,
        is_search: req.query.q !==undefined

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

router.post('/agregar', async (req, res, next) => {
    //console.log(req.body)
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedades(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No carga la novedad'
        })

    }

})


// ELIMINAR NOVEDAD //


router.get('/eliminar/:id', async (req, res, next) => {
    //console.log(req.params.id);
    var id = req.params.id;
    await novedadesModel.deleteNovedadByID(id);
    res.redirect('/admin/novedades')
        ;
})

/*vista modificar form + los datos de campos para modificar */

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadesByID(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad


    })

})


/*actualizacion de  los datos de campos para modificar */


router.post('/modificar', async (req, res, next) => {
    try {

        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
        }

        console.log(obj)

        await novedadesModel.modificarNovedadByID(obj, req.body.id);
        res.redirect('/admin/novedades')

    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'no se modificó la novedad'
        })
    }
})


module.exports = router;