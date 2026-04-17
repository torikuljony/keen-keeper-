import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center px-4'>
            <h1 className="text-9xl font-extrabold text-black drop-shadow-lg">404</h1>
            <h2 className='text-3xl md:text-4xl font-semibold mt-4 text-black'>Page Not Found</h2>
            <p className='mt-3 text-lg text-gray-900 text-center max-w-md'>The page you are looking for doesnt exist or has been moved.</p>
            <Link className='mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300' href={"/"}>Go Home</Link>
        </div>
    );
};

export default NotFound;

