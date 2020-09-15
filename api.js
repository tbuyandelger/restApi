var Order = require("./order");
const dboperations = require("./dboperations");
const { getOrders } = require("./dboperations");
/*dboperations.getOrders().then((result) => {
  console.log(result);
});*/

dboperations.getOrders();
