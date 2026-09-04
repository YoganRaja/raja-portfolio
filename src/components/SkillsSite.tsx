import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, Send, Linkedin, Github, Filter, CheckCircle,
  AlertCircle, ChevronDown, ChevronUp, ExternalLink, Wrench, Mail
} from 'lucide-react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data';
import { CoverflowToolIcons } from './CoverflowToolIcons';
import {
  validateResumeForm,
  submitResumeForm,
  triggerResumeDownload,
  ResumeFormData,
  ResumeFormErrors
} from '../utils/resumeDownload';

interface SkillsSiteProps {
  onBack: () => void;
  onOpenResumeModal?: () => void;
}

interface SkillTopicItem {
  title: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
}

// Skill Topics in small coloured green cards
const TECHNICAL_SEO_TOPICS: SkillTopicItem[] = [
  {
    title: 'Technical SEO Auditing',
    bgClass: 'bg-emerald-100 hover:bg-emerald-200/90',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-950'
  },
  {
    title: 'On-Page SEO',
    bgClass: 'bg-green-100 hover:bg-green-200/90',
    borderClass: 'border-green-300',
    textClass: 'text-green-950'
  },
  {
    title: 'Keyword Research & Intent Mapping',
    bgClass: 'bg-teal-100 hover:bg-teal-200/90',
    borderClass: 'border-teal-300',
    textClass: 'text-teal-950'
  },
  {
    title: 'Market & Competitor Research',
    bgClass: 'bg-lime-100 hover:bg-lime-200/90',
    borderClass: 'border-lime-300',
    textClass: 'text-lime-950'
  },
  {
    title: 'Crawl Budget & Indexability',
    bgClass: 'bg-green-200/90 hover:bg-green-300/90',
    borderClass: 'border-green-400',
    textClass: 'text-green-950'
  },
  {
    title: 'Internal Linking Architecture',
    bgClass: 'bg-teal-200/90 hover:bg-teal-300/90',
    borderClass: 'border-teal-400',
    textClass: 'text-teal-950'
  },
  {
    title: 'Canonicalization & Duplicate Content Management',
    bgClass: 'bg-emerald-100 hover:bg-emerald-200/90',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-950'
  },
  {
    title: 'Schema Markup & Structured Data',
    bgClass: 'bg-emerald-200/90 hover:bg-emerald-300/90',
    borderClass: 'border-emerald-400',
    textClass: 'text-emerald-950'
  },
  {
    title: 'JavaScript SEO & Rendering Troubleshooting',
    bgClass: 'bg-emerald-200/90 hover:bg-emerald-300/90',
    borderClass: 'border-emerald-400',
    textClass: 'text-emerald-950'
  },
  {
    title: 'Log File Analysis',
    bgClass: 'bg-lime-100 hover:bg-lime-200/90',
    borderClass: 'border-lime-300',
    textClass: 'text-lime-950'
  },
  {
    title: 'Semantic SEO & Topical Authority',
    bgClass: 'bg-lime-200/90 hover:bg-lime-300/90',
    borderClass: 'border-lime-400',
    textClass: 'text-lime-950'
  },
  {
    title: 'Entity SEO & Structured Data for AI Search',
    bgClass: 'bg-emerald-200/90 hover:bg-emerald-300/90',
    borderClass: 'border-emerald-400',
    textClass: 'text-emerald-950'
  },
  {
    title: 'AEO/GEO',
    bgClass: 'bg-teal-100 hover:bg-teal-200/90',
    borderClass: 'border-teal-300',
    textClass: 'text-teal-950'
  },
  {
    title: 'Programmatic SEO (Template-Based Scaling)',
    bgClass: 'bg-green-100 hover:bg-green-200/90',
    borderClass: 'border-green-300',
    textClass: 'text-green-950'
  }
];

const PPC_CRO_BRANDING_TOPICS: SkillTopicItem[] = [
  {
    title: 'PPC (Google/Meta/LinkedIn Ads)',
    bgClass: 'bg-green-100 hover:bg-green-200/90',
    borderClass: 'border-green-300',
    textClass: 'text-green-950'
  },
  {
    title: 'Campaign Budget & Bid Management',
    bgClass: 'bg-emerald-100 hover:bg-emerald-200/90',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-950'
  },
  {
    title: 'A/B Testing & CRO',
    bgClass: 'bg-emerald-100 hover:bg-emerald-200/90',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-950'
  },
  {
    title: 'Funnel Optimization',
    bgClass: 'bg-emerald-200/90 hover:bg-emerald-300/90',
    borderClass: 'border-emerald-400',
    textClass: 'text-emerald-950'
  },
  {
    title: 'ICP Analysis',
    bgClass: 'bg-teal-100 hover:bg-teal-200/90',
    borderClass: 'border-teal-300',
    textClass: 'text-teal-950'
  },
  {
    title: 'Lead Magnet & Gated Content Strategy',
    bgClass: 'bg-lime-200/90 hover:bg-lime-300/90',
    borderClass: 'border-lime-400',
    textClass: 'text-lime-950'
  },
  {
    title: 'Integrated Campaign Planning',
    bgClass: 'bg-emerald-100 hover:bg-emerald-200/90',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-950'
  },
  {
    title: 'Brand Strategy & Positioning',
    bgClass: 'bg-teal-200/90 hover:bg-teal-300/90',
    borderClass: 'border-teal-400',
    textClass: 'text-teal-950'
  },
  {
    title: 'Digital Branding & ORM',
    bgClass: 'bg-green-200/90 hover:bg-green-300/90',
    borderClass: 'border-green-400',
    textClass: 'text-green-950'
  }
];

// Software Toolset as individual green cards
const SOFTWARE_TOOLS: SkillTopicItem[] = [
  {
    title: 'Google Analytics (GA4)',
    bgClass: 'bg-emerald-100 hover:bg-emerald-200/90',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-950'
  },
  {
    title: 'Google Search Console',
    bgClass: 'bg-green-100 hover:bg-green-200/90',
    borderClass: 'border-green-300',
    textClass: 'text-green-950'
  },
  {
    title: 'Microsoft Clarity',
    bgClass: 'bg-teal-100 hover:bg-teal-200/90',
    borderClass: 'border-teal-300',
    textClass: 'text-teal-950'
  },
  {
    title: 'Data Studio',
    bgClass: 'bg-lime-100 hover:bg-lime-200/90',
    borderClass: 'border-lime-300',
    textClass: 'text-lime-950'
  },
  {
    title: 'Screaming Frog',
    bgClass: 'bg-emerald-200/80 hover:bg-emerald-300/90',
    borderClass: 'border-emerald-400',
    textClass: 'text-emerald-950'
  },
  {
    title: 'Semrush',
    bgClass: 'bg-green-200/80 hover:bg-green-300/90',
    borderClass: 'border-green-400',
    textClass: 'text-green-950'
  },
  {
    title: 'Surfer SEO',
    bgClass: 'bg-teal-200/80 hover:bg-teal-300/90',
    borderClass: 'border-teal-400',
    textClass: 'text-teal-950'
  },
  {
    title: 'GT Metrix',
    bgClass: 'bg-lime-200/80 hover:bg-lime-300/90',
    borderClass: 'border-lime-400',
    textClass: 'text-lime-950'
  },
  {
    title: 'Microsoft Office Suite',
    bgClass: 'bg-emerald-50 hover:bg-emerald-100',
    borderClass: 'border-emerald-200',
    textClass: 'text-emerald-950'
  },
  {
    title: 'WordPress',
    bgClass: 'bg-green-50 hover:bg-green-100',
    borderClass: 'border-green-200',
    textClass: 'text-green-950'
  },
  {
    title: 'Strapi',
    bgClass: 'bg-teal-50 hover:bg-teal-100',
    borderClass: 'border-teal-200',
    textClass: 'text-teal-950'
  }
];

// FAQs Data
interface FAQItem {
  question: string;
  answer: string;
}

const SKILL_FAQS: FAQItem[] = [
  {
    question: "Does Raja actually use all these tools and skills, or is this just a list?",
    answer: "Every tool and skill listed here has been used on real work and not just on training courses. If it's on this page, I've actually used it/implemented it to get a result."
  },
  {
    question: "What technical SEO tools does Raja use for site audits & crawl diagnostics?",
    answer: "I rely on Screaming Frog SEO Spider for comprehensive crawl diagnostics scanning 2,000+ URLs for canonical loops, broken redirects, and missing meta tags, Google Search Console for indexing and coverage monitoring, Semrush for keyword gap analysis, and GTmetrix for Core Web Vitals optimization."
  },
  {
    question: "How does Raja handle analytics, event tracking, and conversion attribution?",
    answer: "I configure GA4 properties from scratch, establishing custom key events and I deploy Google Tag Manager (GTM) containers to handle telemetry tags, button click listeners, and scroll depth tracking."
  },
  {
    question: "What is Raja's experience with AI Search Readiness (AEO / GEO)?",
    answer: "I build rich JSON-LD structured data schemas for Organization, Article, FAQ, Product, and BreadcrumbList, structure content for zero-click AI answers, and use NLP term frequency scoring via Surfer SEO to ensure content ranks in Google AI Overviews and Perplexity citations."
  },
  {
    question: "Did Raja work on these tools solo, or as part of a team?",
    answer: "A mix. Some of this was solo work, some was team-based, and I've called it out specifically in the individual project case studies where relevant."
  }
];

export default function SkillsSite({ onBack }: SkillsSiteProps) {
  const [activeTab, setActiveTab] = useState<'seo' | 'ppc' | 'tools' | 'certifications'>('seo');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Resume Download Form States
  const [formData, setFormData] = useState<ResumeFormData>({ name: '', email: '' });
  const [errors, setErrors] = useState<ResumeFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
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
        setDownloadSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen pb-20 selection:bg-emerald-500/20 relative">
      
      {/* Background Architectural Grid Pattern (Scrolls naturally with the page content) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Ambient Radial Lighting Flares */}
        <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-br from-emerald-200/35 via-teal-100/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[800px] -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-teal-200/25 via-emerald-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[1600px] left-10 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-100/30 via-slate-100/40 to-transparent rounded-full blur-3xl" />

        {/* 1. Primary Grid Mesh */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.09) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.09) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '72px 72px',
          }}
        />

        {/* 2. Micro Dot Matrix at Grid Intersections */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(5, 150, 105, 0.4) 1.5px, transparent 0)`,
            backgroundSize: '72px 72px',
          }}
        />

        {/* 3. Subtle Major Grid Accent Lines (Every 288px - 4 cells) */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(5, 150, 105, 0.15) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(5, 150, 105, 0.15) 2px, transparent 2px)
            `,
            backgroundSize: '288px 288px',
          }}
        />
      </div>

      {/* 1. Top Header Bar */}
      <header className="bg-gradient-to-r from-[#062016] via-[#093824] to-[#03170f] text-white border-b border-emerald-800/60 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-6 min-h-[4rem]">
          
          {/* Far Left: Tool Icon */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-950/60 text-emerald-200 flex items-center justify-center border border-emerald-700/50 shrink-0 cursor-default select-none shadow-2xs"
            >
              <Wrench size={18} className="text-emerald-300" />
            </div>
          </div>

          {/* Middle: Horizontally Scrolling Marquee Strip */}
          <div className="flex-1 min-w-0 overflow-hidden relative h-7 flex items-center mx-1 sm:mx-3 pointer-events-none">
            {/* Fade edge masks matching dark green gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#062016] via-[#062016]/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#03170f] via-[#03170f]/80 to-transparent z-10" />

            <motion.div
              className="flex whitespace-nowrap items-center text-[11px] sm:text-xs font-semibold text-emerald-100/90 tracking-tight"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 22,
              }}
            >
              <span className="inline-flex items-center pr-4">
                Equipped with SEO skills your competitors wish they had <span className="mx-2 text-emerald-400 font-bold">•</span> Deploy immediately <span className="mx-2 text-emerald-400 font-bold">•</span> Equipped with SEO skills your competitors wish they had <span className="mx-2 text-emerald-400 font-bold">•</span> Deploy immediately <span className="mx-2 text-emerald-400 font-bold">•</span>
              </span>
              <span className="inline-flex items-center pr-4">
                Equipped with SEO skills your competitors wish they had <span className="mx-2 text-emerald-400 font-bold">•</span> Deploy immediately <span className="mx-2 text-emerald-400 font-bold">•</span> Equipped with SEO skills your competitors wish they had <span className="mx-2 text-emerald-400 font-bold">•</span> Deploy immediately <span className="mx-2 text-emerald-400 font-bold">•</span>
              </span>
            </motion.div>
          </div>

          {/* Far Right: Header Action CTAs */}
          <div className="flex items-center space-x-3 sm:space-x-5 shrink-0">
            <button 
              onClick={() => {
                const faqElement = document.getElementById('faqs-section');
                if (faqElement) {
                  faqElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-xs sm:text-sm font-bold text-emerald-100 hover:text-white transition-colors cursor-pointer px-1 py-1"
              title="Frequently Asked Questions"
            >
              FAQs
            </button>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-emerald-100 hover:text-white transition-colors cursor-pointer px-1 py-1 whitespace-nowrap"
              title="Contact Me via Email"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section - CTA Box on the Right Side of Hero */}
      <section className="w-full bg-transparent border-b border-slate-200/80 py-12 sm:py-16 min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch my-auto">
            
            {/* Left Side: Hero Titles & Description */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-left">
              <div className="space-y-4">
                <CoverflowToolIcons />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-700 tracking-tight leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                  Technical Skills &amp;<br />
                  Marketing Tool Stack
                </h1>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  This page covers the tools and skills I actually use, day to day. Site crawl diagnostics, schema markup, search indexation checks, keyword mapping, CRO experiments. None of it is theoretical. I've applied all of it on real projects, and a good chunk of the thinking behind it traces back to what I studied, both the technical side from my B.E. and the strategy side from my MBA. Take a look at the categories below, or check out my{' '}
                  <a 
                    href="/education" 
                    onClick={(e) => { e.preventDefault(); navigateTo('/education'); }}
                    className="text-emerald-700 font-bold underline decoration-emerald-300 underline-offset-2 hover:text-emerald-900 transition-colors"
                  >
                    academic background
                  </a>
                  {' '}to see where some of this actually started.
                </p>
              </div>
            </div>

            {/* Right Side: CTA Card Box */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <div className="bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] border-2 border-emerald-500/70 rounded-3xl p-5 sm:p-6 shadow-xl text-left h-full flex flex-col justify-between space-y-4 select-none cursor-default">
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-white tracking-wide font-['Outfit'] sm:font-['Plus_Jakarta_Sans']">Want my resume?</h3>
                    <p className="text-[11px] text-emerald-100/90 leading-relaxed font-medium font-['Plus_Jakarta_Sans'] tracking-wide">
                      Drop your name and email, then download it below.
                    </p>
                  </div>

                  <form
                    onSubmit={handleFormSubmit}
                    name="resume-download"
                    data-netlify="true"
                    noValidate
                    className="space-y-3"
                  >
                    <input type="hidden" name="form-name" value="resume-download" />

                    {/* Field 1: Name */}
                    <div className="space-y-1">
                      <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs rounded-xl border transition-all outline-none ${
                          errors.name 
                            ? 'border-red-400 bg-red-50 text-slate-900 placeholder-red-400 focus:ring-2 focus:ring-red-300' 
                            : 'border-emerald-300/80 bg-white text-slate-900 placeholder-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-300 text-[11px] font-semibold flex items-center gap-1 mt-0.5">
                          <AlertCircle size={12} className="shrink-0 text-red-300" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 2: Email Address */}
                    <div className="space-y-1">
                      <input 
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 text-xs rounded-xl border transition-all outline-none ${
                          errors.email 
                            ? 'border-red-400 bg-red-50 text-slate-900 placeholder-red-400 focus:ring-2 focus:ring-red-300' 
                            : 'border-emerald-300/80 bg-white text-slate-900 placeholder-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-300 text-[11px] font-semibold flex items-center gap-1 mt-0.5">
                          <AlertCircle size={12} className="shrink-0 text-red-300" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit CTA Button */}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 text-emerald-950 font-black text-xs py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      <FileText size={15} />
                      <span>{isSubmitting ? 'Submitting...' : 'Download Resume'}</span>
                    </button>

                    {downloadSuccess && (
                      <div className="p-2.5 bg-emerald-950/90 border border-emerald-400/80 rounded-xl text-[11px] font-bold text-emerald-200 flex items-center gap-1.5 animate-fade-in">
                        <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                        <span>Resume download initiated!</span>
                      </div>
                    )}

                    {/* Muted curiosity note below form */}
                    <p className="text-[11px] text-emerald-100/90 text-center font-medium font-['Plus_Jakarta_Sans'] tracking-wide pt-1">
                      Just curious who's grabbing this.
                    </p>
                  </form>
                </div>

                {/* Bottom Social Media Links */}
                <div className="pt-3 border-t border-emerald-500/40 flex items-center justify-center gap-2.5 mt-auto">
                  <a 
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:text-blue-900 bg-white hover:bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-300/80 transition-all shadow-2xs cursor-pointer"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 transition-all shadow-2xs cursor-pointer"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 space-y-8">

        {/* Filter Tabs Navigation Bar (Positioned outside of hero section) */}
        <nav className="w-full">
          <div className="flex flex-nowrap items-center gap-2 bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200/80 shadow-2xs overflow-x-auto">
            <div className="flex items-center gap-1.5 text-slate-500 font-bold text-xs pr-3 border-r border-slate-200 shrink-0 pl-1">
              <Filter size={16} className="text-emerald-600 shrink-0" />
              <span className="hidden sm:inline">Filters</span>
            </div>
            <button
              onClick={() => setActiveTab('seo')}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'seo' 
                  ? 'bg-[#047857] text-white shadow-xs ring-1 ring-emerald-400/50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Technical SEO &amp; Organic Growth
            </button>
            <button
              onClick={() => setActiveTab('ppc')}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'ppc' 
                  ? 'bg-[#15803d] text-white shadow-xs ring-1 ring-green-400/50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              PPC, Branding &amp; CRO
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'tools' 
                  ? 'bg-[#0f766e] text-white shadow-xs ring-1 ring-teal-400/50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Software Toolset
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'certifications' 
                  ? 'bg-[#065f46] text-white shadow-xs ring-1 ring-emerald-300/50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Certifications
            </button>
          </div>
        </nav>

        {/* Section A: Technical SEO & Organic Growth Card (Emerald Theme) */}
        {activeTab === 'seo' && (
          <div className="bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] border-2 border-emerald-500/80 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {TECHNICAL_SEO_TOPICS.map((topic, idx) => (
                <div 
                  key={idx} 
                  className="relative p-[1.5px] rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute inset-0 rounded-2xl green-gradient animate-rainbow-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 w-full h-full p-5 rounded-[15px] bg-emerald-950/60 backdrop-blur-xs flex items-center justify-start min-h-[72px]">
                    <span className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                      {topic.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section B: PPC, Branding & CRO Card (Forest Green Theme) */}
        {activeTab === 'ppc' && (
          <div className="bg-gradient-to-br from-[#14532d] via-[#15803d] to-[#052e16] border-2 border-green-500/80 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {PPC_CRO_BRANDING_TOPICS.map((topic, idx) => (
                <div 
                  key={idx} 
                  className="relative p-[1.5px] rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 rounded-2xl bg-green-500/20 border border-green-500/40 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute inset-0 rounded-2xl green-gradient animate-rainbow-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 w-full h-full p-5 rounded-[15px] bg-green-950/60 backdrop-blur-xs flex items-center justify-start min-h-[72px]">
                    <span className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                      {topic.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section C: Tools & Software Toolset Card (Teal Theme) */}
        {activeTab === 'tools' && (
          <div className="bg-gradient-to-br from-[#134e4a] via-[#0f766e] to-[#042f2e] border-2 border-teal-500/80 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {SOFTWARE_TOOLS.map((tool, idx) => (
                <div 
                  key={idx} 
                  className="relative p-[1.5px] rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 rounded-2xl bg-teal-500/20 border border-teal-500/40 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute inset-0 rounded-2xl green-gradient animate-rainbow-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 w-full h-full p-5 rounded-[15px] bg-teal-950/60 backdrop-blur-xs flex items-center justify-start min-h-[72px]">
                    <span className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                      {tool.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section D: Certifications Card (Jade Green Theme) */}
        {activeTab === 'certifications' && (
          <div className="bg-gradient-to-br from-[#023e2a] via-[#065f46] to-[#012217] border-2 border-emerald-400/80 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {CERTIFICATIONS.map((cert, idx) => {
                const isLink = Boolean(cert.link);
                const Wrapper = isLink ? 'a' : 'div';
                const extraProps = isLink ? {
                  href: cert.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  referrerPolicy: 'no-referrer' as const
                } : {};

                return (
                  <Wrapper 
                    key={idx} 
                    {...extraProps}
                    className="relative p-[1.5px] rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-[1.02] h-full block"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-emerald-400/20 border border-emerald-400/40 transition-opacity duration-300 group-hover:opacity-0" />
                    <div className="absolute inset-0 rounded-2xl green-gradient animate-rainbow-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 w-full h-full p-5 rounded-[15px] bg-emerald-950/70 backdrop-blur-xs flex flex-col justify-between space-y-2.5 min-h-[90px]">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                          {cert.name}
                        </span>
                        {isLink && (
                          <ExternalLink size={15} className="text-emerald-300 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                        )}
                      </div>
                      <div className="text-xs font-bold text-emerald-200/90">
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        )}

        {/* Section E: Intermediate CTA Banner Card (Placed between skills card and FAQ row) */}
        <section className="max-w-5xl mx-auto w-full bg-gradient-to-r from-[#032e1f] via-[#096342] to-[#022c1d] rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-500/40 relative overflow-hidden my-8 select-none cursor-default">
          <div className="absolute -right-12 -bottom-12 w-72 h-72 bg-emerald-400/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left select-none">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight select-none cursor-default pointer-events-none">
                Let's Optimize Your Organic Growth &amp; Conversion Funnels
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a 
                href={`mailto:${PERSONAL_INFO.email}?subject=Technical%20Audit%20Inquiry%20-%20Raja%20Chera%20Kesaree`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-white hover:bg-emerald-50 text-emerald-950 px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform active:scale-95 select-none"
              >
                <Send size={15} className="text-emerald-700" />
                <span>Hire Me</span>
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-[#0A66C2] hover:bg-blue-700 text-white border border-blue-400/40 px-4 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer select-none"
              >
                <Linkedin size={15} className="text-white" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section F: Related FAQs Accordion */}
        <section id="faqs-section" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-20">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {SKILL_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center text-xs font-black shrink-0">
                        Q{idx + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp size={18} className="text-emerald-600 shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* 5. Footer with Dark Green Smoky Gradient & Atmospheric Texture */}
      <footer className="bg-gradient-to-br from-[#062016] via-[#093824] to-[#03170f] text-white border-t border-emerald-800/60 mt-16 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-2xl">
        {/* Smoky Ambient Atmospheric Background Flares */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none rotate-12" />

        {/* Technical Zig-Zag & Wave Pattern Overlay */}
        <svg className="absolute inset-0 w-full h-full text-emerald-400/10 pointer-events-none" viewBox="0 0 1400 300" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="skills-footer-dark-smoke-pattern" width="60" height="30" patternUnits="userSpaceOnUse">
              <path d="M 0 15 L 15 0 L 30 15 L 45 0 L 60 15" fill="none" stroke="currentColor" strokeWidth="0.8" className="opacity-40" />
              <path d="M 0 30 L 15 15 L 30 30 L 45 15 L 60 30" fill="none" stroke="currentColor" strokeWidth="0.8" className="opacity-25" />
            </pattern>
            <radialGradient id="skills-footer-smoke-radial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#059669" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#022c22" stopOpacity="0.0" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#skills-footer-dark-smoke-pattern)" />
          <rect width="100%" height="100%" fill="url(#skills-footer-smoke-radial)" />

          {/* Graphic Accent Lines */}
          <path d="M -50 50 L 100 10 L 250 50 L 400 10 L 550 50 L 700 10 L 850 50 L 1000 10 L 1150 50 L 1300 10 L 1450 50" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 4" className="opacity-40" />
          <path d="M -50 250 L 100 210 L 250 250 L 400 210 L 550 250 L 700 210 L 850 250 L 1000 210 L 1150 250 L 1300 210 L 1450 250" stroke="currentColor" strokeWidth="1" className="opacity-30" />

          {/* Technical Dynamic Waves */}
          <path d="M -100 150 Q 350 40 700 150 T 1500 150" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 4" className="opacity-25" />
        </svg>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <div className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              Ready to put this stack to work?
            </div>
            <p className="text-sm sm:text-base text-emerald-200/90 font-medium leading-relaxed">
              Get in touch to discuss GA4 tracking, technical audits, or your next SEO project.
            </p>
          </div>

          {/* Connect section with circular outline icons matching dark smoke theme */}
          <div className="flex flex-col items-center md:items-end gap-2.5">
            <h3 className="text-xl font-bold text-white tracking-tight font-sans">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-emerald-400/60 text-emerald-100 hover:bg-emerald-500/20 hover:border-emerald-300 hover:text-white transition-all flex items-center justify-center cursor-pointer shrink-0 shadow-xs"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-emerald-400/60 text-emerald-100 hover:bg-emerald-500/20 hover:border-emerald-300 hover:text-white transition-all flex items-center justify-center cursor-pointer shrink-0 shadow-xs"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-emerald-400/60 text-emerald-100 hover:bg-emerald-500/20 hover:border-emerald-300 hover:text-white transition-all flex items-center justify-center cursor-pointer shrink-0 shadow-xs"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Email aligned together on the Left side */}
        <div className="max-w-5xl mx-auto border-t border-emerald-800/60 mt-8 pt-6 flex flex-col sm:flex-row justify-start items-start sm:items-center text-xs text-emerald-200/70 font-sans font-medium tracking-normal gap-1.5 sm:gap-6 relative z-10">
          <div>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}</div>
          <div className="hidden sm:block text-emerald-600/80">•</div>
          <div>{PERSONAL_INFO.email}</div>
        </div>
      </footer>

    </div>
  );
}
