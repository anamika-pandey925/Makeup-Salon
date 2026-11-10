import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export default function FloatingWhatsApp() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello ${SALON_INFO.name}! I would like to inquire about bridal makeup availability.`);
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] sm:right-6 sm:bottom-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-white/95 text-[#1C1819] shadow-lg border border-[#EBDDC9] hover:bg-gold-50 active:bg-gold-100 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 min-w-[44px] min-h-[44px]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-gold-700" />
        </button>
      )}

      {/* WhatsApp Concierge Button with subtle pulse tooltip */}
      <div className="relative group pointer-events-auto">
        <button
          onClick={handleWhatsApp}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#1EBE5D] active:bg-[#199E4B] transition-all duration-300 transform hover:scale-105 min-h-[44px]"
          aria-label="Chat on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">
            WhatsApp Concierge
          </span>
        </button>

        {/* Floating Tooltip */}
        <div className="absolute right-0 bottom-full mb-2 hidden sm:group-hover:block bg-[#1C1819] text-white text-[11px] py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap border border-gold-500/30 pointer-events-none">
          Instant Bridal Enquiry & Date Check
        </div>
      </div>
    </div>
  );
}
