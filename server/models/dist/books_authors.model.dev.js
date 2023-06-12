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
var db = require("../db-connector.js"); // To enable/disable foreign key checks


var disableForeignKeyChecks = "SET FOREIGN_KEY_CHECKS=0;";
var enableForeignKeyChecks = "SET FOREIGN_KEY_CHECKS=1;"; // Define the Book_Author class

var Book_Author =
/*#__PURE__*/
function () {
  function Book_Author(book_author) {
    _classCallCheck(this, Book_Author);

    this.book_id = book_author.book_id;
    this.author_id = book_author.author_id;
  } // Retrieve all book_authors


  _createClass(Book_Author, null, [{
    key: "getAll",
    value: function getAll(result) {
      db.query('SELECT Books.book_id, Books.title AS book_title, Authors.author_id, CONCAT(Authors.first_name, " ", Authors.last_name) AS author_name FROM Books_Authors INNER JOIN Books ON Books_Authors.book_id = Books.book_id INNER JOIN Authors ON Books_Authors.author_id = Authors.author_id;', function (err, res) {
        if (err) {
          console.log("Error: ", err);
          result(null, err);
          return;
        }

        console.log("books_authors: ", res);
        result(null, res);
      });
    } // Create query used by create()

  }, {
    key: "createQuery",
    value: function createQuery(newBook_Author, result) {
      db.query("\n        INSERT INTO Books_Authors (book_id, author_id)\n        VALUES ('".concat(newBook_Author.book_id, "', '").concat(newBook_Author.author_id, "');\n        "), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null); // err is the error object, null is the result

          return;
        } else {
          console.log("created book_author: ", {
            res: res
          });
          result(null, {
            res: res
          });
        }

        ;
      });
    } // Create a new book_author

  }, {
    key: "create",
    value: function create(newBook_Author, result) {
      db.query(disableForeignKeyChecks, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          Book_Author.createQuery(newBook_Author, result);
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
    } // Update a book_author by book_id and author_id

  }, {
    key: "updateByID",
    value: function updateByID(book_id, author_id, book_author, result) {
      db.query("UPDATE Books_Authors SET book_id = '".concat(book_author.book_id, "', author_id = '").concat(book_author.author_id, "' WHERE book_id = '").concat(book_id, "' AND author_id = '").concat(author_id, "';"), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        } else {
          if (res.affectedRows == 0) {
            // not found Book_Author with the id
            result({
              kind: "not_found"
            }, null);
            return;
          } else {
            console.log("updated book_author: ", {
              res: res
            }); //result(null, { res });
          }

          ;
        }

        ;
      });
    } // Delete a book_author by book_id and author_id

  }, {
    key: "deleteByID",
    value: function deleteByID(book_id, author_id, result) {
      db.query("DELETE FROM Books_Authors WHERE book_id = '".concat(book_id, "' AND author_id = '").concat(author_id, "';"), function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null); // err is the error object, null is the result

          return;
        } else {
          console.log("deleted book_author: ", {
            res: res
          });
          result(null, {
            res: res
          });
        }

        ;
      });
    }
  }]);

  return Book_Author;
}();

module.exports = Book_Author;