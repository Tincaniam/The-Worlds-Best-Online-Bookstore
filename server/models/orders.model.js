/*
Citations:
    Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/

const db = require("../db-connector.js");

const disableForeignKeyChecks = `SET FOREIGN_KEY_CHECKS=0;`;
const enableForeignKeyChecks = `SET FOREIGN_KEY_CHECKS=1;`;

class Order {
    constructor(order) {
        this.customer_id = order.customer_id;
        this.order_date = order.order_date;
        this.order_total = order.order_total;
        this.discount_code_id = order.discount_code_id;
    }

    static createQuery(newOrder, result) {
        db.query(`
        INSERT INTO Orders (customer_id, order_date, order_total, discount_code_id)
        VALUES ('${newOrder.customer_id}', '${newOrder.order_date}', '${newOrder.order_total}', '${newOrder.discount_code_id}');
        `,

        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null); // err is the error object, null is the result
                return;
            }
            else {
                console.log("created order: ", { res });
                result(null, { res });
            };
        });
    }

    static create(newOrder, result) {
        db.query(disableForeignKeyChecks, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {
                Order.createQuery(newOrder, result);
                db.query(enableForeignKeyChecks, (err, res) => {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                    }
                    else {
                        console.log("Foreign Key Checks Enabled");
                    };
                }); 
            };
        });
    }

    static getByID(orderID, result) {
        db.query(`SELECT * FROM Orders WHERE order_id = ${orderID}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.length) {
                console.log("found order: ", res[0]);
                result(null, res[0]);
                return;
            }
            else {
                // order with the order_id not found
                result({ kind: "not_found" }, null);
            };
        });
    }

    static getAll(result) {
        db.query('SELECT Orders.order_id, Orders.customer_id, CONCAT(Customers.first_name, " ", Customers.last_name) AS customer_name, Orders.order_date, Orders.order_total, Orders.discount_code_id, Discount_Codes.discount_code_name FROM Orders INNER JOIN Customers ON Orders.customer_id = Customers.customer_id LEFT OUTER JOIN Discount_Codes ON Orders.discount_code_id = Discount_Codes.discount_code_id ORDER BY Orders.order_id ASC;'
        ,(err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {
                console.log("Orders: ", res);
                result(null, res);
            };
        });
    }

    static updateQuery(orderID, order, result) {
        db.query(`UPDATE Orders SET customer_id = '${order.customer_id}', order_date = '${order.order_date}', order_total = '${order.order_total}', discount_code_id = '${order.discount_code_id}' WHERE order_id = ${orderID}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            else if (res.affectedRows == 0) {
                // order with the order_id not found
                result({ kind: "not_found" }, null);
            }
            else {
                console.log("updated order: ", { res });
                result(null, { res });
            };
        });
    }

    static updateByID(orderID, order, result) {
        db.query(disableForeignKeyChecks, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {
                Order.updateQuery(orderID, order, result);
                db.query(enableForeignKeyChecks, (err, res) => {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                    }
                    else {
                        console.log("Foreign Key Checks Enabled");
                    };
                });
            };
        }); 
    }

    static deleteByID(orderID, result) {
        db.query(`DELETE FROM Orders WHERE order_id = ${orderID}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            else if (res.affectedRows == 0) {
                // order with the order_id not found
                result({ kind: "not_found" }, null);
            }
            else {
                console.log("deleted order with order_id: ", orderID);
                result(null, res);
            };
        });
    }
}

module.exports = Order;

