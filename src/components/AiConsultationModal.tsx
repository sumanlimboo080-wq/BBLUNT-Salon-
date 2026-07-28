import React, { useState } from 'react';
import { X, Sparkles, Scissors, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { ConsultationResult } from '../types';

interface AiConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const AiConsultationModal: React.FC<AiConsultationModalProps> = ({
  isOpen,
  onClose,
  onBookService
}) => {
  const [hairType, setHairType] = useState('Straight / Fine');
  const [concern, setConcern] = useState('Frizz & Lack of Volume');
  const [desiredLook, setDesiredLook] = useState('Modern Balayage with Layered Cut');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<ConsultationResult | null>(null);

  if (!isOpen) return null;

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hairType, concern, desiredLook })
      });
      const data = await response.json();
      if (data.success && data.recommendation) {
        setRecommendation(data.recommendation);
      }
    } catch (err) {
      console.error('Consultation error:', err);
      // Fallback recommendation
      setRecommendation({
        title: 'Custom BBLUNT Hair Transformation',
        suggestedServices: ['Balayage & Global Color', 'Signature Hair Spa & Cut'],
        advice: 'For your fine hair texture looking for dimensional volume and smoothness, we suggest combining a light feathered layered cut with subtle face-framing balayage highlights.',
        estimatedTime: '90-120 minutes',
        stylistTip: 'Use a heat protection spray and schedule a scalp detox every month.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4" id="ai-consultation-modal">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-900 p-2 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
            Smart AI Style Advisor
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-1">
          Personalized Hair &amp; Beauty Recommendation
        </h3>
        <p className="text-xs text-neutral-500 mb-6">
          Tell our AI assistant about your hair texture and style goals to receive expert salon recommendations.
        </p>

        {!recommendation ? (
          <form onSubmit={handleConsult} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Hair / Skin Type
              </label>
              <select
                value={hairType}
                onChange={(e) => setHairType(e.target.value)}
                className="w-full px-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              >
                <option value="Straight / Fine Hair">Straight / Fine Hair</option>
                <option value="Wavy / Frizzy Hair">Wavy / Frizzy Hair</option>
                <option value="Curly / Thick Coils">Curly / Thick Coils</option>
                <option value="Color Treated / Damaged Hair">Color Treated / Damaged Hair</option>
                <option value="Dry / Sensitive Scalp">Dry / Sensitive Scalp</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Primary Goal or Hair Concern
              </label>
              <select
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                className="w-full px-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              >
                <option value="Frizz Reduction & Smoothness">Frizz Reduction &amp; Smoothness</option>
                <option value="Gray Coverage & Vibrant Shade">Gray Coverage &amp; Vibrant Shade</option>
                <option value="Scalp Nourishment & Hair Fall">Scalp Nourishment &amp; Hair Fall</option>
                <option value="Volume & Face Framing Cut">Volume &amp; Face Framing Cut</option>
                <option value="Skin Hydration & Glow">Skin Hydration &amp; Glow</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Desired Vibe or Transformation
              </label>
              <input
                type="text"
                value={desiredLook}
                onChange={(e) => setDesiredLook(e.target.value)}
                placeholder="e.g. Low maintenance caramel highlights, chic bob..."
                className="w-full px-3 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-amber-500 text-white hover:text-neutral-950 font-bold py-3.5 rounded-xl transition-all shadow-md text-sm mt-4 disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  <span>Consulting Senior Stylist AI...</span>
                </div>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Get AI Style Recommendation</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-5 animate-fadeIn">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-3">
              <h4 className="font-serif text-lg font-bold text-neutral-900 flex items-center gap-2">
                <Scissors className="w-4 h-4 text-amber-600" />
                <span>{recommendation.title}</span>
              </h4>

              <p className="text-xs text-neutral-700 leading-relaxed">
                {recommendation.advice}
              </p>

              <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-800">
                <div className="flex items-center gap-1 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Est. Time: {recommendation.estimatedTime}</span>
                </div>
              </div>
            </div>

            {/* Suggested Services */}
            <div>
              <h5 className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">Recommended Services:</h5>
              <div className="space-y-2">
                {recommendation.suggestedServices.map((serviceName, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs"
                  >
                    <div className="flex items-center gap-2 font-semibold text-neutral-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{serviceName}</span>
                    </div>

                    <button
                      onClick={() => {
                        onBookService(serviceName);
                        onClose();
                      }}
                      className="flex items-center gap-1 bg-neutral-900 hover:bg-amber-500 text-amber-400 hover:text-neutral-950 font-semibold px-3 py-1.5 rounded-lg transition-all"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-neutral-100 rounded-xl text-xs text-neutral-600">
              <strong className="text-neutral-900">Stylist Tip:</strong> {recommendation.stylistTip}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setRecommendation(null)}
                className="w-1/2 py-2.5 border border-neutral-300 rounded-xl text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
              >
                Try Different Goal
              </button>
              <button
                onClick={onClose}
                className="w-1/2 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
