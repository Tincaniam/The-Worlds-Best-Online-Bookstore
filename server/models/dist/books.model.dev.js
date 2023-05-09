"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      db.query("INSERT INTO Books SET ?", newBook, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null); // err is the error object, null is the result

          return;
        } else {
          console.log("created book: ", _objectSpread({
            id: res.insertId
          }, newBook));
          result(null, _objectSpread({
            id: res.insertId
          }, newBook));
        }

        ;
      });
    }
  }, {
    key: "findById",
    value: function findById(bookId, result) {
      db.query("SELECT * FROM Books WHERE book_id = ".concat(bookId), function (err, res) {
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
    key: "update",
    value: function update(id, book, result) {
      db.query("UPDATE Books SET title = ?, publication_date = ? WHERE book_id = ?", [book.title, book.publication_date, id], function (err, res) {
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
          console.log("updated book: ", _objectSpread({
            id: id
          }, book));
          result(null, _objectSpread({
            id: id
          }, book));
        }

        ;
      });
    }
  }, {
    key: "delete",
    value: function _delete(id, result) {
      db.query("DELETE FROM Books WHERE book_id = ?", id, function (err, res) {
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
          console.log("deleted Book with book_id: ", id);
          result(null, res);
        }

        ;
      });
    }
  }]);

  return Book;
}();

module.exports = Book;