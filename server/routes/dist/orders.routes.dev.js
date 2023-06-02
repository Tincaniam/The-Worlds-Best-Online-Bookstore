"use strict";

/*
Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/
var express = require('express');

var router = express.Router();

var ordersController = require('../controllers/orders.controller.js'); // Retrieve all orders


router.get('/', ordersController.getAll); // Retrieve a single order with orderID

router.get('/:orderID', ordersController.getByID); // Create a new order

router.post('/', ordersController.create); // Update a order with orderID

router.put('/:orderID', ordersController.updateByID); // Delete a order with orderID

router["delete"]('/:orderID', ordersController.deleteByID);
module.exports = router;