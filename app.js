var sql = require("mssql");

var dbConfig = {
  server: "TBD\\SVR2014",
  database: "amazon",
  user: "sa",
  password: "123456",
  port: 1433,
  options: { encrypt: false },
};
function getOrder() {
  var conn = new sql.ConnectionPool(dbConfig);
  conn.connect(function (err) {
    if (err) throw err;
    var req = new sql.Request(conn);
    req.query("select * from Orders", function (err, recordset) {
      if (err) throw err;
      else console.log(recordset);

      conn.close();
    });
  });
}

getOrder();
