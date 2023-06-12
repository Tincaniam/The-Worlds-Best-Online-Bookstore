/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';

// Define an Author component for the Author table.
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