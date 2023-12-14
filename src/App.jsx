// App.js
import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-16">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" className="h-16 mb-4" />
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;