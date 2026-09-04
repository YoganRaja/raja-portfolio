import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import 'finisher-header';
import { 
  BarChart3, BarChart2, FolderKanban, Layers, TrendingUp, ChevronRight, 
  ChevronDown, Mail, Send, FileText, Linkedin, Github, Sparkles, Target, ArrowRight, User, Info
} from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data';
import ProjectDashboard from './ProjectDashboard';

interface ProjectsSiteProps {
  onBack: () => void;
  onOpenResumeModal?: () => void;
}

const TARGET_TITLE = "PROJECTS & OUTCOMES";
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*!";

const ScrambleTitle: React.FC = () => {
  const [text, setText] = useState<string>(() =>
    TARGET_TITLE.split('').map(c => (c === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join('')
  );
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    let frameId: number;
    const startTime = Date.now();
    const scrambleDuration = 800; // 0.8s lock-in phase

    const update = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / scrambleDuration);

      const nextText = TARGET_TITLE.split('').map((targetChar, i) => {
        if (targetChar === ' ') return ' ';
        // Lock in each character based on position
        const threshold = 0.1 + (i / TARGET_TITLE.length) * 0.8;
        if (progress >= threshold) {
          return targetChar;
        }
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }).join('');

      setText(nextText);

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      } else {
        setText(TARGET_TITLE);
        setIsResolved(true);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <span className="relative inline-block text-white select-none">
      <span className="relative z-10">
        {text}
      </span>
      
      {/* Light sheen sweep animation triggered once resolved */}
      {isResolved && (
        <motion.span
          initial={{ x: '-120%', opacity: 1 }}
          animate={{ x: '220%', opacity: [1, 1, 0] }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="absolute inset-y-0 w-2/3 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-25 z-20 pointer-events-none"
        />
      )}
    </span>
  );
};




const PROJECT_FAQS = [
  {
    question: "1. Is it really worth to hire an intern as raja for a full time role?",
    answer: "Absolutely. I bring a rare dual background, combining a Computer Science Engineering degree with an MBA in Digital Marketing, enabling me to operate with senior-level technical ownership from day one. Rather than requiring months of onboarding, I independently audited 2,200+ URLs, mapped complex GA4 tracking properties, and generated 459,000+ organic clicks with 64M+ impressions for pickyourtrail.com. Hiring me delivers an agile, technical growth marketer who drives measurable revenue outcomes at high ROI."
  },
  {
    question: "2. Are the campaign metrics and traffic data shown here based on real organic search performance?",
    answer: "Yes. The Search Console, GA4, and AEO/GEO metrics represent actual campaign audits and organic performance, including 459K+ organic clicks, 64M+ impressions, and 4.84K+ clicks (840K impressions) on the Switzerland destination subfolder for pickyourtrail.com."
  },
  {
    question: "3. Can Raja execute both technical SEO engineering and strategic marketing?",
    answer: "Yes, seamlessly. With a Computer Science engineering foundation and an MBA in Digital Marketing, I perform hands-on technical audits (schema JSON-LD, crawl efficiency, canonical logic) alongside high-level conversion rate optimization and campaign strategy."
  },
  {
    question: "4. How does Raja measure full-funnel marketing attribution?",
    answer: "I build custom Google Analytics 4 (GA4) property architectures, Google Tag Manager event triggers, key conversion tracking, and link multi-account Google Ads pipelines to eliminate measurement gaps."
  },
  {
    question: "5. Is Raja open to full-time growth marketing and SEO positions?",
    answer: "Yes. I am immediately available with zero notice period for full-time roles across SEO, AEO/GEO, Lead Generation, and Growth Strategy."
  }
];

export default function ProjectsSite({ onBack, onOpenResumeModal }: ProjectsSiteProps) {
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS_DATA[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Scroll tracking to highlight the active campaign in the sticky sidebar index
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = PROJECTS_DATA.length - 1; i >= 0; i--) {
        const proj = PROJECTS_DATA[i];
        const element = document.getElementById(`project-${proj.id}`);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveProjectId(proj.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const patchFinisher = () => {
      if (typeof (window as any).FinisherHeader !== 'undefined' && !(window as any).FinisherHeader.__patched) {
        (window as any).FinisherHeader.prototype.gr = function(t: string) {
          const elems = document.getElementsByClassName(t || "finisher-header");
          if (!elems.length) {
            return document.createElement('div');
          }
          return elems[0];
        };
        (window as any).FinisherHeader.__patched = true;
      }
    };

    const initFinisher = () => {
      if (!isMounted) return;
      const container = document.querySelector('.finisher-header');
      if (!container) return;

      // Clean up any existing canvas elements inside .finisher-header
      const existingCanvas = container.querySelectorAll('canvas');
      existingCanvas.forEach(c => c.remove());

      patchFinisher();

      if (typeof (window as any).FinisherHeader !== 'undefined') {
        try {
          new (window as any).FinisherHeader({
            "className": "finisher-header",
            "count": 10,
            "size": { "min": 1300, "max": 1500, "pulse": 0 },
            "speed": { "x": { "min": 0.1, "max": 0.6 }, "y": { "min": 0.1, "max": 0.6 } },
            "colors": {
              "background": "#d88d10",
              "particles": ["#de880c", "#000000", "#c1bf12", "#ff9700"]
            },
            "blending": "overlay",
            "opacity": { "center": 0.5, "edge": 0.05 },
            "skew": 0,
            "shapes": ["c"]
          });
        } catch (err) {
          console.error("Error initializing FinisherHeader:", err);
        }
      }
    };

    patchFinisher();

    const handle = requestAnimationFrame(() => {
      if (typeof (window as any).FinisherHeader !== 'undefined') {
        initFinisher();
      } else {
        const script = document.createElement('script');
        script.src = '/finisher-header.es5.min.js';
        script.async = true;
        script.onload = () => {
          initFinisher();
        };
        document.head.appendChild(script);
      }
    });

    return () => {
      isMounted = false;
      cancelAnimationFrame(handle);
      const container = document.querySelector('.finisher-header');
      if (container) {
        const existingCanvas = container.querySelectorAll('canvas');
        existingCanvas.forEach(c => c.remove());
      }
    };
  }, []);

  const scrollToProject = (id: string) => {
    setActiveProjectId(id);
    const element = document.getElementById(`project-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen selection:bg-orange-500/20">
      
      {/* Unified Header & Hero Section with Finisher Header Background */}
      <div 
        className="finisher-header w-full border-b border-orange-300/60 relative overflow-hidden shadow-2xs h-[640px] flex flex-col justify-between"
        style={{ height: '640px', minHeight: '640px' }}
      >

        {/* 1. Top Header Bar */}
        <header className="bg-transparent relative z-10 w-full font-['Plus_Jakarta_Sans',sans-serif]">
          <div className="w-full px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            {/* Left empty spacer to keep CTAs right-aligned */}
            <div />

            {/* Action CTAs */}
            <div className="flex items-center space-x-4 sm:space-x-6 font-['Plus_Jakarta_Sans',sans-serif]">
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-xs sm:text-sm font-bold text-white hover:text-amber-200 transition-colors cursor-pointer"
                title="Visit LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-xs sm:text-sm font-bold text-white hover:text-amber-200 transition-colors cursor-pointer"
                title="Visit GitHub Profile"
              >
                GitHub
              </a>
              <button 
                onClick={() => onOpenResumeModal ? onOpenResumeModal() : window.print()}
                className="text-xs sm:text-sm font-bold text-white hover:text-amber-200 transition-colors cursor-pointer"
              >
                Resume
              </button>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-white hover:text-amber-200 transition-colors cursor-pointer"
              >
                Contact Me
              </a>
            </div>

          </div>
        </header>

        {/* 2. Hero Section Content */}
        <section className="w-full flex-1 flex items-center py-6 sm:py-10 relative z-10 text-center">
          {/* Centered Content Container */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex flex-col items-center text-center my-auto w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-tight whitespace-nowrap font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <ScrambleTitle />
            </motion.h1>

            {/* Paragraph without glass card wrapper, entirely in white text */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-[1.05rem] xl:text-[1.125rem] leading-normal sm:leading-relaxed font-normal font-['Outfit',sans-serif] max-w-4xl lg:max-w-5xl mx-auto w-full">
              I work across the full funnel: organic search growth, technical SEO audits, lead generation, conversion rate optimization (CRO), zero-click search readiness (AEO/GEO), branding, retention, and online reputation management (ORM). Explore all the case studies and outcomes below, or check out my{' '}
              <a 
                href="/skills" 
                onClick={(e) => { e.preventDefault(); navigateTo('/skills'); }}
                className="text-white font-bold underline decoration-white/80 underline-offset-4 hover:text-amber-200 transition-colors"
              >
                technical marketing stack
              </a>
              .
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-['Plus_Jakarta_Sans',sans-serif]">
              <button 
                onClick={() => onOpenResumeModal ? onOpenResumeModal() : window.print()}
                className="inline-flex items-center text-base font-bold bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-8 py-3.5 rounded-xl shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Download My Resume
              </button>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-base font-bold bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Hire Me
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Main Body Container with Sticky Index Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Campaign Index Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-20 space-y-3 z-20">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">

              <div className="w-full bg-slate-100 h-1.5 rounded-full mb-3 overflow-hidden">
                <div 
                  className="bg-orange-600 h-full transition-all duration-300 rounded-full"
                  style={{
                    width: `${((PROJECTS_DATA.findIndex(p => p.id === activeProjectId) + 1) / PROJECTS_DATA.length) * 100}%`
                  }}
                ></div>
              </div>

              <div className="space-y-1.5 max-h-[60vh] lg:max-h-[calc(100vh-14rem)] overflow-y-auto pr-0.5 scrollbar-thin">
                {PROJECTS_DATA.map((proj, idx) => {
                  const isActive = proj.id === activeProjectId;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => scrollToProject(proj.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 group ${
                        isActive
                          ? 'bg-orange-50/90 border-orange-500 text-slate-900 shadow-xs'
                          : 'bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <span className={`text-[10px] font-bold font-sans rounded px-1.5 py-0.5 mt-0.5 shrink-0 ${
                          isActive ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                        }`}>
                          0{idx + 1}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className={`text-xs font-bold leading-snug truncate ${
                            isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                          }`}>
                            {proj.title}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate font-medium mt-0.5">
                            {proj.category}
                          </div>
                        </div>
                      </div>

                      {isActive ? (
                        <div className="w-2 h-2 rounded-full bg-orange-600 shrink-0 animate-pulse"></div>
                      ) : (
                        <ChevronRight size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

            </div>
          </aside>

          {/* Main Content Feed - UNBOXED Headings & Text, ONLY Visualizations Boxed */}
          <main className="lg:col-span-8 space-y-12">
            
            {PROJECTS_DATA.map((proj, idx) => (
              <React.Fragment key={proj.id}>
                <section 
                  id={`project-${proj.id}`}
                  className="scroll-mt-24 space-y-4 pt-2"
                >
                  {/* Title directly formatted as numbered title */}
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                    {idx + 1}. {proj.title}
                  </h2>

                  {/* Paragraph Description */}
                  <p className="text-slate-700 text-base leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Key Results & Impact */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp size={15} className="text-emerald-600" />
                      Key Results &amp; Impact
                    </span>
                    <p className="text-base sm:text-lg font-bold text-slate-900">
                      {proj.metrics}
                    </p>
                  </div>

                  {/* ONLY Visualization inside a Box Container, with header OUTSIDE */}
                  {proj.dashboardType && (
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                        Campaign Data Visualization
                      </span>
                      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                        {/* Interactive Analytics Component */}
                        <ProjectDashboard type={proj.dashboardType} />
                      </div>
                      {proj.dashboardType !== 'aeo_geo' && (
                        <div className="flex items-start gap-1.5 px-1 pt-0.5 text-[11px] sm:text-xs text-slate-500 leading-normal font-sans">
                          <Info size={13} className="text-slate-400 shrink-0 mt-0.5" />
                          <p>
                            <span className="font-semibold text-slate-600">Note:</span> {
                              proj.dashboardType === 'gsc_core'
                                ? "The Pickyourtrail Core SEO Performance & Crawl Scaling project was actually a team effort, not a solo one, and I'm not able to disclose the exact date range of these results due to company policy. The screenshots above are real data from that work. Scroll down to see the rest, which are all my solo contributions."
                                : proj.dashboardType === 'gsc_switzerland'
                                ? "I'm not able to disclose the exact date range of these results due to company policy. The screenshots above are real data from that campaign."
                                : "Recreated visual, not an actual screenshot. Built using real data and results, styled to match the original tool since I can't share employer account screenshots due to confidentiality."
                            }
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </section>

                {/* Inline Natural Body CTA 1 (After 1st Project - Warm Orange Theme) */}
                {idx === 0 && (
                  <div className="bg-gradient-to-r from-orange-950 via-amber-950 to-slate-900 text-white rounded-2xl p-6 sm:p-7 my-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 border border-orange-800/60 select-none cursor-default">
                    <div className="text-center sm:text-left select-none cursor-default">
                      <h3 className="text-base sm:text-lg font-bold text-white select-none cursor-default">
                        Looking to scale organic traffic or resolve crawl bottlenecks?
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}?subject=SEO%20Strategy%20Inquiry%20for%20Raja%20Chera%20Kesaree`}
                        className="text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Hire Me</span>
                        <ArrowRight size={14} />
                      </a>
                      <a 
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-colors border border-white/20 cursor-pointer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                )}

                {/* Inline Natural Body CTA 2 (After 3rd Project - Deep Indigo/Purple AI Theme) */}
                {idx === 2 && (
                  <div className="bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 text-white border border-indigo-800/60 rounded-2xl p-6 sm:p-7 my-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 select-none cursor-default">
                    <div className="text-center sm:text-left select-none cursor-default">
                      <h3 className="text-base sm:text-lg font-bold text-white select-none cursor-default">
                        Preparing your brand for Jemini and Perplexity AI citations?
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}?subject=AI%20Search%20Inquiry%20for%20Raja%20Chera%20Kesaree`}
                        className="text-xs font-bold bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Hire Me</span>
                        <ArrowRight size={14} />
                      </a>
                      <a 
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-colors border border-white/20 cursor-pointer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                )}



                {/* Inline Natural Body CTA 3 (After 5th Project - Lead Gen & CRO - Deep Emerald/Teal Theme) */}
                {idx === 4 && (
                  <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white border border-emerald-800/60 rounded-2xl p-6 sm:p-7 my-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 select-none cursor-default">
                    <div className="text-center sm:text-left select-none cursor-default">
                      <h3 className="text-base sm:text-lg font-bold text-white select-none cursor-default">
                        Looking to improve lead generation and funnel conversion rates?
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}?subject=Lead%20Generation%20%26%20CRO%20Inquiry%20for%20Raja%20Chera%20Kesaree`}
                        className="text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Hire Me</span>
                        <ArrowRight size={14} />
                      </a>
                      <a 
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-colors border border-white/20 cursor-pointer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}

          </main>
        </div>
      </div>

      {/* 4. FAQs Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {PROJECT_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-slate-700 transition-colors cursor-pointer select-none"
                >
                  <span className="text-slate-900">{faq.question}</span>
                  <ChevronDown 
                    size={18} 
                    className={`shrink-0 transition-transform duration-200 text-slate-400 ${isOpen ? 'rotate-180 text-slate-700' : ''}`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {idx === 0 ? (
                      <>
                        {faq.answer} You can inspect my detailed{' '}
                        <a 
                          href="/experience" 
                          onClick={(e) => { e.preventDefault(); navigateTo('/experience'); }}
                          className="text-orange-600 font-bold underline decoration-orange-300 underline-offset-2 hover:text-orange-800 transition-colors"
                        >
                          career experience record
                        </a>
                        {' '}or review my{' '}
                        <a 
                          href="/skills" 
                          onClick={(e) => { e.preventDefault(); navigateTo('/skills'); }}
                          className="text-orange-600 font-bold underline decoration-orange-300 underline-offset-2 hover:text-orange-800 transition-colors"
                        >
                          technical toolset
                        </a>
                        .
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
      <footer className="w-full bg-gradient-to-br from-orange-500 via-orange-600 to-amber-700 text-white mt-16 pt-12 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-orange-400/30 shadow-lg">
        {/* Soft background glow accent matching hero */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[250px] bg-gradient-to-r from-orange-400/20 via-amber-300/20 to-orange-200/10 rounded-full blur-3xl pointer-events-none" />

        {/* 3D Isometric Geometric Block Light Patterns (Left and Right) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" viewBox="0 0 1400 350" preserveAspectRatio="none" fill="none">
          <defs>
            {/* Left Block Facet Gradients */}
            <linearGradient id="left-facet-top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="left-facet-side" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.30" />
            </linearGradient>
            <linearGradient id="left-facet-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#92400e" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#78350f" stopOpacity="0.08" />
            </linearGradient>

            {/* Right Block Facet Gradients */}
            <linearGradient id="right-facet-top" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="right-facet-side" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#92400e" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Left Side 3D Isometric Geometric Block */}
          <g>
            <polygon points="-80,-20 180,-20 20,380 -240,380" fill="url(#left-facet-top)" />
            <polygon points="180,-20 290,-20 130,380 20,380" fill="url(#left-facet-side)" />
            <polygon points="-40,-20 30,-20 190,380 120,380" fill="url(#left-facet-dark)" />
          </g>

          {/* Right Side 3D Isometric Geometric Block */}
          <g>
            <polygon points="1180,-20 1520,-20 1300,380 960,380" fill="url(#right-facet-top)" />
            <polygon points="1060,-20 1180,-20 960,380 840,380" fill="url(#right-facet-side)" />
            <polygon points="1320,-20 1520,-20 1520,380 1320,380" fill="url(#left-facet-dark)" />
          </g>
        </svg>

        <div className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10 font-['Plus_Jakarta_Sans',sans-serif]">
          {/* Multi-column links layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 items-stretch">
            {/* Column 1: Connect */}
            <div className="flex flex-col items-start text-left justify-between">
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base mb-3 tracking-tight">
                  Connect
                </h3>
                <div className="flex flex-col space-y-2.5 text-xs sm:text-sm font-medium text-orange-100">
                  <a 
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors w-fit flex items-center gap-1.5"
                  >
                    <Linkedin size={14} className="text-white" />
                    LinkedIn
                  </a>
                  <a 
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors w-fit flex items-center gap-1.5"
                  >
                    <Github size={14} className="text-white" />
                    GitHub
                  </a>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors w-fit flex items-center gap-1.5"
                  >
                    <Mail size={14} className="text-white" />
                    Contact Me
                  </a>
                  <button 
                    onClick={() => onOpenResumeModal ? onOpenResumeModal() : window.print()}
                    className="hover:text-white transition-colors text-left cursor-pointer w-fit flex items-center gap-1.5"
                  >
                    <FileText size={14} className="text-white" />
                    Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Statement & Contact inside subtle glass container */}
            <div className="flex flex-col items-start text-left bg-white/10 backdrop-blur-sm p-6 sm:p-7 rounded-xl border border-white/15 shadow-sm">
              <h3 className="font-bold text-white text-base sm:text-lg mb-3 tracking-tight max-w-sm leading-snug">
                Need someone who has actually shown results and not just claimed them?
              </h3>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-orange-100 hover:text-white transition-colors font-medium underline underline-offset-2 flex items-center gap-1.5"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* 3 & 4. Divider & Copyright */}
          <div className="border-t border-orange-400/30 pt-6 mt-2 flex justify-between items-center text-xs text-orange-200/90 font-sans font-medium">
            <div>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
