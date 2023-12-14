// components/SearchBar.js
import React, { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Use the query to send a request to the search API
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-1/2 h-10 px-3"
                placeholder="Search..."
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white">Search</button>
        </form>
    );
}

export default SearchBar;