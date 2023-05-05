/*
    SETUP
*/
// Express
var express = require('express');   // We are using the express library for the web server
var app     = express();            // We need to instantiate an express object to interact with the server in our code
const path = require('path');
const router = express.Router();

// Database
var db = require('./db-connector');

// Routes
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/pages/index/index.html')); // __dirname = current directory
  });
   
  router.get('/books', (req,res) => {
    res.sendFile(path.join(__dirname + '/pages/books/books.html'));
  });
   
  router.get('/authors', (req,res) => {
    res.sendFile(path.join(__dirname + '/pages/authors/authors.html'));
  });

  router.get('/customers', (req,res) => {
    res.sendFile(path.join(__dirname + '/pages/customers/customers.html'));
  });

  router.get('/orders', (req,res) => {
    res.sendFile(path.join(__dirname + '/pages/orders/orders.html'));
  });

  router.get('/books_authors', (req,res) => {
    res.sendFile(path.join(__dirname + '/pages/books_authors/books_authors.html'));
  });

  router.get('/books_orders', (req,res) => {
    res.sendFile(path.join(__dirname + '/pages/books_orders/books_orders.html'));
  });

  router.get('/styles.css', (req,res) => {
    res.sendFile(path.join(__dirname + '/pages/styles.css'));
  });
  
   
  // Listener/router
  app.use('/', router);
  let PORT = process.env.port;
  if (!PORT){
    PORT = 3000;
  }
  app.listen(PORT);
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')

  // app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  //     console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
  // });


// app.get('/', function(req, res)
//     {
//         // Define our queries
//         query1 = 'DROP TABLE IF EXISTS diagnostic;';
//         query2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
//         query3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
//         query4 = 'SELECT * FROM diagnostic;';

//         // Execute every query in an asynchronous manner, we want each query to finish before the next one starts

//         // DROP TABLE...
//         db.pool.query(query1, function (err, results, fields){

//             // CREATE TABLE...
//             db.pool.query(query2, function(err, results, fields){

//                 // INSERT INTO...
//                 db.pool.query(query3, function(err, results, fields){

//                     // SELECT *...
//                     db.pool.query(query4, function(err, results, fields){

//                         // Send the results to the browser
                        
//                         let base = "<h1>World's Best Online Bookstore</h1>"
//                         res.send(base + JSON.stringify(results));
//                     });
//                 });
//             });
//         });
//     });

/*
    LISTENER
*/
// app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
//     console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
// });