import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar } from 'lucide-react';

// Service data with all original options
const SERVICES = {
  'gel-x': {
    id: 'gel-x',
    name: 'Gel-X Extensions',
    icon: '✨',
    description: 'Premium soft gel extensions for length and strength',
    color: 'from-pink-500 to-rose-500',
    options: [
      { id: 'gelx-sm-color', name: 'One Colour S/M Length', price: 35 },
      { id: 'gelx-l-color', name: 'One Colour L Length', price: 37 },
      { id: 'gelx-sm-french', name: 'French/Simple Art S/M', price: 40 },
      { id: 'gelx-l-french', name: 'French/Simple Art L', price: 42 },
      { id: 'gelx-sm-intricate', name: 'Intricate Art S/M', price: 45 },
      { id: 'gelx-l-intricate', name: 'Intricate Art L', price: 47 }
    ]
  },
  'biab': {
    id: 'biab',
    name: 'BIAB Natural Nails',
    icon: '💎',
    description: 'Builder gel overlay to strengthen natural nails',
    color: 'from-emerald-500 to-teal-500',
    options: [
      { id: 'biab-plain', name: 'Plain BIAB', price: 30 },
      { id: 'biab-gel', name: 'with Gel Colour', price: 33 },
      { id: 'biab-french', name: 'with French/Simple Art', price: 35 },
      { id: 'biab-intricate', name: 'with Intricate Art', price: 38 }
    ]
  },
  'infill': {
    id: 'infill',
    name: 'Infills & Maintenance',
    icon: '🔄',
    description: 'Professional maintenance services',
    color: 'from-blue-500 to-indigo-500',
    options: [
      { id: 'infill-biab-sm', name: 'BIAB Infill S/M', price: 30 },
      { id: 'infill-biab-l', name: 'BIAB Infill L', price: 33 },
      { id: 'infill-gel-sm', name: 'with Gel Colour S/M', price: 35 },
      { id: 'infill-gel-l', name: 'with Gel Colour L', price: 37 },
      { id: 'infill-french', name: 'with French Art', price: 39 },
      { id: 'infill-intricate-sm', name: 'Intricate Art S/M', price: 40 },
      { id: 'infill-intricate-l', name: 'Intricate Art L', price: 42 }
    ]
  },
  'pedicure': {
    id: 'pedicure',
    name: 'Pedicure Services',
    icon: '🦶',
    description: 'Luxury foot care treatments',
    color: 'from-purple-500 to-pink-500',
    options: [
      { id: 'pedi-gel', name: 'Gel Polish', price: 25 },
      { id: 'pedi-extension', name: 'Added Extension', price: 30 },
      { id: 'pedi-biab', name: 'Plain BIAB', price: 27 },
      { id: 'pedi-french', name: 'BIAB with French', price: 30 },
      { id: 'pedi-free', name: 'Colour Free Care', price: 15 }
    ]
  },
  'extras': {
    id: 'extras',
    name: 'Add-ons & Extras',
    icon: '🎨',
    description: 'Special touches and removals',
    color: 'from-orange-500 to-red-500',
    options: [
      { id: 'removal-gelx', name: 'Gel-X Removal', price: 10 },
      { id: 'removal-biab', name: 'BIAB Removal', price: 8 },
      { id: 'removal-acrylic', name: 'Acrylic Removal', price: 12 },
      { id: 'manicure-free', name: 'Colour Free Manicure', price: 10 },
      { id: '3d-designs', name: '3D Designs', price: 5 },
      { id: 'gems', name: 'Gems & Crystals', price: 5 },
      { id: 'chrome', name: 'Chrome Finish', price: 5 }
    ]
  }
} as const;

// Available time slots
const TIME_SLOTS = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM'
];

interface ServiceOption {
  id: string;
  name: string;
  price: number;
}

interface BookingData {
  services: { [key: string]: ServiceOption[] };
  date: Date | null;
  time: string | null;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    notes: string;
  } | null;
}

// Generate calendar dates
const generateCalendarDates = (startDate = new Date()) => {
  const dates = [];
  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date);
  }
  return dates;
};

// Progress Bar Component
const ProgressBar: React.FC<{ currentStep: number; totalSteps: number }> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <>
      <div className="flex items-center justify-between max-w-md mx-auto mb-2">
        <span className="text-white font-semibold">Step {currentStep} of {totalSteps}</span>
        <span className="text-nail-pink text-sm">
          {currentStep === 1 && 'Select Services'}
          {currentStep === 2 && 'Choose Date'}
          {currentStep === 3 && 'Pick Time'}
          {currentStep === 4 && 'Your Details'}
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
        <div 
          className="h-2 bg-gradient-to-r from-nail-pink to-nail-pink-light rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
};

// Service Card Component
const ServiceCard: React.FC<{
  service: any;
  isSelected: boolean;
  onSelect: () => void;
  selectedOptions: ServiceOption[];
}> = ({ service, isSelected, onSelect, selectedOptions = [] }) => {
  const selectedCount = selectedOptions.length;
  const totalPrice = selectedOptions.reduce((sum, opt) => sum + opt.price, 0);
  
  return (
    <div 
      onClick={onSelect}
      className={`relative p-4 sm:p-6 rounded-2xl cursor-pointer transition-all transform hover:scale-105 hover:shadow-xl ${
        isSelected 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-nail-pink shadow-lg shadow-nail-pink/20' 
          : 'bg-gray-800/50 border border-gray-700 hover:border-nail-pink/50'
      }`}
    >
      {/* Service Icon & Gradient */}
      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 mx-auto`}>
        {service.icon}
      </div>
      
      {/* Service Info */}
      <div className="text-center">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{service.name}</h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-3 hidden sm:block">{service.description}</p>
        
        {selectedCount > 0 && (
          <div className="bg-nail-pink/20 border border-nail-pink/30 rounded-lg p-2 mt-3">
            <p className="text-nail-pink text-sm font-medium">
              {selectedCount} option{selectedCount > 1 ? 's' : ''} selected
            </p>
            <p className="text-white font-bold">£{totalPrice}</p>
          </div>
        )}
      </div>
      
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-nail-pink rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      )}
    </div>
  );
};

// Service Options Modal
const ServiceOptionsModal: React.FC<{
  service: any;
  selectedOptions: ServiceOption[];
  onOptionsChange: (options: ServiceOption[]) => void;
  onClose: () => void;
}> = ({ service, selectedOptions, onOptionsChange, onClose }) => {
  const [localSelection, setLocalSelection] = useState(selectedOptions);
  
  const toggleOption = (option: ServiceOption) => {
    const isSelected = localSelection.find(opt => opt.id === option.id);
    if (isSelected) {
      setLocalSelection(localSelection.filter(opt => opt.id !== option.id));
    } else {
      setLocalSelection([...localSelection, option]);
    }
  };
  
  const handleConfirm = () => {
    onOptionsChange(localSelection);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end animate-fade-in">
      <div className="w-full max-h-[80vh] bg-nail-black rounded-t-3xl p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">{service.name}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-600"
          >
            ✕
          </button>
        </div>
        
        {/* Options List */}
        <div className="space-y-3 mb-6 max-h-[40vh] overflow-y-auto">
          {service.options.map((option: ServiceOption) => {
            const isSelected = localSelection.find(opt => opt.id === option.id);
            return (
              <div 
                key={option.id}
                onClick={() => toggleOption(option)}
                className={`flex items-center justify-between p-3 sm:p-4 rounded-xl cursor-pointer transition-all ${
                  isSelected 
                    ? 'bg-nail-pink/20 border-2 border-nail-pink' 
                    : 'bg-gray-800/50 border border-gray-700 hover:border-nail-pink/50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    isSelected ? 'border-nail-pink bg-nail-pink' : 'border-gray-500'
                  }`}>
                    {isSelected && <span className="text-white text-xs">✓</span>}
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">{option.name}</span>
                </div>
                <span className="text-nail-pink font-bold">£{option.price}</span>
              </div>
            );
          })}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div>
            <p className="text-gray-400 text-sm">
              {localSelection.length} selected
            </p>
            <p className="text-white font-bold">
              Total: £{localSelection.reduce((sum, opt) => sum + opt.price, 0)}
            </p>
          </div>
          <button 
            onClick={handleConfirm}
            className="bg-gradient-to-r from-nail-pink to-nail-pink-light text-black px-4 sm:px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
};

// Calendar Component
const CalendarCarousel: React.FC<{
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}> = ({ selectedDate, onDateSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dates = generateCalendarDates();
  
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };
  
  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-nail-pink rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-nail-pink rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <ChevronRight size={20} />
      </button>
      
      {/* Calendar Scroll */}
      <div 
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto px-10 py-2 scrollbar-hide"
      >
        {dates.map((date, index) => {
          const isToday = date.toDateString() === new Date().toDateString();
          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
          const isPast = date < new Date(new Date().setHours(0,0,0,0));
          
          return (
            <div
              key={index}
              onClick={() => !isPast && onDateSelect(date)}
              className={`flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all transform hover:scale-105 ${
                isPast 
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : isSelected 
                    ? 'bg-gradient-to-br from-nail-pink to-nail-pink-light text-black shadow-lg' 
                    : isToday
                      ? 'bg-nail-pink/20 border-2 border-nail-pink text-nail-pink'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-xs font-medium">
                {date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase()}
              </span>
              <span className="text-lg font-bold">
                {date.getDate()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Time Slots Grid
const TimeSlotGrid: React.FC<{
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  bookedSlots?: string[];
}> = ({ selectedTime, onTimeSelect, bookedSlots = [] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {TIME_SLOTS.map(time => {
        const isBooked = bookedSlots.includes(time);
        const isSelected = selectedTime === time;
        
        return (
          <button
            key={time}
            onClick={() => !isBooked && onTimeSelect(time)}
            disabled={isBooked}
            className={`p-3 sm:p-4 rounded-xl font-medium transition-all transform hover:scale-105 ${
              isBooked
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : isSelected
                  ? 'bg-gradient-to-br from-nail-pink to-nail-pink-light text-black shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-nail-pink/20 hover:text-nail-pink border border-gray-700'
            }`}
          >
            <Clock className="w-4 h-4 mx-auto mb-1" />
            {time}
          </button>
        );
      })}
    </div>
  );
};

// Success Modal
const SuccessModal: React.FC<{
  bookingData: BookingData;
  onClose: () => void;
  onDownloadCalendar: () => void;
}> = ({ bookingData, onClose, onDownloadCalendar }) => {
  const totalPrice = Object.values(bookingData.services)
    .flat()
    .reduce((sum, service) => sum + service.price, 0);
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-nail-black rounded-3xl p-6 max-w-sm w-full">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
          ✓
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Booking Confirmed!</h3>
          <p className="text-gray-400 text-sm">
            Your appointment has been successfully booked for {bookingData.date?.toLocaleDateString('en-GB', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })} at {bookingData.time}
          </p>
        </div>
        
        {/* Booking Summary */}
        <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Total:</span>
            <span className="text-nail-pink font-bold text-lg">£{totalPrice}</span>
          </div>
          {bookingData.customerInfo && (
            <div className="text-sm text-gray-400">
              <p>Confirmation sent to {bookingData.customerInfo.email}</p>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <button 
            onClick={onDownloadCalendar}
            className="w-full bg-gradient-to-r from-nail-pink to-nail-pink-light text-black py-3 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            📅 Add to Calendar
          </button>
          <button 
            onClick={onClose}
            className="w-full bg-gray-700 text-white py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

// Customer Info Form Component
const CustomerInfoForm: React.FC<{
  onSubmit: (info: any) => void;
  onBack: () => void;
  onConfirm: () => void;
  bookingData: BookingData;
}> = ({ onSubmit, onBack, onConfirm, bookingData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
      onConfirm();
    }
  };
  
  const totalPrice = Object.values(bookingData.services)
    .flat()
    .reduce((sum, service) => sum + service.price, 0);
  
  return (
    <div className="animate-slide-up">
      <h2 className="text-2xl font-bold text-white text-center mb-2">
        Your Details
      </h2>
      <p className="text-gray-400 text-center mb-8">
        We'll send your confirmation to these details
      </p>
      
      {/* Booking Summary */}
      <div className="bg-gradient-to-r from-gray-800/50 to-nail-black/30 rounded-2xl p-4 mb-6 border border-nail-pink/20">
        <h3 className="text-nail-pink font-semibold mb-2">Appointment Summary</h3>
        <div className="space-y-1 text-sm">
          <p className="text-gray-300">
            📅 {bookingData.date?.toLocaleDateString('en-GB', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="text-gray-300">⏰ {bookingData.time}</p>
          <p className="text-gray-300">
            💅 {Object.values(bookingData.services).flat().length} service{Object.values(bookingData.services).flat().length !== 1 ? 's' : ''}
          </p>
          <p className="text-nail-pink font-bold text-lg">💰 £{totalPrice}</p>
        </div>
      </div>
      
      {/* Form */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-white font-medium mb-2">Full Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full p-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-nail-pink transition-colors ${
              errors.name ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-white font-medium mb-2">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full p-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-nail-pink transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block text-white font-medium mb-2">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full p-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-nail-pink transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Your phone number"
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>
        
        <div>
          <label className="block text-white font-medium mb-2">Special Requests (Optional)</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-nail-pink transition-colors resize-none"
            placeholder="Any special requests, allergies, or design ideas..."
          />
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3">
        <button 
          onClick={onBack}
          className="flex-1 py-4 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-600 transition-colors"
        >
          Back
        </button>
        <button 
          onClick={handleSubmit}
          className="flex-2 py-4 bg-gradient-to-r from-nail-pink to-nail-pink-light text-black rounded-xl font-bold hover:scale-105 transition-transform"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

// Main Booking Page Component
const BookingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    services: {},
    date: null,
    time: null,
    customerInfo: null
  });
  const [showServiceModal, setShowServiceModal] = useState<any>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const totalSteps = 4;
  const hasServices = Object.keys(bookingData.services).length > 0;
  const canProceedToTime = hasServices && bookingData.date;
  const canProceedToCustomer = canProceedToTime && bookingData.time;
  
  // Service selection handlers
  const handleServiceSelect = (serviceId: string) => {
    setShowServiceModal(SERVICES[serviceId as keyof typeof SERVICES]);
  };
  
  const handleOptionsChange = (serviceId: string, options: ServiceOption[]) => {
    setBookingData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceId]: options
      }
    }));
  };
  
  const handleDateSelect = (date: Date) => {
    setBookingData(prev => ({ ...prev, date }));
  };
  
  const handleTimeSelect = (time: string) => {
    setBookingData(prev => ({ ...prev, time }));
  };
  
  const handleCustomerInfo = (info: any) => {
    setBookingData(prev => ({ ...prev, customerInfo: info }));
  };
  
  const handleConfirmBooking = () => {
    // Simulate booking confirmation
    console.log('Booking confirmed:', bookingData);
    setShowSuccess(true);
  };
  
  const handleDownloadCalendar = () => {
    // Generate calendar event
    const event = {
      title: 'Nail Appointment - Leanna\'s Nail Art',
      start: bookingData.date,
      time: bookingData.time,
      description: `Nail appointment with Leanna. Services: ${Object.values(bookingData.services).flat().map(s => s.name).join(', ')}`
    };
    
    // Create calendar download (simplified)
    const blob = new Blob([`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.title}\nDTSTART:${bookingData.date?.toISOString().replace(/[-:]/g, '').split('.')[0]}Z\nEND:VEVENT\nEND:VCALENDAR`], 
      { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nail-appointment.ics';
    a.click();
  };
  
  const resetBooking = () => {
    setBookingData({
      services: {},
      date: null,
      time: null,
      customerInfo: null
    });
    setCurrentStep(1);
    setShowSuccess(false);
  };
  
  const totalPrice = Object.values(bookingData.services)
    .flat()
    .reduce((sum, service) => sum + service.price, 0);
  
  const totalServices = Object.values(bookingData.services).flat().length;
  
  return (
    <div className="min-h-screen bg-nail-black relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-nail-black to-black p-4 border-b border-gray-800 pt-20">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full mr-3" />
            <h1 className="text-xl sm:text-2xl font-bold text-white">Book Your Appointment</h1>
          </div>
          <div className="text-nail-pink text-sm font-medium">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-4">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4 pb-32">
        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Choose Your Services
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Select the nail services you'd like to book
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {Object.values(SERVICES).map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isSelected={bookingData.services[service.id]?.length > 0}
                  selectedOptions={bookingData.services[service.id] || []}
                  onSelect={() => handleServiceSelect(service.id)}
                />
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentStep(2)}
              disabled={!hasServices}
              className={`w-full py-4 rounded-xl font-bold transition-all ${
                hasServices
                  ? 'bg-gradient-to-r from-nail-pink to-nail-pink-light text-black hover:scale-105'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue to Date & Time
            </button>
          </div>
        )}
        
        {/* Step 2: Date Selection */}
        {currentStep === 2 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Choose Your Date
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Swipe to browse available dates
            </p>
            
            <CalendarCarousel
              selectedDate={bookingData.date}
              onDateSelect={handleDateSelect}
            />
            
            {bookingData.date && (
              <div className="mt-6 text-center bg-nail-pink/10 border border-nail-pink/30 rounded-lg p-3">
                <p className="text-nail-pink font-medium">
                  Selected: {bookingData.date.toLocaleDateString('en-GB', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            )}
            
            <div className="flex gap-3 mt-8">
              <button 
                onClick={() => setCurrentStep(1)}
                className="flex-1 py-4 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-600 transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setCurrentStep(3)}
                disabled={!bookingData.date}
                className={`flex-2 py-4 rounded-xl font-bold transition-all ${
                  bookingData.date
                    ? 'bg-gradient-to-r from-nail-pink to-nail-pink-light text-black hover:scale-105'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Choose Time
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Time Selection */}
        {currentStep === 3 && (
          <div className="animate-slide-up">
            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Pick Your Time
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Available slots for {bookingData.date?.toLocaleDateString('en-GB', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            
            <TimeSlotGrid
              selectedTime={bookingData.time}
              onTimeSelect={handleTimeSelect}
            />
            
            <div className="flex gap-3 mt-8">
              <button 
                onClick={() => setCurrentStep(2)}
                className="flex-1 py-4 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-600 transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setCurrentStep(4)}
                disabled={!bookingData.time}
                className={`flex-2 py-4 rounded-xl font-bold transition-all ${
                  bookingData.time
                    ? 'bg-gradient-to-r from-nail-pink to-nail-pink-light text-black hover:scale-105'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Your Details
              </button>
            </div>
          </div>
        )}
        
        {/* Step 4: Customer Information */}
        {currentStep === 4 && (
          <CustomerInfoForm 
            onSubmit={handleCustomerInfo}
            onBack={() => setCurrentStep(3)}
            onConfirm={handleConfirmBooking}
            bookingData={bookingData}
          />
        )}
      </div>
      
      {/* Service Options Modal */}
      {showServiceModal && (
        <ServiceOptionsModal
          service={showServiceModal}
          selectedOptions={bookingData.services[showServiceModal.id] || []}
          onOptionsChange={(options: ServiceOption[]) => {
            handleOptionsChange(showServiceModal.id, options);
            setShowServiceModal(null);
          }}
          onClose={() => setShowServiceModal(null)}
        />
      )}
      
      {/* Summary Panel */}
      {hasServices && currentStep > 1 && !showSuccess && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-nail-black p-4 border-t border-nail-pink/30 z-40">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">
                {totalServices} service{totalServices !== 1 ? 's' : ''}
                {bookingData.date && ` • ${bookingData.date.toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}`}
                {bookingData.time && ` • ${bookingData.time}`}
              </p>
              <p className="text-white text-xl font-bold">£{totalPrice}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Success Modal */}
      {showSuccess && (
        <SuccessModal
          bookingData={bookingData}
          onClose={resetBooking}
          onDownloadCalendar={handleDownloadCalendar}
        />
      )}
    </div>
  );
};

export default BookingPage;