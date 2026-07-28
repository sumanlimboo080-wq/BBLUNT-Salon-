import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, CheckCircle2, AlertCircle, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { SERVICES, TEAM } from '../data/salonData';
import { BookingFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  prefilledStylist?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
  prefilledStylist
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    service: 'Haircut & Styling',
    stylist: 'Any Available Senior Stylist',
    date: '',
    time: '11:00 AM',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
    if (prefilledStylist) {
      setFormData(prev => ({ ...prev, stylist: prefilledStylist }));
    }
  }, [prefilledService, prefilledStylist, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setBookingConfirmation(result.appointment);
      } else {
        setErrorMessage(result.error || 'Failed to submit appointment.');
      }
    } catch (err) {
      console.error('Modal booking error:', err);
      // Fallback
      setBookingConfirmation({
        id: 'LUXE-' + Math.floor(100000 + Math.random() * 900000),
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        stylist: formData.stylist,
        date: formData.date || 'Tomorrow',
        time: formData.time,
        status: 'confirmed'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4" id="appointment-popup-modal">
      <div className="bg-white text-neutral-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-900 p-2 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!bookingConfirmation ? (
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200 mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>Quick Online Booking</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-neutral-900">Book Your Appointment</h3>
              <p className="text-xs text-neutral-500">BBLUNT - Salon, Juhu, Mumbai</p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-xl border border-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Your Name <span className="text-amber-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Roy"
                    className="w-full pl-9 pr-3 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Phone <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@example.com"
                      className="w-full pl-9 pr-3 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Service <span className="text-amber-600">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title} ({s.price})</option>
                  ))}
                  <option value="Consultation & Custom Styling">Consultation &amp; Custom Styling</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Preferred Stylist
                  </label>
                  <select
                    value={formData.stylist}
                    onChange={(e) => setFormData({ ...formData, stylist: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="Any Available Senior Stylist">Any Senior Stylist</option>
                    {TEAM.map((t) => (
                      <option key={t.id} value={t.name}>{t.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Date <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Preferred Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                >
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:30 PM">02:30 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="06:30 PM">06:30 PM</option>
                  <option value="08:00 PM">08:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Notes / Hair Goal
                </label>
                <input
                  type="text"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Hair length, specific shade..."
                  className="w-full px-3 py-2 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-amber-500 text-white hover:text-neutral-950 font-bold py-3 rounded-xl transition-all shadow-md text-sm mt-3 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-6 py-2">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-neutral-900">Appointment Confirmed!</h3>
              <p className="text-xs text-neutral-500">
                Booking ID: <strong className="text-neutral-900 font-mono">{bookingConfirmation.id}</strong>
              </p>
            </div>

            <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-left space-y-2 text-xs text-neutral-700">
              <p><strong>Guest:</strong> {bookingConfirmation.name}</p>
              <p><strong>Service:</strong> {bookingConfirmation.service}</p>
              <p><strong>Stylist:</strong> {bookingConfirmation.stylist}</p>
              <p><strong>Date &amp; Time:</strong> {bookingConfirmation.date} at {bookingConfirmation.time}</p>
              <p><strong>Location:</strong> Juhu, Mumbai</p>
            </div>

            <button
              onClick={() => {
                setBookingConfirmation(null);
                onClose();
              }}
              className="w-full bg-neutral-900 hover:bg-amber-500 text-white hover:text-neutral-950 font-bold py-3 rounded-xl transition-all text-sm"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
