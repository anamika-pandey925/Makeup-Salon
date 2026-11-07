import React from 'react';
import { Sparkles, Crown, ShieldCheck, HeartHandshake, Clock, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/salonData';

export default function WhyChooseUs() {
  const iconMap = {
    Crown: Crown,
    Sparkles: Sparkles,
    ShieldCheck: ShieldCheck,
    HeartHandshake: HeartHandshake,
    Clock: Clock,
    MapPin: MapPin,
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Delicate background circles */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blush-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 border border-blush-200 text-[#A2413E] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">The Aura Luxe Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-[#1C1819] mb-4">
            Why Discerning Brides Choose Us
          </h2>
          <p className="text-sm sm:text-base text-[#5C5457] leading-relaxed">
            From uncompromising medical-grade sanitary protocols to exclusive luxury backstage cosmetics, we orchestrate an elevated sanctuary where your beauty reigns supreme.
          </p>
        </div>

        {/* 6 Luxury Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-white border border-[#EBDDC9] shadow-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle top gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200/80 flex items-center justify-center text-gold-700 mb-6 group-hover:bg-gold-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl font-medium text-[#1C1819] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C5457] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Brand Showcase Strip */}
        <div className="mt-16 pt-10 border-t border-[#EBDDC9] text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7A582E] font-semibold mb-6">
            Featured In Our Master Pro Vanity Kit
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm sm:text-base font-playfair tracking-widest text-[#6E6769]">
            <span className="hover:text-[#1C1819] transition-colors">CHARLOTTE TILBURY</span>
            <span className="text-gold-400">•</span>
            <span className="hover:text-[#1C1819] transition-colors">DIOR BACKSTAGE</span>
            <span className="text-gold-400">•</span>
            <span className="hover:text-[#1C1819] transition-colors">TOM FORD BEAUTY</span>
            <span className="text-gold-400">•</span>
            <span className="hover:text-[#1C1819] transition-colors">TEMPTU PRO AIRBRUSH</span>
            <span className="text-gold-400">•</span>
            <span className="hover:text-[#1C1819] transition-colors">PAT McGRATH LABS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
