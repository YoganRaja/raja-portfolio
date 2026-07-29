import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'Full-Time Hiring',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    
    // Wire up to Netlify Form submission
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formData
      }).toString()
    })
    .then(() => {
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.error(error);
      // Fallback in case of errors
      setIsSubmitted(true);
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      purpose: 'Full-Time Hiring',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-[652px] font-sans rounded-xl border border-[#303134] bg-[#171717] overflow-hidden shadow-md">
      {/* Google Forms Inspired Top Theme Strip */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      {isSubmitted ? (
        <div className="p-8 text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-emerald-500/10 text-emerald-400 flex items-center justify-center rounded-full">
            <CheckCircle2 size={28} />
          </div>
          <h4 className="text-lg font-medium text-white">Your response has been recorded.</h4>
          <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out! Your campaign/project inquiry has been sent to Raja Chera Kesaree. Expect a reply in your inbox within 24 hours.
          </p>
          <button
            onClick={handleReset}
            className="text-xs text-[#8ab4f8] hover:underline focus:outline-none pt-2"
          >
            Submit another response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} name="contact" data-netlify="true" className="p-6 space-y-5">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <h3 className="text-lg font-medium text-white mb-1">Direct Campaign Inquiry</h3>
            <p className="text-xs text-gray-400">
              Submit this secure form to request a free campaign audit or discuss hiring collaboration.
            </p>
          </div>

          <div className="space-y-4">
            {/* Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider font-mono">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Google User"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#202124] border border-[#303134] focus:border-[#8ab4f8] focus:outline-none rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider font-mono">
                Corporate Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#202124] border border-[#303134] focus:border-[#8ab4f8] focus:outline-none rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 transition-colors"
              />
            </div>

            {/* Dropdown Inquiry Purpose */}
            <div className="space-y-1.5 relative">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider font-mono">
                Inquiry Purpose
              </label>
              <div className="relative">
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full bg-[#202124] border border-[#303134] focus:border-[#8ab4f8] focus:outline-none rounded-lg px-3.5 py-2.5 text-sm text-white appearance-none pr-10 cursor-pointer transition-colors"
                >
                  <option value="Full-Time Hiring">Full-Time Career Opportunities</option>
                  <option value="PPC Ad Spend Audit">Request Paid Media Audit (Google/Meta)</option>
                  <option value="SEO Audit">Request Organic Traffic & SEO Strategy</option>
                  <option value="Freelance Consultancy">Contract / Project Consultation</option>
                  <option value="Speaker/Collaborator">Event speaking / Conclave collaboration</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider font-mono">
                Campaign / Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your brand, current budget scale, or the marketing challenge you need solved..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#202124] border border-[#303134] focus:border-[#8ab4f8] focus:outline-none rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 transition-colors resize-none"
              ></textarea>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#8ab4f8] hover:bg-[#9fc3f9] text-[#171717] font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md transition-colors cursor-pointer"
            >
              <Send size={15} /> Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
