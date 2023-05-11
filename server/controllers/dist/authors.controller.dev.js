"use strict";

var Author = require("../models/authors.model.js");

getAll = function getAll(req, res) {
  Author.getAll(function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving authors."
      });
    } else {
      res.send(data);
    }

    ;
  });
};

getByID = function getByID(req, res) {
  Author.getByID(req.params.authorID, function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Author with id " + req.params.authorID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error retrieving author with id " + req.params.authorID
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
  var newAuthor = new Author({
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });
  console.log("newAuthor: ");
  console.log(newAuthor);
  Author.create(newAuthor, function (err, data) {
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

updateByID = function updateByID(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Error: 400 Bad Request."
    });
  }

  ;
  Author.updateByID(req.params.authorID, new Author(req.body), function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Author with id " + req.params.authorID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error updating author with id " + req.params.authorID
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
  Author.deleteByID(req.params.authorID, function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Author with id " + req.params.authorID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error deleting author with id " + req.params.authorID
        });
      }

      ;
    } else {
      res.send({
        message: "Author deleted successfully."
      });
    }

    ;
  });
};

module.exports = {
  getAll: getAll,
  getByID: getByID,
  create: create,
  updateByID: updateByID,
  deleteByID: deleteByID
};