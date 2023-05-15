"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = require("../db-connector.js");

var _require = require("./books.model.js"),
    deleteByID = _require.deleteByID;

var DiscountCode =
/*#__PURE__*/
function () {
  function DiscountCode(discount_code) {
    _classCallCheck(this, DiscountCode);

    this.discount_code_name = discount_code.discount_code_name;
  }

  _createClass(DiscountCode, null, [{
    key: "create",
    value: function create(newDiscountCode, result) {
      db.query("INSERT INTO Discount_Codes (discount_code_name)\n        VALUES ('".concat(newDiscountCode.discount_code_name, "');"), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null); // err is the error object, null is the result

          return;
        } else {
          console.log("created discount code: ", {
            res: res
          });
          result(null, {
            res: res
          });
        }

        ;
      });
    }
  }, {
    key: "getById",
    value: function getById(discountCodeId, result) {
      db.query("SELECT * FROM Discount_Codes WHERE discount_code_id = ".concat(discountCodeId), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else if (res.length) {
          console.log("found discount code: ", res[0]);
          result(null, res[0]);
          return;
        } else {
          // discount code with the id not found
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
      db.query("SELECT * FROM Discount_Codes", function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          console.log("Discount Codes: ", res);
          result(null, res);
        }

        ;
      });
    }
  }, {
    key: "deleteByID",
    value: function deleteByID(discountCodeID, result) {
      db.query("DELETE FROM Discount_Codes WHERE discount_code_id = ".concat(discountCodeID), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else if (res.affectedRows == 0) {
          // discount code with the id not found
          result({
            kind: "not_found"
          }, null);
        } else {
          console.log("deleted discount code with id: ", discountCodeID);
          result(null, res);
        }

        ;
      });
    }
  }]);

  return DiscountCode;
}();

module.exports = DiscountCode;