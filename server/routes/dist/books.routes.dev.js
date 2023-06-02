"use strict";

/*
Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/
var express = require('express');

var router = express.Router();

var booksController = require('../controllers/books.controller.js'); // Retrieve all books


router.get('/', booksController.getAll); // Retrieve a single book with bookID

router.get('/:bookID', booksController.getByID); // Create a new book

router.post('/', booksController.create); // Update a book with bookID

router.put('/:bookID', booksController.updateByID); // Delete a book with bookID

router["delete"]('/:bookID', booksController.deleteByID);
module.exports = router;