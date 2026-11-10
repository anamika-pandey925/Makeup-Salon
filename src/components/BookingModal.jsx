import React from 'react';
import { X } from 'lucide-react';
import BookingSection from './BookingSection';

export default function BookingModal({ isOpen, onClose, preselectedService, preselectedPrice }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto ios-scroll bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-gold-400/30 overflow-hidden my-4 sm:my-8 max-h-[94vh] supports-[height:100dvh]:max-h-[94dvh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white active:bg-cream-100 text-[#1C1819] shadow-md flex items-center justify-center transition-colors min-w-[44px] min-h-[44px]"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded Booking Section inside Modal */}
        <div className="overflow-y-auto ios-scroll pt-2 sm:pt-4">
          <BookingSection
            preselectedService={preselectedService}
            preselectedPrice={preselectedPrice}
            onBookingSuccess={() => {
              // keep modal open to show confirmation card
            }}
          />
        </div>
      </div>
    </div>
  );
}
