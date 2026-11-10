import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, Star } from 'lucide-react';
import { SERVICES } from '../data/salonData';

export default function ServicesSection({ onSelectServiceForBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Bridal', 'Specialty', 'Occasion', 'Hair', 'Styling', 'Rituals'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF6F0] relative">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blush-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBDDC9] text-[#7A582E] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">Artistry & Indulgence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-[#1C1819] mb-5">
            Our Signature Services
          </h2>
          <p className="text-sm sm:text-base text-[#5C5457] font-normal leading-relaxed">
            Every service is tailored with dermatological precision and luxury couture aesthetics to ensure your beauty resonates effortlessly under camera lights and through emotional moments.
          </p>

          {/* Category Filter Pills with Smooth Touch Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar mt-6 sm:mt-8 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 min-h-[38px] ${
                  activeCategory === cat
                    ? 'bg-[#1C1819] text-white shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#5C5457] border border-[#EBDDC9] hover:border-gold-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EBDDC9]/80 shadow-soft hover:shadow-xl transition-all duration-500 flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Image Container with Luxury Badges */}
              <div className="relative h-64 overflow-hidden bg-cream-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1819]/70 via-transparent to-transparent" />

                {/* Popular Badge */}
                {service.popular && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    Signature Favorite
                  </span>
                )}

                {/* Duration Tag */}
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#1C1819] text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Clock className="w-3 h-3 text-gold-600" />
                  {service.duration}
                </span>

                {/* Title Overlay in Image Base */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300 font-semibold block mb-0.5">
                    {service.category}
                  </span>
                  <h3 className="font-playfair text-xl font-medium tracking-wide leading-snug">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Pricing Display */}
                  <div className="flex items-baseline justify-between mb-3 pb-3 border-b border-[#FAF0EE]">
                    <span className="text-xs uppercase tracking-wider text-[#6E6769]">Service Investment</span>
                    <span className="font-playfair text-2xl font-bold text-gold-700">{service.price}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5C5457] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-gold-600 mt-0.5 shrink-0" />
                        <span className="text-xs text-[#433D3F] font-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Action Button */}
                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#1C1819] text-[#1C1819] hover:text-white border border-[#DEC6A9] hover:border-[#1C1819] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 group/btn"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover/btn:translate-x-1 group-hover/btn:text-white transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation Note */}
        <div className="mt-16 text-center bg-white/70 backdrop-blur-sm border border-[#EBDDC9] rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-soft">
          <h4 className="font-playfair text-lg sm:text-xl text-[#1C1819] font-medium mb-2">
            Looking for a Customized Bridal or Event Combination?
          </h4>
          <p className="text-xs sm:text-sm text-[#5C5457] mb-4">
            We curate bespoke bridal trousseaus, multi-day destination wedding packages, and entourage styling tailored to your exact ceremonies and venue schedule.
          </p>
          <button
            onClick={() => onSelectServiceForBooking("Custom Bespoke Bridal Consultation")}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gold-700 hover:text-gold-900 border-b border-gold-500 pb-0.5"
          >
            Request Bespoke Consultation Blueprint →
          </button>
        </div>
      </div>
    </section>
  );
}
