import React, { useState } from 'react';
import { ChevronRight, Sparkles, Heart, Shield, Droplet, RefreshCw, Palette, User, Phone, Mail, Check, MapPin, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
  // Booking state
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const services = [
    'Gel-X Extensions - From $75',
    'BIAB Natural Nails - From $55',
    'Infills & Maintenance - From $45',
    'Luxury Pedicure - From $65',
    'Safe Removals - From $25',
    'Custom Art & Extras - From $15',
  ];

  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  ];

  const detailedServices = [
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

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking submitted! I\'ll send you a confirmation email shortly.');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-nail-black to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Your Nails,
            <span className="block text-nail-pink mt-2">My Passion</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            I create beautiful, healthy nails that reflect your unique style and personality. 
            From natural enhancements to stunning nail art - let me bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a 
              href="#booking"
              className="btn-primary inline-flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book with Me
              <ChevronRight className="ml-2" size={20} />
            </a>
            <a 
              href="#services"
              className="bg-transparent border-2 border-nail-pink text-nail-pink hover:bg-nail-pink hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Services
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-nail-pink rounded-full flex justify-center">
            <div className="w-1 h-3 bg-nail-pink rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-nail-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My Premium <span className="text-nail-pink">Nail Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I offer luxury nail treatments designed to enhance your natural beauty and boost your confidence. 
              Each service is carefully crafted with premium products and personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {detailedServices.map((service, index) => (
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
            <a 
              href="#booking"
              className="bg-white text-nail-pink hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center text-lg shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book My Appointment
              <ChevronRight className="ml-2" size={24} />
            </a>
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
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-gradient-to-b from-nail-black to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Appointment <span className="text-nail-pink">with Me</span>
            </h2>
            <p className="text-xl text-gray-300">
              Let's schedule your personalized nail experience in just a few steps
            </p>
          </div>

          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= i
                      ? 'bg-nail-pink text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {step > i ? <Check size={20} /> : i}
                </div>
                {i < 3 && (
                  <div
                    className={`w-16 md:w-24 h-1 transition-all ${
                      step > i ? 'bg-nail-pink' : 'bg-gray-800'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-black/50 border border-gray-800 rounded-2xl p-6 md:p-8">
            {/* Step Content */}
            {step === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Select Your Service</h3>
                <p className="text-gray-300 mb-6">Choose the service you'd like me to provide:</p>
                <div className="grid grid-cols-1 gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedService === service
                          ? 'border-nail-pink bg-nail-pink/10 text-white'
                          : 'border-gray-800 hover:border-nail-pink/50 text-gray-300'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Select Date & Time</h3>
                <p className="text-gray-300 mb-6">When would you like to schedule your appointment?</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-nail-pink mb-2">Select Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-nail-pink mb-2">Available Times</label>
                    <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 rounded border text-sm transition-all ${
                            selectedTime === time
                              ? 'border-nail-pink bg-nail-pink text-white'
                              : 'border-gray-800 text-gray-300 hover:border-nail-pink/50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Your Information</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-nail-pink mb-2">
                      <User size={18} className="inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-nail-pink mb-2">
                      <Mail size={18} className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-nail-pink mb-2">
                      <Phone size={18} className="inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-nail-pink mb-2">Special Requests (Optional)</label>
                    <textarea
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                      rows={3}
                      className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                    />
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="mt-6 p-4 bg-nail-pink/10 border border-nail-pink/30 rounded-lg">
                <h4 className="text-nail-pink font-semibold mb-2">Appointment Summary</h4>
                <div className="text-gray-300 space-y-1">
                  <p><span className="text-gray-400">Service:</span> {selectedService}</p>
                  <p><span className="text-gray-400">With:</span> Leanna</p>
                  <p><span className="text-gray-400">Date:</span> {selectedDate}</p>
                  <p><span className="text-gray-400">Time:</span> {selectedTime}</p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={handlePrevStep}
                  className="px-6 py-3 border-2 border-nail-pink text-nail-pink rounded-lg hover:bg-nail-pink hover:text-white transition-all"
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={handleNextStep}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime))
                  }
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ml-auto ${
                    ((step === 1 && !selectedService) ||
                     (step === 2 && (!selectedDate || !selectedTime)))
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-nail-pink text-white hover:bg-nail-pink-light'
                  }`}
                >
                  Next Step
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-nail-pink text-white rounded-lg font-semibold hover:bg-nail-pink-light transition-all ml-auto"
                >
                  Confirm My Appointment
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 text-center text-gray-400">
            <p>Need help? Call me at <span className="text-nail-pink">(123) 456-7890</span></p>
            <p className="mt-2">I'll send you a confirmation email with all the details</p>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-nail-black to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">My Recent Work</h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            Take a look at some of the beautiful nail transformations I've created for my clients
          </p>
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
            <button 
              className="btn-primary inline-flex items-center"
              onClick={() => {
                // Could expand gallery or scroll to more images
                alert('More gallery images coming soon!');
              }}
            >
              View My Full Gallery
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-nail-pink">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your premier nail artist, where artistry meets relaxation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-nail-pink mb-6">My Story</h3>
              <p className="text-gray-300 mb-4">
                I started my journey in nail artistry with a simple vision: to create beautiful, healthy nails 
                that reflect each client's unique personality and style. What began as a passion has grown into 
                a personalized nail experience that my clients love.
              </p>
              <p className="text-gray-300 mb-4">
                I bring years of experience and a genuine passion for nail care to every appointment. 
                I believe that beautiful nails are more than just a service – they're a form of 
                self-expression and self-care that should make you feel confident and beautiful.
              </p>
              <p className="text-gray-300">
                Today, I continue to innovate and elevate the nail care experience, combining 
                traditional techniques with modern trends to create stunning results that exceed expectations.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border-4 border-nail-pink/20">
                <img 
                  src="https://source.unsplash.com/600x600/?woman,nail-artist"
                  alt="Leanna - Professional Nail Artist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nail-pink rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center bg-nail-black/50 border border-gray-800 rounded-lg p-6">
              <div className="text-nail-pink text-3xl font-bold mb-2">500+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center bg-nail-black/50 border border-gray-800 rounded-lg p-6">
              <div className="text-nail-pink text-3xl font-bold mb-2">100%</div>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
            <div className="text-center bg-nail-black/50 border border-gray-800 rounded-lg p-6">
              <div className="text-nail-pink text-3xl font-bold mb-2">6</div>
              <p className="text-gray-300">Premium Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-nail-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-nail-pink">Touch</span>
            </h2>
            <p className="text-xl text-gray-300">
              I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-nail-pink mb-6">Send Me a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Subject *</label>
                    <select
                      required
                      className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="services">Services Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  Send Message
                  <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>

            <div>
              <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-nail-pink mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-nail-pink mt-1 mr-4" size={24} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Visit Me</h4>
                      <p className="text-gray-300">
                        123 Beauty Lane, Suite 100<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-nail-pink mt-1 mr-4" size={24} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Call Me</h4>
                      <p className="text-gray-300">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-nail-pink mt-1 mr-4" size={24} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email Me</h4>
                      <p className="text-gray-300">leanna@luxenails.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-nail-pink mt-1 mr-4" size={24} />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                      <div className="text-gray-300">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: 11:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-nail-pink mb-6">Follow Me</h3>
                <p className="text-gray-300 mb-4">
                  Stay connected and see my latest work on social media
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/luxenails"
                    className="w-12 h-12 bg-nail-pink/10 rounded-full flex items-center justify-center hover:bg-nail-pink/20 transition-colors"
                  >
                    <Facebook className="text-nail-pink" size={24} />
                  </a>
                  <a
                    href="https://instagram.com/luxenails"
                    className="w-12 h-12 bg-nail-pink/10 rounded-full flex items-center justify-center hover:bg-nail-pink/20 transition-colors"
                  >
                    <Instagram className="text-nail-pink" size={24} />
                  </a>
                  <a
                    href="https://twitter.com/luxenails"
                    className="w-12 h-12 bg-nail-pink/10 rounded-full flex items-center justify-center hover:bg-nail-pink/20 transition-colors"
                  >
                    <Twitter className="text-nail-pink" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-nail-pink to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Create Your Perfect Nails?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's work together to bring your nail vision to life. Book your appointment and experience personalized nail artistry.
          </p>
          <a 
            href="#booking"
            className="bg-white text-nail-pink hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center text-lg"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book with Me
            <ChevronRight className="ml-2" size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;