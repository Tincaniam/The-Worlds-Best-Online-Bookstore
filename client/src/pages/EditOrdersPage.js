/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export const EditOrdersPage = ({orderToEdit}) => {

    const [customers, setCustomers] = useState([]);  // for dropdown
    const [discountCodes, setDiscountCodes] = useState([]);  // for dropdown

    // order states
    const old_customer_id = orderToEdit.customer_id;

    const [customer_id, setCustomerId] = useState(orderToEdit.customer_id);
    const [order_date, setOrderDate] = useState(orderToEdit.order_date);
    const [order_total, setOrderTotal] = useState(orderToEdit.order_total);
    const [discount_code_id, setDiscountCodeId] = useState(orderToEdit.discount_code_id);
    const [discount_code_name, setDiscountCodeName] = useState(orderToEdit.discount_code_name);
    const [emptyFields, setEmptyFields] = useState([]);

    let history = useHistory();

    const backToOrders = () => {
        history.push('/orders');
    }

    const editOrder = async () => {
        const editedOrder = { customer_id, order_date, order_total, discount_code_id };

        // Remove empty discount_code_id
        if (editedOrder.discount_code_id === '') {
            delete editedOrder.discount_code_id;
        }
        
        console.log("old_customer_id: " + old_customer_id);
        const response = await fetch(`/api/orders/${orderToEdit.order_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedOrder)
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            alert("Order edited!")
            history.push('/orders');
        }
    };

    React.useEffect(() => {

        // Get customers for dropdown
        const fetchCustomers = async () => {
            const response = await fetch('/api/customers');
            if (response.ok) {
                const json = await response.json();
                console.log(json);
                setCustomers(json);
            }
        };

        fetchCustomers();
    
        // Get discount codes for dropdown
        const fetchDiscountCodes = async () => {
            const response = await fetch('/api/discount_codes');
            if (response.ok) {
                const json = await response.json();
                console.log(json);
    
                // Add empty option
                json.unshift({discount_code_id: '', discount_code_name: ''});
                setDiscountCodes(json);
            }
        };

        fetchDiscountCodes();
    }
    , []);

    return (
        <div>
            <h3>Orders</h3>
            <br />
            <h5>Edit Order</h5>

            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Order Date</th>
                        <th>Order Total</th>
                        <th>Discount Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select
                                className={emptyFields.includes("customer_id") ? "error" : "orderField"}
                                value = {customer_id}
                                onChange={e => setCustomerId(e.target.value)}
                                >
                                {customers.map(customer => (
                                    <option key={customer.customer_id} value={customer.customer_id}>{customer.first_name} {customer.last_name}</option>
                                ))}
                            </select>
                        </td>
                        <td>
                            <input
                                className={emptyFields.includes("order_date") ? "error" : "orderField"}
                                type="text"
                                value = {order_date}
                                onChange={e => setOrderDate(e.target.value)}
                                />
                        </td>
                        <td>
                            <input
                                className={emptyFields.includes("order_total") ? "error" : "orderField"}
                                type="number"
                                value = {order_total}
                                onChange={e => setOrderTotal(e.target.value)}
                                />
                        </td>
                        <td>
                            <select
                                className={emptyFields.includes("discount_code_id") ? "error" : "orderField"}
                                value = {discount_code_id}
                                onChange={e => setDiscountCodeId(e.target.value)}
                                >

                                {discountCodes.map(discountCode => (
                                    <option key={discountCode.discount_code_id} value={discountCode.discount_code_id}>{discountCode.discount_code_name}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button className="button-medium" onClick={backToOrders}>Cancel</button>
                <button className="button-medium" onClick={editOrder}>Edit Order</button>
            </div>
        </div>
    );
}

export default EditOrdersPage;
