/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';
import Book from './Book';

function BooksTable({ books, editBook, deleteBook }) {
    return (
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
                {books.map((book, i) => <Book book={book}
                    editBook={editBook}
                    deleteBook={deleteBook}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default BooksTable;
