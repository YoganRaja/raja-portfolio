import React, { useState } from 'react';
import { ChevronDown, Linkedin, Github, ArrowUpRight, ArrowLeft, FileText, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface EducationSiteProps {
  program?: 'mba' | 'be';
  onBack: () => void;
  onSwitchProgram?: (program: 'mba' | 'be') => void;
  onNavigate?: (path: string, q?: string) => void;
}

const FAQS = [
  {
    question: "How does Raja's Computer Science degree complement his MBA in Marketing?",
    answer: "This dual foundation is Raja's biggest competitive advantage. His CS background means he understands code execution, DOM rendering pathways, database queries, and server response headers for Technical SEO. His MBA gives him the strategic macro-view: customer acquisition cost (CAC), brand positioning, conversion rate optimization (CRO), and executive ROI alignment."
  },
  {
    question: "What was the practical application of Raja's MBA thesis research?",
    answer: "His thesis analyzed the direct impact of digital search tools and technical search engine algorithms on e-commerce customer acquisition. The frameworks he built for structured data schema mapping, site speed budgets, and semantic search alignment were directly put to work during his commercial SEO audits and campaigns."
  },
  {
    question: "What technical systems did Raja master during his B.E. in Computer Science?",
    answer: "Raja mastered database management systems (SQL), web application technologies (HTML5, CSS3, JavaScript), software architecture, and server hosting protocols. This allows him to diagnose rendering blocks and indexability issues that non-technical marketers miss."
  },
  {
    question: "Did Raja hold any leadership roles during his academic career?",
    answer: "Yes, during his engineering tenure at Anna University Regional Campus, Raja served as President of the Department's Tech Society, organizing technical forums, coding hackathons, and developing campus web portals."
  }
];

export default function EducationSite({ program, onBack, onNavigate }: EducationSiteProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const mbaData = {
    degree: 'Master of Business Administration (MBA)',
    specialization: 'Marketing & Digital Business Strategy',
    institutionLine: 'SRM Easwari Engineering College (SRM Group of Institutions), Chennai, Tamil Nadu, India.',
    dates: '2023–2025',
    score: 'CGPA 8.3',
    about: "Easwari Engineering College is an autonomous institution under the SRM Group of Institutions. The MBA program covered core marketing fundamentals alongside digital marketing analytics, consumer behavior, and brand strategy. It's the mix that shaped how I approach SEO and growth work today.",
    paperTitle: 'The Study of Significance of Digital Marketing Tools(Channels) in the Promotion of E-Commerce Websites',
    paperConference: "Presented at the First International Conference on Management Practices in AI Driven Business World (ICMPAIDBW 2025), organized by the Department of Management Studies, St. Joseph's Institute of Technology, Chennai, February 20 to 21, 2025.",
    paperDescription: 'A study examining how digital marketing channels such as SEO, PPC, social media, and email marketing contribute to promoting e-commerce businesses and driving customer engagement online.',
    publishedTitle: 'A Study on Consumer Behavior in Real Estate Marketing at Harini Promoters Pvt. Ltd.',
    publishedJournal: 'Published in the International Journal of Innovation Studies (ISSN 2096-2487), Vol. 9, No. 1, 2025. Co-authored with Dr. B. Selvakumar and four other contributors.',
    publishedDescription: 'A descriptive study exploring how economic and behavioral factors such as interest rates, income stability, and buyer preferences shape real estate purchasing decisions. Based on a 100 respondent survey, analyzed using statistical tests including ANOVA, correlation, and regression.',
    publishedUrl: 'https://iji-studies.com/index.php/IJIS/article/view/268',
    coursework: [
      'Digital Marketing & Social Media Analytics',
      'Brand Management & Positioning Strategy',
      'Marketing Research & Information Systems',
      'Consumer Behavior & Search Psychology',
      'Retail Management & E-Commerce Infrastructure',
      'Strategic Management & Business Intelligence'
    ]
  };

  const beData = {
    degree: 'Bachelor of Engineering (B.E.)',
    specialization: 'Computer Science and Engineering',
    institutionLine: 'Anna University Regional Campus, Tirunelveli, Tamil Nadu, India.',
    dates: '2019–2023',
    score: 'First Class',
    about: 'The Regional Campus of Anna University in Tirunelveli is an engineering department recognized for computational research and software engineering. This technical education provides the engineering foundation required for web technology, DOM rendering, database management, and Technical SEO.',
    projects: [
      {
        title: 'SOS Mobile App',
        description: 'An Android app built as my B.E. mini project, designed to help users trigger an emergency alert quickly, sharing their location with emergency contacts in one tap.'
      },
      {
        title: 'Smart Fashion Recommendation Web App',
        description: 'My final year main project, built with a team. It let users try on outfits live using their device camera as a mirror, powered by AR, paired with a recommendation engine to suggest styles based on what they picked.'
      }
    ],
    coursework: [
      'Database Management Systems (DBMS)',
      'Web Technology & Semantic Architectures',
      'Data Structures and Algorithms',
      'Object-Oriented Software Engineering',
      'Computer Networks & Server Protocols',
      'Mobile Application Development'
    ]
  };

  return (
    <div className="bg-white text-zinc-900 font-sans min-h-screen pb-24 selection:bg-zinc-900 selection:text-white">
      
      {/* 1. Dentsu-Style Top Fold Hero Card (100vh Full Screen - Black) */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between bg-black text-white overflow-hidden select-none border-b border-zinc-900">
        {/* Sleek architectural SVG grid pattern background */}
        <div 
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='0.6' stroke-opacity='0.2'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 40h80M40 0v80'/%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        {/* Gradient dark mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />

        {/* Top Navigation Header Bar */}
        <header className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter font-['Plus_Jakarta_Sans',sans-serif] text-white">
              academics
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer shadow-xs"
              title="Contact Me via Email"
            >
              <Mail size={14} />
              <span>Contact Me</span>
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer shadow-xs"
              title="Visit LinkedIn Profile"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-white/10 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer shadow-xs"
              title="Visit GitHub Profile"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </header>

        {/* Hero Title Copy (Matches Dentsu "Innovating to Impact" Layout & Typography) */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-10 pb-16 sm:pb-24 pt-8 flex flex-col justify-end">
          <div className="space-y-6 max-w-5xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8.2rem] font-black text-white tracking-tighter leading-[0.92] uppercase font-['Plus_Jakarta_Sans',sans-serif]">
              Academic<br />Qualifications
            </h1>
            <p className="text-sm sm:text-lg text-zinc-300 font-light max-w-xl leading-relaxed">
              Combining Computer Science &amp; Engineering with an MBA in Strategic Marketing.
            </p>

            {/* Top Fold Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate ? onNavigate('/search', 'RAJA CHERA KESAREE') : onBack()}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white hover:bg-zinc-200 text-black font-bold text-sm sm:text-base rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Know more about me</span>
                <ArrowUpRight size={18} />
              </button>

              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold text-sm sm:text-base rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Chevron Scroll Indicator */}
        <div className="relative z-20 w-full pb-6 flex justify-center items-center">
          <button 
            onClick={() => {
              window.scrollTo({ top: window.innerHeight - 60, behavior: 'smooth' });
            }}
            aria-label="Scroll down"
            className="text-white/80 hover:text-white transition-colors animate-bounce cursor-pointer p-2"
          >
            <ChevronDown size={32} strokeWidth={2} />
          </button>
        </div>
      </section>

      {/* Main Content (White Background Below Top Fold) */}
      <main className="bg-white max-w-4xl mx-auto px-4 sm:px-6 pt-16 space-y-16 font-['Plus_Jakarta_Sans',sans-serif]">

        {/* MBA Section */}
        <article className="space-y-8">
          
          <header className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              {mbaData.degree}
            </h1>
            <p className="text-base sm:text-lg font-medium text-zinc-700">
              {mbaData.specialization}
            </p>
            <p className="text-sm text-zinc-600 font-normal">
              {mbaData.institutionLine}
            </p>
            <p className="text-sm text-zinc-600 font-normal">
              {mbaData.dates} &bull; {mbaData.score}
            </p>
          </header>

          <section className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              Program Overview
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              {mbaData.about}
            </p>
          </section>

          {/* Paper Presentation */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              Paper Presentation
            </h2>
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-normal text-zinc-800 leading-snug">{mbaData.paperTitle}</p>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
                  {mbaData.paperConference}
                </p>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal pt-1">
                {mbaData.paperDescription}
              </p>
            </div>
          </section>

          {/* Published Research */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              Published Research
            </h2>
            <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-3">
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-normal text-zinc-800 leading-snug">{mbaData.publishedTitle}</p>
                <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
                  {mbaData.publishedJournal}
                </p>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed font-normal pt-1">
                {mbaData.publishedDescription}
              </p>
              <div className="pt-2">
                <a
                  href={mbaData.publishedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-black underline transition-colors"
                >
                  <span>Read the published paper</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </section>

          {/* Key Coursework */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              What I Studied
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mbaData.coursework.map((course, i) => (
                <div key={i} className="p-3.5 bg-slate-50/80 border border-slate-200 rounded-xl text-sm font-medium text-zinc-800">
                  {course}
                </div>
              ))}
            </div>
          </section>

        </article>

        {/* CTA 1: Before Bachelor of Engineering (B.E.) */}
        <section className="relative overflow-hidden bg-zinc-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-800">
          {/* White Decorative Pattern Overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl" aria-hidden="true">
            {/* White Soft Radial Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            
            {/* White Dot Matrix Grid Pattern */}
            <svg className="absolute top-0 right-0 h-full w-1/2 opacity-20 text-white" fill="none" viewBox="0 0 300 300">
              <defs>
                <pattern id="cta-pattern-dots-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pattern-dots-1)" />
            </svg>

            {/* White Concentric Geometric Circles */}
            <svg className="absolute -bottom-12 -right-12 w-60 h-60 text-white/20" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            </svg>

            {/* White Subtle Diagonal Accent Lines */}
            <svg className="absolute top-0 left-0 w-44 h-44 text-white/10" viewBox="0 0 200 200" fill="none">
              <path d="M-50 50 L150 -150 M-50 100 L200 -150 M-50 150 L250 -150" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative z-10 space-y-4">
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-3xl">
              Discover how my Computer Science Engineering background connects with technical SEO, AEO/ GEO, web optimization, CRO and growth marketing across my interactive portfolio.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onNavigate ? onNavigate('/search', 'RAJA CHERA KESAREE') : onBack()}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white hover:bg-zinc-200 text-black font-bold text-sm sm:text-base rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Know more about me</span>
                <ArrowUpRight size={18} />
              </button>
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold text-sm sm:text-base rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </section>

        {/* B.E. Computer Science Section */}
        <article className="space-y-8">
          
          <header className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              {beData.degree}
            </h1>
            <p className="text-base sm:text-lg font-medium text-zinc-700">
              {beData.specialization}
            </p>
            <p className="text-sm text-zinc-600 font-normal">
              {beData.institutionLine}
            </p>
            <p className="text-sm text-zinc-600 font-normal">
              {beData.dates} &bull; {beData.score}
            </p>
          </header>

          <section className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              Program Overview
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              {beData.about}
            </p>
          </section>

          {/* College Projects */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              College Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beData.projects.map((project, i) => (
                <div key={i} className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Coursework */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              What I Studied
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {beData.coursework.map((course, i) => (
                <div key={i} className="p-3.5 bg-slate-50/80 border border-slate-200 rounded-xl text-sm font-medium text-zinc-800">
                  {course}
                </div>
              ))}
            </div>
          </section>

        </article>

        {/* CTA 2: Before FAQs */}
        <section className="relative overflow-hidden bg-zinc-800 text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-700">
          {/* White Decorative Pattern Overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl" aria-hidden="true">
            {/* White Soft Radial Glow */}
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            
            {/* White Architectural Grid Mesh Pattern */}
            <svg className="absolute top-0 right-0 h-full w-3/5 opacity-15 text-white" fill="none" viewBox="0 0 300 300">
              <defs>
                <pattern id="cta-pattern-grid-2" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pattern-grid-2)" />
            </svg>

            {/* White Concentric Geometric Arcs */}
            <svg className="absolute -top-12 -right-12 w-64 h-64 text-white/20" viewBox="0 0 200 200" fill="none">
              <circle cx="150" cy="50" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="150" cy="50" r="90" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="150" cy="50" r="60" stroke="currentColor" strokeWidth="1" />
              <circle cx="150" cy="50" r="30" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
            </svg>
          </div>

          <div className="relative z-10 space-y-4">
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-3xl">
              Browse through my complete portfolio, case studies, and career milestones, or grab a printable copy of my resume.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onNavigate ? onNavigate('/search', 'RAJA CHERA KESAREE') : onBack()}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white hover:bg-zinc-200 text-black font-bold text-sm sm:text-base rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Know more about me</span>
                <ArrowUpRight size={18} />
              </button>
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold text-sm sm:text-base rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6 pt-2">
          <header className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight">
              FAQs
            </h2>
          </header>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4.5 text-left hover:bg-slate-100/80 flex justify-between items-center transition-colors cursor-pointer text-sm sm:text-base font-semibold text-zinc-900"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown 
                      size={16} 
                      className={`text-zinc-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-zinc-900' : ''}`} 
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="p-4.5 bg-white border-t border-slate-200 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-sm font-bold text-zinc-900">{PERSONAL_INFO.fullName}</p>
              <p className="text-xs text-zinc-500 font-medium">MBA in Marketing &amp; B.E. Computer Science</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-zinc-800 transition-all cursor-pointer shadow-2xs"
              >
                <Mail size={15} className="text-zinc-900" />
                <span>Email Me</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-zinc-800 transition-all cursor-pointer shadow-2xs"
              >
                <Linkedin size={15} className="text-zinc-900" />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="text-zinc-400" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-zinc-800 transition-all cursor-pointer shadow-2xs"
              >
                <Github size={15} className="text-zinc-900" />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-zinc-400" />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-400 font-mono gap-2">
            <div>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}</div>
            <div>{PERSONAL_INFO.location} • {PERSONAL_INFO.email}</div>
          </div>
        </footer>

      </main>

    </div>
  );
}
