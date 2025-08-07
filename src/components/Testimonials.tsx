import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely love this salon! The attention to detail is incredible, and my nails always look perfect. The atmosphere is so relaxing too!',
      service: 'Gel Manicure',
    },
    {
      name: 'Emily Chen',
      rating: 5,
      text: 'Best nail salon in the city! The nail art designs are creative and unique. The staff is professional and friendly. Highly recommend!',
      service: 'Nail Art Design',
    },
    {
      name: 'Maria Rodriguez',
      rating: 5,
      text: 'I\'ve been coming here for years. The quality is consistently excellent, and they always make me feel pampered. Worth every penny!',
      service: 'Spa Pedicure',
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-nail-black/50 border border-gray-800 rounded-lg p-6 hover:border-nail-pink transition-all">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-nail-pink fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t border-gray-800 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-nail-pink text-sm">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;