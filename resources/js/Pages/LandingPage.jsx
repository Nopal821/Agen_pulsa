import React from 'react';
import { Link } from '@inertiajs/react';

export default function LandingPage() {
    return (
        <div 
            className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/24/e7/1d/24e71db6c897a8c0242a3b29e468589a.jpg')" }}
        >
            <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
                <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-bounce">Welcome to Pulsa App</h1>
                <p className="text-lg text-gray-700 mb-8">Manage your prabayar and operator data effortlessly.</p>
                <Link href='/Dashboard' className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                    Go to Dashboard
                </Link>
            </div>
            <div className="mt-8">
                <p className="text-white text-sm">Powered by Pulsa App © 2024</p>
            </div>
        </div>
    );
}
