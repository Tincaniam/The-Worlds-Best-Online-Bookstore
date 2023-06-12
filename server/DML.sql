-- -----------------------------
-- Data manipulation queries
-- Project Group 47
-- Sarah Purkey, Matt Tinnel
-- -----------------------------

-- -----------------------------
-- SELECT queries
-- -----------------------------

-- Books
SELECT * FROM Books;

-- Search/Filter books by title
SELECT * FROM Books
WHERE title = :titleFromUserInput;

-- Authors
SELECT * FROM Authors;

-- Customers
SELECT * FROM Customers;

-- Orders, join in Customers table for customer name and Discount_Codes table for discount code name
SELECT Orders.order_id, Orders.customer_id, CONCAT(Customers.first_name, " ", Customers.last_name) AS customer_name, Orders.order_date, Orders.order_total, Orders.discount_code_id, Discount_Codes.discount_code_name
FROM Orders
INNER JOIN Customers ON Orders.customer_id = Customers.customer_id

-- Outer join in Discount_Codes table for discount code name if there is one
LEFT OUTER JOIN Discount_Codes ON Orders.discount_code_id = Discount_Codes.discount_code_id;

-- Discount_Codes
SELECT * FROM Discount_Codes;

-- Books_Authors SELECT, include joins in drop down for ease of use
SELECT Books.book_id, Books.title AS book_title, Authors.author_id, CONCAT(Authors.first_name, " ", Authors.last_name) AS author_name
FROM Books_Authors
INNER JOIN Books ON Books_Authors.book_id = Books.book_id
INNER JOIN Authors ON Books_Authors.author_id = Authors.author_id;

-- Books_Orders SELECT, include joins in drop down for ease of use
SELECT Books.book_id, Books.title AS book_title, Orders.order_id, Orders.order_date, Orders.order_total
FROM Books_Orders
INNER JOIN Books ON Books_Orders.book_id = Books.book_id
INNER JOIN Orders ON Books_Orders.order_id = Orders.order_id;

-- -----------------------------
-- INSERT queries
-- Query for add a new Books functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language
-- -----------------------------

-- Books
INSERT INTO Books (title, publication_date)
VALUES (:title, :publication_date);

-- Authors
INSERT INTO Authors (first_name, last_name)
VALUES (:authorFNameFromDropDown, :authorLNameFromDropDown);

-- Customers
INSERT INTO Customers (first_name, last_name, address, email, phone_number)
VALUES (:customerFName, :customerLName, :customerAddress, :customerEmail, :customerPhone);

-- Select query for drop down to get the customer form data of the customer FK
SELECT CONCAT(first_name, " ", last_name) AS customer_name
FROM Customers
WHERE customer_id = :customerIDFromDropDown;

-- Orders, include FK customer_id from drop down
INSERT INTO Orders (order_id, customer_id, order_date, order_total, discount_code_id)
VALUES (:orderID, :customerIDFromDropDown, :orderDate, :orderTotal);

-- Discount_Codes SELECT used by drop downs for Orders INSERT
SELECT discount_code_name FROM Discount_Codes
WHERE discount_code_id = :discountCodeIDFromDropDown;

-- Discount_Codes
INSERT INTO Discount_Codes (discount_code_name)
VALUES (:discountCodeName);

-- Books_Orders SELECT used by drop downs for INSERT
-- Books_Orders SELECT, include joins in drop down for ease of use
SELECT Books.book_id, Books.title AS book_title, Orders.order_id, Orders.order_date, Orders.order_total
FROM Books_Orders
INNER JOIN Books ON Books_Orders.book_id = Books.book_id
INNER JOIN Orders ON Books_Orders.order_id = Orders.order_id;

-- Also add to Books_Orders when adding to Orders
INSERT INTO Books_Orders (book_id, order_id)
VALUES (:bookIDFromDropDown, :orderID);

-- Books_Authors SELECT used by drop downs for INSERT
-- Books_Authors SELECT, include joins in drop down for ease of use
SELECT Books.book_id, Books.title AS book_title, Authors.author_id, CONCAT(Authors.first_name, " ", Authors.last_name) AS author_name
FROM Books_Authors
INNER JOIN Books ON Books_Authors.book_id = Books.book_id
INNER JOIN Authors ON Books_Authors.author_id = Authors.author_id;

-- Books_Authors
INSERT INTO Books_Authors (book_id, author_id)
VALUES (:bookIDFromDropDown, :authorIDFromDropDown);


-- -----------------------------
-- UPDATE queries
-- Query for updating a Books functionality with colon : character being used to
-- denote the variables that will have data from the backend programming language
-- -----------------------------

-- Books

-- Select query to get the book form data of the book that is being updated
SELECT *
FROM Books
WHERE book_id = :bookIDFromDropDown;

UPDATE Books
SET title = :title, publication_date = :publication_date
WHERE book_id = :bookIDFromDropDown;

-- Authors

-- Select query to get the author form data of the author that is being updated
SELECT *
FROM Authors
WHERE author_id = :authorIDFromDropDown;

UPDATE Authors
SET first_name = :authorFName, last_name = :authorLName
WHERE author_id = :authorIDFromDropDown;

-- Customers

-- Select query to get the customer form data of the customer that is being updated
SELECT *
FROM Customers
WHERE customer_id = :customerIDFromDropDown;

UPDATE Customers
SET first_name = :customerFName, last_name = :customerLName, address = :customerAddress, email = :customerEmail, phone_number = :customerPhone
WHERE customer_id = :customerIDFromDropDown;

-- Orders

-- Select query to get the order form data of the order that is being updated
SELECT *
FROM Orders
WHERE order_id = :orderIDFromDropDown;

UPDATE Orders
SET order_id = :orderID, customer_id = :customerID, order_date = :orderDate, order_total = :orderTotal, discount_code_id = :discountCodeID
WHERE order_id = :orderIDFromDropDown;

-- Books_Authors
-- Select query to get the book author form data of the book author that is being updated
SELECT *
FROM Books_Authors
WHERE book_id = :bookIDFromDropDown;

UPDATE Books_Authors
SET book_id = :bookID, author_id = :authorID
WHERE book_id = :bookIDFromDropDown;

-- Books_Orders
-- Select query to get the book order form data of the book order that is being updated
SELECT *
FROM Books_Orders
WHERE book_id = :bookIDFromDropDown;

UPDATE Books_Orders
SET book_id = :bookID, order_id = :orderID
WHERE book_id = :bookIDFromDropDown;

-- -----------------------------
-- DELETE queries
-- Query for deleting a Books functionality with colon : character being used to
-- denote the variables that will have data from the backend programming language
-- -----------------------------

-- Books
DELETE FROM Books
WHERE book_id = :bookID;

-- Also delete from Books_Authors when deleting from Books
DELETE FROM Books_Authors
WHERE book_id = :bookID;

-- Authors
DELETE FROM Authors
WHERE author_id = :authorID;

-- Also delete from Books_Authors when deleting from Authors
DELETE FROM Books_Authors
WHERE book_id = :bookID AND author_id = :authorID;

-- Customers
DELETE FROM Customers
WHERE customer_id = :customerID;

-- Also delete from Orders when deleting from Customers
DELETE FROM Orders
WHERE customer_id = :customerID;

-- Orders
DELETE FROM Orders
WHERE order_id = :orderID;

-- Also delete from Books_Orders when deleting from Orders
DELETE FROM Books_Orders
WHERE order_id = :orderID;

-- Discount_Codes
DELETE FROM Discount_Codes
WHERE discount_code_id = :discountCodeID;

-- Books_Authors
DELETE FROM Books_Authors
WHERE book_id = :bookID;

-- Books_Orders
DELETE FROM Books_Orders
WHERE book_id = :bookID;

-- -----------------------------