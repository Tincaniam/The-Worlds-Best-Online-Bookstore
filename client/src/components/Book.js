/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';

// Define a Book component for the Books Table.
function Book({ book, editBook, deleteBook }) {
    return (

        <tr>
            <td>{book.book_id}</td>
            <td>{book.title}</td>
            <td>{book.publication_date}</td>
            <td>
                <button className="btn btn-outline-primary" onClick={() => {editBook(book)}}>Edit</button>
                <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteBook(book.book_id)}}>Delete</button>
            </td>
        </tr>
    );
}

export default Book;