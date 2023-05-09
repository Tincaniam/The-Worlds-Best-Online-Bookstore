import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditAuthorsPage2 = () => {

    let history = useHistory();
    const backToAuthors = () => {
        history.push('/authors');
    }

    return (
        <div>
            <h3>Authors</h3>
            <br />
            <h5>Edit Author</h5>
            <input
                className='form-control'
                type="text"
                value = "Terry"
                />
            <input
                className='form-control'
                type="text"
                value = "Pratchett"
                />
            <button className="button-medium" onClick={backToAuthors}>Edit Author</button>
        </div>
    );
}

export default EditAuthorsPage2;