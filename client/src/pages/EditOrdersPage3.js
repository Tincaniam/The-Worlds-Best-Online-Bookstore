import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditOrdersPage3 = () => {

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
                value = "3"
                />
            <input
                className='form-control'
                type="number"
                value = "3"
                />
            <input
                className='form-control'
                type="text"
                value = "2023-05-03 12:03:28"
                />
            <input
                className='form-control'
                type="decimal"
                value = "55.12"
                />
            <button className="button-medium" onClick={backToOrders}>Edit Order</button>
        </div>
    );
}

export default EditOrdersPage3;