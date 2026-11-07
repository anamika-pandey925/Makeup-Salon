import React from 'react';
import { Award, CheckCircle2, Sparkles, HeartHandshake, Scissors } from 'lucide-react';
import { ARTIST_BIO, SALON_INFO } from '../data/salonData';

export default function AboutUs({ onOpenBooking }) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative background blush circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blush-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Montage of Artist & Studio */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Artist Portrait with Gold Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={ARTIST_BIO.image}
                  alt={ARTIST_BIO.name}
                  className="w-full h-[460px] sm:h-[500px] object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1819]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold-300 font-medium">
                    Creative Director & Founder
                  </p>
                  <h3 className="font-playfair text-2xl font-semibold mt-0.5">
                    {ARTIST_BIO.name}
                  </h3>
                  <p className="text-xs text-champagne-light/90 font-light mt-1">
                    Delamar Academy London • 12+ Years Red Carpet & Bridal
                  </p>
                </div>
              </div>

              {/* Secondary Floating Studio Image */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={ARTIST_BIO.studioImage}
                  alt="AURA LUXE Sanctuary Studio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-medium uppercase tracking-wider text-white">
                  The Beverly Hills Suite
                </span>
              </div>

              {/* Experience Badge Pill */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gold-200 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="block font-playfair text-xl font-bold text-[#1C1819]">12+ Years</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#6E6769] font-medium">Master Artistry</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Experience */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
            {/* Delicate Pre-heading */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-200/50 border border-blush-300/60 text-[#A2413E] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">Our Story & Heritage</span>
            </div>

            {/* Requested Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-[#1C1819] leading-tight mb-6">
              Beauty is Our Passion, <br />
              <span className="italic font-light text-gold-700">Your Confidence is Our Art.</span>
            </h2>

            {/* Artistic Quote */}
            <blockquote className="border-l-2 border-gold-500 pl-4 py-1.5 my-2 italic font-cormorant text-lg sm:text-xl text-[#5C5457]">
              "{ARTIST_BIO.quote}"
            </blockquote>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#433D3F] font-normal leading-relaxed my-5">
              {ARTIST_BIO.bioParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Certifications and Credentials */}
            <div className="w-full mt-4 p-5 rounded-2xl bg-white/70 border border-[#EBDDC9] shadow-soft">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1819] mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-600" />
                Accreditations & Master Specializations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ARTIST_BIO.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#433D3F] font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1C1819] hover:bg-gold-700 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md"
              >
                Schedule Private Consultation
              </button>
              <a
                href="#services"
                className="w-full sm:w-auto text-center px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-[#7A582E] hover:text-[#1C1819] transition-colors"
              >
                View Services & Pricing →
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
