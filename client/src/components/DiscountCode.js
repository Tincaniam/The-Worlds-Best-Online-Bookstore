/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React from 'react';

// Define a DiscountCode component for the DiscountCode table.
function DiscountCode({ discount_code }) {
    return (

        <tr>
            <td>{discount_code.discount_code_id}</td>
            <td>{discount_code.discount_code_name}</td>
        </tr>
    );
}

export default DiscountCode;
