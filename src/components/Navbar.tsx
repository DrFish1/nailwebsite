import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '#home', label: 'Home' },
    { path: '#services', label: 'Services' },
    { path: '#booking', label: 'Book Now' },
    { path: '#gallery', label: 'Gallery' },
    { path: '#about', label: 'About' },
    { path: '#contact', label: 'Contact' },
  ];


  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <a 
              href="#home"
              className="flex items-center group"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-nail-pink rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300 scale-125"></div>
                <div className="absolute inset-0 bg-nail-pink rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300 scale-110"></div>
                <img 
                  src="/logo.png" 
                  alt="Nail Salon Logo" 
                  className="relative z-10 h-20 w-auto transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                />
              </div>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`font-medium transition-all duration-300 ${
                    link.label === 'Book Now' 
                      ? 'group relative overflow-hidden bg-gradient-to-r from-nail-pink via-pink-500 to-nail-pink text-white px-6 py-3 rounded-xl hover:scale-110 active:scale-95 transform-gpu border border-nail-pink/50 shadow-lg shadow-nail-pink/30' 
                      : 'text-gray-300 hover:text-nail-pink transition-colors duration-200'
                  }`}
                  style={link.label === 'Book Now' ? {
                    boxShadow: '0 0 20px rgba(255, 105, 180, 0.3), 0 0 40px rgba(255, 105, 180, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.1)'
                  } : {}}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.path);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label === 'Book Now' ? (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-nail-pink to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-xl"></span>
                      <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-150 rounded-xl"></span>
                      <span className="absolute -inset-0.5 bg-gradient-to-r from-nail-pink to-pink-500 rounded-xl blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300"></span>
                      <span className="relative z-10 font-bold">{link.label}</span>
                    </>
                  ) : (
                    link.label
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+1234567890"
              className="flex items-center text-gray-300 hover:text-nail-pink transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span>(123) 456-7890</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const element = document.querySelector(link.path);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  link.label === 'Book Now' 
                    ? 'group relative overflow-hidden bg-gradient-to-r from-nail-pink to-pink-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-nail-pink/40 active:scale-95 transform-gpu' 
                    : 'text-gray-300 hover:text-nail-pink hover:bg-gray-900 transition-colors'
                }`}
              >
                {link.label === 'Book Now' ? (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-nail-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
                    <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-150 rounded-md"></span>
                    <span className="relative z-10">{link.label}</span>
                  </>
                ) : (
                  link.label
                )}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="flex items-center text-gray-300 hover:text-nail-pink px-3 py-2"
            >
              <Phone size={18} className="mr-2" />
              <span>(123) 456-7890</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;