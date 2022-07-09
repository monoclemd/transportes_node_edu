var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function (req, res, next) {
    res.render('admin/login',{
        layout:'admin/layout' // admin/layout.hbs
    }); // view/admin/login.hbs
});

router.post('/', async function(req,res,next){
    try{
        console.log(req.body);
        //capturar los datos
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usuariosModel.getUserAndPassword(usuario,password);
        
       console.log(data)
        if( data != undefined){
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/login',{ //muestrame el login.hbs
                layout:'admin/layout', //con el layout 
                error:true
            })
        }

    }catch(error){
        console.log(error)
    }
});
 

module.exports = router;