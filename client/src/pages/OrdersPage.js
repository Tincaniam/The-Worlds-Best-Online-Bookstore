/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import OrdersTable from '../components/OrdersTable';
import { normalizeDate } from '../components/utils';

function OrdersPage ({setOrderToEdit}) {
    const [orders, setOrders] = React.useState([]);
    const history = useHistory();

    const [customers, setCustomers] = useState([]); // for dropdown
    const [discountCodes, setDiscountCodes] = useState([]); // for dropdown

    // order states
    const [customer_id, setCustomerId] = useState('');
    const [order_date, setOrderDate] = useState('');
    const [order_total, setOrderTotal] = useState('');
    const [discount_code_id, setDiscountCodeId] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const addOrder = async () => {
        const newOrder = {
            customer_id,
            order_date,
            order_total,
            discount_code_id
        };
        
        // normalize date format
        newOrder.order_date = normalizeDate(newOrder.order_date);

        // check for empty fields
        const emptyFields = [];
        if (!newOrder.customer_id) emptyFields.push('customer_id');
        if (!newOrder.order_date) emptyFields.push('order_date');
        if (!newOrder.order_total) emptyFields.push('order_total');
        // Discount code is optional

        if (emptyFields.length) {
            setEmptyFields(emptyFields);
            return;
        }

        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            alert("Order added!")
            fetchOrders();
        }
    }

    const editOrder = order => {
        setOrderToEdit(order);
        history.push('/edit-orders');
    }

    const deleteOrder = async order_id => {
        const response = await fetch(`/api/orders/${order_id}`, {method: 'DELETE'});
        if (response.ok) {
            setOrders(orders.filter(order => order.order_id !== order_id));
        } else {
            console.log('error');
        }
    };

    const fetchOrders = async () => {
        const response = await fetch('/api/orders');
        if (response.ok) {
            const json = await response.json();
            setOrders(json);
        }
    }

    React.useEffect(() => {
        fetchOrders();

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
    }, []);

    return (
        <div>
            <h3>Orders</h3>
            <br />
            <h5>Add Order</h5>
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
                                className={emptyFields.includes('customer_id') ? 'error' : 'orderField'}
                                onChange={e => setCustomerId(e.target.value)}>
                                <option value="">Select Customer</option>
                                {customers.map(customer => (
                                    <option key={customer.customer_id} value={customer.customer_id}>{customer.first_name} {customer.last_name}</option>
                                ))}
                            </select>
                        </td>
                        <td>
                            <input 
                                className={emptyFields.includes('order_date') ? 'error' : 'orderField'}
                                type="date"
                                value={order_date}
                                onChange={e => setOrderDate(e.target.value)}
                                />
                        </td>
                        <td>
                            <input
                                className={emptyFields.includes('order_total') ? 'error' : 'orderField'}
                                type="number"
                                value={order_total}
                                onChange={e => setOrderTotal(e.target.value)}
                                />
                        </td>
                        <td>
                            <select
                                className={emptyFields.includes('discount_code_id') ? 'error' : 'orderField'}
                                onChange={e => setDiscountCodeId(e.target.value)}>
                                <option value="">Select Discount Code</option>
                                {discountCodes.map(discountCode => (
                                    <option key={discountCode.discount_code_id} value={discountCode.discount_code_id}>{discountCode.discount_code_name}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="button-medium"
                onClick={addOrder}
            >Add Order</button>

            <br /><br />
            <OrdersTable orders={orders} editOrder={editOrder} deleteOrder={deleteOrder} />
        </div>
    );
}

export default OrdersPage;
