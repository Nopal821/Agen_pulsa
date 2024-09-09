// resources/js/Pages/Operator/Create.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function CreateOperator() {
    const [operatorName, setOperatorName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/operator', {
            operator_name: operatorName,
        });
    };

    return (
        <div>
            <h1>Create New Operator</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Operator Name</label>
                    <input 
                        type="text" 
                        value={operatorName} 
                        onChange={e => setOperatorName(e.target.value)} 
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
