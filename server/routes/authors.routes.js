const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors.controller.js');

// Retrieve all authors
router.get('/', authorsController.getAll);

// Retrieve a single author with authorID
router.get('/:authorID', authorsController.getByID);

// Create a new author
router.post('/', authorsController.create);

// Update an author with authorID
router.put('/:authorID', authorsController.update);

// Delete an author with authorID
router.delete('/:authorID', authorsController.deleteByID);

module.exports = router;