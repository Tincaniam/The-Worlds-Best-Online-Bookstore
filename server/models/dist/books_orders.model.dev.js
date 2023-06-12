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
var enableForeignKeyChecks = "SET FOREIGN_KEY_CHECKS=1;"; // Define the Book_Order class

var Book_Order =
/*#__PURE__*/
function () {
  function Book_Order(book_order) {
    _classCallCheck(this, Book_Order);

    this.book_id = book_order.book_id;
    this.order_id = book_order.order_id;
  } // Retrieve all book_orders


  _createClass(Book_Order, null, [{
    key: "getAll",
    value: function getAll(result) {
      db.query('SELECT Books.book_id, Books.title AS book_title, Orders.order_id, Orders.order_date, Orders.order_total FROM Books_Orders INNER JOIN Books ON Books_Orders.book_id = Books.book_id INNER JOIN Orders ON Books_Orders.order_id = Orders.order_id;', function (err, res) {
        if (err) {
          console.log("Error: ", err);
          result(null, err);
          return;
        }

        console.log("books_orders: ", res);
        result(null, res);
      });
    } // Create query used by create()

  }, {
    key: "createQuery",
    value: function createQuery(newBook_Order, result) {
      db.query("INSERT INTO Books_Orders (book_id, order_id) VALUES ('".concat(newBook_Order.book_id, "', '").concat(newBook_Order.order_id, "');"), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null); // err is the error object, null is the result

          return;
        } else {
          console.log("created book_order: ", {
            res: res
          });
          result(null, {
            res: res
          });
        }

        ;
      });
    } // Create a new book_order

  }, {
    key: "create",
    value: function create(newBook_Order, result) {
      db.query(disableForeignKeyChecks, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          Book_Order.createQuery(newBook_Order, result);
          db.query(enableForeignKeyChecks, function (err, res) {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            } else {
              console.log("Foreign key checks enabled.");
            }
          });
        }
      });
    }
  }]);

  return Book_Order;
}();

module.exports = Book_Order;