import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-nail-black text-gray-200">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
