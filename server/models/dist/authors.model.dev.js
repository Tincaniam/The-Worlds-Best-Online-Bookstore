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
var db = require('../db-connector');

var Author =
/*#__PURE__*/
function () {
  function Author(author) {
    _classCallCheck(this, Author);

    this.first_name = author.first_name;
    this.last_name = author.last_name;
  }

  _createClass(Author, null, [{
    key: "create",
    value: function create(newAuthor, result) {
      db.query("INSERT INTO Authors (first_name, last_name)\n        VALUES ('".concat(newAuthor.first_name, "', '").concat(newAuthor.last_name, "');"), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null); // err is the error object, null is the result

          return;
        } else {
          console.log("created author: ", {
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
    key: "getByID",
    value: function getByID(authorID, result) {
      db.query("SELECT * FROM Authors WHERE author_id = ".concat(authorID), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else if (res.length) {
          console.log("found author: ", res[0]);
          result(null, res[0]);
          return;
        } else {
          // author with the author_id not found
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
      db.query("SELECT * FROM Authors", function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          console.log("Authors: ", res);
          result(null, res);
        }

        ;
      });
    }
  }, {
    key: "updateByID",
    value: function updateByID(authorID, author, result) {
      //db.query("UPDATE Authors SET first_name = ?, last_name = ? WHERE author_id = ?", [author.first_name, author.last_name, id], (err, res) => {
      db.query("UPDATE Authors SET first_name = '".concat(author.first_name, "', last_name = '").concat(author.last_name, "' WHERE author_id = ").concat(authorID, ";"), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else if (res.affectedRows == 0) {
          // author with the id not found
          result({
            kind: "not_found"
          }, null);
          return;
        } else {
          console.log("updated author: ", res);
          result(null, {
            res: res
          });
        }

        ;
      });
    }
  }, {
    key: "deleteByID",
    value: function deleteByID(authorID, result) {
      db.query("DELETE FROM Authors WHERE author_id = ".concat(authorID), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else if (res.affectedRows == 0) {
          // book with the id not found
          result({
            kind: "not_found"
          }, null);
          return;
        } else {
          console.log("deleted Author with author_id: ", authorID);
          result(null, res);
        }

        ;
      });
    }
  }]);

  return Author;
}();

module.exports = Author;