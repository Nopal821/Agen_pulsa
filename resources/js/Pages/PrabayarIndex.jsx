import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function PrabayarIndex() {
    const { prabayar } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Prabayar List</h2>
            <Link href="/prabayar/create" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mb-4 inline-block">
                Create New
            </Link>
            <table className="min-w-full bg-white shadow-md rounded-md">
                <thead>
                    <tr>
                        <th className="px-6 py-4">Operator Name</th>
                        <th className="px-6 py-4">Expired</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Jenis</th>
                        <th className="px-6 py-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prabayar.map(item => (
                        <tr key={item.id}>
                            <td className="px-6 py-4">{item.operator_name}</td>
                            <td className="px-6 py-4">{item.expired}</td>
                            <td className="px-6 py-4">{item.price}</td>
                            <td className="px-6 py-4">{item.jenis}</td>
                            <td className="px-6 py-4">
                                <Link href={`/prabayar/${item.id}/edit`} className="text-blue-500 hover:underline">Edit</Link> | 
                                <Link href={`/prabayar/${item.id}/destroy`} method="delete" className="text-red-500 hover:underline ml-2">Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
