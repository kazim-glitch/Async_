const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT ; 

const mypw = 'tpstps' ; 

async function run() {

    let connection ; 

    try{
        connection = await oracledb.getConnection({
            user: "iris",
            password : mypw,
            connectionString : "192.168.7.228:1521/QM13"


        });
        const result = await connection.execute(
            'SELECT BRANCH_ID,NAME,CITY  FROM TBLBRANCH WHERE BRANCH_ID=1296'
        );
        console.log(result.rows);
    }
    catch(err){
        console.error(err);
    } finally{
        if (connection){
            try{
                await connection.close();
            }
            catch(err){
                console.error(err);
            }

        }
    }
}


run();