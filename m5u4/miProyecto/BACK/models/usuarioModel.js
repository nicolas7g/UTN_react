var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password){
    try{
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        console.log("query: ",query)
        console.log("rows0: ",rows[0])
        return rows[0];
    }catch(error){
        console.log(error);
    }
}

module.exports = {getUserByUsernameAndPassword}