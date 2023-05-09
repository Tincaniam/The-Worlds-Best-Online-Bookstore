const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller.js');

// Retrieve all books
router.get('/', booksController.getAll);

// Retrieve a single book with bookID
router.get('/:bookID', booksController.getByID);

// Create a new book
router.post('/', booksController.create);

// Update a book with bookID
router.put('/:bookID', booksController.update);

// Delete a book with bookID
router.delete('/:bookID', booksController.deleteByID);

module.exports = router;