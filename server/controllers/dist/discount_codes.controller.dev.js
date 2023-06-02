"use strict";

/*
Citations:
    Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/
var Discount_Code = require("../models/discount_codes.model.js");

getAll = function getAll(req, res) {
  Discount_Code.getAll(function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving discount codes."
      });
    } else {
      res.send(data);
    }

    ;
  });
};

getByID = function getByID(req, res) {
  Discount_Code.getByID(req.params.discountCodeID, function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Discount code with id " + req.params.discountCodeID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error retrieving discount code with id " + req.params.discountCodeID
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
  var newDiscountCode = new Discount_Code({
    discount_code_name: req.body.discount_code_name
  });
  console.log("newDiscountCode: ");
  console.log(newDiscountCode);
  Discount_Code.create(newDiscountCode, function (err, data) {
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

deleteByID = function deleteByID(req, res) {
  Discount_Code.deleteByID(req.params.discountCodeID, function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Discount code with id " + req.params.discountCodeID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error retrieving discount code with id " + req.params.discountCodeID
        });
      }

      ;
    } else {
      res.send({
        message: "Discount code deleted successfully!"
      });
    }

    ;
  });
};

module.exports = {
  getAll: getAll,
  getByID: getByID,
  create: create,
  deleteByID: deleteByID
};