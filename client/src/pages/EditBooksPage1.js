import React from 'react';
import { useHistory } from 'react-router-dom';


export const EditBooksPage1 = () => {

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
                value = "War and Peace"
                />
            <input
                className='form-control'
                type="text"
                value = "1869-01-01"
                />
            <button className="button-medium" onClick={backToBooks}>Edit Book</button>
        </div>
    );
}

export default EditBooksPage1;