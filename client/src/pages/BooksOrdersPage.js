/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React, { useState } from 'react';
import BooksOrdersTable from '../components/BooksOrdersTable';

function BooksOrdersPage () {
    const [books_orders, setBooksOrders] = useState([]);

    const [books, setBooks] = useState([]); // for dropdown
    const [orders, setOrders] = useState([]); // for dropdown

    // books_orders states
    const [book_id, setBookId] = useState('');
    const [order_id, setOrderId] = useState('');

    const addBookOrder = async () => {
        const newBookOrder = { book_id, order_id };

        const response = await fetch('/api/books_orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBookOrder)
        });

        if (!response.ok) {
            const json = await response.json();
            if (response.status === 500){
                alert("Book_Order relationship already exists");
                fetchBooksOrders();
            }
            else {
                alert(json.error);
            }
        }
        else {
            alert("Book_Order added");
            fetchBooksOrders();
        }
    }

    const fetchBooksOrders = async () => {
        const response = await fetch('/api/books_orders');
        const json = await response.json();
        setBooksOrders(json);
    }

    React.useEffect(() => {
        fetchBooksOrders();

        // fetch books for dropdown
        const fetchBooks = async () => {
            const response = await fetch('/api/books');
            const json = await response.json();
            setBooks(json);
        }

        // fetch orders for dropdown
        const fetchOrders = async () => {
            const response = await fetch('/api/orders');
            const json = await response.json();
            setOrders(json);
        }

        fetchBooks();
        fetchOrders();
    }, []);

    return (
        <div>
            <h3>Books_Orders</h3>
            <br />
            <h5>Add Book_Order</h5>
            <table>
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select value={book_id} onChange={e => setBookId(e.target.value)}>
                                <option value="">Select Book</option>
                                {books.map(book => (
                                    <option key={book.book_id} value={book.book_id}>{book.title}</option>
                                ))}
                            </select>
                        </td>
                        <td>
                            <select value={order_id} onChange={e => setOrderId(e.target.value)}>
                                <option value="">Select Order</option>
                                {orders.map(order => (
                                    <option key={order.order_id} value={order.order_id}>{order.order_id}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={addBookOrder}>Add Book_Order</button>
            <br />

            <BooksOrdersTable books_orders={books_orders} />
        </div>
    )
}

export default BooksOrdersPage;