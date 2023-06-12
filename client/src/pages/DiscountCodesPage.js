/*
Citations:
    Initial adaption from "Exploration — Implementing a Full-Stack MERN App - Part 1" from CS 290 at Oregon State University.
    Date: 2023-04-05
    https://canvas.oregonstate.edu/courses/1869985/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=22110234
*/

import React, {useState} from 'react';
import DiscountCodesTable from '../components/DiscountCodesTable';

function DiscountCodesPage() {
    const [discount_codes, setDiscountCodes] = useState([]);
    // discount_code_states
    const [discount_code_name, setDiscountCodeName] = useState('');

    const addDiscountCode = async () => {
        const newDiscountCode = { discount_code_name };

        const response = await fetch('/api/discount_codes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDiscountCode)
        });

        if (!response.ok) {
            const json = await response.json();
            alert(json.error);
        } else {
            alert("Discount Code added!")
            fetchDiscountCodes();
        }
    };

    const fetchDiscountCodes = async () => {
        const response = await fetch('/api/discount_codes');
        const json = await response.json();
        setDiscountCodes(json);
    };

    React.useEffect(() => {
        fetchDiscountCodes();
    }, []);

    return (
        <div>
            <h3>Discount Codes</h3>
            <br />
            <h5>Add Discount Code</h5>
            <table>
                <thead>
                    <tr>
                        <th>discount_code_name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" value={discount_code_name} onChange={e => setDiscountCodeName(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table>
            <button className="button-medium"
            onClick={addDiscountCode}>Add Discount Code</button>
            <br />
            <br />
            <DiscountCodesTable discount_codes={discount_codes}/>
        </div>
    );
}

export default DiscountCodesPage;