import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import AuthorsTable from '../components/AuthorsTable';

function AuthorsPage ({setAuthorToEdit}) {
    const [authors, setAuthors] = React.useState([]);
    const history = useHistory();

    // author states
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const addAuthor = async () => {
        const newAuthor = {
            first_name,
            last_name
        };

        // check for empty fields
        const emptyFields = [];
        if (!newAuthor.first_name) emptyFields.push('first_name');
        if (!newAuthor.last_name) emptyFields.push('last_name');

        if (emptyFields.length) {
            setEmptyFields(emptyFields);
            return;
        }
        
        const response = await fetch('/api/authors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAuthor)
        });
        
        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
            setEmptyFields(json.emptyFields);
        }
        else {
            alert("Author added!")
            fetchAuthors();
        }
    }

    const editAuthor = author => {
        setAuthorToEdit(author);
        history.push('/edit-authors');
    }

    const deleteAuthor = async author_id => {
        const response = await fetch(`/api/authors/${author_id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            setAuthors(authors.filter(author => author.author_id !== author_id));
        }
        else {
            console.log('error');
        }
    };

    const fetchAuthors = async () => {
        const response = await fetch('/api/authors');
        const json = await response.json();
        setAuthors(json);
    }

    React.useEffect(() => {
        fetchAuthors();
    }
    , []);

    return (
        <div>
            <h3>Authors</h3>
            <br />
            <h5>Add Author</h5>

            <table>
                <thead>
                    <tr>
                        <th>first_name</th>
                        <th>last_name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                className={emptyFields.includes('first_name') ? 'error' : 'authorField'}
                                type="text"
                                placeholder="first_name"
                                value={first_name}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                className={emptyFields.includes('last_name') ? 'error' : 'authorField'}
                                type="text"
                                placeholder="last_name"
                                value={last_name}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="button-medium" onClick={addAuthor}
            >Add Author</button>

            <br></br>
            <br></br>
            <AuthorsTable authors={authors} editAuthor={editAuthor} deleteAuthor={deleteAuthor} />
        </div>
    );

}

export default AuthorsPage;