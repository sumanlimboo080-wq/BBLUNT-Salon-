import React from 'react';
import { UserCheck, Sparkles, HeartHandshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import heroSalonImg from '../assets/images/hero_salon_interior_1785221996259.jpg';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: UserCheck,
      title: "Experienced Hairstylists",
      description: "Our senior stylists bring 8–12+ years of international expertise, mastering modern cuts, colors, and treatments."
    },
    {
      icon: Sparkles,
      title: "Clean & Comfortable Salon",
      description: "Designed with plush seating, ambient gold lighting, air filtration, and strict sanitization standards for ultimate relaxation."
    },
    {
      icon: ShieldCheck,
      title: "High-Quality Beauty Products",
      description: "We use only authentic, sulfate-free, and ammonia-free products from leading global professional hair & skin brands."
    },
    {
      icon: HeartHandshake,
      title: "Friendly Customer Service",
      description: "Warm hospitality, complimentary consultation, and personalized care from the moment you step through our doors."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Quick Stats Banner from Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-center items-center hover:border-[#D4AF37] transition-colors">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">15k+</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Happy Clients</span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-center items-center hover:border-[#D4AF37] transition-colors">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">12+</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Master Stylists</span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-center items-center hover:border-[#D4AF37] transition-colors">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37]">4.9 / 5</span>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Google Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
              <img
                src={heroSalonImg}
                alt="BBLUNT - Salon Interior &amp; Stations"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest block mb-1">Established Excellence</span>
                <p className="font-extrabold text-xl text-white uppercase tracking-tight">BBLUNT - Salon, Juhu</p>
              </div>
            </div>

            {/* Gold Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-4 bg-black text-white p-5 rounded-xl border border-[#D4AF37]/50 shadow-2xl max-w-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-extrabold text-[#D4AF37]">{SALON_INFO.yearsEstablished}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">Years of Service</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Crafting confidence &amp; style for 15,000+ happy clients in Mumbai.</p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block">
                About BBLUNT - Salon
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
                Where Beauty Expertise Meets Unmatched Comfort
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Located in the heart of Juhu, Mumbai, <strong className="text-slate-900">BBLUNT - Salon</strong> was founded on a simple philosophy: beauty services should be personal, restorative, and tailored to empower your confidence. Whether you are looking for a subtle hair trim, a dramatic balayage transformation, or a soothing facial, our studio offers a calm escape from the bustling city.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We combine artistic vision with advanced scalp and hair health care to ensure every treatment not only looks stunning but preserves the natural strength of your hair and skin.
            </p>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#D4AF37] transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm uppercase tracking-wide text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Checklist */}
            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-slate-700">
              <div className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Complimentary Tea &amp; Coffee</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Private Styling Stations</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Easy Valet Parking</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

