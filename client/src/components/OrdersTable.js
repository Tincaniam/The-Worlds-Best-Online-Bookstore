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