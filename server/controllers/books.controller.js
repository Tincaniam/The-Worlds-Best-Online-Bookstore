const Book = require("../models/books.model.js");

getAll = (req, res) => {
    Book.getAll((err, data) => {
        if (err) {
            res.status(500).send({message: err.message || "Error occurred while retrieving books."});
        }
        else {
            res.send(data);
        };
    });
}

getByID = (req, res) => {
    Book.getByID(req.params.bookID, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Book with id " + req.params.bookID + " not found."});
            }
            else {
                res.status(500).send({message: "Error retrieving book with id " + req.params.bookID});
            };
        }
        else {
            res.send(data);
        };
    });
}

create = (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.status(400).send({message: "No content in request body."});
    };

    const newBook = new Book({
        title: req.body.title,
        // convert date from string to Date object
        publication_date: req.body.publication_date
        })
        console.log("newBook: ");
        console.log(newBook);

    Book.create(newBook, (err, data) => {
        if (err) {
            res.status(500).send({message: err.message || "Error: 500 Internal Server Error."});
        }
        else {
            res.send(data);
        };
    });
}

update = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: "Error: 400 Bad Request."});
    };

    Book.update(req.params.bookID, new Book(req.body), (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Book with id " + req.params.bookID + " not found."});
            }
            else {
                res.status(500).send({message: "Error updating book with id " + req.params.bookID});
            };
        }
        else {
            res.send(data);
        };
    });
}

deleteByID = (req, res) => {
    Book.delete(req.params.bookID, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Book with id " + req.params.bookID + " not found."});
            }
            else {
                res.status(500).send({message: "Error deleting book with id " + req.params.bookID});
            };
        }
        else {
            res.send({message: "Book deleted successfully!"});
        };
    });
}


module.exports = { getAll, getByID, create, update, deleteByID };

