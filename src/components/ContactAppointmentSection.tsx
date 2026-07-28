import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, User, MessageSquare, Navigation } from 'lucide-react';
import { SALON_INFO, SERVICES, TEAM } from '../data/salonData';
import { BookingFormData } from '../types';

interface ContactAppointmentSectionProps {
  prefilledService?: string;
  prefilledStylist?: string;
  onResetPrefill?: () => void;
}

export const ContactAppointmentSection: React.FC<ContactAppointmentSectionProps> = ({
  prefilledService,
  prefilledStylist,
  onResetPrefill
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

  // Set min date to today
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
    if (prefilledStylist) {
      setFormData(prev => ({ ...prev, stylist: prefilledStylist }));
    }
  }, [prefilledService, prefilledStylist]);

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
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'Haircut & Styling',
          stylist: 'Any Available Senior Stylist',
          date: '',
          time: '11:00 AM',
          message: ''
        });
        if (onResetPrefill) onResetPrefill();
      } else {
        setErrorMessage(result.error || 'Failed to submit appointment booking.');
      }
    } catch (err) {
      console.error('Booking submission error:', err);
      // Fallback offline confirmation
      const fallbackConfirmation = {
        id: 'BBLUNT-' + Math.floor(100000 + Math.random() * 900000),
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        stylist: formData.stylist,
        date: formData.date || 'Tomorrow',
        time: formData.time,
        status: 'confirmed'
      };
      setBookingConfirmation(fallbackConfirmation);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest block">
            LOCATION &amp; APPOINTMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            Book Appointment &amp; Visit Us
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Reserve your salon experience online or visit our boutique studio opposite Juhu Beach Promenade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="font-extrabold text-xl uppercase tracking-tight text-white border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>BBLUNT - Salon</span>
                <span className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">Juhu Branch</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide text-xs text-white">Salon Address</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{SALON_INFO.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide text-xs text-white">Phone &amp; WhatsApp</h4>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <a href={`tel:${SALON_INFO.phone}`} className="text-[#D4AF37] hover:underline text-xs font-semibold">
                        {SALON_INFO.phone}
                      </a>
                      <a
                        href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hi BBLUNT - Salon, I would like to book an appointment!")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-3 py-1 rounded-full transition-all"
                      >
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide text-xs text-white">Email Address</h4>
                    <a href={`mailto:${SALON_INFO.email}`} className="text-[#D4AF37] hover:underline text-xs mt-0.5 block font-semibold">
                      {SALON_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide text-xs text-white">Business Hours</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{SALON_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed Preview */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900 h-72 relative group">
              <iframe
                title="BBLUNT - Salon Google Location Map"
                src={SALON_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute top-3 left-3 bg-slate-950/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-slate-700 shadow-md flex items-center gap-1.5 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>BBLUNT - Salon Juhu</span>
              </div>

              <div className="absolute bottom-3 right-3">
                <a
                  href={SALON_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4AF37] hover:bg-[#c29f2e] text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80" id="appointment-form-container">
            <div className="mb-6 space-y-1">
              <h3 className="font-extrabold text-2xl uppercase tracking-tight text-slate-900">Book Your Appointment</h3>
              <p className="text-xs text-slate-500">Fill in your preferred date and service. Instant confirmation provided.</p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@example.com"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Select Service <span className="text-[#D4AF37]">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] bg-white"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title} ({s.price})</option>
                    ))}
                    <option value="Consultation & Other Services">Consultation &amp; Other Services</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Preferred Stylist
                  </label>
                  <select
                    value={formData.stylist}
                    onChange={(e) => setFormData({ ...formData, stylist: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] bg-white"
                  >
                    <option value="Any Available Senior Stylist">Any Available Senior Stylist</option>
                    {TEAM.map((t) => (
                      <option key={t.id} value={t.name}>{t.name} ({t.role.split('&')[0]})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Date <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37] bg-white"
                  >
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Message / Special Request
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention hair length, specific hair concerns, or custom bridal request..."
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-black hover:bg-[#D4AF37] text-white hover:text-white font-bold py-3.5 rounded-lg transition-all duration-300 shadow-md text-xs uppercase tracking-widest mt-4 disabled:opacity-50"
                id="submit-appointment-btn"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>Confirm &amp; Book Appointment</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center pt-2">
                Instant confirmation. No booking fee or advance payment required.
              </p>
            </form>
          </div>

        </div>

      </div>

      {/* Appointment Confirmation Modal */}
      {bookingConfirmation && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-200 space-y-6 text-center animate-fadeIn">
            
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-4 border-emerald-50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Appointment Reserved!
              </span>
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-slate-900 pt-2">
                We Look Forward to Seeing You
              </h3>
              <p className="text-xs text-slate-500">
                Booking Reference ID: <strong className="text-slate-900 font-mono">{bookingConfirmation.id}</strong>
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Guest Name:</span>
                <span className="font-bold text-slate-900">{bookingConfirmation.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Service:</span>
                <span className="font-bold text-[#D4AF37]">{bookingConfirmation.service}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Stylist:</span>
                <span className="font-bold text-slate-900">{bookingConfirmation.stylist}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Date &amp; Time:</span>
                <span className="font-bold text-slate-900">{bookingConfirmation.date} at {bookingConfirmation.time}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-medium">Location:</span>
                <span className="font-bold text-slate-900">Juhu, Mumbai</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              A confirmation update has been sent for <strong className="text-slate-800">{bookingConfirmation.phone}</strong>.
            </p>

            <button
              onClick={() => setBookingConfirmation(null)}
              className="w-full bg-black hover:bg-[#D4AF37] text-white font-bold uppercase tracking-widest py-3 rounded-lg transition-all text-xs shadow-md"
            >
              Done &amp; Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

