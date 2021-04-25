var sql = require("mssql/msnodesqlv8");

// config for your database
var config = {
    server: ".\\SQLEXPRESS2017",
    database: 'mi_datamart',
    parseJSON: true,
    connectionTimeout: 15000,
    options: {
        trustedConnection: true
    }
};

var executeQuery = async function (query) {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config);
        const result = await sql.query(query);
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    executeQuery
}