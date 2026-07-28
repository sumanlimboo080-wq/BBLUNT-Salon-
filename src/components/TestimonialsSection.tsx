import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/salonData';
import { Star, ChevronLeft, ChevronRight, Quote, PlusCircle, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  const [reviewsList, setReviewsList] = useState(TESTIMONIALS);

  // New review state
  const [newReview, setNewReview] = useState({
    name: '',
    serviceReceived: 'Haircut & Styling',
    rating: 5,
    review: ''
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewsList.length - 1 ? 0 : prev + 1));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const added = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      image: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop`,
      rating: newReview.rating,
      review: newReview.review,
      serviceReceived: newReview.serviceReceived,
      date: 'Just now'
    };

    setReviewsList([added, ...reviewsList]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setWriteReviewOpen(false);
      setNewReview({ name: '', serviceReceived: 'Haircut & Styling', rating: 5, review: '' });
    }, 2000);
  };

  const activeReview = reviewsList[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white text-slate-900 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real stories and reviews from our lovely patrons in Juhu &amp; across Mumbai.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-[#D4AF37]/20 pointer-events-none opacity-50" />

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10" id="testimonial-slide">
            {/* Customer Photo */}
            <div className="shrink-0 relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={activeReview.image}
                  alt={activeReview.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40 whitespace-nowrap">
                Verified Client
              </div>
            </div>

            {/* Review Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-1">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-slate-800 font-medium italic leading-relaxed">
                "{activeReview.review}"
              </p>

              <div>
                <h3 className="font-extrabold uppercase tracking-tight text-slate-900 text-base">{activeReview.name}</h3>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs text-slate-500 mt-0.5 font-semibold">
                  <span className="text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {activeReview.serviceReceived}
                  </span>
                  <span>•</span>
                  <span>{activeReview.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white hover:bg-black text-slate-800 hover:text-[#D4AF37] flex items-center justify-center border border-slate-200 shadow-sm transition-colors"
                aria-label="Previous review"
                id="testimonial-prev-btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white hover:bg-black text-slate-800 hover:text-[#D4AF37] flex items-center justify-center border border-slate-200 shadow-sm transition-colors"
                aria-label="Next review"
                id="testimonial-next-btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-2">
                {currentIndex + 1} / {reviewsList.length}
              </span>
            </div>

            <button
              onClick={() => setWriteReviewOpen(true)}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 px-4 py-2.5 rounded-lg border border-slate-200 hover:border-[#D4AF37] transition-all"
              id="write-review-btn"
            >
              <PlusCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

      </div>

      {/* Write a Review Modal */}
      {writeReviewOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <h3 className="font-extrabold text-xl uppercase tracking-tight text-slate-900">Share Your Experience</h3>
            <p className="text-xs text-slate-500">How was your visit to BBLUNT - Salon?</p>

            {reviewSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 uppercase tracking-tight">Thank You!</h4>
                <p className="text-xs text-emerald-700">Your review has been published.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Pooja Rao"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Service Received</label>
                  <select
                    value={newReview.serviceReceived}
                    onChange={(e) => setNewReview({ ...newReview, serviceReceived: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Haircut & Styling">Haircut &amp; Styling</option>
                    <option value="Hair Color / Balayage">Hair Color / Balayage</option>
                    <option value="Signature Hair Spa">Signature Hair Spa</option>
                    <option value="Keratin Treatment">Keratin Treatment</option>
                    <option value="Hydra Facial">Hydra Facial</option>
                    <option value="Beard Sculpting">Beard Sculpting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star className={`w-6 h-6 ${star <= newReview.rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-slate-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Review</label>
                  <textarea
                    required
                    rows={3}
                    value={newReview.review}
                    onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                    placeholder="Tell us what you loved about your service..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setWriteReviewOpen(false)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-black hover:bg-[#D4AF37] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

