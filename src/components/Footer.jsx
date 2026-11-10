import React from 'react';
import { Sparkles, Heart, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { SALON_INFO, SERVICES } from '../data/salonData';

export default function Footer({ onOpenBooking }) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Artist', href: '#about' },
    { name: 'Bridal Services', href: '#services' },
    { name: 'Transformation Gallery', href: '#transformation' },
    { name: 'Haute Portfolio', href: '#portfolio' },
    { name: 'Packages & Pricing', href: '#pricing' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'Visit Studio', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1C1819] text-champagne-light pt-20 pb-10 border-t border-gold-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Salon Brand & Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-playfair font-bold text-2xl tracking-[0.2em] text-white">
                AURA LUXE
              </span>
              <Sparkles className="w-4 h-4 text-gold-400" />
            </div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold-400 font-semibold mb-4">
              {SALON_INFO.tagline}
            </p>
            <p className="text-xs sm:text-sm text-champagne-light/70 font-light leading-relaxed mb-6">
              A bespoke luxury makeup and bridal styling sanctuary. Dedicated to celebrating authentic feminine grace, camera-ready perfection, and unforgettable memories on your most cherished day.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={SALON_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black flex items-center justify-center transition-colors text-white"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-gold-300 mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-champagne-light/80">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-gold-300 transition-colors inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-gold-300 mb-5">
              Couture Services
            </h4>
            <ul className="space-y-2.5 text-xs text-champagne-light/80">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-gold-300 transition-colors inline-block"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter / VIP Bridal Club */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-gold-300 mb-5">
              VIP Bridal Club
            </h4>
            <p className="text-xs text-champagne-light/70 mb-4 leading-relaxed">
              Subscribe to receive our complimentary <em>"The 6-Month Bridal Skin & Beauty Blueprint"</em> guide and priority season booking alerts.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing! Your bridal beauty guide is on its way.');
              }}
              className="space-y-2.5"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 sm:py-2.5 rounded-full bg-white/10 border border-white/20 text-base sm:text-xs text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 min-h-[44px]"
              />
              <button
                type="submit"
                className="w-full py-3 sm:py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-black text-xs uppercase tracking-widest font-semibold transition-colors min-h-[44px]"
              >
                Join Exclusive List
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-champagne-light/60 gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {SALON_INFO.name} Haute Beauty Studio. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="hover:text-champagne-light transition-colors cursor-pointer py-1">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-champagne-light transition-colors cursor-pointer py-1">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-champagne-light transition-colors cursor-pointer py-1">Bridal Contract</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
