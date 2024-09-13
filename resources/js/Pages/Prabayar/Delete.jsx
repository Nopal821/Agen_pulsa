import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function DeletePrabayar({ prabayar }) {
    const handleDelete = () => {
        Inertia.delete(`/prabayar/${prabayar.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold mb-4">Delete Prabayar</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <p>Are you sure you want to delete the prabayar: {prabayar.operator_name}?</p>
                <button
                    onClick={handleDelete}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700"
                >
                    Delete Prabayar
                </button>
            </div>
        </div>
    );
}
