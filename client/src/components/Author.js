import React from 'react';


function Author({ author, editAuthor, deleteAuthor }) {
    return (

        <tr>
            <td>{author.author_id}</td>
            <td>{author.first_name}</td>
            <td>{author.last_name}</td>
            <td>
                <button className="btn btn-outline-primary" onClick={() => {editAuthor(author)}}>Edit</button>
                <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteAuthor(author.author_id)}}>Delete</button>
            </td>
        </tr>
    );
}

export default Author;