import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ArrowRight, Heart } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';

export default function PortfolioGallery({ onSelectServiceForBooking }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', 'Bridal', 'Party', 'Engagement', 'Reception', 'Hairstyles'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBDDC9] text-[#7A582E] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">Visual Masterpieces</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-[#1C1819] mb-4">
            Our Haute Portfolio & Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#5C5457] leading-relaxed">
            Browse our curated editorial gallery celebrating timeless royal brides, cocktail and sangeet glam, and bespoke hair architecture.
          </p>

          {/* Filter Pills with Mobile Touch Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar mt-6 sm:mt-8 -mx-4 px-4 sm:mx-0 sm:px-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 min-h-[38px] ${
                  activeFilter === filter
                    ? 'bg-[#1C1819] text-white shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#5C5457] border border-[#EBDDC9] hover:border-gold-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-2xl cursor-pointer bg-white border border-[#EBDDC9]/60 aspect-[4/5] transform hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-[1.03]"
                loading="lazy"
              />

              {/* Tag in Top Corner */}
              <span className="absolute top-3 left-3 bg-[#1C1819]/80 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full border border-gold-500/30">
                {item.tag}
              </span>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1C1819] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <Maximize2 className="w-4 h-4 text-gold-700" />
              </div>

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#1C1819] via-[#1C1819]/75 to-transparent text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-playfair text-lg font-medium text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-champagne-light/90 line-clamp-2 font-light">
                  {item.subtitle}
                </p>
                <div className="mt-2.5 flex items-center gap-1 text-[11px] uppercase tracking-wider text-gold-300 font-medium">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Zoom Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-gold-400/30 grid grid-cols-1 md:grid-cols-12 max-h-[92vh] supports-[height:100dvh]:max-h-[92dvh] overflow-y-auto ios-scroll"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image */}
              <div className="md:col-span-7 h-[260px] sm:h-[340px] md:h-full min-h-[260px] md:min-h-[500px] bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Editorial Details */}
              <div className="md:col-span-5 p-5 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <span className="inline-block text-[10px] uppercase font-bold tracking-[0.25em] text-gold-700 bg-gold-50 px-3 py-1 rounded-full mb-3">
                    {selectedImage.tag}
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-[#1C1819] mb-3">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5457] leading-relaxed mb-5">
                    {selectedImage.subtitle}
                  </p>
                  
                  <div className="p-3.5 sm:p-4 rounded-xl bg-champagne-light border border-[#EBDDC9] space-y-1.5 sm:space-y-2 mb-6">
                    <p className="text-xs text-[#2F2A2C] font-semibold">Artistry Specifications:</p>
                    <p className="text-xs text-[#5C5457]">• Custom undertone balancing</p>
                    <p className="text-xs text-[#5C5457]">• 18-hour sweat & camera-proof finish</p>
                    <p className="text-xs text-[#5C5457]">• High-fashion couture accessories pinning</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <button
                    onClick={() => {
                      const lookTitle = selectedImage.title;
                      setSelectedImage(null);
                      onSelectServiceForBooking(`Inquiry for Look: ${lookTitle}`);
                    }}
                    className="w-full py-3.5 px-6 rounded-full bg-[#1C1819] hover:bg-gold-700 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 shadow-md min-h-[44px]"
                  >
                    <span>Request This Look</span>
                    <ArrowRight className="w-4 h-4 text-gold-300" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-full py-2 text-xs uppercase tracking-widest text-[#7A582E] hover:text-[#1C1819] min-h-[38px]"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
