import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, MessageCircle, Compass } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { SALON_INFO } from '../data/salonData';

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(`Hello ${SALON_INFO.name}! I would like to inquire about booking bridal services.`);
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBDDC9] text-[#7A582E] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">Sanctuary & Concierge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-[#1C1819] mb-4">
            Visit Our Studio or Connect
          </h2>
          <p className="text-sm sm:text-base text-[#5C5457] leading-relaxed">
            Experience our private bridal suite in Beverly Hills. Enjoy artisanal herbal tea or complimentary champagne while discussing your vision with our creative team.
          </p>
        </div>

        {/* 2-Column Split: Details & Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EBDDC9] shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-700 block mb-1">
                  Studio Location
                </span>
                <h4 className="font-playfair text-lg font-medium text-[#1C1819] mb-1">
                  Beverly Hills Salon & Lounge
                </h4>
                <p className="text-xs sm:text-sm text-[#5C5457] leading-relaxed">
                  {SALON_INFO.address}
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold-700 font-semibold hover:text-[#1C1819] mt-2"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Direct Telephone & WhatsApp Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EBDDC9] shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-700 block mb-1">
                  Bridal Concierge
                </span>
                <h4 className="font-playfair text-lg font-medium text-[#1C1819] mb-1">
                  Phone & WhatsApp
                </h4>
                <p className="text-xs sm:text-sm text-[#5C5457] mb-3">
                  Direct Line: <a href={`tel:${SALON_INFO.phone}`} className="font-semibold text-[#1C1819] hover:text-gold-700">{SALON_INFO.phone}</a>
                </p>

                {/* Direct WhatsApp Action Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#EBDDC9] shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-100 flex items-center justify-center text-gold-700 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-700 block mb-1">
                  Studio Hours
                </span>
                <h4 className="font-playfair text-lg font-medium text-[#1C1819] mb-2">
                  Operating Hours
                </h4>
                <div className="space-y-1.5 text-xs text-[#5C5457]">
                  {SALON_INFO.workingHours.map((wh, idx) => (
                    <div key={idx} className="flex justify-between border-b border-[#FAF0EE] pb-1">
                      <span className="font-medium text-[#2F2A2C]">{wh.days}:</span>
                      <span>{wh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#EBDDC9] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1C1819]">
                Follow Haute Looks:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={SALON_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gold-50 hover:bg-gold-600 hover:text-white text-gold-700 flex items-center justify-center transition-colors shadow-sm min-w-[40px] min-h-[40px]"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SALON_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gold-50 hover:bg-gold-600 hover:text-white text-gold-700 flex items-center justify-center transition-colors shadow-sm min-w-[40px] min-h-[40px]"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-10 h-10 rounded-full bg-green-50 hover:bg-green-600 hover:text-white text-green-700 flex items-center justify-center transition-colors shadow-sm min-w-[40px] min-h-[40px]"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Google Map Integration */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-[#EBDDC9] relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] bg-cream-200">
            <iframe
              title="AURA LUXE Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13221.796417726588!2d-118.40698188133589!3d34.06733246231948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd718d84!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1714500000000!5m2!1sen!2sus"
              className="w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] border-0 filter contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Studio Badge on Map */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-gold-200 pointer-events-none max-w-[calc(100%-1.5rem)] sm:max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span className="font-playfair text-xs sm:text-sm font-bold text-[#1C1819] truncate">AURA LUXE Beauty Studio</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#6E6769]">Valet Parking & Private Elevator Available</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
