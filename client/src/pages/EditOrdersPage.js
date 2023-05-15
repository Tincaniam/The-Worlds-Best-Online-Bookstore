import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export const EditOrdersPage = ({orderToEdit}) => {

    const [customers, setCustomers] = useState([]);
    const [discountCodes, setDiscountCodes] = useState([]);

    // order states
    const [customer_id, setCustomerId] = useState(orderToEdit.customer_id);
    const [order_date, setOrderDate] = useState(orderToEdit.order_date);
    const [order_total, setOrderTotal] = useState(orderToEdit.order_total);
    const [discount_code_id, setDiscountCodeId] = useState(orderToEdit.discount_code_id);
    const [emptyFields, setEmptyFields] = useState([]);

    let history = useHistory();

    const backToOrders = () => {
        history.push('/orders');
    }

    const editOrder = async () => {
        const editedOrder = { customer_id, order_date, order_total, discount_code_id };
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
        fetchCustomers();
        fetchDiscountCodes();
    }
    , []);

    const fetchCustomers = async () => {
        const response = await fetch('/api/customers');
        const json = await response.json();
        setCustomers(json);
    }

    const fetchDiscountCodes = async () => {
        const response = await fetch('/api/discount_codes');
        const json = await response.json();

        // Add empty option
        json.unshift({discount_code_id: "", discount_code_name: ""});
        setDiscountCodes(json);
    }

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
                                type="date"
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
                                value = {discount_code_name}
                                onChange={e => setDiscountCodeId(e.target.value)}
                                >
                                <option value="">Select a discount code</option>

                                {discountCodes.map(discountCode => (
                                    <option key={discountCode.discount_code_id} value={discountCode.discount_code_id}>{discountCode.discount_code}</option>
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
