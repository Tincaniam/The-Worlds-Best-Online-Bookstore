const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customers.controller.js');

// Retrieve all customers
router.get('/', customersController.getAll);

// Retrieve a single customer with customerID
router.get('/:customerID', customersController.getByID);

// Create a new customer
router.post('/', customersController.create);

// Update a customer with customerID
router.put('/:customerID', customersController.updateByID);

// Delete a customer with customerID
router.delete('/:customerID', customersController.deleteByID);

module.exports = router;
