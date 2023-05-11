"use strict";

var Order = require("../models/orders.model.js");

getAll = function getAll(req, res) {
  Order.getAll(function (err, data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving orders."
      });
    } else {
      res.send(data);
    }

    ;
  });
};

getByID = function getByID(req, res) {
  Order.getByID(req.params.orderID, function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Order with id " + req.params.orderID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error retrieving order with id " + req.params.orderID
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
  var newOrder = new Order({
    customer_id: req.body.customer_id,
    product_id: req.body.product_id,
    quantity: req.body.quantity
  });
  console.log("newOrder: ");
  console.log(newOrder);
  Order.create(newOrder, function (err, data) {
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
  Order.updateByID(req.params.orderID, new Order(req.body), function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Order with id " + req.params.orderID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error updating order with id " + req.params.orderID
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
  Order.deleteByID(req.params.orderID, function (err, data) {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          message: "Order with id " + req.params.orderID + " not found."
        });
      } else {
        res.status(500).send({
          message: "Error deleting order with id " + req.params.orderID
        });
      }

      ;
    } else {
      res.send({
        message: "Order deleted successfully."
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