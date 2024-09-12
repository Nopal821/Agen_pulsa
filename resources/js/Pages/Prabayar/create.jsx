import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function CreatePrabayar({ operators }) {
    const [operatorName, setOperatorName] = useState('');
    const [expired, setExpired] = useState('');
    const [price, setPrice] = useState('');
    const [jenis, setJenis] = useState('');

    // Fungsi untuk memformat tanggal menjadi dd-mm-yyyy
    const formatDateToIndonesia = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(date).toLocaleDateString('id-ID', options);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Format tanggal sebelum dikirim ke server
        const formattedExpired = formatDateToIndonesia(expired);

        Inertia.post('/prabayar', {
            operator_name: operatorName,
            expired: formattedExpired, // Kirim tanggal yang sudah diformat
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
                        {operators.map(operator => (
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
                    {/* Tampilkan tanggal yang sudah diformat */}
                    {expired && (
                        <p className="mt-2 text-sm text-gray-600">Tanggal dalam format Indonesia: {formatDateToIndonesia(expired)}</p>
                    )}
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
