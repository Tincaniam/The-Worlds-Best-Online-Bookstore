/*
Citations:
    Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/

// Import the database connection
const db = require("../db-connector.js");

// To enable/disable foreign key checks
const disableForeignKeyChecks = "SET FOREIGN_KEY_CHECKS=0;";
const enableForeignKeyChecks = "SET FOREIGN_KEY_CHECKS=1;";

// Define the Book_Author class
class Book_Author {
    constructor(book_author) {
        this.book_id = book_author.book_id;
        this.author_id = book_author.author_id;
    }

    // Retrieve all book_authors
    static getAll(result) {
        db.query('SELECT Books.book_id, Books.title AS book_title, Authors.author_id, CONCAT(Authors.first_name, " ", Authors.last_name) AS author_name FROM Books_Authors INNER JOIN Books ON Books_Authors.book_id = Books.book_id INNER JOIN Authors ON Books_Authors.author_id = Authors.author_id;', (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(null, err);
                return;
            }
            console.log("books_authors: ", res);
            result(null, res);
        });
    }

    // Create query used by create()
    static createQuery(newBook_Author, result) {
        db.query(`
        INSERT INTO Books_Authors (book_id, author_id)
        VALUES ('${newBook_Author.book_id}', '${newBook_Author.author_id}');
        `,
        
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null); // err is the error object, null is the result
                return;
            }
            else {
                console.log("created book_author: ", { res });
                result(null, { res });
            };
        });
    }

    // Create a new book_author
    static create(newBook_Author, result) {
        db.query(disableForeignKeyChecks, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {
                Book_Author.createQuery(newBook_Author, result);
                db.query(enableForeignKeyChecks, (err, res) => {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                    }
                    else {
                        console.log("Foreign Key Checks Enabled");
                    };
                });
            };
        });
    }

    // Update a book_author by book_id and author_id
    static updateByID(book_id, author_id, book_author, result) {
        db.query(`UPDATE Books_Authors SET book_id = '${book_author.book_id}', author_id = '${book_author.author_id}' WHERE book_id = '${book_id}' AND author_id = '${author_id}';`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {if (res.affectedRows == 0) {
                // not found Book_Author with the id
                result({ kind: "not_found" }, null);
                return;
            }
            else {
                console.log("updated book_author: ", { res });
                //result(null, { res });
            };
            };
        });
    }

    // Delete a book_author by book_id and author_id
    static deleteByID(book_id, author_id, result) {
        db.query(`DELETE FROM Books_Authors WHERE book_id = '${book_id}' AND author_id = '${author_id}';`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null); // err is the error object, null is the result
                return;
            }
            else {
                console.log("deleted book_author: ", { res });
                result(null, { res });
            };
        }
        );
    }
}

module.exports = Book_Author;