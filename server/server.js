const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books.routes.js');
const authorsRoutes = require('./routes/authors.routes.js');
const customersRoutes = require('./routes/customers.routes.js');
const ordersRoutes = require('./routes/orders.routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get('/', function(req, res)
    {
        res.send('Home route!');
    });

app.use('/api/books', booksRoutes);
app.use('/api/authors', authorsRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/orders', ordersRoutes);

// Listener
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});