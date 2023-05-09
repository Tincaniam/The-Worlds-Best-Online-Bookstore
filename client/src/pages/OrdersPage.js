import React from 'react';

export const OrdersPage = () => {

    return (
        <div>
            <h3>Orders</h3>
            <br />
            <h5>Add order</h5>
            <input
                className='form-control'
                type="text"
                placeholder="customer_id"
                />
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
            <button className="button-medium">Add Order</button>

            <br /><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>order_id</th>
                        <th>customer_id</th>
                        <th>order_date</th>
                        <th>order_total</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>2023-01-03 07:05:45</td>
                        <td>24.95</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>1</td>
                        <td>2022-08-23 23:24:00</td>
                        <td>99.75</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3</td>
                        <td>2023-05-03 12:03:28</td>
                        <td>55.12</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrdersPage;