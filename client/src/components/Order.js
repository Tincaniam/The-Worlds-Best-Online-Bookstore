/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';

// Define a Order component for the Order table.
function Order({ order, editOrder, deleteOrder }) {
    return (

        <tr>
            <td>{order.order_id}</td>
            <td>{order.customer_id}</td>
            <td>{order.customer_name}</td>
            <td>{order.order_date}</td>
            <td>{order.order_total}</td>
            <td>{order.discount_code_id}</td>
            <td>{order.discount_code_name}</td>
            <td>
                <button className="btn btn-outline-primary" onClick={() => {editOrder(order)}}>Edit</button>
                <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteOrder(order.order_id)}}>Delete</button>
            </td>
        </tr>
    );
}

export default Order;