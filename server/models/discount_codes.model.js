/*
Citations:
    Project server code (primarily the codebase organizaiton) adapted from:
    "Create CRUD APIs in NodeJS, Express and MySQL"
    Date: 2023-04-05
    https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
*/

// Import the database connection
const db = require("../db-connector.js");
const { deleteByID } = require("./books.model.js");

// Define the DiscountCode class
class DiscountCode {
    constructor(discount_code) {
        this.discount_code_name = discount_code.discount_code_name;
    }

    // Create a new discount code
    static create(newDiscountCode, result) {
        db.query(`INSERT INTO Discount_Codes (discount_code_name)
        VALUES ('${newDiscountCode.discount_code_name}');`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null); // err is the error object, null is the result
                return;
            }
            else {
                console.log("created discount code: ", { res });
                result(null, { res });
            };

        });
    }

    // Retrieve a single discount code with discountCodeId
    static getById(discountCodeId, result) {
        db.query(`SELECT * FROM Discount_Codes WHERE discount_code_id = ${discountCodeId}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.length) {
                console.log("found discount code: ", res[0]);
                result(null, res[0]);
                return;
            }
            else {
                // discount code with the id not found
                result({ kind: "not_found" }, null);
            };
        });
    }

    // Retrieve all discount codes
    static getAll(result) {
        db.query("SELECT * FROM Discount_Codes", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else {
                console.log("Discount Codes: ", res);
                result(null, res);
            };
        });
    }

    // Delete discount code with discountCodeID
    static deleteByID(discountCodeID, result) {
        db.query(`DELETE FROM Discount_Codes WHERE discount_code_id = ${discountCodeID}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            else if (res.affectedRows == 0) {
                // discount code with the id not found
                result({ kind: "not_found" }, null);
            }
            else {
                console.log("deleted discount code with id: ", discountCodeID);
                result(null, res);
            };
        });
    }
}

module.exports = DiscountCode;