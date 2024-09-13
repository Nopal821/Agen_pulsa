import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ operators, prabayar }) {
    const [activeTable, setActiveTable] = useState('operators');

    // Format tanggal ke format Indonesia
    const formatDate = (date) => {
        if (!date) return '-'; // Jika tidak ada tanggal
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(date).toLocaleDateString('id-ID', options);
    };

    // Format harga ke format Rupiah
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(amount);
    };

    // Hapus data
    const handleDelete = (url) => {
        if (confirm('Apakah Anda yakin ingin menghapus item ini?')) {
            Inertia.delete(url);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Dashboard</h2>
            <div className="mb-6 flex gap-4">
                <button
                    onClick={() => setActiveTable('operators')}
                    className={`btn px-4 py-2 rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 ${activeTable === 'operators' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`}
                >
                    Manage Operators
                </button>
                <button
                    onClick={() => setActiveTable('prabayar')}
                    className={`btn px-4 py-2 rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 ${activeTable === 'prabayar' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`}
                >
                    Manage Prabayar
                </button>
            </div>

            {/* Tombol Tambah Berdasarkan Tab Aktif */}
            {activeTable === 'operators' && (
                <div className="mb-6">
                    <button
                        onClick={() => Inertia.get('/operator/create')}
                        className="btn px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition-colors duration-300"
                    >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add New Operator
                    </button>
                </div>
            )}
            {activeTable === 'prabayar' && (
                <div className="mb-6">
                    <button
                        onClick={() => Inertia.get('/prabayar/create')}
                        className="btn px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition-colors duration-300"
                    >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add New Prabayar
                    </button>
                </div>
            )}

            {/* Tabel untuk Operator */}
            {activeTable === 'operators' && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Operator List</h3>
                    {operators.length > 0 ? (
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="px-4 py-2 text-left">Operator</th>
                                    <th className="px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {operators.map((operator) => (
                                    <tr key={operator.id} className="hover:bg-gray-100 transition-colors duration-300">
                                        <td className="border px-4 py-2">{operator.operator_name}</td>
                                        <td className="border px-4 py-2">
                                            <button
                                                onClick={() => Inertia.get(`/operator/${operator.id}/edit`)}
                                                className="text-blue-600 mr-4"
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(`/operator/${operator.id}`)}
                                                className="text-red-600"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-700">No operators found.</p>
                    )}
                </div>
            )}

            {/* Tabel untuk Prabayar */}
            {activeTable === 'prabayar' && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Prabayar List</h3>
                    {prabayar.length > 0 ? (
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="px-4 py-2 text-left">Operator</th>
                                    <th className="px-4 py-2 text-left">Expired</th>
                                    <th className="px-4 py-2 text-left">Harga</th>
                                    <th className="px-4 py-2 text-left">Jenis</th>
                                    <th className="px-4 py-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prabayar.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-100 transition-colors duration-300">
                                        <td className="border px-4 py-2">{item.operator_name}</td>
                                        <td className="border px-4 py-2">{formatDate(item.expired)}</td>
                                        <td className="border px-4 py-2">{formatCurrency(item.price)}</td>
                                        <td className="border px-4 py-2">{item.jenis}</td>
                                        <td className="border px-4 py-2">
                                            <button
                                                onClick={() => Inertia.get(`/prabayar/${item.id}/edit`)}
                                                className="text-blue-600 mr-4"
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(`/prabayar/${item.id}`)}
                                                className="text-red-600"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-700">No prabayar data found.</p>
                    )}
                </div>
            )}
        </div>
    );
}
