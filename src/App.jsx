import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PortfolioGallery from './components/PortfolioGallery';
import PricingPackages from './components/PricingPackages';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeBookingService, setActiveBookingService] = useState('Signature Bridal Couture Makeup');
  const [activeBookingPrice, setActiveBookingPrice] = useState(null);

  const openBookingModal = (serviceName = 'Signature Bridal Couture Makeup', price = null) => {
    setActiveBookingService(serviceName);
    setActiveBookingPrice(price);
    setIsModalOpen(true);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceName, price = null) => {
    setActiveBookingService(serviceName);
    setActiveBookingPrice(price);
    // Scroll directly to the in-page booking section smoothly
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1819] font-poppins selection:bg-gold-200 selection:text-[#1C1819] flex flex-col">
      {/* Navigation */}
      <Navbar onOpenBooking={() => openBookingModal()} />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => openBookingModal()}
        onExploreServices={scrollToServices}
      />

      {/* About Us */}
      <AboutUs onOpenBooking={() => openBookingModal('Bespoke Bridal Consultation')} />

      {/* Our Services (10 Services Cards) */}
      <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

      {/* Interactive Before & After Transformation Slider */}
      <BeforeAfterSlider />

      {/* Haute Portfolio & Gallery with Interactive Lightbox */}
      <PortfolioGallery onSelectServiceForBooking={handleSelectServiceForBooking} />

      {/* Pricing & Packages (with Editable/Customizer Feature) */}
      <PricingPackages onSelectPackageForBooking={handleSelectServiceForBooking} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Customer Testimonials */}
      <TestimonialsSection />

      {/* Book an Appointment (Full Form Section) */}
      <BookingSection
        preselectedService={activeBookingService}
        preselectedPrice={activeBookingPrice}
      />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Contact Us (Address, Phone, WhatsApp, Opening Hours & Google Maps) */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenBooking={() => openBookingModal()} />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={activeBookingService}
        preselectedPrice={activeBookingPrice}
      />

      {/* Floating Concierge & Scroll-To-Top */}
      <FloatingWhatsApp />
    </div>
  );
}
