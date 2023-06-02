/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';
import Order from './Order';

function OrdersTable({ orders, editOrder, deleteOrder }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>order_id</th>
                    <th>customer_id</th>
                    <th>customer_name</th>
                    <th>order_date</th>
                    <th>order_total</th>
                    <th>discount_code_id</th>
                    <th>discount_code_name</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, i) => <Order order={order}
                    editOrder={editOrder}
                    deleteOrder={deleteOrder}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default OrdersTable;