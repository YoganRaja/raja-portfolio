import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, MoreVertical, Plus, Mic, Link2, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface AIOverviewProps {
  onNavigate: (path: string, q?: string, program?: 'mba' | 'be') => void;
}

export default function AIOverview({ onNavigate }: AIOverviewProps) {
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const text = `Raja Chera Kesaree is a high-performance SEO Specialist and Digital Marketer with technical expertise spanning across computer science and marketing. A classic SEO and CRO campaign typically covers audit of 2200 plus core URLs, optimizing site crawl architecture, and managing digital brand reputation, yielding an average of plus 22 percent bottom of funnel conversion lifts and high-velocity organic growth.`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        setIsSpeaking(true);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="mb-8 p-6 bg-[#1f1f1f] rounded-[24px] border border-white/[0.06] shadow-xl max-w-[652px] font-sans transition-all duration-300">
      {/* SGE Header */}
      <div className="flex items-center justify-between mb-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          {/* Sparkles/AI icon */}
          <div className="flex items-center gap-1.5 text-[#e8eaed] font-medium text-[15px]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8ab4f8" />
                  <stop offset="50%" stopColor="#c58af9" />
                  <stop offset="100%" stopColor="#f06292" />
                </linearGradient>
              </defs>
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="url(#sgeGradient)" />
            </svg>
            <span>AI Overview</span>
          </div>

          {/* Pill Badge */}
          <button 
            type="button" 
            className="ml-2 px-2.5 py-0.5 rounded-full border border-gray-600 bg-gray-800/40 text-[11px] text-gray-300 font-medium hover:bg-gray-700/50 transition-colors"
          >
            English
          </button>

          {/* Volume button */}
          <button
            type="button"
            onClick={handleSpeak}
            className={`p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors ${isSpeaking ? 'bg-indigo-500/20 text-indigo-300 animate-pulse' : ''}`}
            title={isSpeaking ? "Mute summary" : "Listen to summary"}
          >
            <Volume2 size={16} />
          </button>
        </div>

        {/* Right Side (Overlapping citations + More menu) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center -space-x-1.5 mr-1 select-none">
            {/* LinkedIn Badge */}
            <a 
              href="https://linkedin.com/in/raja-chera-kesaree-4aa858278" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#0077b5] border border-[#1f1f1f] flex items-center justify-center text-[10px] font-bold text-white shadow hover:scale-110 hover:z-10 transition-transform cursor-pointer" 
              title="LinkedIn Profile"
            >
              in
            </a>
            {/* Project Thesis Badge */}
            <button 
              type="button"
              onClick={() => onNavigate('/education', undefined, 'mba')}
              className="w-6 h-6 rounded-full bg-[#34a853] border border-[#1f1f1f] flex items-center justify-center text-[10px] font-bold text-white shadow hover:scale-110 hover:z-10 transition-transform cursor-pointer" 
              title="Research Thesis Project"
            >
              T
            </button>
            {/* College Site Badge */}
            <a 
              href="https://srmeaswari.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#ffc107] border border-[#1f1f1f] flex items-center justify-center text-[10px] font-extrabold text-[#1f1f1f] shadow hover:scale-110 hover:z-10 transition-transform cursor-pointer" 
              title="SRM Easwari College Website"
            >
              S
            </a>
            {/* +8 badge */}
            <div className="w-6 h-6 rounded-full bg-[#3c4043] border border-[#1f1f1f] flex items-center justify-center text-[9px] font-semibold text-gray-300 shadow">
              +8
            </div>
          </div>
          <button type="button" className="p-1 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
            <MoreVertical size={16} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-8 flex flex-col items-center justify-center space-y-3">
          <RefreshCw className="w-5 h-5 text-[#8ab4f8] animate-spin" />
          <p className="text-xs text-gray-400 font-sans">
            Synthesizing portfolio records{dots}
          </p>
        </div>
      ) : (
        <div className="space-y-4 animate-fade-in text-[15px] text-[#e8eaed] leading-relaxed font-sans">
          <div className={`relative overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1200px]' : 'max-h-[200px]'}`}>
            <div className="space-y-4">
              {/* Paragraph 1 */}
              <p className="text-[#e8eaed]">
            Raja Chera Kesaree is a high-impact <span className="font-semibold text-white">SEO Specialist and Digital Marketer</span> whose experience spans optimizing{' '}
            <span className="bg-[#1a2b4c] text-[#a8c7fa] border border-[#305080] px-1.5 py-0.5 rounded-md inline-flex items-center gap-1 font-semibold">
              2,200+ URLs
              <span className="w-3.5 h-3.5 rounded-full bg-[#305080]/60 flex items-center justify-center text-[8px] text-white">🔗</span>
            </span>{' '}
            and leading technical marketing implementations. A standard SEO campaign under his direction typically covers crawl speed optimization, Google Search Console index status alignment, and search visibility, yielding an average of{' '}
            <span className="font-semibold text-white">+22% higher organic conversions</span>.
            <button 
              type="button"
              onClick={() => onNavigate('/experience')}
              className="inline-flex items-center justify-center ml-1.5 w-5 h-5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors text-[9px]"
              title="Experience citation"
            >
              <Link2 size={10} />
            </button>
          </p>

          {/* Subheader introduction */}
          <p className="text-[#e8eaed]">
            Analyze and explore Raja&apos;s digital marketing, SEO execution, and tech-focused background through these core areas:
          </p>

          {/* Bullet List */}
          <ul className="space-y-3.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1.5 shrink-0">•</span>
              <div>
                <span className="font-semibold text-white">Technical &amp; Content SEO:</span> Streamlined Pickyourtrail&apos;s international SEO architecture, optimizing indexability and resolving key crawl blocks.
                <button 
                  type="button"
                  onClick={() => onNavigate('/experience')}
                  className="inline-flex items-center justify-center ml-1.5 w-5 h-5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors text-[9px]"
                  title="SEO Experience link"
                >
                  <Link2 size={10} />
                </button>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1.5 shrink-0">•</span>
              <div>
                <span className="font-semibold text-white">Conversion &amp; CRO Strategy:</span> Restructured call-to-action triggers, customized schema entities, and optimized lander layouts to generate verifiable +22% conversion jumps.
                <button 
                  type="button"
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center justify-center ml-1.5 w-5 h-5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors text-[9px]"
                  title="Projects citation"
                >
                  <Link2 size={10} />
                </button>
              </div>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-gray-400 mt-1.5 shrink-0">•</span>
              <div>
                <span className="font-semibold text-white">Technical Marketing Stack:</span> Configures and maintains unified data pipelines utilizing GA4, Search Console, Screaming Frog, Semrush, and Microsoft Clarity.
                <button 
                  type="button"
                  onClick={() => onNavigate('/skills')}
                  className="inline-flex items-center justify-center ml-1.5 w-5 h-5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors text-[9px]"
                  title="Skills citation"
                >
                  <Link2 size={10} />
                </button>
              </div>
            </li>
          </ul>

          {/* Pro-Tip paragraph */}
          <p className="text-[#e8eaed] pt-2">
            <span className="font-semibold text-white">Pro-Tip:</span> Make use of Raja&apos;s dual competence in{' '}
            <button 
              type="button" 
              onClick={() => onNavigate('/education')} 
              className="text-[#8ab4f8] font-semibold underline decoration-[#8ab4f8]/50 hover:text-white transition-colors cursor-pointer"
            >
              Computer Science Engineering (B.E. CSE) and Marketing (MBA)
            </button>{' '}
            to build fully validated schema markup architectures, automate internal linking pathways that search engines crawl effortlessly, execute intent mapping and semantic SEO strategy, and optimize full-funnel performance from technical foundation to conversion.
            <button 
              type="button"
              onClick={() => onNavigate('/education')}
              className="inline-flex items-center justify-center ml-1.5 w-5 h-5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors text-[9px]"
              title="Education citation"
            >
              <Link2 size={10} />
            </button>
          </p>
        </div>

        {/* Fade out gradient when collapsed */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1f1f1f] via-[#1f1f1f]/90 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Show more/less button */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-2 flex items-center justify-center gap-1.5 rounded-full border border-gray-700 bg-transparent hover:bg-white/[0.04] text-[13px] text-[#e8eaed] font-medium transition-colors select-none"
      >
        {isExpanded ? (
          <>
            Show less <ChevronUp className="w-4 h-4 text-gray-400" />
          </>
        ) : (
          <>
            Show more <ChevronDown className="w-4 h-4 text-gray-400" />
          </>
        )}
      </button>

          {/* SGE Chat Box - Clicking this navigates to /ai-mode */}
          <div 
            onClick={() => onNavigate('/ai-mode')}
            className="mt-6 flex items-center bg-[#2a2b2e] hover:bg-[#323337] border border-transparent hover:border-white/[0.08] rounded-full px-4 py-3 cursor-pointer transition-all duration-200 group/chat shadow-inner"
          >
            {/* Plus icon on left */}
            <div className="w-8 h-8 rounded-full bg-[#1c1d1f] group-hover/chat:bg-[#202124] flex items-center justify-center text-gray-400 group-hover/chat:text-white transition-colors mr-3 shrink-0">
              <Plus size={16} />
            </div>

            {/* Placeholder Text */}
            <span className="flex-grow text-gray-400 text-sm group-hover/chat:text-gray-300 font-sans">
              Ask anything
            </span>

            {/* Microphone icon on right */}
            <div className="text-gray-400 group-hover/chat:text-gray-300 transition-colors pl-2">
              <Mic size={18} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
