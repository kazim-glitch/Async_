const oracledb = require('oracledb') ;

const mypw = 'tpstps';

oracledb.getConnection({

    user:"iris",
    password:mypw,
    connectionString:'192.168.7.228:1521/QM13'
})
.then(function(connection){
return connection.execute(
    'SELECT INSTITUTIONID,NAME,LOCATION FROM TBLBRANCH WHERE BRANCH_ID =:id',[1396])
.then(function(result){
    console.log(result.rows);
    return connection.close();
})
.catch(function(err){
    console.error(err);
    return connection.close();
});
})
.catch(function(err){
    console.error(err);
});