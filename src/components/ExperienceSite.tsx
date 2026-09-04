import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Calendar, 
  Globe, ExternalLink, Award, FileText, Send, ChevronDown, HelpCircle, Linkedin, Github, Mail, Sparkles
} from 'lucide-react';
import { EXPERIENCE_DATA, PERSONAL_INFO } from '../data';
import pickyourtrailLogo from '../assets/images/PYTlogo.png';
import shanthiItLogo from '../assets/images/SITlogo.png';
import { WorkHeroPatternBackground } from './WorkHeroPatternBackground';

interface ExperienceSiteProps {
  onBack: () => void;
  onOpenResumeModal?: () => void;
}

const FAQS = [
  {
    question: "1. Raja's only been an intern, so why consider him for a full-time role?",
    answer: "Internships are where the real work happens for me. I've managed SEO across 2,200+ URLs and driven a 22% lift in bottom-funnel conversions in an active, ongoing role, not a shadowing program. Combined with an MBA focused on digital marketing and a CS background, I've been doing full-scope work, just under an intern title."
  },
  {
    question: "2. What's Raja's notice period?",
    answer: "Immediate."
  },
  {
    question: "3. What are Raja's salary expectations?",
    answer: "Open to discussing based on the role and responsibilities."
  },
  {
    question: "4. What's Raja's core strength: technical SEO or marketing strategy?",
    answer: "Both, deliberately. My CS background means I can implement technical requirements myself, including schema markup, crawl audits, and code fixes, rather than just recommending them to a developer. The MBA brings the strategic side: conversion, positioning, and ROI."
  },
  {
    question: "5. Is Raja focused on SEO, or open to broader digital marketing roles too?",
    answer: "SEO, GEO/AEO, Lead Generation, Full Funnel Optimization and CRO are my strongest areas right now. I also understand the fundamentals of PPC and other digital marketing functions, and I'm comfortable picking up the tools and going end-to-end if a role calls for it."
  }
];

export default function ExperienceSite({ onBack, onOpenResumeModal }: ExperienceSiteProps) {
  const [openFaqs, setOpenFaqs] = useState<number[]>([0, 1, 2, 3, 4]);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen flex flex-col justify-between selection:bg-[#00B8A9]/20 relative overflow-x-hidden">
      
      {/* 1. Full-Bleed Hero Section with 3D Fluted Louvers Pattern Covering Top & Header */}
      <div className="w-full relative overflow-hidden min-h-[calc(100vh-2rem)] flex flex-col justify-between bg-[#0b0817] text-white z-10">
        
        {/* Reference-matching 3D Fluted Louvers Pattern (Constructs & Deconstructs across entire screen) */}
        <WorkHeroPatternBackground />

        {/* Floating Navigation Header Pill */}
        <header className="relative z-50 pt-4 sm:pt-6 pb-2 px-4 sm:px-6 lg:px-8 w-full transition-all">
          <div className="relative w-full max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-white/20 rounded-full shadow-2xl px-5 sm:px-7 py-3 flex items-center justify-between transition-all">
            
            {/* Logo & Brand Title */}
            <div className="relative z-10 flex items-center select-none cursor-default">
              <div className="flex items-center font-black text-xl sm:text-2xl tracking-tight leading-none text-[#052049]">
                Experience
              </div>
            </div>

            {/* Header Action CTAs */}
            <div className="relative z-10 flex items-center space-x-2.5">
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-full transition-all cursor-pointer border border-slate-200 shadow-2xs"
                title="Visit LinkedIn Profile"
              >
                <Linkedin size={14} className="text-[#0A66C2]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-full transition-all cursor-pointer border border-slate-200 shadow-2xs"
                title="Visit GitHub Profile"
              >
                <Github size={14} className="text-slate-800" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FF5A5F] hover:bg-[#e0484d] text-white px-4 py-2 rounded-full shadow-xs transition-all hover:shadow cursor-pointer"
              >
                <Mail size={14} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </header>

        {/* Keyframe animations for floating logo cards */}
        <style>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(1.5deg); }
          }
          @keyframes floatDelayed {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-14px) rotate(-1.5deg); }
          }
          .animate-float-slow {
            animation: floatSlow 5s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: floatDelayed 6s ease-in-out infinite 1.2s;
          }
        `}</style>

        {/* Hero Banner Section */}
        <section className="flex-1 flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left relative">
              
              {/* Headline matching TheResonance styling */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.95] relative z-10 inline-block pb-1 text-white">
                <span className="font-['Sora',sans-serif] font-extrabold tracking-[-0.03em] text-white">Work</span>{' '}
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-black tracking-tight text-white">Experience</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-xl mx-auto lg:mx-0 relative z-10">
                From keyword intent mapping to actual conversions, that's what I work on. You can see how that plays out in my{' '}
                <a 
                  href="/projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/projects');
                  }}
                  className="text-violet-400 hover:text-violet-300 font-bold underline decoration-violet-400/70 hover:decoration-violet-300 underline-offset-2 transition-colors"
                >
                  full-funnel work
                </a>
                .
              </p>
            </div>

            {/* Right Column: Visual Floating Logo Cards */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6 lg:py-0 space-y-5 lg:space-y-6">
              
              {/* Subtle background glow circle for depth */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Floating Card 1: Pickyourtrail */}
              <div className="animate-float-slow bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-4 hover:shadow-emerald-500/25 transition-all duration-300 w-full max-w-sm sm:max-w-md transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 shadow-sm bg-white border border-slate-700 p-2 flex items-center justify-center">
                  <img 
                    src={pickyourtrailLogo} 
                    alt="Pickyourtrail Logo" 
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = '/PYTlogo.png';
                      }
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center text-left">
                  <h3 className="font-extrabold text-white text-lg sm:text-xl tracking-tight leading-snug truncate">
                    Pickyourtrail
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-300 leading-snug mt-0.5">
                    Search Engine Optimization Intern
                  </p>
                  <p className="text-xs text-slate-400 font-medium leading-snug mt-1">
                    Oct 2025 – May 2026
                  </p>
                </div>
              </div>

              {/* Floating Card 2: Shanthi IT Solution */}
              <div className="animate-float-delayed bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-2xl border border-fuchsia-500/40 flex items-center gap-4 hover:shadow-fuchsia-500/25 transition-all duration-300 w-full max-w-sm sm:max-w-md ml-0 lg:ml-8 transform hover:-translate-y-1">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 shadow-sm bg-white border border-slate-700 p-2 flex items-center justify-center">
                  <img 
                    src={shanthiItLogo} 
                    alt="Shanthi IT Solution Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = '/SITlogo.png';
                      }
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center text-left">
                  <h3 className="font-extrabold text-white text-lg sm:text-xl tracking-tight leading-snug truncate">
                    Shanthi IT Solution
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-fuchsia-300 leading-snug mt-0.5">
                    Digital Marketing Intern
                  </p>
                  <p className="text-xs text-slate-400 font-medium leading-snug mt-1">
                    July 2024 – September 2024
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* 2. Detailed Work Experience (White Body Background) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-12 relative z-20 w-full">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Career History</h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => {
            const companyLower = exp.company?.toLowerCase() || '';
            const isPYT = companyLower.includes('pickyourtrail');
            const isPopcoune = companyLower.includes('popcou') || companyLower.includes('shanthi');

            return (
              <React.Fragment key={exp.id}>
                <div className="space-y-6">
                  {/* Card 1: Header Banner + Responsibilities List (Scroll-triggered reveal animation) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    {/* Header Banner */}
                    <div className={`p-6 sm:p-8 text-white relative overflow-hidden ${
                      isPYT 
                        ? 'bg-gradient-to-r from-[#052049] via-[#0A2E63] to-[#00B8A9]' 
                        : 'bg-gradient-to-r from-[#1c2237] via-[#2a324d] to-[#FF5A5F]'
                    }`}>
                      {/* Background PYT Logo Watermark */}
                      {isPYT && (
                        <div className="absolute -right-4 sm:right-8 md:right-16 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none opacity-15 sm:opacity-20 z-0">
                          <img 
                            src={pickyourtrailLogo} 
                            alt="Pickyourtrail watermark" 
                            className="h-32 sm:h-40 md:h-48 w-auto object-contain rounded-2xl max-w-none transform -rotate-[18deg]" 
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (!target.dataset.fallback) {
                                target.dataset.fallback = 'true';
                                target.src = '/PYTlogo.png';
                              }
                            }}
                          />
                        </div>
                      )}

                      {/* Background Shanthi IT Logo Watermark */}
                      {isPopcoune && (
                        <div className="absolute -right-4 sm:right-8 md:right-16 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none opacity-15 sm:opacity-20 z-0">
                          <img 
                            src={shanthiItLogo} 
                            alt="Shanthi IT watermark" 
                            className="h-28 sm:h-36 md:h-44 w-auto object-contain rounded-xl max-w-none transform -rotate-[18deg]" 
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (!target.dataset.fallback) {
                                target.dataset.fallback = 'true';
                              }
                              target.src = '/SITlogo.png';
                            }}
                          />
                        </div>
                      )}

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-center justify-end">
                          <span className="text-xs sm:text-sm font-medium text-teal-100/90 tracking-wide">
                            {exp.period}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                          {exp.company} <span className="text-teal-300 font-normal">|</span> <span className="text-teal-200 font-medium">{exp.role}</span>
                        </h3>

                        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90 font-medium pt-1">
                          <span className="flex items-center gap-1">
                            <MapPin size={16} className="text-teal-300" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Numbered Responsibilities List (Items 1-8) */}
                    <div className="p-6 sm:p-8 space-y-5">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <div 
                          key={bulletIdx} 
                          className="flex items-start gap-4 group"
                        >
                          <span className="w-7 h-7 rounded-full bg-[#00B8A9]/10 text-[#00B8A9] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00B8A9] group-hover:text-white transition-colors">
                            {bulletIdx + 1}
                          </span>
                          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Card 2: Core Competencies Tag Pills (Separate Scroll-triggered reveal animation) */}
                  {exp.skills && exp.skills.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                      className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 space-y-4"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider block">
                        Core Competencies
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {exp.skills.map((skill, skillIdx) => (
                          <span 
                            key={skillIdx} 
                            className="text-xs sm:text-sm font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 hover:bg-[#00B8A9] hover:text-white px-3.5 py-2 rounded-xl transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* In-Between CTA Banner after Pickyourtrail */}
                {index === 0 && (
                  <div className="max-w-5xl mx-auto w-full bg-gradient-to-r from-slate-900 via-[#052049] to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 select-none cursor-default relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#00B8A9]/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="space-y-1 text-center md:text-left select-none cursor-default">
                        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white select-none cursor-default">
                          Looking for a High-Yield SEO Executive?
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 font-medium">
                          Get in touch to discuss organic growth strategies, technical audits, or full-funnel SEO.
                        </p>
                      </div>

                      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 shrink-0">
                        <a 
                          href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20-%20Raja%20Chera%20Kesaree`}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-[#FF5A5F] hover:bg-[#e0484d] text-white px-5 py-3 rounded-xl shadow-xs transition-all hover:shadow-md cursor-pointer"
                        >
                          <Send size={15} />
                          <span>Hire Me</span>
                        </a>
                        <button 
                          onClick={() => onOpenResumeModal ? onOpenResumeModal() : window.print()}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-xl backdrop-blur-sm transition-all cursor-pointer"
                        >
                          <FileText size={15} className="text-[#00B8A9]" />
                          <span>Download Resume</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* 3. CTA Banner Card Before FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 relative z-20 w-full">
        <div className="max-w-5xl mx-auto w-full bg-gradient-to-r from-slate-900 via-[#052049] to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 select-none cursor-default relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#00B8A9]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left select-none cursor-default">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white select-none cursor-default">
                Ready to Boost Your Organic Search Visibility?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Let's connect to discuss SEO strategies, content architectures, or full-funnel keyword mapping.
              </p>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 shrink-0">
              <a 
                href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20-%20Raja%20Chera%20Kesaree`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-[#FF5A5F] hover:bg-[#e0484d] text-white px-5 py-3 rounded-xl shadow-xs transition-all hover:shadow-md cursor-pointer"
              >
                <Send size={15} />
                <span>Hire Me</span>
              </a>
              <button 
                onClick={() => onOpenResumeModal ? onOpenResumeModal() : window.print()}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-xl backdrop-blur-sm transition-all cursor-pointer"
              >
                <FileText size={15} className="text-[#00B8A9]" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 space-y-6 relative z-20 w-full">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <HelpCircle className="text-[#00B8A9]" size={28} />
            <span>Frequently Asked Questions</span>
          </h2>
        </div>

        <div className="divide-y divide-slate-200">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqs.includes(idx);
            return (
              <div 
                key={idx}
                className="py-4 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-2 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-[#00B8A9] transition-colors cursor-pointer group"
                >
                  <span className="text-base sm:text-lg text-slate-900 font-bold leading-snug group-hover:text-[#00B8A9] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full text-slate-400 group-hover:text-white group-hover:bg-[#00B8A9] transition-all duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#00B8A9]' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2 pb-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {idx === 0 ? (
                      <>
                        Internships are where the real work happens for me. I've managed SEO across 2,200+ URLs and driven a 22% lift in bottom-funnel conversions in an active, ongoing role, not a shadowing program. Combined with an{' '}
                        <a 
                          href="/education" 
                          onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState(null, '', '/education');
                            window.dispatchEvent(new Event('popstate'));
                          }}
                          className="text-[#00B8A9] font-bold underline decoration-teal-500 underline-offset-2 hover:text-teal-700 transition-colors"
                        >
                          MBA focused on digital marketing
                        </a>{' '}
                        and a CS background, I've been doing full-scope work, just under an intern title.
                      </>
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 mt-16 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-auto z-10 w-full">
        {/* Technical Zig-Zag Pattern SVG Background */}
        <svg className="absolute inset-0 w-full h-full text-slate-300/40 pointer-events-none" viewBox="0 0 1400 300" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="experience-footer-zigzag-pattern" width="60" height="30" patternUnits="userSpaceOnUse">
              <path d="M 0 15 L 15 0 L 30 15 L 45 0 L 60 15" fill="none" stroke="currentColor" strokeWidth="0.8" className="opacity-40" />
              <path d="M 0 30 L 15 15 L 30 30 L 45 15 L 60 30" fill="none" stroke="currentColor" strokeWidth="0.8" className="opacity-25" />
            </pattern>
            <linearGradient id="experience-footer-mesh-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B8A9" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#052049" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#experience-footer-zigzag-pattern)" />
          <rect width="100%" height="100%" fill="url(#experience-footer-mesh-grad)" />

          {/* Prominent Graphic Zig-Zag Accent Lines */}
          <path d="M -50 50 L 100 10 L 250 50 L 400 10 L 550 50 L 700 10 L 850 50 L 1000 10 L 1150 50 L 1300 10 L 1450 50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" className="opacity-30" />
          <path d="M -50 250 L 100 210 L 250 250 L 400 210 L 550 250 L 700 210 L 850 250 L 1000 210 L 1150 250 L 1300 210 L 1450 250" stroke="currentColor" strokeWidth="1.2" className="opacity-20" />

          {/* Technical Dynamic Waves */}
          <path d="M -100 150 Q 350 40 700 150 T 1500 150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" className="opacity-20" />
        </svg>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-extrabold text-lg text-slate-900">
              Ready to work with Raja Chera Kesaree?
            </div>
            <p className="text-xs text-slate-500">
              Get in touch to discuss SEO audits, schema validation, or digital marketing strategy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => onOpenResumeModal ? onOpenResumeModal() : window.print()}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-2xs"
            >
              <FileText size={15} className="text-[#00B8A9]" />
              <span>Resume</span>
            </button>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FF5A5F] hover:bg-[#e0484d] text-white px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Mail size={15} />
              <span>Contact Me</span>
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] px-4 py-2.5 rounded-xl transition-all cursor-pointer border border-[#0A66C2]/30"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-sans font-medium tracking-normal gap-2 relative z-10">
          <div>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}</div>
        </div>
      </footer>

    </div>
  );
}


