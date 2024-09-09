import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function PrabayarEdit() {
    const { prabayar } = usePage().props;
    const { put } = useForm({
        operator_name: prabayar.operator_name || '',
        expired: prabayar.expired || '',
        price: prabayar.price || '',
        jenis: prabayar.jenis || 'pulsa',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/prabayar/${prabayar.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Edit Prabayar</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Operator Name</label>
                    <input
                        type="text"
                        name="operator_name"
                        value={prabayar.operator_name}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Expired</label>
                    <input
                        type="date"
                        name="expired"
                        value={prabayar.expired}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={prabayar.price}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Jenis</label>
                    <select
                        name="jenis"
                        value={prabayar.jenis}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="pulsa">Pulsa</option>
                        <option value="data">Data</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Save
                </button>
            </form>
        </div>
    );
}
