import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';


export const EditAuthorsPage = ({authorToEdit}) => {

    const [first_name, setFirstName] = useState(authorToEdit.first_name);
    const [last_name, setLastName] = useState(authorToEdit.last_name);
    const [emptyFields, setEmptyFields] = useState([]);

    let history = useHistory();

    const backToAuthors = () => {
        history.push('/authors');
    }

    const editAuthor = async () => {
        const editedAuthor = { first_name, last_name };
        const response = await fetch(`/api/authors/${authorToEdit.author_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedAuthor)
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            alert("Author edited!")
            history.push('/authors');
        }
    };

    return (
        <div>
            <h3>Authors</h3>
            <br />
            <h5>Edit Author</h5>
            <input
                className={emptyFields.includes("name") ? "error" : "authorField"}
                type="text"
                value = {first_name}
                onChange={e => setFirstName(e.target.value)}
                />
            <input
                className={emptyFields.includes("name") ? "error" : "authorField"}
                type="text"
                value = {last_name}
                onChange={e => setLastName(e.target.value)}
                />
            <div>
                <button className="button-medium" onClick={backToAuthors}>Cancel</button>
                <button className="button-medium" onClick={editAuthor}>Edit Book</button>
            </div>
        </div>
    );
}

export default EditAuthorsPage;