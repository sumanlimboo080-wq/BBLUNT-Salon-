import React from 'react';
import { X, Clock, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4" id="service-detail-modal">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-neutral-900/60 hover:bg-neutral-900 p-2 rounded-full backdrop-blur-sm transition-colors z-10"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-3xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between text-white">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/50">
                {service.category} Treatment
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">{service.title}</h3>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase text-neutral-300 block">Starting At</span>
              <span className="font-serif text-2xl font-bold text-amber-400">{service.price}</span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 bg-neutral-100 p-2.5 rounded-xl">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Estimated Duration: {service.duration}</span>
          </div>

          <p className="text-sm text-neutral-700 leading-relaxed">
            {service.fullDetails}
          </p>

          {/* What's Included */}
          <div className="pt-2">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2">
              Service Inclusions &amp; Steps:
            </h4>
            <ul className="space-y-2">
              {service.included.map((inc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action */}
          <div className="pt-4 flex gap-3">
            <button
              onClick={() => {
                onBookService(service.title);
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-neutral-900 hover:bg-amber-500 text-white hover:text-neutral-950 font-bold py-3.5 rounded-xl transition-all text-sm shadow-md"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Appointment for {service.title}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
