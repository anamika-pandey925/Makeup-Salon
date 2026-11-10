import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2, ShieldCheck, Send, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, PACKAGES, SALON_INFO } from '../data/salonData';

export default function BookingSection({ preselectedService, preselectedPrice, onBookingSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || 'Signature Bridal Couture Makeup',
    date: '',
    time: '10:00 AM',
    venueType: 'Studio VIP Suite',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const timeSlots = [
    '09:00 AM (Morning Ceremonial)',
    '10:30 AM (Mid-Morning Prep)',
    '12:00 PM (Afternoon Luncheon)',
    '02:00 PM (Sangeet / Cocktail Prep)',
    '04:00 PM (Evening Reception Prep)',
    '06:00 PM (Gala Night Prep)'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.date) {
      newErrors.date = 'Please select your preferred date.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury appointment booking confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingRef = 'AL-' + Math.floor(100000 + Math.random() * 900000);
      const confirmation = {
        ref: bookingRef,
        ...formData,
        bookedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      };

      setBookingConfirmed(confirmation);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#E8C4C4', '#FFFFFF', '#C5A059']
        });
      } catch (err) {
        // Safe fallback
      }

      if (onBookingSuccess) {
        onBookingSuccess(confirmation);
      }
    }, 900);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello ${SALON_INFO.name}! My name is ${formData.fullName || 'a client'}. I would like to reserve an appointment for:
Service: ${formData.service}
Date: ${formData.date || 'TBD'}
Time: ${formData.time}
Location: ${formData.venueType}
Phone: ${formData.phone || 'N/A'}
Special Requests: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${text}`, '_blank');
  };

  // Get minimum date formatted as YYYY-MM-DD (today)
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blush-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 border border-blush-200 text-[#A2413E] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">Reserve Your Moment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-[#1C1819] mb-4">
            Book Your Appointment & Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#5C5457] leading-relaxed">
            Reserve your bridal trial, occasion styling, or full ceremony package. Our creative director personally reviews all appointments to ensure flawless synchronization with your wedding schedule.
          </p>
        </div>

        {/* Booking Form & Information Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-[#EBDDC9] overflow-hidden">
          
          {bookingConfirmed ? (
            /* Booking Success View */
            <div className="p-5 sm:p-12 text-center animate-fade-in bg-gradient-to-b from-champagne-light/50 to-white">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold-100 rounded-full flex items-center justify-center text-gold-700 mx-auto mb-5 sm:mb-6 shadow-md border-2 border-gold-300">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-gold-700 block mb-2">
                Booking Request Received
              </span>
              <h3 className="font-playfair text-2xl sm:text-4xl font-medium text-[#1C1819] mb-4">
                Thank You, {bookingConfirmed.fullName}!
              </h3>
              <p className="text-xs sm:text-base text-[#5C5457] max-w-lg mx-auto mb-6 leading-relaxed">
                Your reservation request has been priority-logged under Reference <strong>#{bookingConfirmed.ref}</strong>. Our bridal coordinator will reach out within 2 hours to confirm your suite and schedule.
              </p>

              {/* Summary Card */}
              <div className="max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-cream-100 border border-[#EBDDC9] text-left text-xs sm:text-sm space-y-2 mb-8 shadow-sm">
                <div className="flex justify-between border-b border-[#EBDDC9] pb-2">
                  <span className="text-[#6E6769]">Service Selected:</span>
                  <span className="font-semibold text-[#1C1819] text-right">{bookingConfirmed.service}</span>
                </div>
                <div className="flex justify-between border-b border-[#EBDDC9] pb-2">
                  <span className="text-[#6E6769]">Preferred Date & Time:</span>
                  <span className="font-semibold text-[#1C1819]">{bookingConfirmed.date} at {bookingConfirmed.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#EBDDC9] pb-2">
                  <span className="text-[#6E6769]">Location:</span>
                  <span className="font-semibold text-[#1C1819]">{bookingConfirmed.venueType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6E6769]">Direct Contact:</span>
                  <span className="font-semibold text-[#1C1819]">{bookingConfirmed.phone}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={handleWhatsAppInstant}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-xs uppercase tracking-widest font-semibold transition-colors shadow-md min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details to WhatsApp Concierge</span>
                </button>
                <button
                  onClick={() => setBookingConfirmed(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#DEC6A9] text-[#7A582E] hover:bg-cream-100 text-xs uppercase tracking-widest font-medium transition-colors min-h-[44px]"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            /* Active Booking Form */
            <form onSubmit={handleSubmit} className="p-5 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F2A2C] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold-600" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#1C1819] placeholder-[#9E9698] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#EBDDC9]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F2A2C] mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gold-600" />
                    Phone Number (WhatsApp Ready) *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#1C1819] placeholder-[#9E9698] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#EBDDC9]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F2A2C] mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-gold-600" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#1C1819] placeholder-[#9E9698] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#EBDDC9]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Select Service */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F2A2C] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                    Select Service or Package *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#EBDDC9] text-base sm:text-sm text-[#1C1819] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                  >
                    <optgroup label="Signature Services">
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.price})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Bridal & Event Packages">
                      {PACKAGES.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} (${p.price})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F2A2C] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-600" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-base sm:text-sm text-[#1C1819] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                      errors.date ? 'border-red-400 bg-red-50/20' : 'border-[#EBDDC9]'
                    }`}
                  />
                  {errors.date && <p className="text-[11px] text-red-500 mt-1">{errors.date}</p>}
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F2A2C] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#EBDDC9] text-base sm:text-sm text-[#1C1819] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Venue Type */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F2A2C] mb-2">
                    Appointment Location Preference:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3 sm:p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                        formData.venueType === 'Studio VIP Suite'
                          ? 'border-gold-500 bg-gold-50/60 font-semibold text-[#1C1819]'
                          : 'border-[#EBDDC9] bg-[#FAF8F5] text-[#5C5457]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="venueType"
                        value="Studio VIP Suite"
                        checked={formData.venueType === 'Studio VIP Suite'}
                        onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                        className="text-gold-600 focus:ring-gold-500"
                      />
                      <span className="text-xs">Beverly Hills Private Suite (Complimentary Champagne)</span>
                    </label>

                    <label
                      className={`p-3 sm:p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                        formData.venueType === 'On-Venue Destination'
                          ? 'border-gold-500 bg-gold-50/60 font-semibold text-[#1C1819]'
                          : 'border-[#EBDDC9] bg-[#FAF8F5] text-[#5C5457]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="venueType"
                        value="On-Venue Destination"
                        checked={formData.venueType === 'On-Venue Destination'}
                        onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                        className="text-gold-600 focus:ring-gold-500"
                      />
                      <span className="text-xs">On-Venue / Hotel Suite / Destination Travel</span>
                    </label>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#2F2A2C] mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
                    Additional Message / Event Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your wedding attire, jewelry theme, number of bridesmaids, or any skin sensitivities..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#EBDDC9] text-base sm:text-sm text-[#1C1819] placeholder-[#9E9698] bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all resize-none"
                  />
                </div>

              </div>

              {/* Submit Button & WhatsApp Alternative */}
              <div className="mt-8 pt-6 border-t border-[#EBDDC9] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#6E6769]">
                  <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Zero Spam Guarantee. Your information remains strictly private.</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleWhatsAppInstant}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-green-600 text-green-700 hover:bg-green-50 text-xs uppercase tracking-wider font-semibold transition-colors min-h-[46px]"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1C1819] to-[#2D282A] hover:from-gold-600 hover:to-gold-700 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md disabled:opacity-70 min-h-[46px]"
                  >
                    {isSubmitting ? (
                      <span>Reserving...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-gold-300" />
                        <span>Submit Booking</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
