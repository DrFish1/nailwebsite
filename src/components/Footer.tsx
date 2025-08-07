import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-nail-pink text-xl font-bold mb-4">Luxe Nails</h3>
            <p className="text-gray-400 mb-4">
              My passion is creating beautiful, personalized nail experiences that make you feel confident and elegant.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/luxenails" className="text-gray-400 hover:text-nail-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/luxenails" className="text-gray-400 hover:text-nail-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/luxenails" className="text-gray-400 hover:text-nail-pink transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services"
                  className="text-gray-400 hover:text-nail-pink transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  My Services
                </a>
              </li>
              <li>
                <a 
                  href="#booking"
                  className="text-gray-400 hover:text-nail-pink transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <a 
                  href="#gallery"
                  className="text-gray-400 hover:text-nail-pink transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  className="text-gray-400 hover:text-nail-pink transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Me
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-2 mt-1 text-nail-pink flex-shrink-0" />
                <span>123 Beauty Lane, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-2 text-nail-pink" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-2 text-nail-pink" />
                <span>leanna@luxenails.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-nail-pink" />
                <span>Monday - Friday</span>
              </li>
              <li className="ml-7">9:00 AM - 7:00 PM</li>
              <li className="flex items-center mt-2">
                <Clock size={18} className="mr-2 text-nail-pink" />
                <span>Saturday</span>
              </li>
              <li className="ml-7">10:00 AM - 6:00 PM</li>
              <li className="flex items-center mt-2">
                <Clock size={18} className="mr-2 text-nail-pink" />
                <span>Sunday</span>
              </li>
              <li className="ml-7">11:00 AM - 5:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Luxe Nails. All rights reserved. | 
            <span className="ml-2 hover:text-nail-pink transition-colors cursor-pointer">
              Privacy Policy
            </span> | 
            <span className="ml-2 hover:text-nail-pink transition-colors cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;