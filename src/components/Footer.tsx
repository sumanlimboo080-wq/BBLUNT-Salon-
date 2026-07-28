import React from 'react';
import { Scissors, Phone, MapPin, Mail, Clock, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { SALON_INFO, SERVICES } from '../data/salonData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center font-bold shadow-sm">
                <Scissors className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block leading-none">
                  LUXE
                </span>
                <span className="text-[9px] tracking-[0.25em] font-medium uppercase text-amber-500 block mt-0.5">
                  STUDIO SALON
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed">
              {SALON_INFO.tagline} Premier hair &amp; beauty destination in Juhu, Mumbai offering precision cuts, balayage coloring, nourishing hair spa treatments, and radiant skincare.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 text-neutral-300 flex items-center justify-center transition-all border border-neutral-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 text-neutral-300 flex items-center justify-center transition-all border border-neutral-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-amber-500 hover:text-neutral-950 text-neutral-300 flex items-center justify-center transition-all border border-neutral-800"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-amber-400 transition-colors">About BBLUNT - Salon</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-amber-400 transition-colors">Salon Services</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-amber-400 transition-colors">Pricing Menu</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-amber-400 transition-colors">Before &amp; After Gallery</a></li>
              <li><a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="hover:text-amber-400 transition-colors">Our Stylists</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-amber-400 transition-colors">Client Reviews</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-amber-400 transition-colors">Contact &amp; Location</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              Our Services
            </h4>
            <ul className="space-y-2 text-neutral-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-400">
              Contact &amp; Hours
            </h4>
            
            <div className="space-y-2.5 text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SALON_INFO.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-amber-400">{SALON_INFO.phone}</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-amber-400">{SALON_INFO.email}</a>
              </div>

              <div className="flex items-start gap-2 pt-1 text-neutral-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SALON_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <p>© {currentYear} {SALON_INFO.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for confidence in Juhu, Mumbai</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </p>
        </div>

      </div>
    </footer>
  );
};
