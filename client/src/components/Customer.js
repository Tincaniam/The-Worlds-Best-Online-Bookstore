import React from 'react';

function Customer({ customer, editCustomer, deleteCustomer }) {
    return (

        <tr>
            <td>{customer.first_name}</td>
            <td>{customer.last_name}</td>
            <td>{customer.address}</td>
            <td>{customer.email_address}</td>
            <td>{customer.phone_number}</td>
            <td>
                <button className="btn btn-outline-primary" onClick={() => {editCustomer(customer)}}>Edit</button>
                <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteCustomer(customer.customer_id)}}>Delete</button>
            </td>
        </tr>
    );
}

export default Customer;