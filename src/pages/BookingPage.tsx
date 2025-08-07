import React, { useState } from 'react';
import { User, Phone, Mail, Check } from 'lucide-react';

const BookingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTechnician, setSelectedTechnician] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const services = [
    'Classic Manicure - $30',
    'Gel Manicure - $45',
    'Spa Manicure - $55',
    'Classic Pedicure - $40',
    'Gel Pedicure - $55',
    'Spa Pedicure - $70',
    'Acrylic Full Set - $65',
    'Gel Extensions - $75',
    'Nail Art Design - $15+',
  ];

  const technicians = [
    { name: 'Sarah Kim', specialty: 'Nail Art & Design' },
    { name: 'Jessica Chen', specialty: 'Gel & Acrylics' },
    { name: 'Maria Lopez', specialty: 'Spa Treatments' },
    { name: 'Any Available', specialty: 'First Available' },
  ];

  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  ];

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking submitted! You will receive a confirmation email shortly.');
  };

  const renderProgressBar = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((i) => (
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
          {i < 4 && (
            <div
              className={`w-16 md:w-24 h-1 transition-all ${
                step > i ? 'bg-nail-pink' : 'bg-gray-800'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Select Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        );

      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Choose Technician</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technicians.map((tech) => (
                <button
                  key={tech.name}
                  onClick={() => setSelectedTechnician(tech.name)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedTechnician === tech.name
                      ? 'border-nail-pink bg-nail-pink/10'
                      : 'border-gray-800 hover:border-nail-pink/50'
                  }`}
                >
                  <div className="text-white font-semibold">{tech.name}</div>
                  <div className="text-gray-400 text-sm">{tech.specialty}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Select Date & Time</h2>
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
        );

      case 4:
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Your Information</h2>
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
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-nail-black pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your <span className="text-nail-pink">Appointment</span>
          </h1>
          <p className="text-xl text-gray-300">
            Easy online booking in just a few steps
          </p>
        </div>

        {renderProgressBar()}

        <div className="bg-black/50 border border-gray-800 rounded-lg p-6 md:p-8">
          {renderStepContent()}

          {step === 4 && (
            <div className="mt-6 p-4 bg-nail-pink/10 border border-nail-pink/30 rounded-lg">
              <h3 className="text-nail-pink font-semibold mb-2">Booking Summary</h3>
              <div className="text-gray-300 space-y-1">
                <p><span className="text-gray-400">Service:</span> {selectedService}</p>
                <p><span className="text-gray-400">Technician:</span> {selectedTechnician}</p>
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
            {step < 4 ? (
              <button
                onClick={handleNextStep}
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && !selectedTechnician) ||
                  (step === 3 && (!selectedDate || !selectedTime))
                }
                className={`px-6 py-3 rounded-lg font-semibold transition-all ml-auto ${
                  ((step === 1 && !selectedService) ||
                   (step === 2 && !selectedTechnician) ||
                   (step === 3 && (!selectedDate || !selectedTime)))
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
                Confirm Booking
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>Need help? Call us at <span className="text-nail-pink">(123) 456-7890</span></p>
          <p className="mt-2">We'll send you a confirmation email with all the details</p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;