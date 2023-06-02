"use strict";

/*
Citations:
    Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/
var express = require('express');

var router = express.Router();

var authorsController = require('../controllers/authors.controller.js'); // Retrieve all authors


router.get('/', authorsController.getAll); // Retrieve a single author with authorID

router.get('/:authorID', authorsController.getByID); // Create a new author

router.post('/', authorsController.create); // Update an author with authorID

router.put('/:authorID', authorsController.updateByID); // Delete an author with authorID

router["delete"]('/:authorID', authorsController.deleteByID);
module.exports = router;