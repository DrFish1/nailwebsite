import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { path: '#home', label: 'Home' },
    { path: '#services', label: 'Services' },
    { path: '#gallery', label: 'Gallery' },
    { path: '#about', label: 'About' },
    { path: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  return (
    <nav className={`sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 transition-transform duration-300 hidden md:block ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-28 sm:h-20 overflow-visible">
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
                <div className="absolute inset-0 bg-nail-pink rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <img 
                  src="/logo.png" 
                  alt="Nail Salon Logo" 
                  className="relative z-10 h-40 md:h-40 sm:h-32 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-2xl"
                />
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.path);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nail-pink transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            
            <a
              href="#booking"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 shadow-lg shadow-pink-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Now
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
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block mx-3 mt-4 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 shadow-lg shadow-pink-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;