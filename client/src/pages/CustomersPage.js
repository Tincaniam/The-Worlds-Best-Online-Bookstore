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
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const addCustomer = async () => {
        const newCustomer = {
            first_name,
            last_name,
            address,
            email,
            phone_number
        };

        // check for empty fields
        const emptyFields = [];
        if (!newCustomer.first_name) emptyFields.push('first_name');
        if (!newCustomer.last_name) emptyFields.push('last_name');
        if (!newCustomer.address) emptyFields.push('address');
        if (!newCustomer.email) emptyFields.push('email');
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
            <input
                className={emptyFields.includes('title') ? 'error' : 'customerField'}
                type="text"
                placeholder="first_name"
                value={first_name}
                onChange={e => setFirstName(e.target.value)}
                />
            <input
                className={emptyFields.includes('title') ? 'error' : 'customerField'}
                type="text"
                placeholder="last_name"
                value={last_name}
                onChange={e => setLastName(e.target.value)}
                />
            <input
                className={emptyFields.includes('title') ? 'error' : 'customerField'}
                type="text"
                placeholder="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                />
            <input
                className={emptyFields.includes('title') ? 'error' : 'customerField'}
                type="text"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            <input
                className={emptyFields.includes('title') ? 'error' : 'customerField'}
                type="text"
                placeholder="phone_number"
                value={phone_number}
                onChange={e => setPhoneNumber(e.target.value)}
                />
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