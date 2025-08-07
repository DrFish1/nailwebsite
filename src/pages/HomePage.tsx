import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Heart, Shield } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-nail-black to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Pamper Your Hands,
            <span className="block text-nail-pink mt-2">Elevate Your Style</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            Experience luxury nail care and stunning nail art in a relaxing atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/booking" className="btn-primary inline-flex items-center justify-center">
              Book Your Appointment
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-nail-pink text-nail-pink hover:bg-nail-pink hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
              View Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-nail-pink rounded-full flex justify-center">
            <div className="w-1 h-3 bg-nail-pink rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-nail-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Why Choose Luxe Nails?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-nail-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nail-pink/20 transition-all">
                <Sparkles className="text-nail-pink" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-400">
                We use only the finest products and latest techniques for stunning, long-lasting results
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-nail-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nail-pink/20 transition-all">
                <Heart className="text-nail-pink" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Technicians</h3>
              <p className="text-gray-400">
                Our skilled artists bring years of experience and creativity to every appointment
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-nail-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nail-pink/20 transition-all">
                <Shield className="text-nail-pink" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hygiene First</h3>
              <p className="text-gray-400">
                Strict sanitization protocols ensure a safe and clean environment for every client
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 px-4 bg-nail-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Popular Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Gel Manicure', price: '$45', time: '45 min' },
              { name: 'Acrylic Full Set', price: '$65', time: '90 min' },
              { name: 'Nail Art Design', price: '$15+', time: '30 min' },
              { name: 'Spa Pedicure', price: '$55', time: '60 min' },
            ].map((service, index) => (
              <div key={index} className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-nail-pink transition-all group">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-nail-pink transition-colors">
                  {service.name}
                </h3>
                <p className="text-nail-pink text-2xl font-bold mb-2">{service.price}</p>
                <p className="text-gray-400 text-sm">{service.time}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-primary inline-flex items-center">
              View All Services
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-nail-black to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-square bg-gradient-to-br from-nail-pink/20 to-nail-pink/10">
                  <img 
                    src={`https://source.unsplash.com/400x400/?nail-art,manicure&sig=${item}`}
                    alt={`Nail design ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">View Design</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-primary inline-flex items-center">
              View Full Gallery
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-nail-pink to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Nails?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your appointment today and experience the luxury difference
          </p>
          <Link to="/booking" className="bg-white text-nail-pink hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center text-lg">
            Book Now
            <ChevronRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;