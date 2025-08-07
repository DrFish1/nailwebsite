import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, Droplet, RefreshCw, Heart, Shield, Palette } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      name: 'Gel-X Extensions',
      icon: <Sparkles className="text-nail-pink" size={32} />,
      description: 'Lightweight, soak-off gel extensions that provide a natural-looking length and strength. Perfect for everyday elegance with a sophisticated finish that lasts weeks.',
      price: 'From $75',
      duration: '90 min'
    },
    {
      name: 'BIAB Natural Nails',
      icon: <Heart className="text-nail-pink" size={32} />,
      description: 'Builder in a bottle gel treatment that strengthens and adds subtle length to your natural nails. Healthy, beautiful nails that grow stronger with each application.',
      price: 'From $55',
      duration: '60 min'
    },
    {
      name: 'Infills & Maintenance',
      icon: <RefreshCw className="text-nail-pink" size={32} />,
      description: 'Professional maintenance service to keep your nails looking fresh and beautiful. Fill in growth, reshape, and refresh your polish for continued perfection.',
      price: 'From $45',
      duration: '45 min'
    },
    {
      name: 'Pedicure',
      icon: <Droplet className="text-nail-pink" size={32} />,
      description: 'Indulge in a completely relaxing pedicure experience with professional foot care, exfoliation, massage, and beautiful polish application.',
      price: 'From $65',
      duration: '75 min'
    },
    {
      name: 'Safe Removals',
      icon: <Shield className="text-nail-pink" size={32} />,
      description: 'Gentle, professional removal of gel polish or extensions that prioritizes the health of your natural nails. No damage, just healthy nail restoration.',
      price: 'From $25',
      duration: '30 min'
    },
    {
      name: 'Custom Art & Extras',
      icon: <Palette className="text-nail-pink" size={32} />,
      description: 'Personalized nail art, French tips, chrome effects, glitter, rhinestones, and specialty treatments to make your nails uniquely yours.',
      price: 'From $15',
      duration: '30+ min'
    },
  ];

  return (
    <div className="min-h-screen bg-nail-black pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My Premium <span className="text-nail-pink">Nail Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I offer luxury nail treatments designed to enhance your natural beauty and boost your confidence. 
            Each service is carefully crafted with premium products and personalized attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-black/80 to-nail-black/60 border border-gray-800/50 rounded-2xl p-8 hover:border-nail-pink/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-nail-pink/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-nail-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-nail-pink/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-nail-pink/20 transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-nail-pink transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                  <div className="text-nail-pink font-bold text-lg">
                    {service.price}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {service.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-nail-pink to-pink-600 rounded-2xl p-8 text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Luxury?
          </h3>
          <p className="text-white/90 mb-8 text-lg">
            Book your appointment today and let me create the perfect nails for you
          </p>
          <Link to="/booking" className="bg-white text-nail-pink hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center text-lg shadow-lg">
            Book My Appointment
            <ChevronRight className="ml-2" size={24} />
          </Link>
        </div>

        <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-nail-pink mb-6">What You Can Expect:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start">
                <span className="text-nail-pink mr-2">•</span>
                Personalized consultation to understand your vision
              </li>
              <li className="flex items-start">
                <span className="text-nail-pink mr-2">•</span>
                Premium products and sterilized tools for every service
              </li>
              <li className="flex items-start">
                <span className="text-nail-pink mr-2">•</span>
                Relaxing atmosphere with attention to detail
              </li>
            </ul>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start">
                <span className="text-nail-pink mr-2">•</span>
                Aftercare advice to maintain your beautiful nails
              </li>
              <li className="flex items-start">
                <span className="text-nail-pink mr-2">•</span>
                Flexible scheduling to fit your lifestyle
              </li>
              <li className="flex items-start">
                <span className="text-nail-pink mr-2">•</span>
                10% discount for first-time clients
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;