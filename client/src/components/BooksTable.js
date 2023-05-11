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
