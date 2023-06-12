/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';

// Define a BookOrder component for the BookOrder table.
function BookOrder({ book_order }) {
    return (

        <tr>
            <td>{book_order.book_id}</td>
            <td>{book_order.book_title}</td>
            <td>{book_order.order_id}</td>
            <td>{book_order.order_date}</td>
            <td>{book_order.order_total}</td>
        </tr>
    );
}

export default BookOrder;