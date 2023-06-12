/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import BooksAuthorsTable from '../components/BooksAuthorsTable';

function BooksAuthorsPage ({setBookAuthorToEdit}){
    const [book_authors, setBooksAuthors] = React.useState([]);
    const history = useHistory();

    const [books, setBooks] = useState([]); // for dropdown
    const [authors, setAuthors] = useState([]); // for dropdown

    // book_author states
    const [book_id, setBookID] = useState('');
    const [author_id, setAuthorID] = useState('');

    const addBookAuthor = async () => {    
        const newBookAuthor = {
            book_id,
            author_id
        };

        const response = await fetch('/api/books_authors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBookAuthor)
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
        } else {
            alert("Book_Author added");
            fetchBooksAuthors();
        }
    }

    const editBookAuthor = book_author => {
        setBookAuthorToEdit({book_author});
        console.log("book_author: " + book_author);
        history.push('/edit-books_authors');
    }


    const deleteBookAuthor = async (book_id, author_id) => {
        const response = await fetch(`/api/books_authors/${book_id}/${author_id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
        } else {
            alert("Book_Author deleted");
            fetchBooksAuthors();
        }
    }

    const fetchBooksAuthors = async () => {
        const response = await fetch('/api/books_authors');
        const json = await response.json();
        setBooksAuthors(json);
    }

    React.useEffect(() => {
        fetchBooksAuthors();

        // Get Books for dropdown
        const fetchBooks = async () => {
            const response = await fetch('/api/books');
            const json = await response.json();
            setBooks(json);
        };

        fetchBooks();

        // Get Authors for dropdown
        const fetchAuthors = async () => {
            const response = await fetch('/api/authors');
            const json = await response.json();
            setAuthors(json);
        };

        fetchAuthors();
    }, []);

    return (
        <div>
            <h3>Books_Authors</h3>
            <br />
            <h5>Add Book_Author</h5>
            <table>
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select value={book_id} onChange={e => setBookID(e.target.value)}>
                                <option value="">Select Book</option>
                                {books.map((book, i) => <option value={book.book_id} key={i}>{book.title}</option>)}
                            </select>
                        </td>
                        <td>
                            <select value={author_id} onChange={e => setAuthorID(e.target.value)}>
                                <option value="">Select Author</option>
                                {authors.map((author, i) => <option value={author.author_id} key={i}>{author.first_name} {author.last_name}</option>)}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={addBookAuthor}>Add Book_Author</button>
            <br />

            <BooksAuthorsTable book_authors={book_authors} editBookAuthor={editBookAuthor} deleteBookAuthor={deleteBookAuthor} />
        </div>
    );
}

export default BooksAuthorsPage;








