/*
Citations:
    Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/

const Author = require("../models/authors.model.js");

getAll = (req, res) => {
    Author.getAll((err, data) => {
        if (err) {
            res.status(500).send({message: err.message || "Error occurred while retrieving authors."});
        }
        else {
            res.send(data);
        };
    });
}

getByID = (req, res) => {
    Author.getByID(req.params.authorID, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Author with id " + req.params.authorID + " not found."});
            }
            else {
                res.status(500).send({message: "Error retrieving author with id " + req.params.authorID});
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

    const newAuthor = new Author({
        first_name: req.body.first_name,
        last_name: req.body.last_name
        })
        console.log("newAuthor: ");
        console.log(newAuthor);

    Author.create(newAuthor, (err, data) => {
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
        res.status(400).send({message: "Error: 400 Bad Request."});
    };

    Author.updateByID(req.params.authorID, new Author(req.body), (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Author with id " + req.params.authorID + " not found."});
            }
            else {
                res.status(500).send({message: "Error updating author with id " + req.params.authorID});
            };
        }
        else {
            res.send(data);
        };
    });
}

deleteByID = (req, res) => {
    Author.deleteByID(req.params.authorID, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Author with id " + req.params.authorID + " not found."});
            }
            else {
                res.status(500).send({message: "Error deleting author with id " + req.params.authorID});
            };
        }
        else {
            res.send({message: "Author deleted successfully."});
        };
    });
}

module.exports = { getAll, getByID, create, updateByID, deleteByID };