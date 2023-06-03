-- CS 340 Project Group 47
--  Sarah Purkey
--  Matt Tinnel


SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

-- -----------------------------------------------------
-- Table `Books`
-- -----------------------------------------------------
CREATE OR REPLACE TABLE Books (
  `book_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `publication_date` DATE NULL,
  PRIMARY KEY (`book_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Authors`
-- -----------------------------------------------------
CREATE OR REPLACE TABLE Authors (
  `author_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NULL,
  PRIMARY KEY (`author_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Books_Authors`
-- -----------------------------------------------------
CREATE OR REPLACE TABLE Books_Authors (
  `book_id` INT NOT NULL,
  `author_id` INT NOT NULL,
  PRIMARY KEY (`book_id`, `author_id`),
  INDEX `fk_books_has_authors_authors1_idx` (`author_id` ASC) VISIBLE,
  INDEX `fk_books_has_authors_books_idx` (`book_id` ASC) VISIBLE,
  CONSTRAINT `fk_books_has_authors_books`
    FOREIGN KEY (`book_id`)
    REFERENCES `Books` (`book_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_books_has_authors_authors1`
    FOREIGN KEY (`author_id`)
    REFERENCES `Authors` (`author_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table ``Customers`
-- -----------------------------------------------------
CREATE OR REPLACE TABLE Customers (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `email_address` VARCHAR(255) NOT NULL,
  `phone_number` VARCHAR(15) NULL,
  PRIMARY KEY (`customer_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Orders`
-- -----------------------------------------------------
CREATE OR REPLACE TABLE `Orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `order_date` DATETIME NOT NULL,
  `order_total` DECIMAL(10,2) NOT NULL,
  `discount_code_id` INT NULL,
  PRIMARY KEY (`order_id`),
  INDEX `fk_orders_customers1_idx` (`customer_id` ASC) VISIBLE,
  INDEX `fk_Orders_Discount_Codes1_idx` (`discount_code_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_customers1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `Customers` (`customer_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Orders_Discount_Codes1`
    FOREIGN KEY (`discount_code_id`)
    REFERENCES `Discount_Codes` (`discount_code_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Discount_Codes`
-- -----------------------------------------------------
CREATE OR REPLACE TABLE `Discount_Codes` (
  `discount_code_id` INT NOT NULL AUTO_INCREMENT,
  `discount_code_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`discount_code_id`),
  UNIQUE INDEX `discount_code_name_UNIQUE` (`discount_code_name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Books_Orders`
-- -----------------------------------------------------
CREATE OR REPLACE TABLE Books_Orders (
  `book_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  PRIMARY KEY (`book_id`, `order_id`),
  INDEX `fk_books_has_orders_orders1_idx` (`order_id` ASC) VISIBLE,
  INDEX `fk_books_has_orders_books1_idx` (`book_id` ASC) VISIBLE,
  CONSTRAINT `fk_books_has_orders_books1`
    FOREIGN KEY (`book_id`)
    REFERENCES `Books` (`book_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_books_has_orders_orders1`
    FOREIGN KEY (`order_id`)
    REFERENCES `Orders` (`order_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- ------------------------------------------
-- Insert statements
-- ------------------------------------------

-- ------------------------------------------
-- Authors
-- ------------------------------------------
INSERT INTO Authors (first_name, last_name)
VALUES
(
    'Leo', 'Tolstoy'
),
(
    'Terry', 'Pratchett'
),
(
    'Neil', 'Gaiman'
),
(
    'Harper', 'Lee'
);

SELECT * FROM Authors;

-- --------------------------------------------
-- Books
-- --------------------------------------------
INSERT INTO Books (title, publication_date)
VALUES
(
    'War and Peace', 18690101
),
(
    'Good Omens', 19900510
),
(
    'To Kill a Mockingbird', 19600711
);

SELECT * FROM Books;

-- ----------------------------------------------
-- Books_Authors
-- ----------------------------------------------
INSERT INTO Books_Authors (book_id, author_id)
VALUES
(
    (SELECT book_id FROM Books WHERE title = 'War and Peace'),
    (SELECT author_id FROM Authors WHERE first_name = 'Leo' AND last_name = 'Tolstoy')
),
(
    (SELECT book_id FROM Books WHERE title = 'To Kill a Mockingbird'),
    (SELECT author_id FROM Authors WHERE first_name = 'Harper' AND last_name = 'Lee')
),
(
    (SELECT book_id FROM Books WHERE title = 'Good Omens'),
    (SELECT author_id FROM Authors WHERE first_name = 'Terry' AND last_name = 'Pratchett')
),
(
    (SELECT book_id FROM Books WHERE title = 'Good Omens'),
    (SELECT author_id FROM Authors WHERE first_name = 'Neil' AND last_name = 'Gaiman')
);

SELECT * FROM Books_Authors;

-- ------------------------------------------------
-- Customers
-- ------------------------------------------------
INSERT INTO Customers (first_name, last_name, address, email_address, phone_number)
VALUES
(
    'Freddy', 'Lupin', '1111 Wolftone Dr, New York, NY 10001', 'flupin@email.com', '5038675309'
),
(
    'Bob', 'Bobberson', '4567 Street Dr, Oregon City, OR 97045', 'bbobberson@email.com', NULL
),
(
    'Haily', 'Sharp', '22365 S Wall St, Oregon City, OR 97045', 'hsharp@email.com', NULL
);

SELECT * FROM Customers;

-- -------------------------------------------------
-- Discount_Codes
-- -------------------------------------------------
INSERT INTO Discount_Codes (discount_code_name)
VALUES
(
    '10OFF'
),
(
    '20OFF'
),
(
    '30OFF'
);

SELECT * FROM Discount_Codes;

-- -------------------------------------------------
-- Orders
-- -------------------------------------------------
INSERT INTO Orders (customer_id, order_date, order_total, discount_code_id)
VALUES
(
    (SELECT customer_id FROM Customers WHERE first_name = 'Freddy' AND last_name = 'Lupin'),
    20230103070545,
    24.95,
    (SELECT discount_code_id FROM Discount_Codes WHERE discount_code_name = '10OFF')
),
(
    (SELECT customer_id FROM Customers WHERE first_name = 'Freddy' AND last_name = 'Lupin'),
    20220823232400,
    99.75,
    (SELECT discount_code_id FROM Discount_Codes WHERE discount_code_name = '30OFF')
),
(
    (SELECT customer_id FROM Customers WHERE first_name = 'Haily' AND last_name = 'Sharp'),
    20230503120328,
    55.12,
    NULL
);

SELECT * FROM Orders;

-- ----------------------------------------------
-- Books_Orders
-- ----------------------------------------------
INSERT INTO Books_Orders (book_id, order_id)
VALUES
(
    (SELECT book_id FROM Books WHERE title = 'War and Peace'),
    1
),
(
    (SELECT book_id FROM Books WHERE title = 'To Kill a Mockingbird'),
    2
),
(
    (SELECT book_id FROM Books WHERE title = 'Good Omens'),
    2
),
(
    (SELECT book_id FROM Books WHERE title = 'Good Omens'),
    3
);

SELECT * FROM Books_Orders;

SET FOREIGN_KEY_CHECKS=1;
COMMIT;


