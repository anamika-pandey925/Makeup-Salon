import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { BEFORE_AFTER } from '../data/salonData';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const startDrag = () => {
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  return (
    <section id="transformation" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden border-y border-[#EBDDC9]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 border border-blush-200 text-[#A2413E] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">Real Artistry In Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-normal text-[#1C1819] mb-4">
            {BEFORE_AFTER.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5457] leading-relaxed">
            {BEFORE_AFTER.subtitle}
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-[420px] sm:h-[540px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize bg-cream-200"
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={handleMouseMove}
            onTouchStart={startDrag}
            onTouchEnd={stopDrag}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <img
              src={BEFORE_AFTER.afterImage}
              alt="Bridal After Look"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <span className="absolute top-5 right-5 z-10 bg-[#1C1819]/80 backdrop-blur-md text-white text-[11px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full border border-gold-500/30">
              {BEFORE_AFTER.afterLabel}
            </span>

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={BEFORE_AFTER.beforeImage}
                alt="Bare Complexion Before Look"
                className="absolute inset-y-0 left-0 h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              <span className="absolute top-5 left-5 z-10 bg-white/90 backdrop-blur-md text-[#1C1819] text-[11px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full shadow-md">
                {BEFORE_AFTER.beforeLabel}
              </span>
            </div>

            {/* Draggable Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Gold Handle Pill */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-xl border-2 border-gold-500 flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-5 h-5 text-gold-700 rotate-90" />
              </div>
            </div>
          </div>

          {/* Quick Guidance and Features */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {BEFORE_AFTER.highlights.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white/70 border border-[#EBDDC9] shadow-soft">
                <CheckCircle2 className="w-4 h-4 text-gold-600 mx-auto mb-1.5" />
                <span className="text-xs text-[#2F2A2C] font-medium block leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
