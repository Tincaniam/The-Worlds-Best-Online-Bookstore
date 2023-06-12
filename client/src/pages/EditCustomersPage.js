/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export const EditCustomersPage = ({customerToEdit}) => {

    // Customer state variables
    const [first_name, setFirstName] = useState(customerToEdit.first_name);
    const [last_name, setLastName] = useState(customerToEdit.last_name);
    const [address, setAddress] = useState(customerToEdit.address);
    const [email_address, setEmailAddress] = useState(customerToEdit.email_address);
    const [phone_number, setPhoneNumber] = useState(customerToEdit.phone_number);
    const [emptyFields, setEmptyFields] = useState([]);

    let history = useHistory();

    // Go back to customers page
    const backToCustomers = () => {
        history.push('/customers');
    }

    // Edit customer
    const editCustomer = async () => {
        const editedCustomer = { first_name, last_name, address, email_address, phone_number };
        const response = await fetch(`/api/customers/${customerToEdit.customer_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedCustomer)
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            alert("Customer edited!")
            history.push('/customers');
        }
    };

    return (
        <div>
            <h3>Customers</h3>
            <br />
            <h5>Edit Customer</h5>
            <input
                className={emptyFields.includes("first_name") ? "error" : "customerField"}
                type="text"
                value = {first_name}
                onChange={e => setFirstName(e.target.value)}
                />
            <input
                className={emptyFields.includes("last_name") ? "error" : "customerField"}
                type="text"
                value = {last_name}
                onChange={e => setLastName(e.target.value)}
                />
            <input
                className={emptyFields.includes("address") ? "error" : "customerField"}
                type="text"
                value = {address}
                onChange={e => setAddress(e.target.value)}
                />
            <input
                className={emptyFields.includes("email_address") ? "error" : "customerField"}
                type="text"
                value = {email_address}
                onChange={e => setEmailAddress(e.target.value)}
                />
            <input
                className={emptyFields.includes("phone_number") ? "error" : "customerField"}
                type="text"
                value = {phone_number}
                onChange={e => setPhoneNumber(e.target.value)}
                />
            <div>
                <button className="button-medium" onClick={backToCustomers}>Cancel</button>
                <button className="button-medium" onClick={editCustomer}>Edit Customer</button>
            </div>
        </div>
    );
}

export default EditCustomersPage;