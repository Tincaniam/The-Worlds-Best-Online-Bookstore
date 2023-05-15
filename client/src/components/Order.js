import React from 'react';

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