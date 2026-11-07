import React from 'react';
import { X } from 'lucide-react';
import BookingSection from './BookingSection';

export default function BookingModal({ isOpen, onClose, preselectedService, preselectedPrice }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-gold-400/30 overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1C1819] shadow-md flex items-center justify-center transition-colors"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded Booking Section inside Modal */}
        <div className="pt-4">
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
