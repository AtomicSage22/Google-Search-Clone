// components/SearchBar.js
import React, { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Use the query to send a request to the search API
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="p-4">
                <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-96 h-10 px-6 py-2 rounded-full outline-none text-gray-700"
                        placeholder="Search..."
                    />
                    <button type="submit" className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;