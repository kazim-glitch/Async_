const oracledb = require('oracledb');

const mypw = 'tpstps'  // set mypw to the hr schema password

oracledb.getConnection(
  {
    user          : "iris",
    password      : mypw ,
    connectString : "192.168.7.228:1521/QM13"
  },
  function(err, connection) {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      'SELECT BRANCH_ID,NAME,CITY  FROM TBLBRANCH WHERE BRANCH_ID = :id',
      [1396],  // bind value for :id
      function(err, result) {
        if(err){
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.rows);
        doRelease(connection);
      });
  });

function doRelease(connection) {
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}