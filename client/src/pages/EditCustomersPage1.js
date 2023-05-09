import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditCustomersPage1 = () => {

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
                value = "Freddy"
                />
            <input
                className='form-control'
                type="text"
                value = "Lupin"
                />
            <input
                className='form-control'
                type="text"
                value = "1111 Wolftone Dr, New York, NY 10001"
                />
            <input
                className='form-control'
                type="text"
                value = "flupin@email.com"
                />
            <input
                className='form-control'
                type="text"
                value = "5038675309"
                />
            <button className="button-medium" onClick={backToCustomers}>Edit Customer</button>
        </div>
    );
}

export default EditCustomersPage1;