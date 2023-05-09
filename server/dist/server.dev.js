"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 4000;

var bodyParser = require('body-parser');

var booksRoutes = require('./routes/books.routes.js');

var authorsRoutes = require('./routes/authors.routes.js');

var customersRoutes = require('./routes/customers.routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // Routes

app.get('/', function (req, res) {
  res.send('Home route!');
});
app.use('/api/books', booksRoutes);
app.use('/api/authors', authorsRoutes);
app.use('/api/customers', customersRoutes); // Listener

app.listen(PORT, function () {
  // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});