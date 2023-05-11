import React from 'react';
import { useHistory } from 'react-router-dom';

export const DiscountCodesPage = () => {

    return (
        <div>
            <h3>Discount_Codes</h3>
            <br />
            <h5>Add Discount_Code</h5>
            <input
                className='form-control'
                type="text"
                placeholder="discount_code_name"
                />
            <button className="button-medium">Add Discount_Code</button>

            <br /><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>discount_code_id</th>
                        <th>discount_code_name</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>10OFF</td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>20OFF</td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>30OFF</td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) console.log('deleted')}}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DiscountCodesPage;