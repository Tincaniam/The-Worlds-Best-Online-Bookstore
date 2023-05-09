import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditCustomersPage3 = () => {

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
                value = "Haily"
                />
            <input
                className='form-control'
                type="text"
                value = "Sharp"
                />
            <input
                className='form-control'
                type="text"
                value = "22365 S Wall St, Oregon City, OR 97045"
                />
            <input
                className='form-control'
                type="text"
                value = "hsharp@email.com"
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

export default EditCustomersPage3;