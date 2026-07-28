/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactAppointmentSection } from './components/ContactAppointmentSection';
import { Footer } from './components/Footer';
import { AiConsultationModal } from './components/AiConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AppointmentModal } from './components/AppointmentModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Service } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedDetailService, setSelectedDetailService] = useState<Service | null>(null);

  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledStylist, setPrefilledStylist] = useState<string>('');

  const handleOpenBooking = (serviceName?: string, stylistName?: string) => {
    if (serviceName) setPrefilledService(serviceName);
    if (stylistName) setPrefilledStylist(stylistName);
    setBookingModalOpen(true);
  };

  const handleBookFromInlineSection = (serviceName?: string, stylistName?: string) => {
    if (serviceName) setPrefilledService(serviceName);
    if (stylistName) setPrefilledStylist(stylistName);
    
    // Scroll smoothly to contact/appointment form
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-400 selection:text-neutral-950">
      
      {/* Top Header Bar */}
      <TopBar onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* Sticky Main Navbar */}
      <Navbar
        onBookAppointment={() => handleOpenBooking()}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onBookAppointment={() => handleBookFromInlineSection()}
        onOpenConsultation={() => setConsultationModalOpen(true)}
      />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection
        onSelectService={(service) => setSelectedDetailService(service)}
        onBookService={(serviceName) => handleBookFromInlineSection(serviceName)}
      />

      {/* Pricing Section */}
      <PricingSection
        onBookService={(serviceName) => handleBookFromInlineSection(serviceName)}
      />

      {/* Gallery Section */}
      <GallerySection />

      {/* Team Section */}
      <TeamSection
        onBookStylist={(stylistName) => handleBookFromInlineSection(undefined, stylistName)}
      />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact & Appointment Section */}
      <ContactAppointmentSection
        prefilledService={prefilledService}
        prefilledStylist={prefilledStylist}
        onResetPrefill={() => {
          setPrefilledService('');
          setPrefilledStylist('');
        }}
      />

      {/* Footer */}
      <Footer />

      {/* AI Style & Hair Consultation Modal */}
      <AiConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        onBookService={(serviceName) => handleBookFromInlineSection(serviceName)}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedDetailService}
        onClose={() => setSelectedDetailService(null)}
        onBookService={(serviceName) => handleBookFromInlineSection(serviceName)}
      />

      {/* Popup Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledService={prefilledService}
        prefilledStylist={prefilledStylist}
      />

      {/* Floating WhatsApp Chat Widget */}
      <WhatsAppWidget onBookClick={() => handleOpenBooking()} />

    </div>
  );
}
