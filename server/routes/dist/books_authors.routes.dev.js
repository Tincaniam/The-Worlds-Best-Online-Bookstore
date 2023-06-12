"use strict";

/*
Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/
var express = require('express');

var router = express.Router();

var books_authorsController = require('../controllers/books_authors.controller.js'); // Retrieve all books_authors


router.get('/', books_authorsController.getAll); // Create a new books_authors entry

router.post('/', books_authorsController.create); // Update a books_authors entry with bookID and authorID

router.put('/:bookID/:authorID', books_authorsController.updateByID); // Delete a books_authors entry with bookID and authorID

router["delete"]('/:bookID/:authorID', books_authorsController.deleteByID);
module.exports = router;