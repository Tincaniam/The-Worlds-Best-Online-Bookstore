import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import CustomersTable from '../components/CustomersTable';

function CustomersPage ({setCustomerToEdit}) {
    const [customers, setCustomers] = React.useState([]);
    const history = useHistory();

    // customer states
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email_address, setEmailAddress] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const addCustomer = async () => {
        const newCustomer = {
            first_name,
            last_name,
            address,
            email_address,
            phone_number
        };

        console.log(newCustomer)

        // check for empty fields
        const emptyFields = [];
        if (!newCustomer.first_name) emptyFields.push('first_name');
        if (!newCustomer.last_name) emptyFields.push('last_name');
        if (!newCustomer.address) emptyFields.push('address');
        if (!newCustomer.email_address) emptyFields.push('email_address');
        // phone_number is optional

        if (emptyFields.length) {
            setEmptyFields(emptyFields);
            return;
        }

        const response = await fetch('/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer)
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
            setEmptyFields(json.emptyFields);
        }
        else {
            alert("Customer added!")
            fetchCustomers();
        }
    }

    const editCustomer = customer => {
        setCustomerToEdit(customer);
        history.push('/edit-customers');
    }

    const deleteCustomer = async customer_id => {
        const response = await fetch(`/api/customers/${customer_id}`, {method: 'DELETE'});
        if (response.ok) {
            setCustomers(customers.filter(customer => customer.customer_id !== customer_id));
        }
        else {
            console.log('error');
        }
    };

    const fetchCustomers = async () => {
        const response = await fetch('/api/customers');
        const json = await response.json();
        setCustomers(json);
    };

    React.useEffect(() => {
        fetchCustomers();
    }
    , []);

    return (
        <div>
            <h3>Customers</h3>
            <br />
            <h5>Add Customer</h5>

            <table>
                <thead>
                    <tr>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>address</th>
                        <th>email_address</th>
                        <th>phone_number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                className={emptyFields.includes('first_name') ? 'error' : 'customerField'}
                                type="text"
                                placeholder="first_name"
                                value={first_name}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                className={emptyFields.includes('last_name') ? 'error' : 'customerField'}
                                type="text"
                                placeholder="last_name"
                                value={last_name}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                className={emptyFields.includes('address') ? 'error' : 'customerField'}
                                type="text"
                                placeholder="address"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                className={emptyFields.includes('email_address') ? 'error' : 'customerField'}
                                type="text"
                                placeholder="email_address"
                                value={email_address}
                                onChange={e => setEmailAddress(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                className={emptyFields.includes('phone_number') ? 'error' : 'customerField'}
                                type="text"
                                placeholder="phone_number"
                                value={phone_number}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <button className="button-medium"
                onClick={addCustomer}
            >Add Customer</button>

            <br />
            <br />
            <CustomersTable customers={customers} editCustomer={editCustomer} deleteCustomer={deleteCustomer} />
        </div>
    );
}

export default CustomersPage;