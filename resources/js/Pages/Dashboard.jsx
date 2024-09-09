// resources/js/Pages/Dashboard.jsx
import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard({ operators, prabayar }) {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Dashboard</h2>
            <div className="mb-4">
                <InertiaLink href={route('dashboard.operators')} className="btn btn-primary mr-2">Manage Operators</InertiaLink>
                <InertiaLink href={route('dashboard.prabayar')} className="btn btn-secondary">Manage Prabayar</InertiaLink>
            </div>

            {operators && (
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Operator List</h3>
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Operator Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {operators.map((operator) => (
                                <tr key={operator.id}>
                                    <td className="border px-4 py-2">{operator.operator_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {prabayar && (
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Prabayar List</h3>
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
                            {prabayar.map((item) => (
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
            )}
        </div>
    );
}
