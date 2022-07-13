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

async function deleteNovedadByID(id){
    var query = 'delete from novedades where id= ?';
    var rows = await pool.query(query,[id]);
    return rows;
}

module.exports = { getNovedades, insertNovedades, deleteNovedadByID }


//try - catch: ayuda el manejo de ersrores (si el cod no entiedne algo va a tirar ERROR)
