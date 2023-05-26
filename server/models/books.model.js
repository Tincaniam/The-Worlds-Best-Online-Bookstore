const db = require('../db-connector');

class Book {
    constructor(book) {
        this.title = book.title;
        this.publication_date = book.publication_date;
    }
    static create(newBook, result) {
        db.query(`INSERT INTO Books (title, publication_date)
        VALUES ('${newBook.title}', '${newBook.publication_date}');`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null); // err is the error object, null is the result
                return;
            }
            else {
                console.log("created book: ", { res });
                result(null, { res });
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
    static updateByID(bookID, book, result) {

        db.query(`UPDATE Books SET title = '${book.title}', publication_date = '${book.publication_date}' WHERE book_id = ${bookID}`,
        (err, res) => {
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
                console.log("updated book: ", { res });
                result(null, { res });
            };
        });
    }
    static deleteByID(bookID, result) {
        db.query(`DELETE FROM Books WHERE book_id = ${bookID}`,
        (err, res) => {
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
                console.log("deleted Book with book_id: ", bookID);
                result(null, res);
            };
        });
    }
}

module.exports = Book;
