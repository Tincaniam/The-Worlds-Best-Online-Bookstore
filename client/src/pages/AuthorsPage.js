import React from 'react';
import { useHistory } from 'react-router-dom';

export const AuthorsPage = () => {

    let history = useHistory();

    const editAuthors1 = () => {
        history.push('/edit-authors1');
    }

    const editAuthors2 = () => {
        history.push('/edit-authors2');
    }

    const editAuthors3 = () => {
        history.push('/edit-authors3');
    }

    const editAuthors4 = () => {
        history.push('/edit-authors4');
    }

    return (
        <div>
            <h3>Authors</h3>
            <br />
            <h5>Add Author</h5>
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
            <button className="button-medium">Add Author</button>

            <br /><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>author_id</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Leo</td>
                        <td>Tolstoy</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editAuthors1}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Terry</td>
                        <td>Pratchett</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editAuthors2}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Neil</td>
                        <td>Gaiman</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editAuthors3}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Harper</td>
                        <td>Lee</td>
                        <td>
                            <button className="btn btn-outline-primary" onClick={editAuthors4}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AuthorsPage;