var pool = require('./bd');



async function getModelos(){
    try{
        var query = 'select * from modelos where borrado = 0';
        var rows = await pool.query(query);
        

        return rows;
    }catch(error){
        console.log(error);
    }
}

async function insertModelo(obj){
    try{
        var query = 'insert into modelos set ?';
        var rows = await pool.query(query, [obj]);
        

        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function deleteModelo(id){
    try{
        var query = 'update modelos set borrado = 1 where id = ?';
        var rows = await pool.query(query, [id]);
        

        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}

async function getModeloById(id){
    try{
        var query = 'select * from modelos where id = ?';
        var rows = await pool.query(query, [id]);
        
        console.log(rows[0])
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

async function updateModelo(obj, id){
    try{
        var query = 'update modelos set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        

        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }
}


module.exports = {getModelos, insertModelo, deleteModelo, getModeloById, updateModelo}

