import React, { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/salonData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 border border-blush-200 text-[#A2413E] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">Bridal Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-playfair font-normal text-[#1C1819] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5457]">
            Everything you need to know about preparing for your dream wedding beauty timeline.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#EBDDC9] bg-white overflow-hidden shadow-soft transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gold-50/40 transition-colors"
                >
                  <span className="font-playfair text-base sm:text-lg font-medium text-[#1C1819]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-gold-50 flex items-center justify-center text-gold-700 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5C5457] leading-relaxed border-t border-[#FAF0EE] animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
