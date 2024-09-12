import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function EditOperator({ operator }) {
    const [operatorName, setOperatorName] = useState(operator.operator_name);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/operator/${operator.id}`, {
            operator_name: operatorName,
        });
    };

    return (
        <div>
            <h1>Edit Operator</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Operator Name</label>
                    <input 
                        type="text" 
                        value={operatorName} 
                        onChange={e => setOperatorName(e.target.value)} 
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
