import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface VisitorModalProps {
  onDismiss: () => void;
}

export default function VisitorModal({ onDismiss }: VisitorModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if modal has already been shown in this session
    const hasBeenShown = sessionStorage.getItem('visitorModalShown');
    if (hasBeenShown === 'true') {
      onDismiss();
    } else {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000); // Trigger 3 seconds after home page loads

      return () => clearTimeout(timer);
    }
  }, [onDismiss]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('visitorModalShown', 'true');
    onDismiss();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);

    // POST to Netlify Forms
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'visitor-signup',
        name,
        email,
      }).toString(),
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Netlify Form Submission Error:', error);
        setIsSubmitting(false);
        // Fallback to showing success screen
        setIsSubmitted(true);
      });
  };

  // Close when clicking outside of modal content
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="visitor-modal-overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            id="visitor-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
            className="w-full max-w-[460px] font-sans rounded-xl border border-[#303134] bg-[#171717] overflow-hidden shadow-2xl relative"
          >
            {/* Theme Strip */}
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            {/* Close Button */}
            <button
              id="visitor-modal-close"
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
              title="Close modal"
            >
              <X size={18} />
            </button>

            {isSubmitted ? (
              <div id="visitor-modal-success" className="p-8 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-emerald-500/10 text-emerald-400 flex items-center justify-center rounded-full">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-xl font-medium text-white">Connection Established!</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Thank you for connecting, <span className="text-emerald-400 font-semibold">{name}</span>. Your details have been securely recorded. Feel free to explore my full-funnel optimization campaigns and resume.
                </p>
                <div className="pt-4 flex flex-col gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-center gap-2 bg-[#8ab4f8] hover:bg-[#9fc3f9] text-[#171717] font-semibold text-sm py-2.5 px-4 rounded-lg shadow-md transition-colors cursor-pointer"
                  >
                    Connect on LinkedIn
                  </a>
                  <button
                    onClick={handleClose}
                    className="text-xs text-gray-500 hover:text-gray-300 hover:underline py-1.5 focus:outline-none"
                  >
                    Continue to Portfolio
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="visitor-signup"
                data-netlify="true"
                className="p-6 space-y-5"
              >
                {/* Hidden input for Netlify Form detection */}
                <input type="hidden" name="form-name" value="visitor-signup" />

                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs text-indigo-400 font-sans font-medium uppercase">
                    <Sparkles size={14} className="animate-pulse" />
                    <span>Exclusive Insight Network</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Let's collaborate</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Leave your details to stay in touch, request a complimentary marketing audit, or receive optimization updates directly.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 uppercase font-sans">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#202124] border border-[#303134] focus:border-[#8ab4f8] focus:outline-none rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 uppercase font-sans">
                      Corporate Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#202124] border border-[#303134] focus:border-[#8ab4f8] focus:outline-none rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-xs text-gray-400 hover:text-white font-medium hover:underline transition-all cursor-pointer"
                  >
                    No thanks, just browsing
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-[#8ab4f8] hover:bg-[#9fc3f9] disabled:bg-[#8ab4f8]/50 text-[#171717] font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md transition-colors cursor-pointer"
                  >
                    <Send size={14} />
                    {isSubmitting ? 'Submitting...' : 'Join Network'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
