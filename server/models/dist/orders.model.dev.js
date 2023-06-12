"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Citations:
    Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/
// Import the database connection
var db = require("../db-connector.js"); // Used to disable and enable foreign key checks


var disableForeignKeyChecks = "SET FOREIGN_KEY_CHECKS=0;";
var enableForeignKeyChecks = "SET FOREIGN_KEY_CHECKS=1;"; // Define the Order class

var Order =
/*#__PURE__*/
function () {
  function Order(order) {
    _classCallCheck(this, Order);

    this.customer_id = order.customer_id;
    this.order_date = order.order_date;
    this.order_total = order.order_total;
    this.discount_code_id = order.discount_code_id;
  } // Create query used by create()


  _createClass(Order, null, [{
    key: "createQuery",
    value: function createQuery(newOrder, result) {
      db.query("\n        INSERT INTO Orders (customer_id, order_date, order_total, discount_code_id)\n        VALUES ('".concat(newOrder.customer_id, "', '").concat(newOrder.order_date, "', '").concat(newOrder.order_total, "', '").concat(newOrder.discount_code_id, "');\n        "), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null); // err is the error object, null is the result

          return;
        } else {
          console.log("created order: ", {
            res: res
          });
          result(null, {
            res: res
          });
        }

        ;
      });
    } // Create a new order

  }, {
    key: "create",
    value: function create(newOrder, result) {
      db.query(disableForeignKeyChecks, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          Order.createQuery(newOrder, result);
          db.query(enableForeignKeyChecks, function (err, res) {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            } else {
              console.log("Foreign Key Checks Enabled");
            }

            ;
          });
        }

        ;
      });
    } // Get an order by order_id

  }, {
    key: "getByID",
    value: function getByID(orderID, result) {
      db.query("SELECT * FROM Orders WHERE order_id = ".concat(orderID), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else if (res.length) {
          console.log("found order: ", res[0]);
          result(null, res[0]);
          return;
        } else {
          // order with the order_id not found
          result({
            kind: "not_found"
          }, null);
        }

        ;
      });
    } // Get all orders

  }, {
    key: "getAll",
    value: function getAll(result) {
      db.query('SELECT Orders.order_id, Orders.customer_id, CONCAT(Customers.first_name, " ", Customers.last_name) AS customer_name, Orders.order_date, Orders.order_total, Orders.discount_code_id, Discount_Codes.discount_code_name FROM Orders INNER JOIN Customers ON Orders.customer_id = Customers.customer_id LEFT OUTER JOIN Discount_Codes ON Orders.discount_code_id = Discount_Codes.discount_code_id ORDER BY Orders.order_id ASC;', function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          console.log("Orders: ", res);
          result(null, res);
        }

        ;
      });
    } // Update query used by updateByID()

  }, {
    key: "updateQuery",
    value: function updateQuery(orderID, order, result) {
      db.query("UPDATE Orders SET customer_id = '".concat(order.customer_id, "', order_date = '").concat(order.order_date, "', order_total = '").concat(order.order_total, "', discount_code_id = '").concat(order.discount_code_id, "' WHERE order_id = ").concat(orderID), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        } else if (res.affectedRows == 0) {
          // order with the order_id not found
          result({
            kind: "not_found"
          }, null);
        } else {
          console.log("updated order: ", {
            res: res
          });
          result(null, {
            res: res
          });
        }

        ;
      });
    } // Update an order by order_id

  }, {
    key: "updateByID",
    value: function updateByID(orderID, order, result) {
      db.query(disableForeignKeyChecks, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          Order.updateQuery(orderID, order, result);
          db.query(enableForeignKeyChecks, function (err, res) {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            } else {
              console.log("Foreign Key Checks Enabled");
            }

            ;
          });
        }

        ;
      });
    } // Delete an order by order_id

  }, {
    key: "deleteByID",
    value: function deleteByID(orderID, result) {
      db.query("DELETE FROM Orders WHERE order_id = ".concat(orderID), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        } else if (res.affectedRows == 0) {
          // order with the order_id not found
          result({
            kind: "not_found"
          }, null);
        } else {
          console.log("deleted order with order_id: ", orderID);
          result(null, res);
        }

        ;
      });
    }
  }]);

  return Order;
}();

module.exports = Order;