const db = require('../db-connector');

class Author {
    constructor(author) {
        this.first_name = author.first_name;
        this.last_name = author.last_name;
    }
    static create(newAuthor, result) {
        db.query("INSERT INTO Authors SET ?", newAuthor, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null); // err is the error object, null is the result
                return;
            }
            else {
                console.log("created author: ", { id: res.insertId, ...newAuthor });
                result(null, { id: res.insertId, ...newAuthor });
            };

        });
    }
    static findById(authorId, result) {
        db.query(`SELECT * FROM Authors WHERE author_id = ${authorId}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.length) {
                console.log("found author: ", res[0]);
                result(null, res[0]);
                return;
            }
            else {
                // author with the author_id not found
                result({ kind: "not_found" }, null);
            };
        });
    }
    static getAll(result) {
        db.query("SELECT * FROM Authors", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {
                console.log("Authors: ", res);
                result(null, res);
            };
        });
    }
    static update(id, author, result) {
        db.query("UPDATE Authors SET first_name = ?, last_name = ? WHERE author_id = ?", [author.first_name, author.last_name, id], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.affectedRows == 0) {
                // author with the id not found
                result({ kind: "not_found" }, null);
                return;
            }
            else {
                console.log("updated author: ", { id: id, ...author });
                result(null, { id: id, ...author });
            };
        });
    }
    static delete(id, result) {
        db.query("DELETE FROM Authors WHERE author_id = ?", id, (err, res) => {
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
                console.log("deleted Author with author_id: ", id);
                result(null, res);
            };
        });
    }
}

module.exports = Author;
