import React, { useState } from 'react';
import { PRICING_DATA } from '../data/salonData';
import { Sparkles, Calendar, CheckCircle } from 'lucide-react';

interface PricingSectionProps {
  onBookService: (serviceName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Haircuts & Styling', 'Color & Treatments', 'Skincare & Facials', 'Grooming & Makeup'];

  const filteredPricing = selectedCategory === 'All'
    ? PRICING_DATA
    : PRICING_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="pricing" className="py-20 bg-white text-neutral-900 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Transparent Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Salon Menu &amp; Service Rates
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Honest, competitive pricing with no hidden charges. Custom consultations are complimentary before every session.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="pricing-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-amber-400 shadow-sm'
                  : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
              }`}
              id={`pricing-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pricing List Table Grid */}
        <div className="max-w-4xl mx-auto bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
          <div className="space-y-4">
            {filteredPricing.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-white border border-neutral-100 hover:border-amber-300 hover:shadow-md transition-all duration-300 group"
                id={`price-row-${index}`}
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-base text-neutral-900 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full uppercase">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">{item.description}</p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-neutral-100">
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">Starting at</span>
                    <span className="font-serif text-lg font-bold text-neutral-900">{item.startingPrice}</span>
                  </div>

                  <button
                    onClick={() => onBookService(item.name)}
                    className="flex items-center gap-1.5 bg-neutral-900 hover:bg-amber-500 text-amber-400 hover:text-neutral-950 font-semibold px-4 py-2 rounded-xl text-xs transition-all duration-300 shadow-sm"
                    id={`price-book-btn-${index}`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-500" />
              <span>Prices vary based on hair length, volume, or specific shade requirements.</span>
            </div>
            <span className="font-medium text-neutral-700">Taxes included. Cash, UPI, Cards accepted.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
