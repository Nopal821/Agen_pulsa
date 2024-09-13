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
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold mb-4">Edit Operator</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700">Operator Name</label>
                    <input
                        type="text"
                        value={operatorName}
                        onChange={(e) => setOperatorName(e.target.value)}
                        className="mt-2 p-2 block w-full border border-gray-300 rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
                >
                    Update Operator
                </button>
            </form>
        </div>
    );
}
