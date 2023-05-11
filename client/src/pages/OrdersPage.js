import React from 'react';
import { useHistory } from 'react-router-dom';

export const OrdersPage = () => {

    let history = useHistory();

    const editOrders1 = () => {
        history.push('/edit-orders1');
    }

    const editOrders2 = () => {
        history.push('/edit-orders2');
    }

    const editOrders3 = () => {
        history.push('/edit-orders3');
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
            <h5>Add order</h5>
            <select className='form-control'>
                {customers.map(customer => (
                    <option key={customer.customer_id} value={customer.customer_id}>{customer.customer_name}</option>
                ))}
            </select>
            <input
                className='form-control'
                type="text"
                placeholder="order_date"
                />
            <input
                className='form-control'
                type="decimal"
                placeholder="order_total"
                />
            <select className='form-control'>
                {discountCodes.map(discountCode => (
                    <option key={discountCode.discount_code_id} value={discountCode.discount_code_id}>{discountCode.discount_code_name}</option>
                ))}
            </select>

            <button className="button-medium">Add Order</button>

            <br /><br />
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
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>Freddy Lupin</td>
                        <td>2023-01-03 07:05:45</td>
                        <td>24.95</td>
                        <td>1</td>
                        <td>10OFF</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editOrders1}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>1</td>
                        <td>Freddy Lupin</td>
                        <td>2022-08-23 23:24:00</td>
                        <td>99.75</td>
                        <td>3</td>
                        <td>30OFF</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editOrders2}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3</td>
                        <td>Haily Sharp</td>
                        <td>2023-05-03 12:03:28</td>
                        <td>55.12</td>
                        <td>NULL</td>
                        <td>NULL</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editOrders3}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrdersPage;