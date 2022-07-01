var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');



router.get('/', function (req, res, next) {
    res.render('contacto', {
        isContacto: true
    }); // view/contacto.hbs
})

router.post('/', async function(req,res,next){
    /* console.log(req.body) */

//capturando los datos//
var nombre = req.body.nombre; //1
var email = req.body.email; //2
var tel = req.body.tel; //3
var comentarios = req.body.comentarios; //4

var obj  = {
    to:"billedu@gmail.com",
    subject:"CONTACTO DESDE PAG WEB",
    html: nombre + " se contactó a través de la web y quiere saber más info a este correo: " + email + "<br> Su tel es: " + tel + "<br>. Su cometario es: " + comentarios
}

var transport = nodemailer.createTransport ({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
}

}) //finaliza el trasnport

var info = transport.sendMail(obj);

res.render('contacto', {
message: "Mensaje enviado correctamente",
isContacto: true
})

}) // finaliza router.post

module.exports = router;

