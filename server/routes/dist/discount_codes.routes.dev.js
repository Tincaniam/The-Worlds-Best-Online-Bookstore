"use strict";

var express = require('express');

var router = express.Router();

var discountCodesController = require('../controllers/discount_codes.controller.js'); // Retrieve all discount codes


router.get('/', discountCodesController.getAll); // Retrieve a single discount code with discountCodeID

router.get('/:discountCodeID', discountCodesController.getByID); // Create a new discount code

router.post('/', discountCodesController.create); // Delete a discount code with discountCodeID

router["delete"]('/:discountCodeID', discountCodesController.deleteByID);
module.exports = router;