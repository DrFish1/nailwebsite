import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-nail-black pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-nail-pink">Touch</span>
          </h1>
          <p className="text-xl text-gray-300">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/50 border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-nail-pink mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-black border border-gray-800 rounded-lg text-white focus:border-nail-pink focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Subject *</label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
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
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
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

          {/* Contact Information */}
          <div>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-nail-pink mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-nail-pink mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-300">
                      123 Beauty Lane, Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-nail-pink mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-300">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-nail-pink mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-300">info@luxenails.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-nail-pink mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                    <div className="text-gray-300">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 11:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-nail-pink mb-6">Follow Us</h2>
              <p className="text-gray-300 mb-4">
                Stay connected and see our latest work on social media
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

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-black/50 border border-gray-800 rounded-lg p-2 h-96">
            <iframe
              title="Luxe Nails Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397042495!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1639093958913!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;