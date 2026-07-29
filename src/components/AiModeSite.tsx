import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, Sparkles, Send, Mic, Camera, Paperclip, 
  HelpCircle, RefreshCw, Star, Command, Trash2, Cpu, Globe, MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA } from '../data';

interface AiModeSiteProps {
  onBack: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}

export default function AiModeSite({ onBack }: AiModeSiteProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const starters = [
    { label: "Summarize Raja's SEO campaigns", q: "Summarize Raja's SEO campaigns and what results he achieved." },
    { label: "What is his academic thesis about?", q: "Tell me about Raja's academic background and his MBA thesis topic." },
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
    <div className="bg-[#131314] text-[#e3e3e3] font-sans min-h-screen flex flex-col animate-fade-in selection:bg-indigo-500/30">
      
      {/* Top Workspace Header */}
      <header className="bg-[#1e1f20] border-b border-[#3c4043] sticky top-0 z-40 px-4 md:px-8 py-3 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onBack}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors bg-[#2d2f31] border border-[#3c4043] px-2.5 py-1.5 rounded-xl group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to search</span>
            </button>
            <span className="h-5 w-[1px] bg-[#3c4043]"></span>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="font-semibold text-xs tracking-wider uppercase text-indigo-300 font-mono">Google Gemini workspace</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {messages.length > 0 && (
              <button 
                onClick={handleClearHistory}
                className="p-1.5 hover:bg-white/5 rounded-lg text-gray-400 hover:text-red-400 transition-colors cursor-pointer"
                title="Clear Chat History"
              >
                <Trash2 size={15} />
              </button>
            )}
            <div className="bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full text-[10px] font-mono text-indigo-300 flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              Gemini Flash 2.0 Active
            </div>
          </div>
        </div>
      </header>

      {/* Main chat body container */}
      <main className="flex-grow flex flex-col max-w-4xl mx-auto w-full px-4 md:px-8 py-6 justify-between overflow-y-auto">
        
        {messages.length === 0 ? (
          /* Empty State Welcome Screen */
          <div className="my-auto py-12 flex flex-col items-center justify-center space-y-8 animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-[#1e1f20] border border-[#3c4043] p-5 rounded-full text-white shadow-xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-indigo-400 animate-pulse" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Hello, Recruiter / Guest
              </h1>
              <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                I am Gemini, specialized in auditing and analyzing Raja Chera Kesaree&apos;s CV. Ask me anything about his technical marketing achievements, work timeline, or digital marketing tools.
              </p>
            </div>

            {/* Conversation Starter Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl w-full">
              {starters.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAskQuestion(s.q)}
                  className="p-4 bg-[#1e1f20] border border-[#3c4043]/60 hover:border-indigo-500/40 hover:bg-[#202124] rounded-2xl text-left transition-all text-xs group cursor-pointer space-y-1 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                    <MessageSquare size={13} className="group-hover:scale-105 transition-transform" />
                    <span className="font-sans font-bold">{s.label}</span>
                  </div>
                  <p className="text-gray-400 text-[11px] line-clamp-1">{s.q}</p>
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
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center shadow-md font-bold text-xs ${
                    isUser 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-indigo-950 text-indigo-300 border border-indigo-500/20'
                  }`}>
                    {isUser ? 'U' : <Sparkles size={14} />}
                  </div>

                  {/* Message Bubble text */}
                  <div className={`p-4 rounded-3xl text-xs leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                    isUser 
                      ? 'bg-blue-600/10 border border-blue-500/20 text-blue-100 rounded-tr-none' 
                      : 'bg-[#1e1f20] border border-[#3c4043] text-gray-100 rounded-tl-none font-sans'
                  }`}>
                    {m.content}
                    {m.isStreaming && (
                      <span className="inline-block w-1.5 h-3 bg-indigo-400 ml-1 animate-pulse"></span>
                    )}
                  </div>
                </div>
              );
            })}
            
            {isTyping && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex gap-3 max-w-3xl animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/20 flex items-center justify-center font-bold text-xs">
                  <Sparkles size={14} className="animate-pulse" />
                </div>
                <div className="p-4 rounded-3xl bg-[#1e1f20] border border-[#3c4043] text-xs text-gray-400 flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                  <span className="font-mono text-[10px]">Gemini is synthesizing insights...</span>
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
            className="relative flex items-center bg-[#1e1f20] border border-[#3c4043] focus-within:border-indigo-500/50 rounded-2xl p-2 transition-all shadow-xl"
          >
            <button type="button" className="text-gray-400 hover:text-white p-2" title="Attach file">
              <Paperclip size={16} />
            </button>
            
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isTyping}
              className="flex-grow bg-transparent outline-none border-none text-xs text-white placeholder-gray-500 px-2 font-sans"
              placeholder="Ask anything about Raja (e.g., 'What is his MBA grade?', 'Draft recruitment pitch')..."
            />

            <div className="flex items-center space-x-1 pr-1">
              <button type="button" className="text-gray-400 hover:text-white p-2" title="Use microphone">
                <Mic size={15} />
              </button>
              <button type="submit" disabled={isTyping || !inputVal.trim()} className={`p-2 rounded-xl transition-colors cursor-pointer ${
                inputVal.trim() && !isTyping ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'text-gray-600'
              }`}>
                <Send size={14} />
              </button>
            </div>
          </form>

          <p className="text-[10px] text-gray-500 font-mono text-center mt-2 flex items-center gap-1.5 justify-center">
            <Command size={11} />
            <span>Chat log references actual Pickyourtrail campaigns &amp; academic thesis credentials.</span>
          </p>
        </div>

      </main>
    </div>
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
  Targeted the "/packages/switzerland" subfolder pathway. Expanded organic crawl visibility from 3.99K clicks to **11.9K clicks** (2.37M impressions) by resolving keyword cannibalizations.

• **Competitor Keyword Gap & SERP Dominance**
  Audited overlap against MakeMyTrip, TravelTriangle, and Thomas Cook. Captured high-yield terms with **550K+ combined monthly search volume**.

• **Generative Engine Optimization (GEO/AEO)**
  Designed structured schema markups, integrated entity graphs, and aligned landing page content with LLM citation queries, securing **42% citation share of voice** on Gemini and ChatGPT models.`;
  }

  if (query.includes('education') || query.includes('college') || query.includes('university') || query.includes('degree') || query.includes('thesis') || query.includes('mba') || query.includes('easwari') || query.includes('anna')) {
    return `Raja has a unique academic foundation pairing core business management with computer science engineering:

1. **Master of Business Administration (MBA) — Marketing & Digital Business**
   *Institution:* SRM Easwari Engineering College (2023 - 2025)
   *Grade:* **First Class with Distinction**
   *Thesis Topic:* *"SIGNIFICANCE OF DIGITAL MARKETING TOOLS IN THE PROMOTION OF E-COMMERCE WEBSITES"*
   *Thesis Focus:* Analyzed search crawling mechanics, schema entities, user funnels, and customer acquisition costs (CAC) mapping. Top coursework: Digital Marketing & Social Media Analytics (A+), Brand Management (A+).

2. **Bachelor of Engineering (B.E.) — Computer Science & Engineering**
   *Institution:* Anna University Regional Campus, Tirunelveli (2019 - 2023)
   *Grade:* **First Class**
   *Thesis:* *"CAMPUS AUTOMATION & VISIBILITY PORTAL"*
   *Focus:* Relational SQL schemas, fast server-side response times, Core Web Vitals, and robots.txt configurations. Provided him with the coding expertise to easily troubleshoot JavaScript SEO bottlenecks.`;
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

  if (query.includes('email') || query.includes('phone') || query.includes('contact') || query.includes('hire') || query.includes('reach') || query.includes('recruiter') || query.includes('outreach')) {
    return `Here is a custom recruiter outreach template and contact information to hire or connect with Raja Chera Kesaree:

• **Direct Email:** yoganraja.126@gmail.com
• **Mobile Hotline:** 8870690397
• **LinkedIn Profile:** linkedin.com/in/raja-chera-kesaree-4aa858278
• **Location:** Chennai, Tamil Nadu, India

**Recruitment Outreach Template:**
"Hi Raja,
I am impressed by your Technical SEO internship results at Pickyourtrail, specifically how you audited 2,200+ URLs and lifted bottom funnel conversions by +22%. I would love to connect and discuss a full-time marketing opportunity at our company. Please let me know your availability for a 15-minute sync.
Best regards,
[Your Name]"

You can also use the integrated 'Raja Agency Scheduler' (the Contact tab/page) to book a live 15-minute consultation slot instantly on his calendar!`;
  }

  return `Raja Chera Kesaree is an **SEO Specialist & Digital Marketer** holding an MBA in Marketing (First Class with Distinction) and a B.E. in Computer Science. 

He is highly skilled in:
• **Technical SEO Crawls** (Screaming Frog, indexing optimization)
• **Performance Analytics** (GA4 property setup, GTM, conversion events)
• **Growth Campaigns** (e.g., Switzerland SEO campaign expanding organic traffic from 3.9K to 11.9K clicks)
• **Digital Brand ORM & CRO** (+22% lift in lead conversions)

What specific details would you like me to analyze?
1. **Work Experience** (Pickyourtrail, Shanthi IT Solutions)
2. **SEO Projects & Campaigns** (Metrics, dashboards)
3. **Marketing Tool Stack** (Semrush, GA4, SQL)
4. **Academic Thesis** (MBA at SRM Easwari, CSE B.E. at Anna University)
5. **Contact details** (Direct phone, email, scheduler)`;
}
