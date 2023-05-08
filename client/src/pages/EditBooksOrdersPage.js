import React from 'react';

export const BooksOrdersPage = () => {

    return (
        <div>
            <h3>Books_Orders</h3>
            <br />
            <h5>Add Books_Orders relationship</h5>
            <input
                type="number"
                placeholder="book_id"
                />
            <input
                type="number"
                placeholder="order_id"
                />
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