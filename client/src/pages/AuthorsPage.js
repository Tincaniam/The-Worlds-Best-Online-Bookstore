import React from 'react';

export const AuthorsPage = () => {

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
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Terry</td>
                        <td>Pratchett</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Neil</td>
                        <td>Gaiman</td>
                        <td>
                            <button className="btn btn-outline-primary">Edit</button>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Harper</td>
                        <td>Lee</td>
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

export default AuthorsPage;