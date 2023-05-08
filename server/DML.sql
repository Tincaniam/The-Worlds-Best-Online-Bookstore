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

-- Authors
SELECT * FROM Authors;

-- Customers
SELECT * FROM Customers;

-- Orders
SELECT * FROM Orders;

-- Books_Authors
SELECT * FROM Books_Authors;

-- Books_Orders
SELECT * FROM Books_Orders;

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
VALUES (:authorFName, :authorLName);

-- Customers
INSERT INTO Customers (first_name, last_name, address, email, phone_number)
VALUES (:customerFName, :customerLName, :customerAddress, :customerEmail, :customerPhone);

-- Orders
INSERT INTO Orders (order_id, customer_id, order_date, order_total)
VALUES (:orderID, :customerID, :orderDate, :orderTotal);

-- Books_Authors
INSERT INTO Books_Authors (book_id, author_id)
VALUES (:bookID, :authorID);

-- Books_Orders
INSERT INTO Books_Orders (book_id, order_id)
VALUES (:bookID, :orderID);

-- -----------------------------
-- UPDATE queries
-- Query for updating a Books functionality with colon : character being used to
-- denote the variables that will have data from the backend programming language
-- -----------------------------

-- Books

-- Select query to get the book form data of the book that is being updated
SELECT *
FROM Books
WHERE book_id = :bookID;

UPDATE Books
SET title = :title, publication_date = :publication_date
WHERE book_id = :bookID;

-- Authors

-- Select query to get the author form data of the author that is being updated
SELECT *
FROM Authors
WHERE author_id = :authorID;

UPDATE Authors
SET first_name = :authorFName, last_name = :authorLName
WHERE author_id = :authorID;

-- Customers

-- Select query to get the customer form data of the customer that is being updated
SELECT *
FROM Customers
WHERE customer_id = :customerID;

UPDATE Customers
SET first_name = :customerFName, last_name = :customerLName, address = :customerAddress, email = :customerEmail, phone_number = :customerPhone
WHERE customer_id = :customerID;

-- Orders

-- Select query to get the order form data of the order that is being updated
SELECT *
FROM Orders
WHERE order_id = :orderID;

UPDATE Orders
SET order_id = :orderID, customer_id = :customerID, order_date = :orderDate, order_total = :orderTotal
WHERE order_id = :orderID;

-- Books_Authors

-- Select query to get the book author form data of the book author that is being updated
SELECT *
FROM Books_Authors
WHERE book_id = :bookID;

UPDATE Books_Authors
SET book_id = :bookID, author_id = :authorID
WHERE book_id = :bookID;

-- Books_Orders

-- Select query to get the book order form data of the book order that is being updated
SELECT *
FROM Books_Orders
WHERE book_id = :bookID;

UPDATE Books_Orders
SET book_id = :bookID, order_id = :orderID
WHERE book_id = :bookID;

-- -----------------------------
-- DELETE queries
-- Query for deleting a Books functionality with colon : character being used to
-- denote the variables that will have data from the backend programming language
-- -----------------------------

-- Books
DELETE FROM Books
WHERE book_id = :bookID;

-- Authors
DELETE FROM Authors
WHERE author_id = :authorID;

-- Customers
DELETE FROM Customers
WHERE customer_id = :customerID;

-- Orders
DELETE FROM Orders
WHERE order_id = :orderID;

-- Books_Authors
DELETE FROM Books_Authors
WHERE book_id = :bookID;

-- Books_Orders
DELETE FROM Books_Orders
WHERE book_id = :bookID;
-- -----------------------------