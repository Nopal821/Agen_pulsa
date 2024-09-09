import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function CreatePrabayar({ operators }) {
    const [operatorName, setOperatorName] = useState('');
    const [expired, setExpired] = useState('');
    const [price, setPrice] = useState('');
    const [jenis, setJenis] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/prabayar', {
            operator_name: operatorName,
            expired,
            price,
            jenis,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-semibold mb-6">Add New Prabayar</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                    <label htmlFor="operator_name" className="block text-sm font-medium text-gray-700">Operator Name</label>
                    <select 
                        id="operator_name" 
                        value={operatorName} 
                        onChange={e => setOperatorName(e.target.value)} 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select Operator</option>
                        {operators && operators.map(operator => (
                            <option key={operator.id} value={operator.operator_name}>
                                {operator.operator_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="expired" className="block text-sm font-medium text-gray-700">Expired Date</label>
                    <input 
                        type="date" 
                        id="expired" 
                        value={expired} 
                        onChange={e => setExpired(e.target.value)} 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input 
                        type="number" 
                        id="price" 
                        value={price} 
                        onChange={e => setPrice(e.target.value)} 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        step="0.01"
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="jenis" className="block text-sm font-medium text-gray-700">Jenis</label>
                    <select 
                        id="jenis" 
                        value={jenis} 
                        onChange={e => setJenis(e.target.value)} 
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required 
                    >
                        <option value="">Select Jenis</option>
                        <option value="pulsa">Pulsa</option>
                        <option value="data">Data</option>
                    </select>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
            </form>
        </div>
    );
}