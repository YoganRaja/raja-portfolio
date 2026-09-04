import React, { useState } from 'react';
import { 
  ArrowLeft, Mail, MapPin, Linkedin, Github, FileText, 
  Calendar, Clock, CheckCircle, ShieldAlert, Award, AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface ContactSiteProps {
  onBack: () => void;
}

export default function ContactSite({ onBack }: ContactSiteProps) {
  const [selectedDate, setSelectedDate] = useState<string>('Monday');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const days = [
    { name: 'Monday', date: 'Jul 20' },
    { name: 'Tuesday', date: 'Jul 21' },
    { name: 'Wednesday', date: 'Jul 22' },
    { name: 'Thursday', date: 'Jul 23' },
    { name: 'Friday', date: 'Jul 24' }
  ];

  const slots = ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate API request
    setFormSubmitted(true);
    setTimeout(() => {
      if (selectedTime) {
        setBookingConfirmed(true);
      }
    }, 1000);
  };

  return (
    <div className="bg-[#fbfbfb] text-gray-800 font-sans min-h-screen pb-16 animate-fade-in selection:bg-blue-100 selection:text-blue-950">
      
      {/* Platform Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 px-4 md:px-8 py-3.5 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onBack}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-black transition-colors bg-white border border-gray-200 px-2.5 py-1.5 rounded-lg group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Google</span>
            </button>
            <span className="h-5 w-[1px] bg-gray-200"></span>
            <div className="flex items-center space-x-2 text-sm font-semibold tracking-tight text-blue-600">
              <Calendar size={15} />
              <span>Raja Agency Scheduler</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
              Verified Booking Portal
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8 space-y-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Schedule a Consultation with Raja Chera Kesaree
          </h1>
          <p className="text-xs text-gray-500 leading-relaxed">
            Need a professional SEO audit, organic search crawl budget troubleshooting, or conversion funnel consulting? Select a slot below to schedule a call directly with Raja, or submit an offline inquiry form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Booking & Form */}
          <div className="md:col-span-8 bg-white border border-gray-200 rounded-3xl p-6 shadow-md space-y-6">
            
            {bookingConfirmed ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle size={32} />
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-lg font-bold text-gray-900">Consultation Scheduled Successfully!</h2>
                  <p className="text-xs text-gray-500">
                    A secure booking reference has been routed to <strong className="text-gray-800">{formData.email}</strong>. Raja will reach out shortly.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl max-w-sm mx-auto font-mono text-[11px] text-gray-600 text-left space-y-1">
                  <div><strong>Client:</strong> {formData.name}</div>
                  <div><strong>Company:</strong> {formData.company || 'N/A'}</div>
                  <div><strong>Appointment:</strong> {selectedDate}, {selectedTime} (IST)</div>
                  <div><strong>Platform:</strong> Secure Google Meet Bridge</div>
                </div>
              </div>
            ) : formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle size={32} />
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-lg font-bold text-gray-900">Message Dispatched Successfully!</h2>
                  <p className="text-xs text-gray-500">
                    Your digital consultation inquiry has been routed directly to <strong className="text-gray-800">{PERSONAL_INFO.email}</strong>.
                  </p>
                </div>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-blue-600 hover:underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Calendar Selector */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar size={13} className="text-blue-600" /> 1. Select Available Consult Slot (Optional)
                  </h3>

                  {/* Day Picker */}
                  <div className="grid grid-cols-5 gap-2">
                    {days.map((day) => (
                      <button
                        key={day.name}
                        onClick={() => {
                          setSelectedDate(day.name);
                          setSelectedTime(''); // Reset time selection on day switch
                        }}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                          selectedDate === day.name
                            ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                            : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-300 hover:text-black'
                        }`}
                      >
                        <span className="text-[10px] font-mono uppercase tracking-wide">{day.name.slice(0, 3)}</span>
                        <span className="text-xs font-bold font-mono mt-0.5">{day.date.split(' ')[1]}</span>
                      </button>
                    ))}
                  </div>

                  {/* Slot Picker */}
                  <div className="grid grid-cols-4 gap-2 pt-1.5">
                    {slots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg border text-center text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                          selectedTime === time
                            ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                            : 'bg-transparent border-gray-200 text-gray-500 hover:border-gray-300 hover:text-black'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {selectedTime && (
                    <div className="text-[11px] text-blue-600 font-mono bg-blue-50/50 p-2 rounded-lg border border-blue-100 flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>Slot selected: <strong>{selectedDate}, {selectedTime} IST</strong>. Complete the form below to lock it in.</span>
                    </div>
                  )}
                </div>

                {/* Secure Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4 pt-2 border-t border-gray-100">
                  <h3 className="text-xs font-bold font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail size={13} className="text-blue-600" /> 2. Complete Inquiry Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-gray-500">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. John Doe"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-gray-500">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="e.g. john@yourcompany.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-gray-500">Corporate Entity / Company (Optional)</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      placeholder="e.g. Acme Corporation"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-gray-500">Brief Agenda &amp; Inquiry Scope *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Detail your SEO crawl issue, audit goals, or project consultation requirements..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-800 outline-none focus:border-blue-500 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase py-3 rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{selectedTime ? 'CONFIRM CONSULT & BOOKING' : 'DISPATCH SECURE MESSAGE'}</span>
                  </button>
                </form>

              </div>
            )}

          </div>

          {/* Right Column: Contact Metadata */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Direct Cards */}
            <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-md space-y-4">
              <h3 className="text-xs font-bold font-mono text-gray-400 uppercase tracking-wider">
                Direct Channels
              </h3>
              
              <div className="space-y-3.5">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-300 transition-all text-xs text-gray-600 group"
                >
                  <Mail className="text-blue-500 group-hover:scale-105 transition-transform" size={16} />
                  <div>
                    <div className="text-[9px] font-mono uppercase text-gray-400">Secure Email</div>
                    <div className="font-bold text-gray-800 tracking-tight select-all truncate">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl text-xs text-gray-600">
                  <MapPin className="text-blue-500" size={16} />
                  <div>
                    <div className="text-[9px] font-mono uppercase text-gray-400">Corporate Base</div>
                    <div className="font-bold text-gray-800 tracking-tight">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-md space-y-3.5 text-xs">
              <h3 className="text-xs font-bold font-mono text-gray-400 uppercase tracking-wider">
                Social Verification
              </h3>

              <div className="flex gap-2">
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 p-2.5 rounded-xl text-center font-semibold text-gray-600 hover:text-blue-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Linkedin size={14} /> <span>LinkedIn</span>
                </a>
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-50 hover:bg-gray-100 border border-gray-100 hover:border-gray-200 p-2.5 rounded-xl text-center font-semibold text-gray-600 hover:text-black transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Github size={14} /> <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Trust disclaimer */}
            <div className="p-4 bg-blue-50/40 rounded-2xl border border-blue-100 flex items-start gap-2.5 text-[10px] text-gray-500 leading-relaxed font-mono">
              <AlertCircle size={14} className="text-blue-500 shrink-0 mt-0.5" />
              <span>Security notice: Scheduler links are fully encrypted. Session logs are private. GDPR crawl compliant.</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
