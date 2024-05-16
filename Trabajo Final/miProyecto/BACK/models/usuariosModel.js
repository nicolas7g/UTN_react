var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password){
    try{
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);

        return rows[0];
    }catch(error){
        console.log(error);
    }
}


async function getUsuarios(){
    try{
        var query = 'select * from usuarios where borrado = 0';
        var rows = await pool.query(query);
        

        return rows;
    }catch(error){
        console.log(error);
    }
}

async function insertUsuario(obj){
    try{
        var query = 'insert into usuarios set ?';
        var rows = await pool.query(query, [obj]);
        

        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteUsuario(id){
    try{
        var query = 'update usuarios set borrado = 1 where id = ?';
        var rows = await pool.query(query, [id]);
        

        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function getUsuarioById(id){
    try{
        var query = 'select * from usuarios where id = ?';
        var rows = await pool.query(query, [id]);
        
        console.log(rows[0])
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

async function updateUsuario(obj, id){
    try{
        var query = 'update usuarios set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        

        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}


module.exports = {getUserByUsernameAndPassword, getUsuarios, insertUsuario, deleteUsuario, getUsuarioById, updateUsuario}

