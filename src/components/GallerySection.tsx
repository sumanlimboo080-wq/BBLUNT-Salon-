import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { Maximize2, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'haircuts', label: 'Haircuts' },
    { id: 'coloring', label: 'Hair Coloring' },
    { id: 'spa', label: 'Hair Spa' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'stylists', label: 'Stylists at Work' },
    { id: 'clients', label: 'Happy Customers' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block">
            OUR PORTFOLIO &amp; AMBIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            BBLUNT Gallery &amp; Transformations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Take a look inside BBLUNT - Salon and explore transformations crafted by our master stylists.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="gallery-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#D4AF37] text-white shadow-md'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:border-[#D4AF37] border border-slate-800'
              }`}
              id={`gallery-filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-[#D4AF37] shadow-md cursor-pointer aspect-square transition-all duration-300"
              id={`gallery-item-${item.id}`}
            >
              {/* Image with smooth hover zoom effect */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Hover Text Info */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="self-end bg-black/80 p-2 rounded-full text-[#D4AF37] backdrop-blur-sm border border-slate-700">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-extrabold uppercase tracking-tight text-white text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" id="gallery-lightbox-modal">
          <button
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#D4AF37] p-2 rounded-full bg-slate-900 border border-slate-700"
            aria-label="Close lightbox"
            id="lightbox-close-btn"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <img
              src={activeLightboxImage.image}
              alt={activeLightboxImage.title}
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
              referrerPolicy="no-referrer"
            />
            <div className="text-center mt-4">
              <h3 className="font-extrabold text-xl uppercase tracking-tight text-white">{activeLightboxImage.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{activeLightboxImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

