import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Calendar, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onBookAppointment: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookAppointment, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Team', href: '#team' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-neutral-100'
          : 'bg-white py-4 border-b border-neutral-100'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group"
          id="navbar-logo"
        >
          <div className="w-10 h-10 rounded-full bg-neutral-900 text-amber-400 flex items-center justify-center shadow-sm group-hover:bg-amber-500 group-hover:text-neutral-900 transition-all duration-300">
            <Scissors className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 block leading-none">
              LUXE
            </span>
            <span className="text-[10px] tracking-[0.25em] font-medium uppercase text-amber-600 block mt-1">
              STUDIO SALON
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-amber-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 hover:after:w-full after:transition-all after:duration-300"
              id={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-all"
            id="navbar-ai-advisor-btn"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>AI Style Advisor</span>
          </button>

          <button
            onClick={onBookAppointment}
            className="flex items-center gap-2 bg-neutral-900 hover:bg-amber-600 text-white hover:text-neutral-950 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-md"
            id="navbar-book-btn"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onBookAppointment}
            className="bg-neutral-900 text-amber-400 p-2 rounded-lg text-xs font-medium"
            aria-label="Book"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-amber-600 focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-5 shadow-lg animate-fadeIn" id="mobile-menu-drawer">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-amber-600 py-1 border-b border-neutral-100 transition-colors"
                id={`mobile-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 bg-amber-50 text-amber-800 border border-amber-300 py-2.5 rounded-xl font-medium text-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>AI Hair & Style Advisor</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookAppointment();
                }}
                className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white py-3 rounded-xl font-medium text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
