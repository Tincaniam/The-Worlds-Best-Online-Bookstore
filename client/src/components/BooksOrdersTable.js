/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';
import BookOrder from './BookOrder';

// Define a BooksOrdersTable component for the BooksOrders page.
function BooksOrdersTable({ books_orders }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>book_id</th>
                    <th>book_title</th>
                    <th>order_id</th>
                    <th>order_date</th>
                    <th>order_total</th>
                </tr>
            </thead>
            <tbody>
                {books_orders.map((book_order, i) => <BookOrder book_order={book_order}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default BooksOrdersTable;