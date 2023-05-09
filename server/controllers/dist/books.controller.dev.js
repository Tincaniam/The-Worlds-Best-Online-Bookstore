"use strict";

var Book = require("../models/books.model.js");

getAll = function getAll(req, res) {
  Book.getAll(function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving books."
      });
    } else {
      res.send(data);
    }

    ;
  });
};

getByID = function getByID(req, res) {
  Book.getByID(req.params.bookID, function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Book with id " + req.params.bookID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error retrieving book with id " + req.params.bookID
        });
      }

      ;
    } else {
      res.send(data);
    }

    ;
  });
};

create = function create(req, res) {
  console.log(req.body);

  if (!req.body) {
    res.status(400).send({
      message: "No content in request body."
    });
  }

  ;
  var newBook = new Book({
    title: req.body.title,
    // convert date from string to Date object
    publication_date: req.body.publication_date
  });
  console.log("newBook: ");
  console.log(newBook);
  Book.create(newBook, function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Error: 500 Internal Server Error."
      });
    } else {
      res.send(data);
    }

    ;
  });
};

updateBYID = function updateBYID(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Error: 400 Bad Request."
    });
  }

  ;
  Book.updateBYID(req.params.bookID, new Book(req.body), function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Book with id " + req.params.bookID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error updating book with id " + req.params.bookID
        });
      }

      ;
    } else {
      res.send(data);
    }

    ;
  });
};

deleteByID = function deleteByID(req, res) {
  Book.deleteByID(req.params.bookID, function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Book with id " + req.params.bookID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error deleting book with id " + req.params.bookID
        });
      }

      ;
    } else {
      res.send({
        message: "Book deleted successfully!"
      });
    }

    ;
  });
};

module.exports = {
  getAll: getAll,
  getByID: getByID,
  create: create,
  update: update,
  deleteByID: deleteByID
};