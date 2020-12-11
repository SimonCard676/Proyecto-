const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
    host: "b6haxr3mrthm2oirovgx-mysql.services.clever-cloud.com",
    user: "ulf43lrbm2njjjuv",
    password: "TVa7mKFnffTxAsuLSAfI",
    database: "b6haxr3mrthm2oirovgx",
    multipleStatements:true
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Base de datos conectada!");
    }
});

module.exports = mysqlConnection;