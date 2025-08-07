import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the difference between gel and acrylic nails?",
      answer: "Gel nails are lighter and more flexible, cured under UV light, and look more natural. Acrylic nails are stronger and more durable, made from a powder and liquid mixture that air-dries. Both can last 2-3 weeks with proper care."
    },
    {
      question: "How often should I get my nails done?",
      answer: "For gel manicures, we recommend every 2-3 weeks. Acrylic nails typically need fills every 2-3 weeks and a full replacement every 6-8 weeks. Regular manicures can be done weekly or bi-weekly."
    },
    {
      question: "Do you accept walk-ins?",
      answer: "While we do accept walk-ins based on availability, we highly recommend booking an appointment to ensure you get your preferred time slot and technician."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We follow strict sanitization protocols including sterilizing all tools between clients, using disposable files and buffers, maintaining a clean environment, and all our technicians are licensed and trained in hygiene best practices."
    },
    {
      question: "Can I bring my own nail polish?",
      answer: "Absolutely! You're welcome to bring your own polish. We also have an extensive collection of high-quality brands and colors to choose from."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-nail-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-black/50 hover:bg-black/70 transition-colors"
              >
                <span className="text-nail-pink font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-nail-pink" size={20} />
                ) : (
                  <ChevronDown className="text-nail-pink" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-black/30">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;