import React, { useState } from 'react';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBDDC9] text-[#7A582E] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">Love Letters & Praise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-[#1C1819] mb-4">
            Words of Love from Our Brides
          </h2>
          <p className="text-sm sm:text-base text-[#5C5457] leading-relaxed">
            Real experiences from real brides, celebrating unforgettable wedding memories, heartfelt tears, and 14-hour flawless endurance.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 border border-[#EBDDC9] shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Subtle Quote Watermark */}
              <Quote className="w-10 h-10 text-gold-100 absolute top-5 right-5 pointer-events-none group-hover:text-gold-200 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#433D3F] leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#FAF0EE] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-300 shadow-sm"
                />
                <div>
                  <h4 className="font-playfair text-base font-semibold text-[#1C1819] flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-[#6E6769] font-medium">{t.role}</p>
                  <span className="text-[10px] text-gold-700 font-semibold block mt-0.5">
                    {t.weddingLook}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot / Google Reviews Banner */}
        <div className="mt-14 max-w-xl mx-auto text-center p-4 rounded-2xl bg-white/80 border border-[#EBDDC9] shadow-sm flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <span className="font-playfair text-2xl font-bold text-[#1C1819]">4.98</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#6E6769] font-semibold">
            Based on 350+ Verified Bridal Reviews
          </span>
        </div>

      </div>
    </section>
  );
}
