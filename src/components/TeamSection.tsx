import React from 'react';
import { TEAM } from '../data/salonData';
import { Star, Award, Calendar } from 'lucide-react';

interface TeamSectionProps {
  onBookStylist: (stylistName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onBookStylist }) => {
  return (
    <section id="team" className="py-20 bg-neutral-50 text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest bg-amber-100/80 px-3 py-1 rounded-full border border-amber-200">
            Meet The Artists
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Experienced Hairstylists &amp; Beauty Experts
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Our creative team brings years of training from top hair academies. Dedicated to perfecting your personal look with precision and care.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((stylist) => (
            <div
              key={stylist.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              id={`stylist-card-${stylist.id}`}
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-neutral-900/90 text-amber-400 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-neutral-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{stylist.rating}</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-3 left-3 bg-amber-500 text-neutral-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  {stylist.experience}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                    {stylist.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mt-0.5">
                    {stylist.role}
                  </p>

                  <div className="mt-3 pt-3 border-t border-neutral-100 space-y-2">
                    <div className="flex items-start gap-1.5 text-xs text-neutral-600">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span><strong>Specialization:</strong> {stylist.specialization}</span>
                    </div>

                    <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {stylist.bio}
                    </p>
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => onBookStylist(stylist.name)}
                  className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-amber-500 text-white hover:text-neutral-950 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 shadow-sm"
                  id={`book-stylist-${stylist.id}`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {stylist.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
