import React from 'react';

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