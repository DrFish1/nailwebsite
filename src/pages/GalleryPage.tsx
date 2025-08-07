import React, { useState } from 'react';
import { X } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['All', 'Gel', 'Acrylic', 'Nail Art', 'French', 'Ombre', 'Seasonal', 'Glitter'];

  const galleryItems = [
    { id: 1, category: 'Gel', title: 'Classic Red Gel', image: 'https://source.unsplash.com/400x400/?red-nails' },
    { id: 2, category: 'Nail Art', title: 'Floral Design', image: 'https://source.unsplash.com/400x400/?nail-art' },
    { id: 3, category: 'French', title: 'Modern French Tips', image: 'https://source.unsplash.com/400x400/?french-manicure' },
    { id: 4, category: 'Ombre', title: 'Pink Ombre', image: 'https://source.unsplash.com/400x400/?gradient-nails' },
    { id: 5, category: 'Acrylic', title: 'Long Coffin Shape', image: 'https://source.unsplash.com/400x400/?acrylic-nails' },
    { id: 6, category: 'Seasonal', title: 'Holiday Sparkle', image: 'https://source.unsplash.com/400x400/?christmas-nails' },
    { id: 7, category: 'Glitter', title: 'Gold Glitter', image: 'https://source.unsplash.com/400x400/?glitter-nails' },
    { id: 8, category: 'Nail Art', title: 'Geometric Patterns', image: 'https://source.unsplash.com/400x400/?geometric-nails' },
    { id: 9, category: 'Gel', title: 'Nude Elegance', image: 'https://source.unsplash.com/400x400/?nude-nails' },
    { id: 10, category: 'Acrylic', title: 'Stiletto Shape', image: 'https://source.unsplash.com/400x400/?stiletto-nails' },
    { id: 11, category: 'Seasonal', title: 'Spring Flowers', image: 'https://source.unsplash.com/400x400/?spring-nails' },
    { id: 12, category: 'Ombre', title: 'Blue Gradient', image: 'https://source.unsplash.com/400x400/?blue-gradient-nails' },
    { id: 13, category: 'French', title: 'Colored French', image: 'https://source.unsplash.com/400x400/?colored-french-nails' },
    { id: 14, category: 'Glitter', title: 'Rainbow Sparkle', image: 'https://source.unsplash.com/400x400/?rainbow-glitter-nails' },
    { id: 15, category: 'Nail Art', title: 'Marble Effect', image: 'https://source.unsplash.com/400x400/?marble-nails' },
    { id: 16, category: 'Gel', title: 'Deep Purple', image: 'https://source.unsplash.com/400x400/?purple-nails' },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-nail-black pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-nail-pink">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300">
            Explore our collection of stunning nail designs and get inspired
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-nail-pink text-white'
                  : 'bg-black/50 border border-gray-800 text-gray-300 hover:border-nail-pink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-800 hover:border-nail-pink transition-all"
            >
              <div className="aspect-square">
                <img
                  src={`${item.image}&sig=${item.id}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-nail-pink text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-nail-pink transition-colors"
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl max-h-[90vh] relative">
              <img
                src={`${galleryItems.find(item => item.id === selectedImage)?.image}&sig=${selectedImage}`}
                alt={galleryItems.find(item => item.id === selectedImage)?.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white">
                  {galleryItems.find(item => item.id === selectedImage)?.title}
                </h3>
                <p className="text-nail-pink">
                  {galleryItems.find(item => item.id === selectedImage)?.category}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-nail-pink to-pink-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Love What You See?
          </h3>
          <p className="text-white/90 mb-6">
            Book an appointment to recreate any of these designs or create your own unique style
          </p>
          <a
            href="/booking"
            className="bg-white text-nail-pink hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;