import React from 'react';
import { useHistory } from 'react-router-dom';

export const BooksPage = () => {

    let history = useHistory();

    const editBooks1 = () => {
        history.push('/edit-books1');
    }

    const editBooks2 = () => {
        history.push('/edit-books2');
    }

    const editBooks3 = () => {
        history.push('/edit-books3');
    }

    return (
        <div>
            <h3>Books</h3>
            <br />
            <h5>Add Book</h5>
            <input
                className='form-control'
                type="text"
                placeholder="title"
                />
            <input
                className='form-control'
                type="text"
                placeholder="publication_date"
                />
            <button className="button-medium">Add Books</button>

            <br /><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>book_id</th>
                        <th>title</th>
                        <th>publication_date</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>War and Peace</td>
                        <td>1869-01-01</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editBooks1}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Good Omens</td>
                        <td>1990-05-10</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editBooks2}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>To Kill a Mockingbird</td>
                        <td>1960-07-11</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editBooks3}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BooksPage;