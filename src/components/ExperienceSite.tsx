import React, { useState } from 'react';
import { 
  MapPin, Briefcase, Calendar, 
  Globe, ExternalLink, Award, FileText, Send, ChevronDown, HelpCircle, Linkedin, Github, Mail, Sparkles
} from 'lucide-react';
import { EXPERIENCE_DATA, PERSONAL_INFO } from '../data';
import pickyourtrailLogo from '../assets/images/PYTlogo.png';
import shanthiItLogo from '../assets/images/SITlogo.png';

interface ExperienceSiteProps {
  onBack: () => void;
}

const FAQS = [
  {
    question: "1. Raja's only been an intern, so why consider him for a full-time role?",
    answer: "Internships are where the real work happens for me. I've managed SEO across 2,200+ URLs and driven a 22% lift in bottom-funnel conversions in an active, ongoing role, not a shadowing program. Combined with an MBA focused on digital marketing and a CS background, I've been doing full-scope work, just under an intern title."
  },
  {
    question: "2. What's your notice period?",
    answer: "Immediate."
  },
  {
    question: "3. What are your salary expectations?",
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

export default function ExperienceSite({ onBack }: ExperienceSiteProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#f7fafc] text-slate-800 font-sans min-h-screen pb-20 selection:bg-[#00B8A9]/20">
      
      {/* 1. Navigation Header Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Brand Title */}
          <div className="flex items-center select-none">
            <div className="flex items-center font-black text-xl sm:text-2xl tracking-tight leading-none text-[#052049]">
              Experience
            </div>
          </div>

          {/* Header Action CTAs */}
          <div className="flex items-center space-x-2.5">
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-50 hover:bg-blue-100 text-[#0A66C2] px-3 py-2 rounded-lg transition-all cursor-pointer border border-blue-100"
              title="Visit LinkedIn Profile"
            >
              <Linkedin size={14} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-2 rounded-lg transition-all cursor-pointer border border-slate-200"
              title="Visit GitHub Profile"
            >
              <Github size={14} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20-%20Raja%20Chera%20Kesaree`}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FF5A5F] hover:bg-[#e0484d] text-white px-4 py-2 rounded-lg shadow-xs transition-all hover:shadow cursor-pointer"
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

      {/* 2. Hero Banner (Split Hero Layout) */}
      <section className="bg-gradient-to-b from-[#e6f8f6] via-[#f0fbf9] to-[#f7fafc] border-b border-teal-100/60 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#052049] tracking-tight leading-tight">
              Work <span className="text-[#00B8A9]">Experience</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              I managed SEO across 2,200+ URLs in IND/CE markets, mapped keywords to search intent, and validated 300+ URLs for AEO/GEO (zero-click readiness), and{' '}
              <a 
                href="/projects" 
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, '', '/projects');
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="text-[#00B8A9] font-bold underline decoration-teal-300 underline-offset-2 hover:text-[#052049] transition-colors"
              >
                full-funnel conversion optimization
              </a>
              .
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href={`mailto:${PERSONAL_INFO.email}?subject=Hiring%20Inquiry%20-%20Raja%20Chera%20Kesaree`}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-bold bg-[#FF5A5F] hover:bg-[#e0484d] text-white px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Send size={18} />
                <span>Hire Me</span>
              </a>
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-bold bg-white hover:bg-slate-50 text-[#052049] border border-slate-300 px-8 py-4 rounded-xl shadow-xs hover:shadow transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText size={18} className="text-[#00B8A9]" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Floating Logo Cards */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-6 lg:py-0 space-y-5 lg:space-y-6">
            
            {/* Subtle background glow circle for depth */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-teal-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Floating Card 1: Pickyourtrail */}
            <div className="animate-float-slow bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-xl border border-teal-100/90 flex items-center gap-4 hover:shadow-2xl transition-all duration-300 w-full max-w-sm sm:max-w-md transform hover:-translate-y-1">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 shadow-md bg-white border border-slate-200 p-1 flex items-center justify-center">
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
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-[#052049] text-lg sm:text-xl tracking-tight">Pickyourtrail</h3>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Recent Role" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-100/80 px-2.5 py-1 rounded-md inline-block">
                  SEO Intern
                </p>
                <p className="text-xs text-slate-500 font-medium pt-0.5">Oct 2025 – May 2026</p>
              </div>
            </div>

            {/* Floating Card 2: Shanthi IT Solution */}
            <div className="animate-float-delayed bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-xl border border-blue-100/90 flex items-center gap-4 hover:shadow-2xl transition-all duration-300 w-full max-w-sm sm:max-w-md ml-0 lg:ml-8 transform hover:-translate-y-1">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 shadow-md bg-white border border-slate-200 p-2 flex items-center justify-center">
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
              <div className="space-y-1 text-left">
                <h3 className="font-extrabold text-[#052049] text-lg sm:text-xl tracking-tight">Shanthi IT Solution</h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100/80 px-2.5 py-1 rounded-md inline-block">
                  Digital Marketing Intern
                </p>
                <p className="text-xs text-slate-500 font-medium pt-0.5">July 2024 – September 2024</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Detailed Work Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#052049]">Career History</h2>
        </div>

        <div className="space-y-10">
          {EXPERIENCE_DATA.map((exp, index) => {
            const companyLower = exp.company?.toLowerCase() || '';
            const isPYT = companyLower.includes('pickyourtrail');
            const isPopcoune = companyLower.includes('popcou') || companyLower.includes('shanthi');

            return (
              <React.Fragment key={exp.id}>
                <div 
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden"
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
                              target.src = '/SITlogo.png';
                            }
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
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} className="text-teal-300" />
                          {isPYT ? '2,200+ URLs Mapped • 300+ AEO/GEO QA' : 'Paid Search & SERP Ranking'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body - Detailed Directives */}
                  <div className="p-6 sm:p-8 md:p-10 space-y-8">

                    {/* Bullet Points */}
                    <div className="space-y-4">
                      <div className="space-y-3.5">
                        {exp.bullets.map((bullet, bulletIdx) => (
                          <div 
                            key={bulletIdx} 
                            className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200/80 hover:border-[#00B8A9]/50 transition-all space-y-2 group shadow-2xs"
                          >
                            <div className="flex items-start gap-3.5">
                              <span className="w-7 h-7 rounded-full bg-[#00B8A9]/10 text-[#00B8A9] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00B8A9] group-hover:text-white transition-colors">
                                {bulletIdx + 1}
                              </span>
                              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                                {bullet}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Tag Pills */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="pt-5 border-t border-slate-100 space-y-3">
                        <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider block">
                          Core Competencies
                        </span>
                        <div className="flex flex-wrap gap-2.5">
                          {exp.skills.map((skill, skillIdx) => (
                            <span 
                              key={skillIdx} 
                              className="text-xs sm:text-sm font-bold text-[#052049] bg-teal-50 border border-teal-200/60 hover:bg-[#00B8A9] hover:text-white px-3.5 py-2 rounded-xl transition-colors cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>

                {/* In-Between CTA Banner after Pickyourtrail */}
                {index === 0 && (
                  <div className="bg-gradient-to-r from-slate-900 via-[#052049] to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800 my-8 select-none cursor-default">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
                          onClick={() => window.print()}
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

      {/* 3.5 CTA Banner Card Before FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
        <div className="bg-gradient-to-r from-slate-900 via-[#052049] to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-800 select-none cursor-default relative overflow-hidden">
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
                onClick={() => window.print()}
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#052049] flex items-center gap-2.5">
            <HelpCircle className="text-[#00B8A9]" size={28} />
            <span>Frequently Asked Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all duration-200 hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-[#00B8A9] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg text-[#052049] font-extrabold leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#00B8A9]/10 text-[#00B8A9] border-[#00B8A9]/20' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-base sm:text-lg text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
                          className="text-[#00B8A9] font-bold underline decoration-teal-300 underline-offset-2 hover:text-[#052049] transition-colors"
                        >
                          MBA focused on digital marketing
                        </a>{' '}
                        and a CS background, I've been doing full-scope work, just under an intern title.
                      </>
                    ) : idx === 3 ? (
                      <>
                        Both, deliberately. My CS background means I can implement technical requirements myself, including{' '}
                        <a 
                          href="/skills" 
                          onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState(null, '', '/skills');
                            window.dispatchEvent(new Event('popstate'));
                          }}
                          className="text-[#00B8A9] font-bold underline decoration-teal-300 underline-offset-2 hover:text-[#052049] transition-colors"
                        >
                          schema markup, crawl audits, and code fixes
                        </a>
                        , rather than just recommending them to a developer. The MBA brings the strategic side: conversion, positioning, and ROI.
                      </>
                    ) : idx === 4 ? (
                      <>
                        <a 
                          href="/skills" 
                          onClick={(e) => {
                            e.preventDefault();
                            window.history.pushState(null, '', '/skills');
                            window.dispatchEvent(new Event('popstate'));
                          }}
                          className="text-[#00B8A9] font-bold underline decoration-teal-300 underline-offset-2 hover:text-[#052049] transition-colors"
                        >
                          SEO, GEO/AEO, Lead Generation, Full Funnel Optimization and CRO
                        </a>{' '}
                        are my strongest areas right now. I also understand the fundamentals of PPC and other digital marketing functions, and I'm comfortable picking up the tools and going end-to-end if a role calls for it.
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

      {/* 5. Footer CTA */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-extrabold text-lg text-[#052049]">
              Ready to work with Raja Chera Kesaree?
            </div>
            <p className="text-xs text-slate-500">
              Get in touch to discuss SEO audits, schema validation, or digital marketing strategy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-[#052049] px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <FileText size={15} className="text-[#00B8A9]" />
              <span>Resume</span>
            </button>
            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Hiring%20Inquiry%20-%20Raja%20Chera%20Kesaree`}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FF5A5F] hover:bg-[#e0484d] text-white px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Mail size={15} />
              <span>Contact Me</span>
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-50 hover:bg-blue-100 text-[#0A66C2] px-4 py-2.5 rounded-xl transition-all cursor-pointer border border-blue-200/80"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-100 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 font-mono gap-2">
          <div>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}</div>
          <div>Chennai, India • {PERSONAL_INFO.email}</div>
        </div>
      </footer>

    </div>
  );
}


