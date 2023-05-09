const db = require('../db-connector');

class Book {
    constructor(book) {
        this.title = book.title;
        this.publication_date = book.publication_date;
    }
    static create(newBook, result) {
        db.query("INSERT INTO Books SET ?", newBook, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null); // err is the error object, null is the result
                return;
            }
            else {
                console.log("created book: ", { id: res.insertId, ...newBook });
                result(null, { id: res.insertId, ...newBook });
            };

        });
    }
    static getById(bookId, result) {
        db.query(`SELECT * FROM Books WHERE book_id = ${bookId}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.length) {
                console.log("found book: ", res[0]);
                result(null, res[0]);
                return;
            }
            else {
                // book with the id not found
                result({ kind: "not_found" }, null);
            };
        });
    }
    static getAll(result) {
        db.query("SELECT * FROM Books", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {
                console.log("Books: ", res);
                result(null, res);
            };
        });
    }
    static updateByID(id, book, result) {
        db.query("UPDATE Books SET title = ?, publication_date = ? WHERE book_id = ?", [book.title, book.publication_date, id], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.affectedRows == 0) {
                // book with the id not found
                result({ kind: "not_found" }, null);
                return;
            }
            else {
                console.log("updated book: ", { id: id, ...book });
                result(null, { id: id, ...book });
            };
        });
    }
    static deleteByID(id, result) {
        db.query("DELETE FROM Books WHERE book_id = ?", id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.affectedRows == 0) {
                // book with the id not found
                result({ kind: "not_found" }, null);
                return;
            }
            else {
                console.log("deleted Book with book_id: ", id);
                result(null, res);
            };
        });
    }
}

module.exports = Book;
