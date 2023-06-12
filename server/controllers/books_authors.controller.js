/*
Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/

const Book_Author = require("../models/books_authors.model.js");

getAll = (req, res) => {
    Book_Author.getAll((err, data) => {
        if (err) {
            res.status(500).send({message: err.message || "Error occurred while retrieving books_authors."});
        }
        else {
            res.send(data);
        };
    });
}

create = (req, res) => {
    console.log("req.body: ");
    console.log(req.body);
    const newBook_Author = new Book_Author({
        book_id: req.body.book_id,
        author_id: req.body.author_id
        })
        console.log("newBook_Author: ");
        console.log(newBook_Author);

    Book_Author.create(newBook_Author, (err, data) => {
        if (err) {
            res.status(500).send({message: err.message || "Error: 500 Internal Server Error."});
        }
        else {
            res.send(data);
        };
    });
}

updateByID = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "No content in request body."});
    };

    Book_Author.updateByID(req.params.bookID, req.params.authorID, new Book_Author(req.body), (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Book_Author with book_id " + req.params.bookID + " and author_id " + req.params.authorID + " not found."});
            }
            else {
                res.status(500).send({message: "Error retrieving book with book_id " + req.params.bookID + " and author_id " + req.params.authorID});
            };
        }
        else {
            res.send(data);
        };
    });
}

deleteByID = (req, res) => {
    Book_Author.deleteByID(req.params.bookID, req.params.authorID, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Book_Author with book_id " + req.params.bookID + " and author_id " + req.params.authorID + " not found."});
            }
            else {
                res.status(500).send({message: "Error retrieving book with book_id " + req.params.bookID + " and author_id " + req.params.authorID});
            };
        }
        else {
            res.send(data);
        };
    });
}

module.exports = { getAll, create, updateByID, deleteByID };