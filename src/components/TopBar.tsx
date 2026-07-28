import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface TopBarProps {
  onOpenConsultation: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-neutral-900 text-neutral-300 text-xs py-2 px-4 sm:px-8 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side Info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <a
            href={`tel:${SALON_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            id="topbar-phone"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{SALON_INFO.phone}</span>
          </a>

          <a
            href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hi BBLUNT - Salon, I'd like to ask a question!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            id="topbar-whatsapp"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>WhatsApp Chat</span>
          </a>

          <div className="flex items-center gap-1.5 text-neutral-300" id="topbar-location">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{SALON_INFO.location}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-neutral-400" id="topbar-hours">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{SALON_INFO.hours}</span>
          </div>
        </div>

        {/* Right Side AI Advisor & Socials */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 bg-amber-950/60 hover:bg-amber-900/80 px-2.5 py-1 rounded-full border border-amber-500/30 transition-all text-xs font-medium"
            id="topbar-ai-consult-btn"
          >
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>AI Hair & Style Assistant</span>
          </button>

          <div className="flex items-center gap-3 text-neutral-400 pl-2 border-l border-neutral-800">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Instagram"
              id="topbar-instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Facebook"
              id="topbar-facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
