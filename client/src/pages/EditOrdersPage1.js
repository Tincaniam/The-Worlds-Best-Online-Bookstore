import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditOrdersPage1 = () => {

    let history = useHistory();
    const backToOrders = () => {
        history.push('/orders');
    }

    return (
        <div>
            <h3>Orders</h3>
            <br />
            <h5>Edit Order</h5>
            <input
                className='form-control'
                type="number"
                value = "1"
                />
            <input
                className='form-control'
                type="number"
                value = "1"
                />
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
            <button className="button-medium" onClick={backToOrders}>Edit Order</button>
        </div>
    );
}

export default EditOrdersPage1;