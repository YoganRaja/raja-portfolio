import React, { useState, useEffect } from 'react';
import { 
  BarChart3, BarChart2, FolderKanban, Layers, TrendingUp, ChevronRight, 
  ChevronDown, Mail, Send, FileText, Linkedin, Github, Sparkles, Target, ArrowRight, User
} from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data';
import ProjectDashboard from './ProjectDashboard';

interface ProjectsSiteProps {
  onBack: () => void;
}

const PROJECT_FAQS = [
  {
    question: "1. Is it really worth to hire an intern as raja for a full time role?",
    answer: "Absolutely. Raja brings a rare dual background—a Computer Science Engineering degree combined with an MBA in Digital Marketing—enabling him to operate with senior-level technical ownership from day one. Rather than requiring months of onboarding, Raja independently audited 2,200+ URLs, mapped complex GA4 tracking properties, and generated 459,000+ organic clicks with 64M+ impressions for pickyourtrail.com. Hiring Raja delivers an agile, technical growth marketer who drives measurable revenue outcomes at high ROI."
  },
  {
    question: "2. Are the campaign metrics and traffic data shown here based on real organic search performance?",
    answer: "Yes. The Search Console, GA4, and competitor gap metrics represent actual campaign audits and organic performance—including 459K+ organic clicks, 64M+ impressions, and a +198% traffic surge on the Switzerland subfolder for pickyourtrail.com."
  },
  {
    question: "3. Can Raja execute both technical SEO engineering and strategic marketing?",
    answer: "Yes, seamlessly. With a Computer Science engineering foundation and an MBA in Digital Marketing, Raja performs hands-on technical audits (schema JSON-LD, crawl efficiency, canonical logic) alongside high-level conversion rate optimization and campaign strategy."
  },
  {
    question: "4. How does Raja measure full-funnel marketing attribution?",
    answer: "By building custom Google Analytics 4 (GA4) property architectures, Google Tag Manager event triggers, key conversion tracking, and linking multi-account Google Ads pipelines to eliminate measurement gaps."
  },
  {
    question: "5. Is Raja open to full-time growth marketing and SEO positions?",
    answer: "Yes. Raja is immediately available with zero notice period for full-time roles across SEO, AEO/GEO, Lead Generation, and Growth Strategy."
  }
];

export default function ProjectsSite({ onBack }: ProjectsSiteProps) {
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
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen pb-20 selection:bg-amber-500/20">
      
      {/* Unified Header & Hero Section */}
      <div className="w-full bg-[#eef7ff] border-b border-blue-100/80 relative overflow-hidden shadow-xs">

        {/* 1. Top Header Bar */}
        <header className="relative z-10 w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            
            {/* Top Left Icon (Clickable to return home/search) */}
            <div 
              onClick={onBack}
              className="flex items-center cursor-pointer group select-none"
              title="Return to search home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
                <BarChart3 size={20} />
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center space-x-2.5">
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-50/90 hover:bg-blue-100 text-[#0A66C2] px-3 py-2 rounded-lg transition-all cursor-pointer border border-blue-200/80 shadow-2xs backdrop-blur-xs"
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
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/80 hover:bg-white text-slate-800 px-3 py-2 rounded-lg transition-all cursor-pointer border border-slate-200/90 shadow-2xs backdrop-blur-xs"
                title="Visit GitHub Profile"
              >
                <Github size={14} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/80 hover:bg-white text-slate-900 px-3.5 py-2 rounded-lg transition-all cursor-pointer border border-slate-200/90 shadow-2xs backdrop-blur-xs"
              >
                <FileText size={14} className="text-amber-600" />
                <span className="hidden sm:inline">Download</span> Resume
              </button>
              <a 
                href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20-%20Raja%20Chera%20Kesaree`}
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg shadow-xs transition-all hover:shadow cursor-pointer"
              >
                <Mail size={14} />
                <span>Contact Me</span>
              </a>
            </div>

          </div>
        </header>

        {/* 2. Hero Section Content */}
        <section className="w-full min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 md:py-20 relative z-10 text-center">
          {/* Centered Content Container */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex flex-col items-center text-center my-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap">
              <span className="bg-[#f4e6cf] text-[#0f172a] px-3.5 sm:px-6 py-1 sm:py-2 inline-block">
                PROJECTS &amp; OUTCOMES
              </span>
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl font-medium">
              I work across the full funnel: organic search growth, technical SEO audits, lead generation, conversion rate optimization (CRO), zero-click search readiness(AEO/GEO), branding, retention, and online reputation management (ORM). Explore all the case studies and outcomes below, or check out my{' '}
              <a 
                href="/experience" 
                onClick={(e) => { e.preventDefault(); navigateTo('/experience'); }}
                className="text-amber-600 font-bold underline decoration-amber-300 underline-offset-2 hover:text-amber-800 transition-colors"
              >
                work experience
              </a>
              {' '}and{' '}
              <a 
                href="/skills" 
                onClick={(e) => { e.preventDefault(); navigateTo('/skills'); }}
                className="text-amber-600 font-bold underline decoration-amber-300 underline-offset-2 hover:text-amber-800 transition-colors"
              >
                technical marketing stack
              </a>
              .
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <a 
                href={`mailto:${PERSONAL_INFO.email}?subject=Hiring%20Inquiry%20-%20Raja%20Chera%20Kesaree`}
                className="inline-flex items-center gap-2 text-base font-bold bg-amber-600 hover:bg-amber-700 text-white px-8 py-3.5 rounded-xl shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Send size={18} />
                <span>Hire Me</span>
              </a>
              <a 
                href="/search?q=RAJA+CHERA+KESAREE" 
                onClick={(e) => { e.preventDefault(); navigateTo('/search?q=RAJA+CHERA+KESAREE'); }}
                className="inline-flex items-center gap-2 text-base font-bold bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-8 py-3.5 rounded-xl shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <User size={18} className="text-amber-600" />
                <span>Know More About Me</span>
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
                  className="bg-amber-600 h-full transition-all duration-300 rounded-full"
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
                          ? 'bg-amber-50/90 border-amber-500 text-slate-900 shadow-xs'
                          : 'bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <span className={`text-[10px] font-bold font-sans rounded px-1.5 py-0.5 mt-0.5 shrink-0 ${
                          isActive ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
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
                        <div className="w-2 h-2 rounded-full bg-amber-600 shrink-0 animate-pulse"></div>
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

                  {/* Tools & Methodologies Pills */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                      Tools &amp; Methodologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {proj.technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
                    </div>
                  )}
                </section>

                {/* Inline Natural Body CTA 1 (After 1st Project - Warm Amber/Orange Theme) */}
                {idx === 0 && (
                  <div className="bg-gradient-to-r from-amber-950 via-orange-950 to-slate-900 text-white rounded-2xl p-6 sm:p-7 my-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 border border-amber-800/60 select-none cursor-default">
                    <div className="text-center sm:text-left select-none cursor-default">
                      <h3 className="text-base sm:text-lg font-bold text-white select-none cursor-default">
                        Looking to scale organic traffic or resolve crawl bottlenecks?
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}?subject=SEO%20Strategy%20Inquiry%20for%20Raja%20Chera%20Kesaree`}
                        className="text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white px-4 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
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
                        Preparing your brand for Gemini and Perplexity AI citations?
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

                {/* Inline Natural Body CTA 4 (After 5th Project - GA4 & Analytics - Deep Blue/Sky Theme) */}
                {idx === 4 && (
                  <div className="bg-gradient-to-l from-blue-950 via-sky-950 to-slate-900 text-white border border-blue-800/60 rounded-2xl p-6 sm:p-7 my-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5 select-none cursor-default">
                    <div className="text-center sm:text-left select-none cursor-default">
                      <h3 className="text-base sm:text-lg font-bold text-white select-none cursor-default">
                        Need someone who is comfortable digging into GA4, Looker Studio, and Power BI to find what the data's actually saying?
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}?subject=Analytics%20%26%20Tracking%20Inquiry%20for%20Raja%20Chera%20Kesaree`}
                        className="text-xs font-bold bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
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

                {/* Inline Natural Body CTA 3 (After 7th Project - Lead Gen & CRO - Deep Emerald/Teal Theme) */}
                {idx === 6 && (
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
                        {faq.answer} You can inspect his detailed{' '}
                        <a 
                          href="/experience" 
                          onClick={(e) => { e.preventDefault(); navigateTo('/experience'); }}
                          className="text-amber-600 font-bold underline decoration-amber-300 underline-offset-2 hover:text-amber-800 transition-colors"
                        >
                          career experience record
                        </a>
                        {' '}or review his{' '}
                        <a 
                          href="/skills" 
                          onClick={(e) => { e.preventDefault(); navigateTo('/skills'); }}
                          className="text-amber-600 font-bold underline decoration-amber-300 underline-offset-2 hover:text-amber-800 transition-colors"
                        >
                          technical toolset
                        </a>
                        .
                      </>
                    ) : idx === 1 ? (
                      <>
                        Yes. The Search Console, GA4, and competitor gap metrics represent actual campaign audits and organic performance—including 459K+ organic clicks, 64M+ impressions, and a +198% traffic surge on the Switzerland subfolder for pickyourtrail.com. Read more in his{' '}
                        <a 
                          href="/experience" 
                          onClick={(e) => { e.preventDefault(); navigateTo('/experience'); }}
                          className="text-amber-600 font-bold underline decoration-amber-300 underline-offset-2 hover:text-amber-800 transition-colors"
                        >
                          career experience overview
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
      <footer className="bg-white border-t border-slate-200 mt-16 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-extrabold text-lg text-slate-900">
              Ready to collaborate with Raja Chera Kesaree?
            </div>
            <p className="text-xs text-slate-500">
              Get in touch to discuss SEO audits, schema validation, or digital marketing strategy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <FileText size={15} className="text-amber-600" />
              <span>Resume</span>
            </button>
            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Hiring%20Inquiry%20-%20Raja%20Chera%20Kesaree`}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
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

        <div className="max-w-5xl mx-auto border-t border-slate-100 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 font-mono gap-2">
          <div>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}</div>
          <div>Chennai, India • {PERSONAL_INFO.email}</div>
        </div>
      </footer>

    </div>
  );
}
