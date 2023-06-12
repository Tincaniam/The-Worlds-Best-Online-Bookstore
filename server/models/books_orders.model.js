/*
Citations:
    Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/

// Import the database connection
const db = require("../db-connector.js");

// Used to disable and enable foreign key checks
const disableForeignKeyChecks = "SET FOREIGN_KEY_CHECKS=0;";
const enableForeignKeyChecks = "SET FOREIGN_KEY_CHECKS=1;";

// Define the Book_Order class
class Book_Order {
    constructor(book_order) {
        this.book_id = book_order.book_id;
        this.order_id = book_order.order_id;
    }

    // Retrieve all book_orders
    static getAll(result) {
        db.query('SELECT Books.book_id, Books.title AS book_title, Orders.order_id, Orders.order_date, Orders.order_total FROM Books_Orders INNER JOIN Books ON Books_Orders.book_id = Books.book_id INNER JOIN Orders ON Books_Orders.order_id = Orders.order_id;', (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(null, err);
                return;
            }
            console.log("books_orders: ", res);
            result(null, res);
        }
        );
    }

    // Create query used by create()
    static createQuery(newBook_Order, result) {
        db.query(`INSERT INTO Books_Orders (book_id, order_id) VALUES ('${newBook_Order.book_id}', '${newBook_Order.order_id}');`,

            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null); // err is the error object, null is the result
                    return;
                }
                else {
                    console.log("created book_order: ", { res });
                    result(null, { res });
                };
            });
    }

    // Create a new book_order
    static create(newBook_Order, result) {
        db.query(disableForeignKeyChecks, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {
                Book_Order.createQuery(newBook_Order, result);
                db.query(enableForeignKeyChecks, (err, res) => {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                    }
                    else {
                        console.log("Foreign key checks enabled.");
                    }
                });
            }
        });
    }
}

module.exports = Book_Order;