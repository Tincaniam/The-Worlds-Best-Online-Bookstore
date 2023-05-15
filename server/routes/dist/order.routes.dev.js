"use strict";

var express = require('express');

var router = express.Router();

var orderController = require('../controllers/order.controller.js'); // Retrieve all orders


router.get('/', orderController.getAll); // Retrieve a single order with orderID

router.get('/:orderID', orderController.getByID); // Create a new order

router.post('/', orderController.create); // Update a order with orderID

router.put('/:orderID', orderController.updateByID); // Delete a order with orderID

router["delete"]('/:orderID', orderController.deleteByID);
module.exports = router;