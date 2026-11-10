import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Phone, Calendar, Heart } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Transformation', href: '#transformation' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages & Pricing', href: '#pricing' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#1C1819] text-champagne-light py-2 px-4 text-xs tracking-widest uppercase font-medium flex items-center justify-between border-b border-gold-800/40 relative z-50">
        <div className="hidden sm:flex items-center gap-2 mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span>2026-2027 Bridal Season Bookings Open</span>
          <span className="text-gold-500">•</span>
          <span>Complimentary Vanity Kit with Bridal Suites</span>
          <span className="text-gold-500">•</span>
          <span>Worldwide Destination Travel</span>
        </div>
        <div className="sm:hidden text-center w-full flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Bridal Season 2026-2027 Open</span>
        </div>
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="hidden md:flex items-center gap-1.5 text-gold-300 hover:text-white transition-colors text-xs tracking-wider"
        >
          <Phone className="w-3 h-3" />
          <span>{SALON_INFO.phone}</span>
        </a>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#EBDDC9]'
            : 'bg-[#FAF8F5]/85 backdrop-blur-sm py-5 border-b border-[#EBDDC9]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Salon Branding / Logo */}
            <a href="#home" className="group flex flex-col items-start focus:outline-none">
              <div className="flex items-center gap-2">
                <span className="font-playfair font-bold text-2xl sm:text-3xl tracking-[0.2em] text-[#1C1819] group-hover:text-gold-600 transition-colors">
                  AURA LUXE
                </span>
                <Sparkles className="w-4 h-4 text-gold-500 transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-[#7A582E] font-medium -mt-1">
                Haute Beauty & Bridal Studio
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.16em] font-medium text-[#433D3F] hover:text-gold-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white bg-[#1C1819] hover:bg-[#946E34] rounded-full transition-all duration-300 shadow-md hover:shadow-glow group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gold-300" />
                  Book Appointment
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            </div>

            {/* Mobile & Tablet Menu Controls */}
            <div className="flex items-center space-x-3 xl:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1819] hover:bg-gold-700 rounded-full transition-colors shadow-sm"
                aria-label="Book Appointment"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-300" />
                <span className="hidden sm:inline">Book Now</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#1C1819] hover:text-gold-600 hover:bg-gold-50 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with iOS Safe Scroll */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-b border-[#EBDDC9] shadow-xl px-4 pt-3 pb-8 max-h-[calc(100dvh-5rem)] overflow-y-auto ios-scroll animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-sm uppercase tracking-widest font-medium text-[#2F2A2C] hover:text-gold-700 hover:bg-gold-100/50 rounded-xl transition-colors active:bg-gold-200/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#EBDDC9]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full mt-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#1C1819] hover:bg-gold-700 active:bg-gold-800 text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-md min-h-[44px]"
                >
                  <Calendar className="w-4 h-4 text-gold-300" />
                  Reserve Your Date
                </button>
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-gold-300 text-[#7A582E] text-xs uppercase tracking-widest font-semibold hover:bg-gold-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-600" />
                  <span>Call {SALON_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
