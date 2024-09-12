import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function CreateOperator() {
    const [operatorName, setOperatorName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (operatorName.trim() === '') {
            alert('Operator name cannot be empty');
            return;
        }

        // Send the data using Inertia
        Inertia.post('/operator', {
            operator_name: operatorName,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-semibold mb-4">Create New Operator</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Operator Name</label>
                    <input
                        type="text"
                        value={operatorName}
                        onChange={(e) => setOperatorName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter operator name"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    Save
                </button>
            </form>
        </div>
    );
}
