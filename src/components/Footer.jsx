// components/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="p-4 bg-white border-t border-gray-200">
            <div className="container mx-auto text-center text-sm text-gray-500">
                <p className="mb-4">© 2022 Google Clone</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:underline text-gray-700">Privacy</a>
                    <a href="#" className="hover:underline text-gray-700">Terms</a>
                    <a href="#" className="hover:underline text-gray-700">About</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;