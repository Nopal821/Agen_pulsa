import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const PrabayarTable = ({ prabayar }) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(amount);
    };

    const handleDelete = (url) => {
        if (confirm('Are you sure you want to delete this item?')) {
            Inertia.delete(url);
        }
    };

    return (
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
    );
};

export default PrabayarTable;
