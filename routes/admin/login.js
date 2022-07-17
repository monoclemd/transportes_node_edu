var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function (req, res, next) {
    res.render('admin/login',{
        layout:'admin/layout' // admin/layout.hbs
    }); // view/admin/login.hbs
});  //cierro get //

router.get('/logout', function(req,res,next){
    req.session.destroy(); //destruye id, nombre.... todo//
    res.render('admin/login',{
        layout:'admin/layout'
    })
})




router.post('/', async function(req,res,next){
    try{
        console.log(req.body);
        //capturar los datos
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await usuariosModel.getUserAndPassword(usuario,password);
        // vvar data = select * from usuarios where usuario = 'flavia' and password =md5(1234)
        //columna id, usuario y password

       console.log(data)
        if( data != undefined){
            req.session.id_usuario = data.id; // guarda 1
            req.session.nombre = data.usuario; // flavia

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