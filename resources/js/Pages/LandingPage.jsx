import React from 'react';
import { Link } from '@inertiajs/react';

export default function LandingPage() {
    return (
        <div 
            className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}
        >
            <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-bounce">Welcome to Pulsa App</h1>
                <p className="text-lg text-gray-700 mb-8">Manage your prabayar and operator data effortlessly.</p>
                <link href='/Dashboard' className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                    Go to Dashboard
                </link>
            </div>
            <div className="mt-8">
                <p className="text-white text-sm">Powered by Pulsa App © 2024</p>
            </div>
        </div>
    );
}
