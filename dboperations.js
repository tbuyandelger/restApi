var config = require("./dbconfig");
const sql = require("mssql");

function getOrders() {
  var conn = new sql.ConnectionPool(config);
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

module.exports = { getOrders: getOrders };
