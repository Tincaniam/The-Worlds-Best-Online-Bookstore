/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';
import Customer from './Customer';

function CustomersTable({ customers, editCustomer, deleteCustomer }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>customer_id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>address</th>
                    <th>email_address</th>
                    <th>phone_number</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, i) => <Customer customer={customer}
                    editCustomer={editCustomer}
                    deleteCustomer={deleteCustomer}
                    key={i} />)}
            </tbody>    
        </table>
    );
}   

export default CustomersTable;