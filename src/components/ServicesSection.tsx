import React, { useState } from 'react';
import { Scissors, Palette, Sparkles, Flame, Smile, Heart, User, Sparkle, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/salonData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Haircut & Styling' },
    { id: 'color', label: 'Color & Highlights' },
    { id: 'spa', label: 'Hair Spa & Keratin' },
    { id: 'skin', label: 'Facial & Skincare' },
    { id: 'makeup', label: 'Makeup & Bridal' },
    { id: 'grooming', label: 'Beard & Grooming' },
    { id: 'nails', label: 'Nails & Pedicure' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => {
        if (activeCategory === 'hair') return s.category === 'hair';
        if (activeCategory === 'color') return s.category === 'color';
        if (activeCategory === 'spa') return s.category === 'spa';
        if (activeCategory === 'skin') return s.category === 'skin';
        if (activeCategory === 'makeup') return s.category === 'makeup';
        if (activeCategory === 'grooming') return s.category === 'grooming';
        if (activeCategory === 'nails') return s.category === 'nails';
        return true;
      });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Smile': return <Smile className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'User': return <User className="w-5 h-5" />;
      case 'Sparkle': return <Sparkle className="w-5 h-5" />;
      default: return <Scissors className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-50 text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Tailored Salon &amp; Beauty Treatments
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Explore our comprehensive range of hair, skincare, and grooming services. Every treatment uses certified organic &amp; premium global beauty products.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="services-category-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-neutral-900 text-amber-400 shadow-md scale-105'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
              id={`service-filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
              id={`service-card-${service.id}`}
            >
              {service.popular && (
                <div className="absolute top-3 right-3 z-10 bg-amber-500 text-neutral-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-amber-600 flex items-center justify-center shadow-md">
                  {getServiceIcon(service.iconName)}
                </div>

                <div className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-neutral-900/80 px-2.5 py-1 rounded-md border border-white/20">
                  {service.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-neutral-100">
                    <span className="text-[11px] text-neutral-500 block uppercase tracking-wider">Starting From</span>
                    <span className="font-serif text-xl font-bold text-neutral-900">{service.price}</span>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 text-center bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold py-2.5 rounded-xl transition-colors"
                    id={`learn-more-${service.id}`}
                  >
                    Learn More
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="bg-neutral-900 hover:bg-amber-500 text-amber-400 hover:text-neutral-950 px-3.5 py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center"
                    title="Book This Service"
                    id={`book-service-${service.id}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
