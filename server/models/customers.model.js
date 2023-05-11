const db = require('../db-connector');

class Customer {
    constructor(customer) {
        this.first_name = customer.first_name;
        this.last_name = customer.last_name;
        this.address = customer.address;
        this.email = customer.email;
        this.phone = customer.phone;
    }

    static create(newCustomer, result) {
        db.query(`INSERT INTO Customers (first_name, last_name, address, email, phone)
        VALUES ('${newCustomer.first_name}', '${newCustomer.last_name}', '${newCustomer.address}', '${newCustomer.email}', '${newCustomer.phone}');`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null); // err is the error object, null is the result
                return;
            }
            else {
                console.log("created customer: ", { id: res.insertId, ...newCustomer });
                result(null, { id: res.insertId, ...newCustomer });
            };

        });
    }

    static getById(customerID, result) {
        db.query(`SELECT * FROM Customers WHERE customer_id = ${customerID}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.length) {
                console.log("found customer: ", res[0]);
                result(null, res[0]);
                return;
            }
            else {
                // customer with the customer_id not found
                result({ kind: "not_found" }, null);
            };
        });
    }

    static getAll(result) {
        db.query("SELECT * FROM Customers", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {
                console.log("Customers: ", res);
                result(null, res);
            };
        });
    }

    static updateByID(customerID, customer, result) {
        //db.query(`UPDATE Customers SET first_name = , last_name = ?, email = ?, phone = ?, address = ?, city = ?, state = ?, zip_code = ? WHERE customer_id = ?`,
        db.query(`UPDATE Customers SET first_name = '${customer.first_name}', last_name = '${customer.last_name}', address = '${customer.address}', email = '${customer.email}', phone = '${customer.phone}', WHERE customer_id = ${id}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.affectedRows == 0) {
                // customer
                result({ kind: "not_found" }, null);
                return;
            }
            else {
                console.log("updated customer: ", { id: id, ...customer });
                result(null, { id: id, ...customer });
            }
        });
    }

    static deleteByID(customerID, result) {
        db.query(`DELETE FROM Customers WHERE customer_id = ${customerID}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.affectedRows == 0) {
                // customer with the customer_id not found
                result({ kind: "not_found" }, null);
                return;
            }
            else {
                console.log("deleted customer with customer_id: ", id);
                result(null, res);
            };
        });
    }
}

module.exports = Customer;

    