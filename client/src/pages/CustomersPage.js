import React from 'react';

export const CustomersPage = () => {

    return (
        <div>
            <h3>Customers</h3>
            <br />
            <h5>Add Customer</h5>
            <input
                className='form-control'
                type="text"
                placeholder="first_name"
                />
            <input
                className='form-control'
                type="text"
                placeholder="last_name"
                />
            <input
                className='form-control'
                type="text"
                placeholder="address"
                />
            <input
                className='form-control'
                type="text"
                placeholder="email_address"
                />
            <input
                className='form-control'
                type="text"
                placeholder="phone_number"
                />
            <button className="button-medium">Add Customer</button>

            <br /><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>customer_id</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>address</th>
                        <th>email_address</th>
                        <th>phone_number</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Freddy</td>
                        <td>Lupin</td>
                        <td>1111 Wolftone Dr, New York, NY 10001</td>
                        <td>flupin@email.com</td>
                        <td>5038675309</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bob</td>
                        <td>Bobberson</td>
                        <td>4567 Street Dr, Oregon City, OR 97045</td>
                        <td>bbobberson@email.com</td>
                        <td>NULL</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Haily</td>
                        <td>Sharp</td>
                        <td>22365 S Wall St, Oregon City, OR 97045</td>
                        <td>hsharp@email.com</td>
                        <td>NULL</td>
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

export default CustomersPage;