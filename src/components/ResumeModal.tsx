import React, { useState } from 'react';
import { X, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  validateResumeForm,
  submitResumeForm,
  triggerResumeDownload,
  ResumeFormData,
  ResumeFormErrors
} from '../utils/resumeDownload';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: 'dark' | 'experience' | 'projects' | 'education';
}

export default function ResumeModal({ isOpen, onClose, theme = 'dark' }: ResumeModalProps) {
  const [formData, setFormData] = useState<ResumeFormData>({ name: '', email: '' });
  const [errors, setErrors] = useState<ResumeFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const isExperienceTheme = theme === 'experience';
  const isProjectsTheme = theme === 'projects';
  const isEducationTheme = theme === 'education';

  const handleClose = () => {
    setFormData({ name: '', email: '' });
    setErrors({});
    setDownloadSuccess(false);
    setIsSubmitting(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateResumeForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      await submitResumeForm(formData);
      setIsSubmitting(false);
      setDownloadSuccess(true);
      triggerResumeDownload();

      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      <div
        id="resume-modal-overlay"
        onClick={handleOverlayClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      >
        <motion.div
          id="resume-modal-container"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0.12 }}
          className={`w-full font-['Plus_Jakarta_Sans',sans-serif] relative ${
            isEducationTheme
              ? 'max-w-[700px] border rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden bg-zinc-900 border-zinc-700 text-white'
              : isProjectsTheme
              ? 'max-w-[480px]'
              : isExperienceTheme
              ? 'max-w-[440px] border rounded-3xl sm:rounded-[32px] shadow-2xl overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30 border-blue-100/80 text-slate-900 shadow-blue-900/15'
              : 'max-w-[440px] border rounded-3xl sm:rounded-[32px] shadow-2xl overflow-hidden bg-[#171717] border-slate-700 text-white'
          }`}
        >
          {/* Projects Theme Top Floating Header (Outside the Card Box with Transparent Background) */}
          {isProjectsTheme && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-3.5 px-1 text-left">
              {/* Left Top: "Before you / download" lockup */}
              <div className="flex flex-col text-left leading-none shrink-0 select-none">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-[28px] font-black uppercase text-white tracking-tight leading-none drop-shadow-md">
                    Before
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase text-amber-300 tracking-wider leading-none drop-shadow-sm">
                    you
                  </span>
                </div>
                <div className="text-base sm:text-[18px] font-black uppercase text-amber-100 tracking-[0.22em] leading-none drop-shadow-md pt-0.5">
                  download
                </div>
              </div>

              {/* Right Top: Intro statement */}
              <p className="text-xs sm:text-[12px] text-amber-100/95 font-medium leading-relaxed text-left sm:text-right drop-shadow-sm max-w-[240px] sm:ml-auto">
                I'd love to know who's taking a look at my resume. Please share your name and email, and{' '}
                <span className="font-extrabold text-white underline decoration-amber-400 decoration-2 underline-offset-2">
                  it's all yours!
                </span>
              </p>
            </div>
          )}

          {/* Card Box Container */}
          <div
            className={`relative ${
              isProjectsTheme
                ? 'bg-[#FCD25B] border-2 border-[#1E160D]/20 text-[#1E160D] shadow-2xl shadow-amber-950/50 rounded-none overflow-hidden p-6 sm:p-7'
                : ''
            }`}
          >
            {/* Decorative Background Pattern & Glow for Experience Theme */}
            {isExperienceTheme && (
              <>
                {/* Top ambient blue blur */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Subtle tech dot grid pattern overlay */}
                <div 
                  className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none" 
                />
                
                {/* Top subtle blue accent border line */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400" />

                {/* Close Button */}
                <button
                  id="resume-modal-close"
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-all cursor-pointer z-10"
                  title="Close modal"
                >
                  <X size={18} />
                </button>
              </>
            )}

            {/* Distinct Clean & Playful Styling for Projects Theme inside the Box */}
            {isProjectsTheme && (
              <>
                {/* Static Orange Layer mirroring the Projects Hero Header */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d88d10] via-[#FCD25B] to-[#ff9700] pointer-events-none" />
                
                {/* Static ambient dark, amber, and gold overlay blobs mirroring finisher header shapes */}
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#de880c]/35 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#ff9700]/30 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-black/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-[#c1bf12]/20 rounded-full blur-2xl pointer-events-none" />

                <button
                  id="resume-modal-close"
                  onClick={handleClose}
                  className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-[#1E160D]/70 hover:text-[#1E160D] hover:bg-black/10 transition-all cursor-pointer z-20"
                  title="Close modal"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>
              </>
            )}

            {/* Academic / Education Theme Overlay with Architectural Patterns matching Academic CTA banners */}
            {isEducationTheme && (
              <>
                {/* White Soft Radial Glows */}
                <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                {/* White Minimal Dot Matrix Grid Pattern */}
                <svg className="absolute top-0 right-0 h-full w-full opacity-[0.07] text-white pointer-events-none" fill="none" viewBox="0 0 300 300">
                  <defs>
                    <pattern id="edu-modal-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                      <circle cx="3" cy="3" r="0.8" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#edu-modal-dots)" />
                </svg>

                {/* White Concentric Geometric Circles */}
                <svg className="absolute -bottom-10 -right-10 w-48 h-48 text-white/20 pointer-events-none" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                </svg>

                {/* White Subtle Diagonal Accent Lines */}
                <svg className="absolute top-0 left-0 w-36 h-36 text-white/10 pointer-events-none" viewBox="0 0 200 200" fill="none">
                  <path d="M-50 50 L150 -150 M-50 100 L200 -150 M-50 150 L250 -150" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                <button
                  id="resume-modal-close"
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-20"
                  title="Close modal"
                >
                  <X size={18} />
                </button>
              </>
            )}

            {/* Standard Close Button for Dark Default Theme */}
            {!isExperienceTheme && !isProjectsTheme && !isEducationTheme && (
              <button
                id="resume-modal-close"
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-10"
                title="Close modal"
              >
                <X size={18} />
              </button>
            )}

            {downloadSuccess ? (
              <div className="p-8 text-center space-y-4 relative z-10">
                <div
                  className={`mx-auto w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm ${
                    isExperienceTheme 
                      ? 'bg-blue-600 text-white shadow-blue-500/25' 
                      : isProjectsTheme
                      ? 'bg-[#FF7E6B] text-[#1E160D] font-bold shadow-md'
                      : 'bg-emerald-500/20 text-emerald-400'
                  }`}
                >
                  <CheckCircle size={30} />
                </div>
                <h4
                  className={`text-xl font-extrabold tracking-tight ${
                    isExperienceTheme
                      ? 'text-[#052049]'
                      : isProjectsTheme
                      ? 'text-[#1E160D] font-black'
                      : 'text-white'
                  }`}
                >
                  Resume Download Initiated!
                </h4>
                <p
                  className={`text-xs leading-relaxed font-medium ${
                    isExperienceTheme
                      ? 'text-slate-600'
                      : isProjectsTheme
                      ? 'text-[#3B2C1C] font-serif'
                      : 'text-gray-300'
                  }`}
                >
                  Thank you{' '}
                  <span
                    className={`font-bold ${
                      isExperienceTheme
                        ? 'text-blue-600'
                        : isProjectsTheme
                        ? 'text-[#1E160D] font-black underline decoration-[#FF7E6B]'
                        : 'text-emerald-400'
                    }`}
                  >
                    {formData.name}
                  </span>
                  . The PDF download of Raja Chera Kesaree's resume has started automatically.
                </p>
                <button
                  onClick={handleClose}
                  className={`mt-2 text-xs font-bold hover:underline ${
                    isExperienceTheme
                      ? 'text-blue-600'
                      : isProjectsTheme
                      ? 'text-[#1E160D] hover:text-black font-extrabold'
                      : 'text-emerald-400'
                  }`}
                >
                  Close window
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="resume-download"
                data-netlify="true"
                noValidate
                className={`relative z-10 ${isProjectsTheme ? '' : 'p-6 sm:p-8'}`}
              >
                {/* Hidden input for Netlify Form crawler detection */}
                <input type="hidden" name="form-name" value="resume-download" />

                {isEducationTheme ? (
                  /* Academic / Education Theme 2-Column Split Layout */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center text-left">
                    {/* Left Column: Title, Intro & Curiosity Note */}
                    <div className="space-y-4 md:pr-4 border-b md:border-b-0 md:border-r border-zinc-800/80 pb-5 md:pb-0">
                      <div className="space-y-2.5">
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                          Before you download
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 font-medium">
                          I'd love to know who's taking a look at my resume. Please share your name and email, and{' '}
                          <span className="text-white font-bold underline underline-offset-4 decoration-zinc-500">
                            it's all yours!
                          </span>
                        </p>
                      </div>
                      <div className="pt-2 border-t border-zinc-800/80">
                        <p className="text-xs text-zinc-400 font-medium">
                          Just curious who's grabbing this.
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Name/Email Inputs & CTA Actions */}
                    <div className="space-y-3.5">
                      {/* Field 1: Name */}
                      <div className="space-y-1 text-left">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-300">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="your name"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          className={`w-full border transition-all rounded-xl px-4 py-2.5 text-xs font-semibold outline-none bg-[#202124] text-white placeholder-gray-500 ${
                            errors.name
                              ? 'border-red-500 focus:ring-2 focus:ring-red-400/50'
                              : 'border-[#303134] focus:border-white focus:ring-2 focus:ring-white/20'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-[11px] font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle size={12} className="shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Field 2: Email */}
                      <div className="space-y-1 text-left">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-300">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          className={`w-full border transition-all rounded-xl px-4 py-2.5 text-xs font-semibold outline-none bg-[#202124] text-white placeholder-gray-500 ${
                            errors.email
                              ? 'border-red-500 focus:ring-2 focus:ring-red-400/50'
                              : 'border-[#303134] focus:border-white focus:ring-2 focus:ring-white/20'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-[11px] font-semibold flex items-center gap-1 mt-1">
                            <AlertCircle size={12} className="shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div className="pt-2 space-y-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 font-bold text-xs px-6 py-3.5 bg-white hover:bg-zinc-200 text-zinc-950 shadow-lg shadow-black/40 border border-white/90 rounded-xl transition-all transform active:scale-[0.98] cursor-pointer disabled:opacity-50 tracking-widest uppercase"
                        >
                          <FileText size={15} />
                          <span>{isSubmitting ? 'Submitting...' : 'Download Resume'}</span>
                        </button>

                        <div className="text-center">
                          <button
                            type="button"
                            onClick={handleClose}
                            className="text-xs font-medium text-zinc-400 hover:text-white transition-all cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : isProjectsTheme ? (
                  /* Projects Theme Inputs & Action Buttons inside the Box */
                  <div className="space-y-4 pt-1">
                    {/* Field 1: Name */}
                    <div className="space-y-1 text-left">
                      <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#1E160D]">
                        Your Name <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="your name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full border transition-all rounded-xl px-4 py-2.5 text-xs font-semibold outline-none bg-white text-[#1E160D] placeholder-gray-400 border-amber-300/80 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 shadow-sm ${
                          errors.name ? 'border-red-500 focus:ring-2 focus:ring-red-400/50' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-[11px] font-semibold flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 2: Email */}
                    <div className="space-y-1 text-left">
                      <label className="text-[11px] font-extrabold uppercase tracking-wider text-[#1E160D]">
                        Email Address <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full border transition-all rounded-xl px-4 py-2.5 text-xs font-semibold outline-none bg-white text-[#1E160D] placeholder-gray-400 border-amber-300/80 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 shadow-sm ${
                          errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-400/50' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-[11px] font-semibold flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2 space-y-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 font-black text-xs px-6 py-3.5 rounded-full shadow-md bg-orange-500 hover:bg-orange-600 text-white shadow-orange-600/25 border border-orange-400/40 transition-all transform active:scale-[0.98] cursor-pointer disabled:opacity-50 tracking-widest uppercase"
                      >
                        <FileText size={15} />
                        <span>{isSubmitting ? 'Submitting...' : 'Download Resume'}</span>
                      </button>

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="text-xs font-bold text-[#3B2C1C] hover:text-[#1E160D] hover:underline transition-all cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Single Column Layout for Other Themes */
                  <div className="space-y-5">
                  {/* Header Title Section */}
                  <div className="space-y-2 text-center">
                    <h3
                      className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                        isExperienceTheme
                          ? 'text-[#052049]'
                          : isProjectsTheme
                          ? 'text-[#1E160D] font-black'
                          : 'text-white'
                      }`}
                    >
                      Before you download
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        isExperienceTheme
                          ? 'text-slate-600 font-medium'
                          : isProjectsTheme
                          ? 'text-[#3D2B1B] font-sans font-medium text-xs sm:text-[13px] max-w-xs mx-auto text-center tracking-tight'
                          : 'text-gray-400 font-medium'
                      }`}
                    >
                      I'd love to know who's taking a look at my resume. Please share your name and email, and{' '}
                      <span className={isProjectsTheme ? 'font-extrabold text-[#1E160D]' : ''}>
                        it's all yours!
                      </span>
                    </p>
                  </div>

                  <div className="space-y-3.5 pt-1">
                    {/* Field 1: Name */}
                    <div className="space-y-1 text-left">
                      <label
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isExperienceTheme
                            ? 'text-[#052049]'
                            : isProjectsTheme
                            ? 'text-[#1E160D]'
                            : 'text-gray-300'
                        }`}
                      >
                        Your Name <span className={isProjectsTheme ? 'text-orange-600' : 'text-red-500'}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="your name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full border transition-all rounded-xl px-4 py-2.5 text-xs font-semibold outline-none ${
                          isExperienceTheme
                            ? 'bg-slate-50/80 text-slate-900 placeholder-slate-400'
                            : isProjectsTheme
                            ? 'bg-white text-[#1E160D] placeholder-gray-400 border-amber-300/80 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 shadow-sm'
                            : 'bg-[#202124] text-white placeholder-gray-500'
                        } ${
                          errors.name
                            ? 'border-red-500 focus:ring-2 focus:ring-red-400/50'
                            : isExperienceTheme
                            ? 'border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15'
                            : !isProjectsTheme
                            ? 'border-[#303134] focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30'
                            : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-[11px] font-semibold flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 2: Email */}
                    <div className="space-y-1 text-left">
                      <label
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isExperienceTheme
                            ? 'text-[#052049]'
                            : isProjectsTheme
                            ? 'text-[#1E160D]'
                            : 'text-gray-300'
                        }`}
                      >
                        Email Address <span className={isProjectsTheme ? 'text-orange-600' : 'text-red-500'}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full border transition-all rounded-xl px-4 py-2.5 text-xs font-semibold outline-none ${
                          isExperienceTheme
                            ? 'bg-slate-50/80 text-slate-900 placeholder-slate-400'
                            : isProjectsTheme
                            ? 'bg-white text-[#1E160D] placeholder-gray-400 border-amber-300/80 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 shadow-sm'
                            : 'bg-[#202124] text-white placeholder-gray-500'
                        } ${
                          errors.email
                            ? 'border-red-500 focus:ring-2 focus:ring-red-400/50'
                            : isExperienceTheme
                            ? 'border-slate-200 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15'
                            : !isProjectsTheme
                            ? 'border-[#303134] focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30'
                            : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-[11px] font-semibold flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-2 font-black text-xs px-6 py-3.5 rounded-full shadow-md transition-all transform active:scale-[0.98] cursor-pointer disabled:opacity-50 tracking-widest uppercase ${
                        isExperienceTheme
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/25 rounded-xl'
                          : isProjectsTheme
                          ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-600/25 border border-orange-400/40'
                          : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl'
                      }`}
                    >
                      <FileText size={15} />
                      <span>{isSubmitting ? 'Submitting...' : 'Download Resume'}</span>
                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={handleClose}
                        className={`text-xs font-semibold hover:underline transition-all cursor-pointer ${
                          isExperienceTheme
                            ? 'text-slate-500 hover:text-[#052049]'
                            : isProjectsTheme
                            ? 'text-[#3B2C1C] hover:text-[#1E160D]'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>

                  <p
                    className={`text-[11px] text-center pt-1 font-semibold ${
                      isExperienceTheme
                        ? 'text-slate-600'
                        : isProjectsTheme
                        ? 'text-[#4A3725]'
                        : 'text-gray-500'
                    }`}
                  >
                    Just curious who's grabbing this.
                  </p>
                </div>
              )}
            </form>
          )}
          </div>

          {/* Projects Theme Bottom Floating Footer (Outside the Card Box with Transparent Background) */}
          {isProjectsTheme && (
            <p className="text-xs text-center font-medium text-amber-200/85 mt-3.5 drop-shadow-sm">
              Just curious who's grabbing this.
            </p>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
