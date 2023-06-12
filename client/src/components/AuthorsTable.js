/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';
import Author from './Author';

// Define an AuthorsTable component for the Authors page.
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
