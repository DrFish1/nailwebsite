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
        <div className="flex items-center justify-between h-16">
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
                <div className="absolute inset-0 bg-nail-pink rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110"></div>
                <img 
                  src="/logo.png" 
                  alt="Nail Salon Logo" 
                  className="relative z-10 h-12 w-auto transition-transform duration-300 group-hover:scale-105"
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
                      ? 'group relative overflow-hidden bg-gradient-to-r from-nail-pink to-pink-500 text-white px-6 py-2 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-nail-pink/40 active:scale-95 transform-gpu' 
                      : 'text-gray-300 hover:text-nail-pink transition-colors duration-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.path);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label === 'Book Now' ? (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-nail-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                      <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-150 rounded-lg"></span>
                      <span className="relative z-10">{link.label}</span>
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