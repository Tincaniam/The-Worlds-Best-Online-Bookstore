import React from 'react';


function Book({ book, onDelete, onEdit }) {
    return (

            <tr>
                <td>{book.book_id}</td>
                <td>{book.title}</td>
                <td>{book.publication_date}</td>
                <td>
                    <button className="btn btn-outline-primary" onClick={() => {onEdit(book)}}>Edit</button>
                    <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) onDelete(book.book_id)}}>Delete</button>
                </td>
            </tr>

    //     <br></br>
    //     <h3>{project.name}</h3>
    //     <div style={{maxWidth:'100%', margin:'auto', padding:'2%'}}>
    //     <button className="button-small" onClick={() => { onEdit(project) } }>Edit</button><button className="button-small" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) onDelete(project._id) } }>Delete</button>
    //     </div>
    //     <p style={{fontSize:"small"}}>
    //     {project.status} - {project.date}
    //     </p>
    //     <p style={{fontSize:"small"}}>
    //     {project.link}
    //     </p>
    //     <p style={{fontSize:"small"}}>
    //     {project.description}
    //     </p>
    //     <div style={{padding:'2%'}}></div>
    //    </CCard>
    );
}

export default Book;