import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      category: 'Manicures',
      services: [
        { name: 'Classic Manicure', price: '$30', duration: '30 min', description: 'Basic nail shaping, cuticle care, and polish application' },
        { name: 'Gel Manicure', price: '$45', duration: '45 min', description: 'Long-lasting gel polish with UV curing for 2-3 weeks wear' },
        { name: 'French Manicure', price: '$40', duration: '40 min', description: 'Elegant white tips with nude or pink base' },
        { name: 'Spa Manicure', price: '$55', duration: '60 min', description: 'Includes exfoliation, mask, massage, and paraffin treatment' },
      ],
    },
    {
      category: 'Pedicures',
      services: [
        { name: 'Classic Pedicure', price: '$40', duration: '45 min', description: 'Foot soak, nail care, callus removal, and polish' },
        { name: 'Gel Pedicure', price: '$55', duration: '60 min', description: 'Long-lasting gel polish for toes' },
        { name: 'Spa Pedicure', price: '$70', duration: '75 min', description: 'Luxurious treatment with scrub, mask, and extended massage' },
        { name: 'Medical Pedicure', price: '$85', duration: '90 min', description: 'Specialized care for problematic feet and nails' },
      ],
    },
    {
      category: 'Nail Extensions',
      services: [
        { name: 'Acrylic Full Set', price: '$65', duration: '90 min', description: 'Durable acrylic extensions with your choice of length and shape' },
        { name: 'Acrylic Fill', price: '$40', duration: '60 min', description: 'Maintenance fill for existing acrylic nails' },
        { name: 'Gel Extensions', price: '$75', duration: '90 min', description: 'Lightweight gel extensions for a natural look' },
        { name: 'Dip Powder Full Set', price: '$60', duration: '75 min', description: 'Strong, lightweight alternative to acrylics' },
      ],
    },
    {
      category: 'Nail Art & Design',
      services: [
        { name: 'Simple Nail Art', price: '$15', duration: '30 min', description: 'Basic designs on 2 accent nails' },
        { name: 'Complex Nail Art', price: '$30+', duration: '45+ min', description: 'Intricate designs, 3D elements, or hand-painted art' },
        { name: 'Chrome/Mirror Finish', price: '$20', duration: '20 min', description: 'Metallic mirror effect using chrome powder' },
        { name: 'Ombre/Gradient', price: '$25', duration: '30 min', description: 'Beautiful color transition effect' },
      ],
    },
    {
      category: 'Additional Services',
      services: [
        { name: 'Polish Change', price: '$15', duration: '15 min', description: 'Quick polish change for hands or feet' },
        { name: 'Nail Repair', price: '$10/nail', duration: '15 min', description: 'Fix broken or damaged nails' },
        { name: 'Paraffin Treatment', price: '$15', duration: '15 min', description: 'Moisturizing wax treatment for hands or feet' },
        { name: 'Cuticle Treatment', price: '$20', duration: '20 min', description: 'Intensive cuticle care and conditioning' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-nail-black pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-nail-pink">Services</span>
          </h1>
          <p className="text-xl text-gray-300">
            Professional nail care services tailored to your needs
          </p>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-nail-pink mb-6 border-b border-gray-800 pb-2">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-nail-pink transition-all group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-nail-pink transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-nail-pink text-xl font-bold">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-3">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-r from-nail-pink to-pink-600 rounded-lg p-8 text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Book Your Service?
          </h3>
          <p className="text-white/90 mb-6">
            Schedule your appointment online for the best availability
          </p>
          <Link to="/booking" className="bg-white text-nail-pink hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center">
            Book Appointment
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="mt-12 bg-black/50 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-nail-pink mb-4">Service Notes:</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Prices are subject to change based on nail condition and additional requests</li>
            <li>• All services include basic nail care and shaping</li>
            <li>• Gel removal is included with new gel application</li>
            <li>• Package deals available for multiple services</li>
            <li>• 10% discount for first-time clients</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;