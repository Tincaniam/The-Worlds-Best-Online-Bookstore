/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';
import BookAuthor from './BookAuthor';

function BooksAuthorsTable({ book_authors, editBookAuthor, deleteBookAuthor }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>book_id</th>
                    <th>book_title</th>
                    <th>author_id</th>
                    <th>author_name</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {book_authors.map((book_author, i) => <BookAuthor book_author={book_author}
                    deleteBookAuthor={deleteBookAuthor}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default BooksAuthorsTable;