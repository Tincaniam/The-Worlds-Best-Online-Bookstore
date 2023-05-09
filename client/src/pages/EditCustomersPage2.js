import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditCustomersPage2 = () => {

    let history = useHistory();
    const backToCustomers = () => {
        history.push('/customers');
    }

    return (
        <div>
            <h3>Customers</h3>
            <br />
            <h5>Edit Customer</h5>
            <input
                className='form-control'
                type="text"
                value = "Bob"
                />
            <input
                className='form-control'
                type="text"
                value = "Bobberson"
                />
            <input
                className='form-control'
                type="text"
                value = "4567 Street Dr, Oregon City, OR 97045"
                />
            <input
                className='form-control'
                type="text"
                value = "bbobberson@email.com"
                />
            <input
                className='form-control'
                type="text"
                value = "NULL"
                />
            <button className="button-medium" onClick={backToCustomers}>Edit Customer</button>
        </div>
    );
}

export default EditCustomersPage2;