"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = require("../db-connector.js");

var Order =
/*#__PURE__*/
function () {
  function Order(order) {
    _classCallCheck(this, Order);

    this.customer_id = order.customer_id;
    this.order_date = order.order_date;
    this.order_total = order.order_total;
    this.discount_code_id = order.discount_code_id;
  }

  _createClass(Order, null, [{
    key: "create",
    value: function create(newOrder, result) {
      db.query("INSERT INTO Orders (customer_id, order_date, order_total, discount_code_id)\n        VALUES ('".concat(newOrder.customer_id, "', '").concat(newOrder.order_date, "', '").concat(newOrder.order_total, "', '").concat(newOrder.discount_code_id, "');"), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null); // err is the error object, null is the result

          return;
        } else {
          console.log("created order: ", _objectSpread({
            id: res.insertId
          }, newOrder));
          result(null, _objectSpread({
            id: res.insertId
          }, newOrder));
        }

        ;
      });
    }
  }, {
    key: "getById",
    value: function getById(orderID, result) {
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
    }
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
    }
  }, {
    key: "updateById",
    value: function updateById(orderID, order, result) {
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
          console.log("updated order: ", _objectSpread({
            id: orderID
          }, order));
          result(null, _objectSpread({
            id: orderID
          }, order));
        }

        ;
      });
    }
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