import React from 'react';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck, Heart } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function Hero({ onOpenBooking, onExploreServices }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Background with luxury bridal overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury Bridal Makeup"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03] scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Editorial Gradients: Soft Blush & Champagne Mist */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1819]/85 via-[#1C1819]/60 to-[#FAF8F5]/30 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#1C1819]/40" />
      </div>

      {/* Decorative Golden Rings / Atmospheric Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blush-300/15 blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtle Luxury Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-champagne-light shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-white/95">
              Haute Bridal Couture & Beauty Studio
            </span>
          </div>

          {/* Heading strictly as requested */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-normal text-white leading-[1.12] mb-6 drop-shadow-md">
            Enhance Your Beauty, <br />
            <span className="italic font-light text-gold-200">Celebrate Your Elegance.</span>
          </h1>

          {/* Subtitle strictly as requested */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F4ECE1] font-light leading-relaxed mb-10 max-w-xl font-poppins">
            Professional Makeup & Beauty Services for Every Special Moment.
          </p>

          {/* Action Buttons strictly as requested */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-medium text-xs sm:text-sm uppercase tracking-[0.2em] shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>

            <button
              onClick={() => onExploreServices()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/40 text-white font-medium text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </button>
          </div>

          {/* Trust Metrics Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/20">
            {SALON_INFO.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-playfair text-2xl sm:text-3xl text-gold-300 font-semibold">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/80 font-light mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
    </section>
  );
}
