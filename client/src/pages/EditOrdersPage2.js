import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditOrdersPage2 = () => {

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
                value = "2"
                />
            <input
                className='form-control'
                type="number"
                value = "1"
                />
            <input
                className='form-control'
                type="text"
                value = "2022-08-23 23:24:00"
                />
            <input
                className='form-control'
                type="decimal"
                value = "99.75"
                />
            <button className="button-medium" onClick={backToOrders}>Edit Order</button>
        </div>
    );
}

export default EditOrdersPage2;