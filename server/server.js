/*
Citations:
    Server code looesely adapted from the "nodejs-starter-app" from CS 340 at Oregon State University.
    Date: 2023-04-05
    https://github.com/osu-cs340-ecampus/nodejs-starter-app

    Other adaptions from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    These include basic setup of the server, the listener, and the routes.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books.routes.js');
const authorsRoutes = require('./routes/authors.routes.js');
const customersRoutes = require('./routes/customers.routes.js');
const ordersRoutes = require('./routes/orders.routes.js');
const discountCodesRoutes = require('./routes/discount_codes.routes.js');
const booksAuthorsRoutes = require('./routes/books_authors.routes.js');
const booksOrdersRoutes = require('./routes/books_orders.routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes

// Index route
app.get('/', function(res)
    {
        res.send('index');
    });

// Custom routes
app.use('/api/books', booksRoutes);
app.use('/api/authors', authorsRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/discount_codes', discountCodesRoutes);
app.use('/api/books_authors', booksAuthorsRoutes);
app.use('/api/books_orders', booksOrdersRoutes);

// Listener
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});