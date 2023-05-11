import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditOrdersPage1 = () => {

    let history = useHistory();
    const backToOrders = () => {
        history.push('/orders');
    }

    // Temp hardcoded customers data for testing
    const customers = [
        {
            customer_id: 1,
            customer_name: 'Freddy Lupin',
        },
        {
            customer_id: 2,
            customer_name: 'Bob Bobberson',
        },
        {
            customer_id: 3,
            customer_name: 'Haily Sharp',
        }
    ];

    // Temp hardcoded discount_codes data for testing
    const discountCodes = [
        {
            discount_code_id: 1,
            discount_code_name: '10OFF'
        },
        {
            discount_code_id: 2,
            discount_code_name: '20OFF'
        },
        {
            discount_code_id: 3,
            discount_code_name: '30OFF'
        }
    ];

    return (
        <div>
            <h3>Orders</h3>
            <br />
            <h5>Edit Order</h5>
            <select className='form-control' value="Freddy Lupin">
                {customers.map(customer => (
                    <option key={customer.customer_id} value={customer.customer_id}>{customer.customer_name}</option>
                ))}
            </select>
            <input
                className='form-control'
                type="text"
                value = "2023-01-03 07:05:45"
                />
            <input
                className='form-control'
                type="decimal"
                value = "24.95"
                />
            <select className='form-control' value="10OFF">
                {discountCodes.map(discountCode => (
                    <option key={discountCode.discount_code_id} value={discountCode.discount_code_id}>{discountCode.discount_code_name}</option>
                ))}
            </select>
            <button className="button-medium" onClick={backToOrders}>Edit Order</button>
        </div>
    );
}

export default EditOrdersPage1;