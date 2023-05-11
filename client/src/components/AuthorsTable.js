import React from 'react';
import Author from './Author';

function AuthorsTable({ authors, editAuthor, deleteAuthor }) {
    return (
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
                    {authors.map((author, i) => <Author author={author}
                        editAuthor={editAuthor}
                        deleteAuthor={deleteAuthor}
                        key={i} />)}
                </tbody>
            </table>
    );
}

export default AuthorsTable;
