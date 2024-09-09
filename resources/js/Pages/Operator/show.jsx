// resources/js/Pages/Operator/Show.jsx

import React from 'react';

export default function Show({ operator }) {
    return (
        <div>
            <h1>Operator Details</h1>
            <p>Operator Name: {operator.operator_name}</p>
            {/* Add links to edit or delete */}
        </div>
    );
}
