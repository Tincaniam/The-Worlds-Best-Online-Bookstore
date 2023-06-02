"use strict";

/*
Citations:
    Server code looesely adapted from the "nodejs-starter-app" from CS 340 at Oregon State University.
    Date: 2023-04-05
    https://github.com/osu-cs340-ecampus/nodejs-starter-app

    Other adaptions from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2020-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/
var express = require('express');

var app = express();
var PORT = process.env.PORT || 4000;

var bodyParser = require('body-parser');

var booksRoutes = require('./routes/books.routes.js');

var authorsRoutes = require('./routes/authors.routes.js');

var customersRoutes = require('./routes/customers.routes.js');

var ordersRoutes = require('./routes/orders.routes.js');

var discountCodesRoutes = require('./routes/discount_codes.routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // Routes
// Index route

app.get('/', function (res) {
  res.send('index');
}); // Custom routes

app.use('/api/books', booksRoutes);
app.use('/api/authors', authorsRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/discount_codes', discountCodesRoutes); // Listener

app.listen(PORT, function () {
  // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});