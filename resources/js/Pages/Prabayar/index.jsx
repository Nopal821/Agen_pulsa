// resources/js/Pages/Prabayar/Index.jsx
import React from 'react';
import { Link } from '@inertiajs/react';
import { FaPlus } from 'react-icons/fa';

export default function PrabayarIndex({ prabayar }) {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-semibold text-gray-900">Prabayar List</h2>
                <Link href="/prabayar/create" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300">
                    <FaPlus />
                </Link>
            </div>
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Operator Name</th>
                        <th className="px-4 py-2">Expired</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Jenis</th>
                    </tr>
                </thead>
                <tbody>
                    {prabayar.data.map((item) => (
                        <tr key={item.id}>
                            <td className="border px-4 py-2">{item.operator_name}</td>
                            <td className="border px-4 py-2">{item.expired}</td>
                            <td className="border px-4 py-2">{item.price}</td>
                            <td className="border px-4 py-2">{item.jenis}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
