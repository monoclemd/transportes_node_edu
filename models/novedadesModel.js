var pool = require('./bd');    /* llama a la base de datos */

async function getNovedades(){  /* función para traer las novedades - es asincronico porque no sabemos cuando lo va traer (apretar el botón)*/
    var query = 'select * from novedades'; /* EL PEDIDO DE LO Q QUIERO - se pide como se pido en Mysql con los comandos */
    var rows = await pool.query(query);  
    return rows;
} 

async function insertNovedades(obj){
    try{
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query,[obj]);
        return rows;

    } catch(error) {
        console.log(error);
        throw error;
    }
}

/* borra novedad dentro del form*/
async function deleteNovedadByID(id){
    var query = 'delete from novedades where id= ?';
    var rows = await pool.query(query,[id]);
    return rows;
}

/* traer novedad dentro del form*/
async function getNovedadesByID(id){
    var query = 'select * from novedades where id= ?';
    var rows = await pool.query(query,[id]);
    return rows[0];
}

/* traer novedad dentro del form*/

async function modificarNovedadByID(obj,id){
    try{
        var query = 'update novedades set ? where id=?'
        var rows= await pool.query(query,[obj,id]);
        return rows;

    }catch(error){
        console.log(error)
    }
}

async function buscarNovedades(busqueda){
    var query = 'select * from novedades where titulo like ? OR subtitulo like ? OR cuerpo like ?';
    var rows = await pool.query(query,['%' + busqueda + '%', '%' + busqueda + '%','%' + busqueda + '%',]);
    return rows
}


module.exports = { getNovedades, insertNovedades, deleteNovedadByID, getNovedadesByID, modificarNovedadByID, buscarNovedades }


//try - catch: ayuda el manejo de ersrores (si el cod no entiedne algo va a tirar ERROR)
