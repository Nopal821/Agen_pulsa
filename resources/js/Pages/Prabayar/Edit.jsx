import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function EditPrabayar({ prabayar }) {
    const [operatorName, setOperatorName] = useState(prabayar.operator_name);
    const [expired, setExpired] = useState(prabayar.expired);
    const [price, setPrice] = useState(prabayar.price);
    const [jenis, setJenis] = useState(prabayar.jenis);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/prabayar/${prabayar.id}`, {
            operator_name: operatorName,
            expired: expired,
            price: price,
            jenis: jenis,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold mb-4">Edit Prabayar</h2>
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
                <div className="mb-4">
                    <label className="block text-gray-700">Expired Date</label>
                    <input
                        type="date"
                        value={expired}
                        onChange={(e) => setExpired(e.target.value)}
                        className="mt-2 p-2 block w-full border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-2 p-2 block w-full border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Jenis</label>
                    <input
                        type="text"
                        value={jenis}
                        onChange={(e) => setJenis(e.target.value)}
                        className="mt-2 p-2 block w-full border border-gray-300 rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
                >
                    Update Prabayar
                </button>
            </form>
        </div>
    );
}
