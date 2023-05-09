import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditBooksPage3 = () => {

    let history = useHistory();
    const backToBooks = () => {
        history.push('/books');
    }

    return (
        <div>
            <h3>Books</h3>
            <br />
            <h5>Edit Book</h5>
            <input
                className='form-control'
                type="text"
                value = "To Kill a Mockingbird"
                />
            <input
                className='form-control'
                type="text"
                value = "1960-07-11"
                />
            <button className="button-medium" onClick={backToBooks}>Edit Author</button>
        </div>
    );
}

export default EditBooksPage3;