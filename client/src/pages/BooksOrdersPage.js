import React from 'react';

export const BooksOrdersPage = () => {

    // temp books hardcoded for testing
    const books = [
        { book_id: 1, title: 'War and Peace' },
        { book_id: 2, title: 'Good Omens' },
        { book_id: 3, title: 'To Kill a Mockingbird' }
    ];

    // temp orders hardcoded for testing
    const orders = [
        { order_id: 1, order_date: '2020-01-01' },
        { order_id: 2, order_date: '2020-02-02' },
        { order_id: 3, order_date: '2020-03-03' }
    ];

    return (
        <div>
            <h3>Books_Orders</h3>
            <br />
            <h5>Add Books_Orders relationship</h5>
            <select className='form-control'>
                {books.map(book => (
                    <option key={book.book_id} value={book.book_id}>{book.title}</option>
                ))}
            </select>
            <select className='form-control'>
                {orders.map(order => (
                    <option key={order.order_id} value={order.order_id}>{order.order_id}</option>
                ))}

            </select>

            <button className="button-medium">Add Books_Orders relationship</button>

            <br /><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>book_id</th>
                        <th>order_id</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>2</td>
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

export default BooksOrdersPage;