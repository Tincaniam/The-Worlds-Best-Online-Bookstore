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

var Book =
/*#__PURE__*/
function () {
  function Book(book) {
    _classCallCheck(this, Book);

    this.title = book.title;
    this.publication_date = book.publication_date;
  }

  _createClass(Book, null, [{
    key: "create",
    value: function create(newBook, result) {
      db.query("INSERT INTO Books (title, publication_date)\n        VALUES ('".concat(newBook.title, "', '").concat(newBook.publication_date, "');"), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null); // err is the error object, null is the result

          return;
        } else {
          console.log("created book: ", {
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
    value: function getByID(bookID, result) {
      db.query("SELECT * FROM Books WHERE book_id = ".concat(bookID), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else if (res.length) {
          console.log("found book: ", res[0]);
          result(null, res[0]);
          return;
        } else {
          // book with the id not found
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
      db.query("SELECT * FROM Books", function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          console.log("Books: ", res);
          result(null, res);
        }

        ;
      });
    }
  }, {
    key: "updateByID",
    value: function updateByID(bookID, book, result) {
      db.query("UPDATE Books SET title = '".concat(book.title, "', publication_date = '").concat(book.publication_date, "' WHERE book_id = ").concat(bookID), function (err, res) {
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
          console.log("updated book: ", {
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
    key: "deleteByID",
    value: function deleteByID(bookID, result) {
      db.query("DELETE FROM Books WHERE book_id = ".concat(bookID), function (err, res) {
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
          console.log("deleted Book with book_id: ", bookID);
          result(null, res);
        }

        ;
      });
    }
  }]);

  return Book;
}();

module.exports = Book;