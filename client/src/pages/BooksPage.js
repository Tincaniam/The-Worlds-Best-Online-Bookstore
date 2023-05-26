import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import BooksTable from '../components/BooksTable';
import { normalizeDate } from '../components/utils';

function BooksPage ({setBookToEdit}) {
    const [books, setBooks] = React.useState([]);
    const history = useHistory();

    // book states
    const [title, setTitle] = useState('');
    const [publication_date, setPublicationDate] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const addBook = async () => {
        const newBook = {
            title,
            publication_date
        };
        
        // normalize date format
        newBook.publication_date = normalizeDate(newBook.publication_date);

        // check for empty fields
        const emptyFields = [];
        if (!newBook.title) emptyFields.push('title');
        if (!newBook.publication_date) emptyFields.push('publication_date');

        if (emptyFields.length) {
            setEmptyFields(emptyFields);
            return;
        }
        
        const response = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            alert("Book added!")
            fetchBooks();
        }
    }

    const editBook = book => {
        setBookToEdit(book);
        history.push('/edit-books');
    }

    const deleteBook = async book_id => {
        const response = await fetch(`/api/books/${book_id}`, {method: 'DELETE'});
        if (response.ok) {
            setBooks(books.filter(book => book.book_id !== book_id));
        } else {
            console.log('error');
        }
    };

    const fetchBooks = async () => {
        const response = await fetch('/api/books');
        const data = await response.json();
        setBooks(data);
    };

    React.useEffect(() => {
        fetchBooks();
    }
    , []);

    return (
        <div>
            <h3>Books</h3>
            <br />
            <h5>Add Book</h5>

            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>publication_date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                className={emptyFields.includes('title') ? 'error' : 'bookField'}
                                type="text"
                                placeholder="title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                />
                        </td>
                        <td>
                            <input
                                className={emptyFields.includes('publication_date') ? 'error' : 'bookField'}
                                type="date"
                                placeholder="publication_date"
                                value={publication_date}
                                onChange={e => setPublicationDate(e.target.value)}
                                />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="button-medium"
                onClick={addBook}
            >Add Book</button>

            <br /><br />
            <BooksTable books={books} editBook={editBook} deleteBook={deleteBook} />
        </div>
    );
}

export default BooksPage;