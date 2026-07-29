import React, { useState } from 'react';
import { 
  FileText, Send, Linkedin, Github, Filter, CheckCircle,
  AlertCircle, ChevronDown, ChevronUp, ExternalLink
} from 'lucide-react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data';

interface SkillsSiteProps {
  onBack: () => void;
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
    title: 'On page SEO',
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
    title: 'Competitor/Market Analysis',
    bgClass: 'bg-lime-100 hover:bg-lime-200/90',
    borderClass: 'border-lime-300',
    textClass: 'text-lime-950'
  },
  {
    title: 'Schema Markup & Structured Data',
    bgClass: 'bg-emerald-200/90 hover:bg-emerald-300/90',
    borderClass: 'border-emerald-400',
    textClass: 'text-emerald-950'
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
    title: 'Semantic SEO & Topical Authority',
    bgClass: 'bg-lime-200/90 hover:bg-lime-300/90',
    borderClass: 'border-lime-400',
    textClass: 'text-lime-950'
  },
  {
    title: 'Competitor Backlink Analysis',
    bgClass: 'bg-emerald-100 hover:bg-emerald-200/90',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-950'
  },
  {
    title: 'Python SEO',
    bgClass: 'bg-green-100 hover:bg-green-200/90',
    borderClass: 'border-green-300',
    textClass: 'text-green-950'
  },
  {
    title: 'AEO/GEO',
    bgClass: 'bg-teal-100 hover:bg-teal-200/90',
    borderClass: 'border-teal-300',
    textClass: 'text-teal-950'
  },
  {
    title: 'Log File Analysis',
    bgClass: 'bg-lime-100 hover:bg-lime-200/90',
    borderClass: 'border-lime-300',
    textClass: 'text-lime-950'
  },
  {
    title: 'JavaScript SEO & Rendering Troubleshooting',
    bgClass: 'bg-emerald-200/90 hover:bg-emerald-300/90',
    borderClass: 'border-emerald-400',
    textClass: 'text-emerald-950'
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
    title: 'A/B Testing & CRO',
    bgClass: 'bg-emerald-100 hover:bg-emerald-200/90',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-950'
  },
  {
    title: 'ICP Analysis',
    bgClass: 'bg-teal-100 hover:bg-teal-200/90',
    borderClass: 'border-teal-300',
    textClass: 'text-teal-950'
  },
  {
    title: 'ABM',
    bgClass: 'bg-lime-100 hover:bg-lime-200/90',
    borderClass: 'border-lime-300',
    textClass: 'text-lime-950'
  },
  {
    title: 'Funnel Optimization',
    bgClass: 'bg-emerald-200/90 hover:bg-emerald-300/90',
    borderClass: 'border-emerald-400',
    textClass: 'text-emerald-950'
  },
  {
    title: 'Digital Branding & ORM',
    bgClass: 'bg-green-200/90 hover:bg-green-300/90',
    borderClass: 'border-green-400',
    textClass: 'text-green-950'
  },
  {
    title: 'Brand Strategy & Positioning',
    bgClass: 'bg-teal-200/90 hover:bg-teal-300/90',
    borderClass: 'border-teal-400',
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
    title: 'Looker Studio',
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
    answer: "Raja relies on Screaming Frog SEO Spider for comprehensive crawl diagnostics scanning 2,000+ URLs for canonical loops, broken redirects, and missing meta tags, Google Search Console for indexing and coverage monitoring, Semrush for keyword gap analysis, and GTmetrix for Core Web Vitals optimization."
  },
  {
    question: "How does Raja handle analytics, event tracking, and conversion attribution?",
    answer: "Raja configures GA4 properties from scratch, establishing custom key events like 28 parameter events mapped at Pickyourtrail. He deploys Google Tag Manager (GTM) containers to handle telemetry tags, button click listeners, and scroll depth tracking without relying on web developer cycles."
  },
  {
    question: "What is Raja's experience with AI Search Readiness (AEO / GEO)?",
    answer: "Raja builds rich JSON-LD structured data schemas for Organization, Article, FAQ, Product, and BreadcrumbList, structures content for zero-click AI answers, and uses NLP term frequency scoring via Surfer SEO to ensure content ranks in Google AI Overviews and Perplexity citations."
  }
];

export default function SkillsSite({ onBack }: SkillsSiteProps) {
  const [activeTab, setActiveTab] = useState<'seo' | 'ppc' | 'tools' | 'certifications'>('seo');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Resume Download Form States
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = '⚠ Missing name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = '⚠ Email cannot be empty.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '⚠ Email cannot be empty.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setDownloadSuccess(true);
      window.print();
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen pb-20 selection:bg-emerald-500/20">
      
      {/* 1. Top Header Bar */}
      <header className="bg-emerald-50/95 backdrop-blur-md border-b border-emerald-200/80 sticky top-0 z-50 shadow-xs relative overflow-hidden">
        {/* Header Background Visual Design Patterns */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Soft Emerald Radial Glows */}
          <div className="absolute -top-10 left-1/4 w-80 h-28 bg-emerald-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 right-1/4 w-80 h-28 bg-teal-500/10 rounded-full blur-2xl" />

          {/* Technical Dot Matrix Grid Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-15 text-slate-400" fill="none" viewBox="0 0 800 120">
            <defs>
              <pattern id="header-dots-pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#header-dots-pattern)" />
          </svg>

          {/* Subtle Geometric Tech Accent Lines */}
          <svg className="absolute top-0 right-12 h-full w-48 text-emerald-600/20" viewBox="0 0 200 120" fill="none">
            <path d="M 0 0 L 60 120 M 60 0 L 120 120 M 120 0 L 180 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
          <svg className="absolute bottom-0 left-12 h-full w-48 text-teal-600/15" viewBox="0 0 200 120" fill="none">
            <circle cx="50" cy="60" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="60" r="25" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Bottom Emerald Gradient Accent Line */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex items-center justify-between relative z-10 min-h-[5rem] sm:min-h-[5.5rem]">
          
          {/* Left Brand Title (Unclickable) */}
          <div className="flex items-center select-none">
            <span className="font-extrabold text-lg sm:text-2xl tracking-tight leading-none text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
              TECHNICAL MARKETING STACK
            </span>
          </div>

          {/* Header Action CTAs */}
          <div className="flex items-center space-x-2.5">
            <a 
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/contact');
              }}
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer px-1 py-1"
              title="Go to Contact Page"
            >
              Contact Me
            </a>
          </div>

        </div>
      </header>

      {/* 2. Hero Section - CTA Box on the Right Side of Hero */}
      <section className="w-full bg-[#f8fafc] border-b border-slate-200/80 py-12 sm:py-16 min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch my-auto">
            
            {/* Left Side: Hero Titles & Description */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-700 tracking-tight leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                  Technical Skills &amp;<br />
                  Marketing Tool Stack
                </h1>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  This page covers the tools and skills I actually use daily to build organic search growth and optimize high-converting digital funnels. From conducting deep site crawl diagnostics and designing JSON-LD schema architecture to monitoring search indexation and executing data-driven CRO experiments, None of it's theoretical. I've used all of it on real projects. Take a look at the categories below, or check out my{' '}
                  <a 
                    href="/experience" 
                    onClick={(e) => { e.preventDefault(); navigateTo('/experience'); }}
                    className="text-emerald-700 font-bold underline decoration-emerald-300 underline-offset-2 hover:text-emerald-900 transition-colors"
                  >
                    work experience
                  </a>
                  {' '}and{' '}
                  <a 
                    href="/projects" 
                    onClick={(e) => { e.preventDefault(); navigateTo('/projects'); }}
                    className="text-emerald-700 font-bold underline decoration-emerald-300 underline-offset-2 hover:text-emerald-900 transition-colors"
                  >
                    case studies
                  </a>
                  {' '}to see how it plays out in practice.
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

                  <form onSubmit={handleFormSubmit} noValidate className="space-y-3">
                    {/* Field 1: Name */}
                    <div className="space-y-1">
                      <input 
                        type="text"
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
                      className="w-full bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black text-xs py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      <FileText size={15} />
                      <span>Download Resume</span>
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
                  ? 'bg-emerald-700 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Technical SEO &amp; Organic Growth
            </button>
            <button
              onClick={() => setActiveTab('ppc')}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'ppc' 
                  ? 'bg-green-800 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              PPC, Branding &amp; CRO
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'tools' 
                  ? 'bg-teal-800 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Software Toolset
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'certifications' 
                  ? 'bg-emerald-800 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Certifications
            </button>
          </div>
        </nav>

        {/* Section A: Technical SEO & Organic Growth Card */}
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

        {/* Section B: PPC, Branding & CRO Card */}
        {activeTab === 'ppc' && (
          <div className="bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] border-2 border-emerald-500/80 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {PPC_CRO_BRANDING_TOPICS.map((topic, idx) => (
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

        {/* Section C: Tools & Software Toolset Card */}
        {activeTab === 'tools' && (
          <div className="bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] border-2 border-emerald-500/80 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {SOFTWARE_TOOLS.map((tool, idx) => (
                <div 
                  key={idx} 
                  className="relative p-[1.5px] rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute inset-0 rounded-2xl green-gradient animate-rainbow-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 w-full h-full p-5 rounded-[15px] bg-emerald-950/60 backdrop-blur-xs flex items-center justify-start min-h-[72px]">
                    <span className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                      {tool.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section D: Certifications Card */}
        {activeTab === 'certifications' && (
          <div className="bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] border-2 border-emerald-500/80 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full">
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
                    <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 transition-opacity duration-300 group-hover:opacity-0" />
                    <div className="absolute inset-0 rounded-2xl green-gradient animate-rainbow-flow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 w-full h-full p-5 rounded-[15px] bg-emerald-950/60 backdrop-blur-xs flex flex-col justify-between space-y-2.5 min-h-[90px]">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-extrabold text-xs sm:text-sm text-white leading-snug">
                          {cert.name}
                        </span>
                        {isLink && (
                          <ExternalLink size={15} className="text-emerald-400 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
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
        <section className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden my-8 select-none cursor-default">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left select-none">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight select-none cursor-default pointer-events-none">
                Let's Optimize Your Organic Growth &amp; Conversion Funnels
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a 
                href={`mailto:${PERSONAL_INFO.email}?subject=Technical%20Audit%20Inquiry%20-%20Raja%20Chera%20Kesaree`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-white hover:bg-emerald-50 text-emerald-950 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer transform active:scale-95 select-none"
              >
                <Send size={16} className="text-emerald-700" />
                <span>Hire Me</span>
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-[#0A66C2] hover:bg-blue-700 text-white border border-blue-400/40 px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer select-none"
              >
                <Linkedin size={16} className="text-white" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section F: Related FAQs Accordion */}
        <section className="space-y-6 pt-6 border-t border-slate-200">
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

      {/* 5. Footer with Light Blue Background Merging into White at Bottom */}
      <footer className="bg-gradient-to-b from-[#f0f7ff] via-[#e4f1fe] to-white border-t border-sky-200/80 mt-16 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Technical Zig-Zag Pattern SVG Background */}
        <svg className="absolute inset-0 w-full h-full text-sky-400/35 pointer-events-none" viewBox="0 0 1400 300" preserveAspectRatio="xMidYMid slice" fill="none">
          <defs>
            <pattern id="skills-footer-zigzag-pattern" width="60" height="30" patternUnits="userSpaceOnUse">
              <path d="M 0 15 L 15 0 L 30 15 L 45 0 L 60 15" fill="none" stroke="currentColor" strokeWidth="0.8" className="opacity-40" />
              <path d="M 0 30 L 15 15 L 30 30 L 45 15 L 60 30" fill="none" stroke="currentColor" strokeWidth="0.8" className="opacity-25" />
            </pattern>
            <linearGradient id="skills-footer-mesh-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#0369a1" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#skills-footer-zigzag-pattern)" />
          <rect width="100%" height="100%" fill="url(#skills-footer-mesh-grad)" />

          {/* Prominent Graphic Zig-Zag Accent Lines */}
          <path d="M -50 50 L 100 10 L 250 50 L 400 10 L 550 50 L 700 10 L 850 50 L 1000 10 L 1150 50 L 1300 10 L 1450 50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" className="opacity-50" />
          <path d="M -50 250 L 100 210 L 250 250 L 400 210 L 550 250 L 700 210 L 850 250 L 1000 210 L 1150 250 L 1300 210 L 1450 250" stroke="currentColor" strokeWidth="1.2" className="opacity-35" />

          {/* Technical Dynamic Waves */}
          <path d="M -100 150 Q 350 40 700 150 T 1500 150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" className="opacity-30" />
        </svg>

        {/* Bottom Fade-To-White Gradient Overlay for Seamless Merging */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-white/70 to-white pointer-events-none" />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-extrabold text-lg text-slate-900">
              Ready to collaborate with Raja Chera Kesaree?
            </div>
            <p className="text-xs text-slate-600">
              Get in touch to discuss SEO audits, schema validation, or digital marketing strategy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-white hover:bg-sky-50 text-slate-900 px-4 py-2.5 rounded-xl transition-all cursor-pointer border border-sky-200/80 shadow-2xs"
            >
              <FileText size={15} className="text-emerald-600" />
              <span>Resume</span>
            </button>
            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Contact%20-%20Raja%20Chera%20Kesaree`}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Send size={15} />
              <span>Contact Me</span>
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-white hover:bg-blue-50 text-[#0A66C2] px-4 py-2.5 rounded-xl transition-all cursor-pointer border border-blue-200/80 shadow-2xs"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-sky-200/70 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 font-mono gap-2 relative z-10">
          <div>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}</div>
          <div>Chennai, India • {PERSONAL_INFO.email}</div>
        </div>
      </footer>

    </div>
  );
}
