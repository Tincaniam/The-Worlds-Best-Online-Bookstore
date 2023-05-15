const Discount_Code = require("../models/discount_codes.model.js");

getAll = (req, res) => {
    Discount_Code.getAll((err, data) => {
        if (err) {
            res.status(500).send({message: err.message || "Error occurred while retrieving discount codes."});
        }
        else {
            res.send(data);
        };
    });
}

getByID = (req, res) => {
    Discount_Code.getByID(req.params.discountCodeID, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Discount code with id " + req.params.discountCodeID + " not found."});
            }
            else {
                res.status(500).send({message: "Error retrieving discount code with id " + req.params.discountCodeID});
            };
        }
        else {
            res.send(data);
        };
    });
}

create = (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.status(400).send({message: "No content in request body."});
    };

    const newDiscountCode = new Discount_Code({
        discount_code_name: req.body.discount_code_name
        })
        console.log("newDiscountCode: ");
        console.log(newDiscountCode);

    Discount_Code.create(newDiscountCode, (err, data) => {
        if (err) {
            res.status(500).send({message: err.message || "Error: 500 Internal Server Error."});
        }
        else {
            res.send(data);
        };
    });
}

deleteByID = (req, res) => {
    Discount_Code.deleteByID(req.params.discountCodeID, (err, data) => {
        if (err) {
            if (err.kind == "not_found") {
                res.status(404).send({message: "Discount code with id " + req.params.discountCodeID + " not found."});
            }
            else {
                res.status(500).send({message: "Error retrieving discount code with id " + req.params.discountCodeID});
            };
        }
        else {
            res.send({message: "Discount code deleted successfully!"});
        };
    });
}

module.exports = { getAll, getByID, create, deleteByID };