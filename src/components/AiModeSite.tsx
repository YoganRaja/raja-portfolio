import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Send, Camera, Paperclip, 
  HelpCircle, RefreshCw, Star, Command, Trash2, Cpu, Globe, MessageSquare, ExternalLink, Link2
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA } from '../data';
import googulJeminiLogo from '../assets/images/googul_simple_ai_logo_1786387163226.jpg';
import { PerspectiveParticleWaveGrid } from './PerspectiveParticleWaveGrid';
import { SphereParticleBurst } from './SphereParticleBurst';

interface AiModeSiteProps {
  onBack: () => void;
  onNavigate?: (path: string, q?: string, program?: 'mba' | 'be') => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}

export default function AiModeSite({ onBack, onNavigate }: AiModeSiteProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const starters = [
    { label: "Summarize Raja's SEO campaigns", q: "Summarize Raja's SEO campaigns and what results he achieved." },
    { label: "What is his academic background?", q: "Tell me about Raja's MBA in Marketing and Computer Science Engineering credentials." },
    { label: "Explain his technical marketing stack", q: "What tools and technologies does Raja use for Technical SEO and Analytics?" },
    { label: "Draft a hire outreach email for Raja", q: "Write a professional recruiter outreach email to hire Raja Chera Kesaree." }
  ];

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleAskQuestion = (q: string) => {
    if (!q.trim() || isTyping) return;

    const userMsg: Message = { role: 'user', content: q };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // AI Response generation mapping
    setTimeout(() => {
      const replyText = synthesizeAIResponse(q);
      const aiMsg: Message = { role: 'assistant', content: '', isStreaming: true };
      setMessages((prev) => [...prev, aiMsg]);

      // Stream the response characters/words
      let currentWordIndex = 0;
      const words = replyText.split(' ');
      
      const interval = setInterval(() => {
        if (currentWordIndex < words.length) {
          const chunk = words.slice(0, currentWordIndex + 1).join(' ');
          setMessages((prev) => {
            const next = [...prev];
            if (next.length > 0) {
              next[next.length - 1] = { 
                role: 'assistant', 
                content: chunk,
                isStreaming: currentWordIndex < words.length - 1
              };
            }
            return next;
          });
          currentWordIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 35); // Fast realistic typing speed

    }, 800);
  };

  const handleClearHistory = () => {
    setMessages([]);
  };

  return (
    <div className="bg-[#0c0c0e] text-[#e3e3e3] font-sans min-h-screen flex flex-col animate-fade-in selection:bg-slate-500/30 relative overflow-hidden">
      {/* Dynamic Background: 3D Wave Grid on Welcome Screen, 3D Sphere Particle Burst during Q&A Answer View */}
      {messages.length === 0 ? (
        <PerspectiveParticleWaveGrid />
      ) : (
        <SphereParticleBurst isTyping={isTyping} />
      )}
      
      {/* Top Workspace Header - Seamlessly merged into the page background with no dividing line */}
      <header className="bg-transparent sticky top-0 z-40 px-4 md:px-8 py-4 sm:py-5 transition-all">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={googulJeminiLogo} 
              alt="Googul Jemini" 
              className="w-9 h-9 md:w-10 md:h-10 object-contain mix-blend-screen brightness-125 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]" 
              referrerPolicy="no-referrer" 
            />
            <span className="font-['Space_Grotesk'] font-extrabold text-base md:text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-sm">
              Googul Jemini Workspace
            </span>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            {messages.length > 0 && (
              <button 
                onClick={handleClearHistory}
                className="p-1.5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-red-400 transition-colors cursor-pointer backdrop-blur-xs"
                title="Clear Chat History"
              >
                <Trash2 size={15} />
              </button>
            )}
            <div className="bg-white/10 border border-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-sans font-medium text-slate-200 flex items-center shadow-lg shadow-black/40">
              <span className="tracking-wide font-semibold">Jemini 5.1 Active</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main chat body container */}
      <main className="flex-grow flex flex-col max-w-4xl mx-auto w-full px-4 md:px-8 py-6 justify-between overflow-y-auto relative z-10">
        
        {messages.length === 0 ? (
          /* Empty State Welcome Screen */
          <div className="pt-2 md:pt-6 pb-6 flex flex-col items-center justify-center text-center space-y-8 animate-fade-in my-auto">
            <div className="space-y-3 text-center max-w-2xl mx-auto relative group">
              {/* Running background aura glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-600/20 via-zinc-400/20 to-slate-600/20 rounded-full blur-2xl opacity-70 animate-pulse-glow pointer-events-none"></div>

              <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-normal drop-shadow-md text-center animate-shimmer-text">
                Hello, Recruiter / Guest
              </h1>
              <p className="relative text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                I am Googul Jemini, specialized in auditing and analyzing Raja Chera Kesaree&apos;s CV. Ask me anything about his technical marketing achievements, work timeline, or digital marketing tools.
              </p>
            </div>

            {/* Conversation Starter Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl w-full mx-auto">
              {starters.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAskQuestion(s.q)}
                  className="p-3.5 md:p-4 bg-[#1e1f20] border border-[#3c4043]/70 hover:border-indigo-500/50 hover:bg-[#252629] rounded-xl text-left transition-all group cursor-pointer space-y-1 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs md:text-sm">
                    <MessageSquare size={14} className="group-hover:scale-110 transition-transform text-indigo-400 shrink-0" />
                    <span>{s.label}</span>
                  </div>
                  <p className="text-gray-400 text-[11px] md:text-xs line-clamp-2 leading-snug">{s.q}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Chat History Conversation Render */
          <div className="flex-grow space-y-6 overflow-y-auto pb-6 pr-1 scrollbar-thin">
            {messages.map((m, idx) => {
              const isUser = m.role === 'user';
              return (
                <div 
                  key={idx} 
                  className={`flex gap-3 max-w-3xl animate-fade-in ${
                    isUser ? 'ml-auto flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon Avatar */}
                  <div className={`w-8 h-8 shrink-0 flex items-center justify-center font-bold text-xs overflow-hidden ${
                    isUser 
                      ? 'bg-blue-600 text-white rounded-full' 
                      : ''
                  }`}>
                    {isUser ? 'U' : (
                      <img 
                        src={googulJeminiLogo} 
                        alt="Googul Jemini" 
                        className="w-8 h-8 object-contain mix-blend-screen brightness-125" 
                        referrerPolicy="no-referrer" 
                      />
                    )}
                  </div>

                  {/* Message Bubble text */}
                  <div className={`p-4 rounded-3xl text-xs leading-relaxed max-w-[85%] ${
                    isUser 
                      ? 'bg-blue-600/10 border border-blue-500/20 text-blue-100 rounded-tr-none whitespace-pre-wrap' 
                      : 'bg-[#1e1f20] border border-[#3c4043] text-gray-100 rounded-tl-none font-sans'
                  }`}>
                    {isUser ? (
                      m.content
                    ) : (
                      renderFormattedMessage(m.content, onNavigate)
                    )}
                    {m.isStreaming && (
                      <span className="inline-block w-1.5 h-3 bg-indigo-400 ml-1 animate-pulse align-middle"></span>
                    )}
                  </div>
                </div>
              );
            })}
            
            {isTyping && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex gap-3 max-w-3xl animate-fade-in">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center overflow-hidden">
                  <img 
                    src={googulJeminiLogo} 
                    alt="Googul Jemini" 
                    className="w-8 h-8 object-contain mix-blend-screen brightness-125 animate-pulse" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="p-4 rounded-3xl bg-[#1e1f20] border border-[#3c4043] text-xs text-gray-400 flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                  <span className="font-mono text-[10px]">Jemini is synthesizing insights...</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        )}

        {/* Input Bar area bottom */}
        <div className="pt-4 border-t border-[#3c4043]/40 mt-auto">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (inputVal.trim()) handleAskQuestion(inputVal);
            }}
            className="relative flex items-center bg-[#1e1f20] border border-[#3c4043] focus-within:border-indigo-500/60 rounded-2xl md:rounded-3xl p-3 transition-all shadow-xl gap-2"
          >
            <button type="button" className="text-gray-400 hover:text-white p-2 transition-colors" title="Attach file">
              <Paperclip size={18} />
            </button>
            
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isTyping}
              className="flex-grow bg-transparent outline-none border-none text-sm md:text-base text-white placeholder-gray-400 px-2 font-sans"
              placeholder="Ask anything about Raja (e.g., 'What is his MBA grade?', 'Draft recruitment pitch')..."
            />

            <div className="flex items-center space-x-1 pr-1">
              <button type="submit" disabled={isTyping || !inputVal.trim()} className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                inputVal.trim() && !isTyping ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'text-gray-600'
              }`}>
                <Send size={16} />
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-400 font-mono text-center mt-3 flex items-center gap-1.5 justify-center">
            <Command size={12} />
            <span>Chat log references actual Pickyourtrail campaigns &amp; academic thesis credentials.</span>
          </p>
        </div>

      </main>
    </div>
  );
}

// Helper to render formatted markdown, bold text, italic text, clickable URLs/emails, and inline link buttons
function renderFormattedMessage(
  text: string, 
  onNavigate?: (path: string, q?: string, program?: 'mba' | 'be') => void
) {
  if (!text) return null;

  const parseLinksAndEmails = (content: string) => {
    if (!content) return null;

    // Tokenize URLs (http, https, www, linkedin.com) and email addresses
    const tokenRegex = /(https?:\/\/[^\s<>()]+|www\.[^\s<>()]+|linkedin\.com\/in\/[^\s<>()]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const parts = content.split(tokenRegex);

    return parts.map((part, index) => {
      if (!part) return null;

      let cleanToken = part;
      let trailingPunct = '';

      // Strip trailing punctuation like '.', ',', ';', ')' attached at the end of a URL/email
      const matchPunct = cleanToken.match(/^(.*?)([.,;:!)]*)$/);
      if (matchPunct && (cleanToken.includes('@') || cleanToken.includes('linkedin.com') || cleanToken.startsWith('http') || cleanToken.startsWith('www.'))) {
        cleanToken = matchPunct[1];
        trailingPunct = matchPunct[2];
      }

      // Check if email
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(cleanToken)) {
        const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${cleanToken}`;
        return (
          <React.Fragment key={index}>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-white underline font-semibold transition-colors cursor-pointer"
            >
              {cleanToken}
            </a>
            {trailingPunct}
          </React.Fragment>
        );
      }

      // Check if URL
      if (/^(https?:\/\/|www\.|linkedin\.com\/)/.test(cleanToken)) {
        const href = cleanToken.startsWith('http') ? cleanToken : `https://${cleanToken}`;
        return (
          <React.Fragment key={index}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-white underline font-semibold transition-colors cursor-pointer break-all"
            >
              {cleanToken}
            </a>
            {trailingPunct}
          </React.Fragment>
        );
      }

      return part;
    });
  };

  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, lIdx) => {
        const parts = line.split(/(\[link:[^\]]+\])/g);

        return (
          <React.Fragment key={lIdx}>
            {parts.map((part, pIdx) => {
              const linkMatch = part.match(/\[link:(.+)\]/);
              if (linkMatch) {
                const targetUrl = linkMatch[1];
                const program = targetUrl.includes('program=be') ? 'be' : targetUrl.includes('program=mba') ? 'mba' : undefined;
                return (
                  <button
                    key={pIdx}
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('/education', undefined, program);
                      } else {
                        window.location.href = targetUrl;
                      }
                    }}
                    className="inline-flex items-center justify-center text-indigo-300 hover:text-white ml-1 p-1 rounded bg-indigo-950/80 border border-indigo-500/40 align-middle cursor-pointer transition-all hover:bg-indigo-900 hover:border-indigo-400"
                    title="View Academic Page"
                  >
                    <Link2 size={13} className="shrink-0 text-indigo-300 hover:text-white" />
                  </button>
                );
              }

              const chunks = part.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
              return (
                <span key={pIdx}>
                  {chunks.map((chunk, cIdx) => {
                    if (chunk.startsWith('**') && chunk.endsWith('**')) {
                      return <strong key={cIdx} className="font-bold text-white">{parseLinksAndEmails(chunk.slice(2, -2))}</strong>;
                    }
                    if (chunk.startsWith('*') && chunk.endsWith('*')) {
                      return <em key={cIdx} className="italic text-indigo-200/90">{parseLinksAndEmails(chunk.slice(1, -1))}</em>;
                    }
                    return <React.Fragment key={cIdx}>{parseLinksAndEmails(chunk)}</React.Fragment>;
                  })}
                </span>
              );
            })}
            {lIdx < lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </>
  );
}

// Highly accurate custom Q&A synthesizer using exact data
function synthesizeAIResponse(q: string): string {
  const query = (q || '').toLowerCase();

  if (query.includes('experience') || query.includes('work') || query.includes('job') || query.includes('company') || query.includes('pickyourtrail') || query.includes('shanthi') || query.includes('popcoune')) {
    return `Raja Chera Kesaree has compiled verified professional experience through high-impact marketing internships:

1. **SEO Intern at Pickyourtrail (Oct 2025 - Present)**
   • Managed, audited, and optimized over **2,200+ core organic URLs** across international market regions.
   • Resolved site-wide crawl bottlenecks, configured XML sitemap mappings, and mapped keywords to high-commercial search intents.
   • Boosted bottom-of-funnel lead captures and conversion metrics by **+22%**.
   • Implemented comprehensive Online Reputation Management (ORM) to protect brand sentiment, securing **94% positive sentiment** on primary search engines.

2. **Digital Marketing Intern at Shanthi IT Solutions (July 2024 - Sept 2024)**
   • Managed paid search PPC search query funnels to protect pipeline ROI.
   • Designed reports mapping campaign ROI.
   • Implemented targeted negative keyword matrices preventing campaign spend leakage.

His work directly bridges computational logic with organic and paid marketing engines.`;
  }

  if (query.includes('campaign') || query.includes('project') || query.includes('seo result') || query.includes('clicks') || query.includes('impressions') || query.includes('switzerland')) {
    return `Raja has executed several verified high-performing campaigns:

• **Pickyourtrail Core SEO Performance & Crawl Scaling**
  Resulted in **459,000+ organic clicks** and **64 million impressions** with an average position of **8.5**. Included full indexability mapping of 2,200+ canonical paths.

• **Switzerland Destination SEO Growth Campaign**
  Targeted the "/packages/switzerland" subfolder pathway. Expanded organic crawl visibility from 3.99K clicks to **4.84K clicks** (840K impressions) by resolving keyword cannibalizations.

• **Competitor Keyword Gap & SERP Dominance**
  Audited overlap against MakeMyTrip, TravelTriangle, and Thomas Cook. Captured high-yield terms with **550K+ combined monthly search volume**.

• **GEO/AEO Optimization**
  Designed structured schema markups, integrated entity graphs, and aligned landing page content with LLM citation queries, securing **42% citation share of voice** on Jemini and ChatGPT models.`;
  }

  if (query.includes('education') || query.includes('college') || query.includes('university') || query.includes('degree') || query.includes('thesis') || query.includes('mba') || query.includes('easwari') || query.includes('anna') || query.includes('academic')) {
    return `Raja has a unique academic foundation pairing core business management with computer science engineering:

1. **Master of Business Administration (MBA) - Marketing & Digital Business**
   *Institution:* SRM Easwari Engineering College (2023 - 2025)
   *Grade:* **First Class**
   *Paper Presented:* *"SIGNIFICANCE OF DIGITAL MARKETING TOOLS IN THE PROMOTION OF E-COMMERCE WEBSITES"*
   *Paper Focus:* Analyzed search crawling mechanics, schema entities, user funnels, and customer acquisition costs (CAC) mapping. Top coursework: Digital Marketing & Social Media Analytics, Brand Management, ... [link:/education?program=mba]

2. **Bachelor of Engineering (B.E.) - Computer Science & Engineering**
   *Institution:* Anna University Regional Campus, Tirunelveli (2019 - 2023)
   *Grade:* **Second Class**
   *Top Coursework:* Data Structures, Database Management Systems, Web Technology, Operating Systems, ... [link:/education?program=be]`;
  }

  if (query.includes('skills') || query.includes('tools') || query.includes('stack') || query.includes('technology') || query.includes('screaming frog') || query.includes('semrush') || query.includes('analytics') || query.includes('ga4')) {
    return `Raja is highly proficient in both technical SEO and analytical advertising tools:

• **Search Engine Optimization (SEO):**
  Technical SEO audits, indexing rules, canonical hierarchies, internal linking structure, and semantic keyword research. Tools: Screaming Frog, Semrush, Google Search Console.

• **Web Analytics & Conversion Tracking:**
  Google Analytics 4 (GA4) property setup, Google Tag Manager (GTM) event stitching, conversion trigger mapping, and Looker Studio dashboards.

• **PPC, Brand Strategy & CRO:**
  Google Ads bidding models, negative keyword matrices, mobile checkout optimization, Hotjar click heatmaps, and A/B split testing.`;
  }

  if (query.includes('phone') || query.includes('mobile') || query.includes('call') || query.includes('number') || query.includes('whatsapp')) {
    return `No, I don't have the details about his phone/mobile number, but here are other ways you can contact him:

• **Email:** yoganraja.126@gmail.com
• **LinkedIn:** linkedin.com/in/raja-chera-kesaree/
• **Location:** Chennai, Tamil Nadu, India`;
  }

  if (query.includes('email') || query.includes('mail') || query.includes('gmail') || query.includes('gamil') || query.includes('linkedin') || query.includes('location') || query.includes('address') || query.includes('contact') || query.includes('hire') || query.includes('reach') || query.includes('recruiter') || query.includes('outreach')) {
    return `Here are Raja Chera Kesaree's contact details and profile links:

• **Email / Gmail ID:** yoganraja.126@gmail.com
• **LinkedIn Profile:** https://www.linkedin.com/in/raja-chera-kesaree/
• **Location:** Chennai, Tamil Nadu, India

**Recruitment Outreach Template:**
"Hi Raja,
I am impressed by your Technical SEO internship results at Pickyourtrail, specifically how you audited 2,200+ URLs and lifted bottom funnel conversions by +22%. I would love to connect and discuss a full-time marketing opportunity at our company.
Best regards,
[Your Name]"`;
  }

  return `Raja Chera Kesaree is an **SEO Fresher & Digital Marketer** holding an MBA in Marketing (First Class) and a B.E. in Computer Science (Second Class). 

He is highly skilled in:
• **Technical SEO Crawls** (Screaming Frog, indexing optimization)
• **Performance Analytics** (GA4 property setup, GTM, conversion events)
• **Growth Campaigns** (e.g., Switzerland SEO campaign expanding organic traffic from 3.9K to 4.84K clicks)
• **Digital Brand ORM & CRO** (+22% lift in lead conversions)

What specific details would you like me to analyze?
1. **Work Experience** (Pickyourtrail, Shanthi IT Solutions)
2. **SEO Projects & Campaigns** (Metrics, dashboards)
3. **Marketing Tool Stack** (Semrush, GA4, SQL)
4. **Academic Credentials** (MBA at SRM Easwari, CSE B.E. at Anna University)
5. **Contact details** (Direct email, location)`;
}
