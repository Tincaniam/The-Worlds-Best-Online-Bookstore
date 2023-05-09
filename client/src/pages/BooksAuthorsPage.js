import React from 'react';

export const BooksAuthorsPage = () => {

    // temp books hardcoded for testing
    const books = [
        { book_id: 1, title: 'War and Peace' },
        { book_id: 2, title: 'Good Omens' },
        { book_id: 3, title: 'To Kill a Mockingbird' }
    ];

    // temp authors hardcoded for testing
    const authors = [
        { author_id: 1, first_name: 'Leo', last_name: 'Tolstoy' },
        { author_id: 2, first_name: 'Terry', last_name: 'Pratchett' },
        { author_id: 3, first_name: 'Neil', last_name: 'Gaiman' },
        { author_id: 4, first_name: 'Harper', last_name: 'Lee'}
    ];

    return (
        <div>
            <h3>Books_Authors</h3>
            <br />
            <h5>Add Books_Authors relationship</h5>
            <select className='form-control'>
                {books.map(book => (
                    <option key={book.book_id} value={book.book_id}>{book.title}</option>
                ))}
            </select>
            <select className='form-control'>
                {authors.map(author => (
                    <option key={author.author_id} value={author.author_id}>{author.first_name} {author.last_name}</option>
                ))}
            </select>
            <button className="button-medium">Add Books_Authors relationship</button>

            <br /><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>book_id</th>
                        <th>author_id</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>4</td>
                        <td>
                            <button className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BooksAuthorsPage;