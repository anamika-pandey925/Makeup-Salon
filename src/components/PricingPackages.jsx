import React, { useState } from 'react';
import { Sparkles, Check, MessageCircle, Calendar, Plus, ShieldCheck, DollarSign } from 'lucide-react';
import { PACKAGES, SALON_INFO } from '../data/salonData';

export default function PricingPackages({ onSelectPackageForBooking }) {
  // Editable prices feature: allow users/brides to toggle currency or adjust addon estimates
  const [packagesList, setPackagesList] = useState(PACKAGES);
  const [selectedAddons, setSelectedAddons] = useState({});
  const [isEditingPrices, setIsEditingPrices] = useState(false);

  const optionalAddons = [
    { id: 'airbrush-addon', name: 'Temptu PRO HD Airbrush Upgrade', price: 60 },
    { id: 'mom-makeup', name: 'Mother of the Bride Natural Glam', price: 160 },
    { id: 'touchup-artist', name: 'Dedicated On-Site 4hr Touchup Artist', price: 250 },
    { id: 'hair-extensions', name: '100% Remy Hair Extensions & Styling', price: 95 },
  ];

  const handlePriceChange = (id, newPrice) => {
    const val = parseInt(newPrice, 10);
    setPackagesList(prev =>
      prev.map(pkg => (pkg.id === id ? { ...pkg, price: isNaN(val) ? 0 : val } : pkg))
    );
  };

  const toggleAddon = (packageId, addonId) => {
    setSelectedAddons(prev => {
      const current = prev[packageId] || [];
      const exists = current.includes(addonId);
      return {
        ...prev,
        [packageId]: exists ? current.filter(x => x !== addonId) : [...current, addonId]
      };
    });
  };

  const calculatePackageTotal = (pkg) => {
    const activeAddons = selectedAddons[pkg.id] || [];
    const addonsTotal = activeAddons.reduce((sum, addonId) => {
      const match = optionalAddons.find(a => a.id === addonId);
      return sum + (match ? match.price : 0);
    }, 0);
    return pkg.price + addonsTotal;
  };

  const handleWhatsAppEnquiry = (pkg) => {
    const total = calculatePackageTotal(pkg);
    const text = encodeURIComponent(
      `Hello ${SALON_INFO.name}! I would like to inquire regarding availability for "${pkg.name}" (Estimated Total: $${total}). Could you please share available wedding dates?`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBDDC9] text-[#7A582E] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">Transparent Elegance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-[#1C1819] mb-4">
            Curated Packages & Investment
          </h2>
          <p className="text-sm sm:text-base text-[#5C5457] leading-relaxed mb-6">
            Designed for flawless bridal moments, evening receptions, and full pre-bridal sanctuaries. No hidden fees — full transparency and luxury service guaranteed.
          </p>

          {/* Price Customizer Toggle */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-2 sm:p-1.5 bg-white rounded-2xl sm:rounded-full border border-[#EBDDC9] shadow-sm max-w-full">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#6E6769] px-2 sm:pl-3 text-center sm:text-left">
              Custom Package Adjustments:
            </span>
            <button
              onClick={() => setIsEditingPrices(!isEditingPrices)}
              className={`px-4 py-2 sm:py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all min-h-[38px] ${
                isEditingPrices
                  ? 'bg-gold-600 text-white shadow-sm'
                  : 'bg-gold-50 text-gold-800 hover:bg-gold-100'
              }`}
            >
              {isEditingPrices ? '✓ Custom Mode Active' : '✎ Customize Baseline Prices'}
            </button>
          </div>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {packagesList.map((pkg) => {
            const currentTotal = calculatePackageTotal(pkg);
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl transition-all duration-500 flex flex-col justify-between ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#1C1819] to-[#2D282A] text-white shadow-2xl lg:scale-105 border-2 border-gold-500/60 z-10'
                    : 'bg-white text-[#1C1819] shadow-soft hover:shadow-xl border border-[#EBDDC9]'
                }`}
              >
                {/* Highlight Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full shadow-md ${
                        pkg.highlight
                          ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white'
                          : 'bg-[#1C1819] text-white'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="p-7">
                  {/* Category and Name */}
                  <span
                    className={`text-[10px] uppercase font-bold tracking-[0.25em] block mb-2 ${
                      pkg.highlight ? 'text-gold-300' : 'text-gold-700'
                    }`}
                  >
                    {pkg.category} Package
                  </span>
                  <h3
                    className={`font-playfair text-xl font-semibold leading-snug mb-3 ${
                      pkg.highlight ? 'text-white' : 'text-[#1C1819]'
                    }`}
                  >
                    {pkg.name}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      pkg.highlight ? 'text-champagne-light/80' : 'text-[#6E6769]'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Price Block */}
                  <div
                    className={`p-4 rounded-2xl mb-6 ${
                      pkg.highlight ? 'bg-white/10 border border-white/10' : 'bg-cream-100 border border-[#EBDDC9]'
                    }`}
                  >
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs uppercase tracking-wider font-semibold opacity-70">Total:</span>
                      <span
                        className={`font-playfair text-3xl font-bold ${
                          pkg.highlight ? 'text-gold-300' : 'text-gold-700'
                        }`}
                      >
                        ${currentTotal}
                      </span>
                      <span className="text-[11px] opacity-70">USD</span>
                    </div>

                    {isEditingPrices ? (
                      <div className="mt-3 pt-3 border-t border-current/20 flex items-center gap-2">
                        <label className="text-[10px] uppercase font-semibold">Base Price $:</label>
                        <input
                          type="number"
                          value={pkg.price}
                          onChange={(e) => handlePriceChange(pkg.id, e.target.value)}
                          className={`w-20 px-2 py-1 text-base sm:text-xs rounded border text-black font-semibold focus:outline-none`}
                        />
                      </div>
                    ) : (
                      <div className="mt-1 flex items-center justify-between text-[11px] opacity-70">
                        <span>Retainer Deposit: ${pkg.deposit}</span>
                        <span>{pkg.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-2.5 mb-6">
                    <p
                      className={`text-[11px] uppercase tracking-wider font-bold ${
                        pkg.highlight ? 'text-gold-300' : 'text-[#1C1819]'
                      }`}
                    >
                      Package Inclusions:
                    </p>
                    {pkg.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            pkg.highlight ? 'text-gold-400' : 'text-gold-600'
                          }`}
                        />
                        <span
                          className={`text-xs leading-snug ${
                            pkg.highlight ? 'text-[#FAF0EE]' : 'text-[#433D3F]'
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Addons Selector */}
                  <div
                    className={`pt-4 border-t ${
                      pkg.highlight ? 'border-white/15' : 'border-[#EBDDC9]'
                    }`}
                  >
                    <p
                      className={`text-[10px] uppercase tracking-wider font-semibold mb-2.5 ${
                        pkg.highlight ? 'text-gold-200' : 'text-[#7A582E]'
                      }`}
                    >
                      + Optional Add-ons:
                    </p>
                    <div className="space-y-1.5">
                      {optionalAddons.map((addon) => {
                        const isChecked = (selectedAddons[pkg.id] || []).includes(addon.id);
                        return (
                          <label
                            key={addon.id}
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer text-[11px] transition-colors ${
                              isChecked
                                ? pkg.highlight
                                  ? 'bg-gold-900/60 text-white'
                                  : 'bg-gold-100/70 text-[#1C1819]'
                                : pkg.highlight
                                ? 'hover:bg-white/5 text-white/70'
                                : 'hover:bg-cream-100 text-[#5C5457]'
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleAddon(pkg.id, addon.id)}
                                className="rounded text-gold-600 focus:ring-gold-500"
                              />
                              <span>{addon.name}</span>
                            </span>
                            <span className="font-semibold">+${addon.price}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div
                  className={`p-6 pt-0 space-y-2.5 ${
                    pkg.highlight ? 'text-white' : 'text-[#1C1819]'
                  }`}
                >
                  <button
                    onClick={() => onSelectPackageForBooking(pkg.name, currentTotal)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                      pkg.highlight
                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white'
                        : 'bg-[#1C1819] hover:bg-gold-700 text-white'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reserve Package</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppEnquiry(pkg)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 border ${
                      pkg.highlight
                        ? 'border-white/20 hover:bg-white/10 text-champagne-light'
                        : 'border-[#DEC6A9] hover:bg-gold-50 text-[#7A582E]'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                    <span>WhatsApp Enquiry</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
