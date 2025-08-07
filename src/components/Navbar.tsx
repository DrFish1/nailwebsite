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
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-2xl font-bold text-nail-pink">Luxe</span>
              <span className="text-2xl font-light text-white ml-1">Nails</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-gray-300 hover:text-nail-pink transition-colors duration-200 font-medium ${
                    link.label === 'Book Now' 
                      ? 'bg-nail-pink text-white px-4 py-2 rounded-lg hover:bg-nail-pink-light hover:scale-105 transform transition-all' 
                      : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.path);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
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
                className={`text-gray-300 hover:text-nail-pink hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  link.label === 'Book Now' 
                    ? 'bg-nail-pink text-white hover:bg-nail-pink-light' 
                    : ''
                }`}
              >
                {link.label}
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