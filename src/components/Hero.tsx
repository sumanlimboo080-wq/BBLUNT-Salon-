import React from 'react';
import { Calendar, ChevronRight, Star, ShieldCheck, Award, Users, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import heroSalonImg from '../assets/images/hero_salon_interior_1785221996259.jpg';

interface HeroProps {
  onBookAppointment: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookAppointment, onOpenConsultation }) => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Salon Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSalonImg}
          alt="BBLUNT - Salon Interior"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Label */}
            <p className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs sm:text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Premium Experience in {SALON_INFO.location}</span>
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight uppercase tracking-tight">
              Look Good.<br />
              <span className="text-[#D4AF37]">Feel Confident.</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Professional hair and beauty services tailored for the modern individual at our state-of-the-art Juhu studio. Precision cuts, bespoke balayage, keratin smoothness, and radiant facial therapies.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookAppointment}
                className="bg-[#D4AF37] hover:bg-[#C59F2D] text-white px-8 py-4 font-bold rounded-lg uppercase tracking-widest text-xs sm:text-sm transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2"
                id="hero-book-now-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href="#services"
                onClick={handleScrollToServices}
                className="bg-slate-900/90 hover:bg-slate-800 text-white font-bold px-7 py-4 rounded-lg uppercase tracking-widest text-xs border border-slate-700 hover:border-[#D4AF37] transition-all flex items-center gap-2"
                id="hero-view-services-btn"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors text-xs font-bold uppercase tracking-wider py-2"
                id="hero-ai-consult-link"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Need style guidance? Try AI Assistant</span>
              </button>
            </div>

            {/* Google Rating Badge */}
            <div className="pt-6 flex items-center gap-4 border-t border-slate-800/80">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-300">
                <span className="font-bold text-white text-sm">{SALON_INFO.rating}/5</span> Google Rating •{' '}
                <span className="text-[#D4AF37] font-bold">{SALON_INFO.totalReviews}+ Verified Reviews</span>
              </div>
            </div>
          </div>

          {/* Hero Right Card / Quick Highlights */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6 pb-3 border-b border-slate-800 flex items-center justify-between">
                <span>The BBLUNT Advantage</span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30 font-bold">
                  Juhu Studio
                </span>
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-white">Master Stylists &amp; Colorists</h4>
                    <p className="text-xs text-slate-400 mt-1">Certified artists specializing in international cutting, balayage, and precision styling.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-white">Premium &amp; Ammonia-Free Dyes</h4>
                    <p className="text-xs text-slate-400 mt-1">Olaplex bond repair, L’Oréal Professionnel, Kérastase, and dermatologically tested serums.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-white">Private Luxury Stations</h4>
                    <p className="text-xs text-slate-400 mt-1">Air-conditioned comfort, sanitized single-use capes, and complimentary artisan refreshments.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider">
                <span>Mon-Sun 10:00 AM - 9:00 PM</span>
                <span className="text-[#D4AF37] font-bold">Walk-ins Welcome</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

