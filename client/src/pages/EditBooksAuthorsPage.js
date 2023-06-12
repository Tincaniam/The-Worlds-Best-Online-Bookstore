/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

export const EditBooksAuthorsPage = ({bookAuthorToEdit}) => {

    console.log("bookAuthorToEdit:")
    console.log(bookAuthorToEdit);
    const [books, setBooks] = useState([]);  // for dropdown
    const [authors, setAuthors] = useState([]);  // for dropdown

    // book_author states
    const old_book_id = bookAuthorToEdit.book_author.book_id;
    const old_author_id = bookAuthorToEdit.book_author.author_id;
    const [book_id, setBookId] = useState(bookAuthorToEdit.book_author.book_id);
    const [author_id, setAuthorId] = useState(bookAuthorToEdit.book_author.author_id);

    let history = useHistory();

    const backToBooksAuthors = () => {
        history.push('/books_authors');
    }

    const editBookAuthor = async () => {
        const editedBookAuthor = { book_id, author_id };
        console.log(book_id);
        console.log(editedBookAuthor)
        fetch(`/api/books_authors/${old_book_id}/${old_author_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedBookAuthor)
        });

        alert("Book_Author edited!")
        history.push('/books_authors');
        
    };

    React.useEffect(() => {

        // Get books for dropdown
        const fetchBooks = async () => {
            const response = await fetch('/api/books');
            if (response.ok) {
                const json = await response.json();
                console.log(json);
                setBooks(json);
            }
        };

        fetchBooks();

        // Get authors for dropdown
        const fetchAuthors = async () => {
            const response = await fetch('/api/authors');
            if (response.ok) {
                const json = await response.json();
                console.log(json);
                setAuthors(json);
            }
        };

        fetchAuthors();
    }
    , []);

    return (
        <div>
            <h3>Books_Authors</h3>
            <br />
            <h5>Edit Book_Author</h5>

            <table>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select
                            value={book_id}
                            onChange={e => setBookId(e.target.value)}
                            >
                                {books.map(book => (
                                    <option key={book.book_id} value={book.book_id}>{book.title}</option>
                                ))}
                            </select>
                        </td>
                        <td>
                            <select
                                value={author_id}
                                onChange={e => setAuthorId(e.target.value)}
                            >
                                {authors.map(author => (
                                    <option key={author.author_id} value={author.author_id}>{author.first_name} {author.last_name}</option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button className="button-medium" onClick={backToBooksAuthors}>Cancel</button>
                <button className="button-medium" onClick={editBookAuthor}>Edit Book_Author</button>
            </div>
        </div>
    );
};

export default EditBooksAuthorsPage;