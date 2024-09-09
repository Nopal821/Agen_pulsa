// resources/js/Pages/Operator/Index.jsx
import React from 'react';
import { Link } from '@inertiajs/react';
import { FaPlus } from 'react-icons/fa';

export default function Index({ operators }) {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-semibold text-gray-900">Manage Operators</h1>
                <Link href="/operator/create" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300">
                    <FaPlus />
                </Link>
            </div>
            <ul>
                {operators.map(operator => (
                    <li key={operator.id} className="mb-4">
                        {operator.operator_name}
                        <Link href={`/operator/${operator.id}`} className="btn btn-info ml-4">View</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
