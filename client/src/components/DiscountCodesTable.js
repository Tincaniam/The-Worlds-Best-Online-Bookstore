/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';
import DiscountCode from './DiscountCode';

// Define a DiscountCodesTable component for the DiscountCodes page.
function DiscountCodesTable({ discount_codes }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>discount_code_id</th>
                    <th>discount_name</th>
                </tr>
            </thead>
            <tbody>
                {discount_codes.map((discount_code, i) => <DiscountCode discount_code={discount_code}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default DiscountCodesTable;