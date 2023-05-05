var db = require('../../db-connector');

// load script for books page on load

    {
        // Define our queries
        query1 = 'SELECT * FROM Books;';

        // Select *...
        db.pool.query(query1, function (err, results, fields){

            // Send the results to the browser
                    
            let base = "<h1>World's Best Online Bookstore</h1>"
            res.send(base + JSON.stringify(results));
        });
    };