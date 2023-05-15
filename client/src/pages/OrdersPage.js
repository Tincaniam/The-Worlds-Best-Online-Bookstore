import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import OrdersTable from '../components/OrdersTable';
import { normalizeDate } from '../components/utils';

function OrdersPage ({setOrderToEdit}) {
    const [orders, setOrders] = React.useState([]);
    const history = useHistory();

    const [customers, setCustomers] = useState([]); // for dropdown
    const [discountCodes, setDiscountCodes] = useState([]); // for dropdown

    // order states
    const [customer_id, setCustomerId] = useState('');
    const [order_date, setOrderDate] = useState('');
    const [order_total, setOrderTotal] = useState('');
    const [discount_code_id, setDiscountCodeId] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const addOrder = async () => {
        const newOrder = {
            customer_id,
            order_date,
            order_total,
            discount_code_id
        };
        
        // normalize date format
        newOrder.order_date = normalizeDate(newOrder.order_date);

        // check for empty fields
        const emptyFields = [];
        if (!newOrder.customer_id) emptyFields.push('customer_id');
        if (!newOrder.order_date) emptyFields.push('order_date');
        if (!newOrder.order_total) emptyFields.push('order_total');
        // Discount code is optional

        if (emptyFields.length) {
            setEmptyFields(emptyFields);
            return;
        }

        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            alert("Order added!")
            fetchOrders();
        }
    }

    const editOrder = order => {
        setOrderToEdit(order);
        history.push('/edit-orders');
    }

    const deleteOrder = async order_id => {
        const response = await fetch(`/api/orders/${order_id}`, {method: 'DELETE'});
        if (response.ok) {
            setOrders(orders.filter(order => order.order_id !== order_id));
        } else {
            console.log('error');
        }
    };

    const fetchOrders = async () => {
        const response = await fetch('/api/orders');
        if (response.ok) {
            const json = await response.json();
            setOrders(json);
        }
    }

    React.useEffect(() => {
        fetchOrders();

        // Get customers for dropdown
        const fetchCustomers = async () => {
            const response = await fetch('/api/customers');
            if (response.ok) {
                const json = await response.json();
                console.log(json);
                setCustomers(json);
            }
        };

        fetchCustomers();

        // Get discount codes for dropdown
        const fetchDiscountCodes = async () => {
            const response = await fetch('/api/discount_codes');
            if (response.ok) {
                const json = await response.json();
                console.log(json);

                // Add empty option
                json.unshift({discount_code_id: '', discount_code_name: ''});
                setDiscountCodes(json);
            }
        };

        fetchDiscountCodes();
    }, []);

    return (
        <div>
            <h1>Orders</h1>
            <br />
            <h5>Add Order</h5>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Order Date</th>
                        <th>Order Total</th>
                        <th>Discount Code</th>
                    </tr>
                </thead>
            <td>
                <select
                    className={emptyFields.includes('customer_id') ? 'error' : 'orderField'}
                    onChange={e => setCustomerId(e.target.value)}>
                    <option value="">Select Customer</option>
                    {customers.map(customer => (
                        <option key={customer.customer_id} value={customer.customer_id}>{customer.first_name} {customer.last_name}</option>
                    ))}
                </select>
            </td>
            <td>
                <input 
                    className={emptyFields.includes('order_date') ? 'error' : 'orderField'}
                    type="date"
                    value={order_date}
                    onChange={e => setOrderDate(e.target.value)}
                    />
            </td>
            <td>
                <input
                    className={emptyFields.includes('order_total') ? 'error' : 'orderField'}
                    type="number"
                    value={order_total}
                    onChange={e => setOrderTotal(e.target.value)}
                    />
            </td>
            <td>
                <select
                    className={emptyFields.includes('discount_code_id') ? 'error' : 'orderField'}
                    onChange={e => setDiscountCodeId(e.target.value)}>
                    {discountCodes.map(discountCode => (
                        <option key={discountCode.discount_code_id} value={discountCode.discount_code_id}>{discountCode.discount_code_name}</option>
                    ))}
                </select>
            </td>
        </table>
            <button className="button-medium"
                onClick={addOrder}
            >Add Order</button>

            <br /><br />
            <OrdersTable orders={orders} editOrder={editOrder} deleteOrder={deleteOrder} />
        </div>
    );
}

export default OrdersPage;
            

            


// export const OrdersPage = () => {

//     let history = useHistory();

//     const editOrders1 = () => {
//         history.push('/edit-orders1');
//     }

//     const editOrders2 = () => {
//         history.push('/edit-orders2');
//     }

//     const editOrders3 = () => {
//         history.push('/edit-orders3');
//     }

//     // Temp hardcoded customers data for testing
//     const customers = [
//         {
//             customer_id: 1,
//             customer_name: 'Freddy Lupin',
//         },
//         {
//             customer_id: 2,
//             customer_name: 'Bob Bobberson',
//         },
//         {
//             customer_id: 3,
//             customer_name: 'Haily Sharp',
//         }
//     ];

//     // Temp hardcoded discount_codes data for testing
//     const discountCodes = [
//         {
//             discount_code_id: 1,
//             discount_code_name: '10OFF'
//         },
//         {
//             discount_code_id: 2,
//             discount_code_name: '20OFF'
//         },
//         {
//             discount_code_id: 3,
//             discount_code_name: '30OFF'
//         }
//     ];

//     return (
//         <div>
//             <h3>Orders</h3>
//             <br />
//             <h5>Add order</h5>
//             <select className='form-control'>
//                 {customers.map(customer => (
//                     <option key={customer.customer_id} value={customer.customer_id}>{customer.customer_name}</option>
//                 ))}
//             </select>
//             <input
//                 className='form-control'
//                 type="text"
//                 placeholder="order_date"
//                 />
//             <input
//                 className='form-control'
//                 type="decimal"
//                 placeholder="order_total"
//                 />
//             <select className='form-control'>
//                 {discountCodes.map(discountCode => (
//                     <option key={discountCode.discount_code_id} value={discountCode.discount_code_id}>{discountCode.discount_code_name}</option>
//                 ))}
//             </select>

//             <button className="button-medium">Add Order</button>

//             <br /><br />
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>order_id</th>
//                         <th>customer_id</th>
//                         <th>customer_name</th>
//                         <th>order_date</th>
//                         <th>order_total</th>
//                         <th>discount_code_id</th>
//                         <th>discount_code_name</th>
//                         <th>actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>1</td>
//                         <td>Freddy Lupin</td>
//                         <td>2023-01-03 07:05:45</td>
//                         <td>24.95</td>
//                         <td>1</td>
//                         <td>10OFF</td>
//                         <td>
//                             <button className="btn btn-outline-primary" onClick={editOrders1}>Edit</button>
//                             <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>2</td>
//                         <td>1</td>
//                         <td>Freddy Lupin</td>
//                         <td>2022-08-23 23:24:00</td>
//                         <td>99.75</td>
//                         <td>3</td>
//                         <td>30OFF</td>
//                         <td>
//                             <button className="btn btn-outline-primary" onClick={editOrders2}>Edit</button>
//                             <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>3</td>
//                         <td>3</td>
//                         <td>Haily Sharp</td>
//                         <td>2023-05-03 12:03:28</td>
//                         <td>55.12</td>
//                         <td>NULL</td>
//                         <td>NULL</td>
//                         <td>
//                             <button className="btn btn-outline-primary" onClick={editOrders3}>Edit</button>
//                             <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default OrdersPage;