/*
Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/

const express = require('express');
const router = express.Router();
const books_ordersController = require('../controllers/books_orders.controller.js');

// Retrieve all books_orders
router.get('/', books_ordersController.getAll);

// Create a new books_orders entry
router.post('/', books_ordersController.create);

module.exports = router;