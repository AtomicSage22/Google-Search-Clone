// components/Navbar.js
import React from 'react';

function Navbar() {
    return (
        <nav className="p-4 bg-white">
            <div className="container mx-auto flex justify-between items-center">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" className="h-12" />
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-700 hover:underline">Gmail</a>
                    <a href="#" className="text-gray-700 hover:underline">Images</a>
                    <div className="p-2 rounded-full hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;