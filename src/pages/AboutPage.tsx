import React from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Kim',
      role: 'Master Nail Technician',
      experience: '8 years',
      specialty: 'Nail Art & 3D Designs',
      image: 'https://source.unsplash.com/300x300/?woman,professional'
    },
    {
      name: 'Jessica Chen',
      role: 'Senior Nail Artist',
      experience: '6 years',
      specialty: 'Gel & Acrylic Extensions',
      image: 'https://source.unsplash.com/300x300/?asian,woman'
    },
    {
      name: 'Maria Lopez',
      role: 'Spa Specialist',
      experience: '5 years',
      specialty: 'Luxury Spa Treatments',
      image: 'https://source.unsplash.com/300x300/?latina,woman'
    },
    {
      name: 'Emily Davis',
      role: 'Nail Technician',
      experience: '3 years',
      specialty: 'Classic & French Manicures',
      image: 'https://source.unsplash.com/300x300/?blonde,woman'
    },
  ];

  const values = [
    {
      icon: <Award className="text-nail-pink" size={40} />,
      title: 'Excellence',
      description: 'We strive for perfection in every service, using premium products and the latest techniques.'
    },
    {
      icon: <Users className="text-nail-pink" size={40} />,
      title: 'Community',
      description: 'Building lasting relationships with our clients and creating a welcoming space for everyone.'
    },
    {
      icon: <Heart className="text-nail-pink" size={40} />,
      title: 'Care',
      description: 'Your satisfaction and comfort are our top priorities. We treat every client like family.'
    },
    {
      icon: <Sparkles className="text-nail-pink" size={40} />,
      title: 'Innovation',
      description: 'Staying ahead with the latest trends, techniques, and nail art innovations.'
    },
  ];

  return (
    <div className="min-h-screen bg-nail-black pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-nail-pink">Luxe Nails</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your premier destination for luxury nail care, where artistry meets relaxation
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-nail-pink mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2018, Luxe Nails began with a simple vision: to create a sanctuary where 
              nail care meets artistry. What started as a small boutique salon has grown into a 
              beloved destination for those seeking exceptional nail services.
            </p>
            <p className="text-gray-300 mb-4">
              Our team of talented technicians brings years of experience and a passion for 
              perfection to every appointment. We believe that beautiful nails are more than just 
              a service – they're a form of self-expression and self-care.
            </p>
            <p className="text-gray-300">
              Today, we continue to innovate and elevate the nail care experience, combining 
              traditional techniques with modern trends to create stunning results that our 
              clients love.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border-4 border-nail-pink/20">
              <img 
                src="https://source.unsplash.com/600x600/?nail-salon,luxury"
                alt="Luxe Nails Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nail-pink rounded-full flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">6+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-nail-pink mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-nail-pink transition-all">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-nail-pink mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={`${member.image}&sig=${index}`}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-nail-pink">{member.role}</p>
                <p className="text-gray-400 text-sm mt-1">{member.experience} experience</p>
                <p className="text-gray-500 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-gradient-to-r from-nail-pink to-pink-600 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Why Choose Luxe Nails?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Happy Clients Monthly</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>Satisfaction Guaranteed</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p>Services Offered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;