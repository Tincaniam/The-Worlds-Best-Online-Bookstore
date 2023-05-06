import React from 'react';

export const BooksAuthorsPage = () => {

    return (
        <div>
            <h3>Book_Authors</h3>
            <br />
            <h5>Add Books_Authors relationship</h5>
            <input
                type="number"
                placeholder="book_id"
                />
            <input
                type="number"
                placeholder="author_id"
                />
            <button className="button-medium">Add Books_Authors relationship</button>

            <br /><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>book_id</th>
                        <th>author_id</th>
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
                        <td>4</td>
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

export default BooksAuthorsPage;