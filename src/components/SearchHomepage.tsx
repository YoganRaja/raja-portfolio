import React, { useState, useEffect } from 'react';
import { Search, Mic, Camera, Plus, CornerDownLeft, Sparkles, FileText, Github, Linkedin, Briefcase, Cpu, Award, GraduationCap, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { AiModeButton } from './AiModeButton';
import { useVisitorLocation } from '../utils/location';

interface SearchHomepageProps {
  onSearch: (query: string) => void;
  onOpenResumeModal?: () => void;
}

export default function SearchHomepage({ onSearch, onOpenResumeModal }: SearchHomepageProps) {
  const [query, setQuery] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isAiMode, setIsAiMode] = useState(false);
  const { country } = useVisitorLocation();
  const targetText = 'RAJA CHERA KESAREE';

  // Close apps dropdown on click outside
  useEffect(() => {
    if (!isAppsOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.apps-launcher-container')) {
        setIsAppsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isAppsOpen]);

  // Typing animation plays on home page load
  useEffect(() => {
    let index = 0;
    setQuery('');
    const typingInterval = setInterval(() => {
      index++;
      setQuery(() => targetText.slice(0, index));
      if (index >= targetText.length) {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 120); // Natural typing speed

    return () => clearInterval(typingInterval);
  }, []);

  // No automatic search trigger. The user must manually click or press enter.

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(query || targetText);
    }
  };

  const handleSearchClick = () => {
    onSearch(query || targetText);
  };

  const handleSkip = () => {
    onSearch(targetText);
  };

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white flex flex-col justify-between font-sans relative overflow-hidden">
      {/* Top Header */}
      <header className="flex justify-end items-center px-6 py-4 text-sm text-[#e8eaed]">
        <div className="flex items-center space-x-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            Gmail
          </a>
          <a
            href="https://www.linkedin.com/in/raja-chera-kesaree-4aa858278/"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="hover:underline cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="hover:underline cursor-pointer"
          >
            GitHub
          </a>
          {/* Apps Grid Icon */}
          <div className="apps-launcher-container relative">
            <button
              onClick={() => setIsAppsOpen(!isAppsOpen)}
              className={`p-2 hover:bg-white/10 rounded-full transition-colors ${isAppsOpen ? 'bg-white/10' : ''}`}
              title="Googul apps"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </button>

            {isAppsOpen && (
              <div className="absolute right-0 top-12 mt-2 w-80 bg-[#303134] border border-[#4c4e52] rounded-3xl p-6 shadow-2xl z-50 animate-fade-in text-[#e8eaed]">
                <div className="grid grid-cols-3 gap-y-6 gap-x-2">
                  {/* Resume */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsAppsOpen(false);
                      if (onOpenResumeModal) onOpenResumeModal();
                    }}
                    className="flex flex-col items-center p-2 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group text-center"
                    title="Download Resume"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-red-500/15 text-red-400 flex items-center justify-center mb-1.5 shadow-inner group-hover:scale-105 transition-transform">
                      <FileText size={24} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors">Resume</span>
                  </button>

                  {/* GitHub */}
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-2 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group text-center"
                    title="Visit GitHub Profile"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-1.5 shadow-inner group-hover:scale-105 transition-transform">
                      <Github size={24} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors">GitHub</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="flex flex-col items-center p-2 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group text-center"
                    title="Visit LinkedIn Profile"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/20 text-[#0a66c2] flex items-center justify-center mb-1.5 shadow-inner group-hover:scale-105 transition-transform">
                      <Linkedin size={24} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors">LinkedIn</span>
                  </a>

                  {/* Experience */}
                  <button
                    onClick={() => {
                      setIsAppsOpen(false);
                      onSearch('experience');
                    }}
                    className="flex flex-col items-center p-2 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group text-center"
                    title="Search Experience"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-1.5 shadow-inner group-hover:scale-105 transition-transform">
                      <Award size={24} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors">Experience</span>
                  </button>

                  {/* Projects */}
                  <button
                    onClick={() => {
                      setIsAppsOpen(false);
                      onSearch('projects');
                    }}
                    className="flex flex-col items-center p-2 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group text-center"
                    title="Search Projects"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-1.5 shadow-inner group-hover:scale-105 transition-transform">
                      <Briefcase size={24} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors">Projects</span>
                  </button>

                  {/* Skills */}
                  <button
                    onClick={() => {
                      setIsAppsOpen(false);
                      onSearch('skills');
                    }}
                    className="flex flex-col items-center p-2 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group text-center"
                    title="Search Skills"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-1.5 shadow-inner group-hover:scale-105 transition-transform">
                      <Cpu size={24} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors">Skills</span>
                  </button>

                  {/* Education */}
                  <button
                    onClick={() => {
                      setIsAppsOpen(false);
                      onSearch('education');
                    }}
                    className="flex flex-col items-center p-2 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group text-center"
                    title="Search Education"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-1.5 shadow-inner group-hover:scale-105 transition-transform">
                      <GraduationCap size={24} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors">Education</span>
                  </button>

                  {/* Contact */}
                  <button
                    onClick={() => {
                      setIsAppsOpen(false);
                      onSearch('contact');
                    }}
                    className="flex flex-col items-center p-2 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group text-center"
                    title="Search Contact"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-pink-500/15 text-pink-400 flex items-center justify-center mb-1.5 shadow-inner group-hover:scale-105 transition-transform">
                      <Mail size={24} />
                    </div>
                    <span className="text-xs text-gray-300 font-medium group-hover:text-white transition-colors">Contact</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Avatar Icon */}
          <div className="w-8 h-8 rounded-full bg-[#c2e7ff] text-[#001d35] font-bold text-sm flex items-center justify-center cursor-pointer shadow-sm">
            R
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 -mt-16">
        {/* Authentic Googul styled multi-colored logo */}
        <div className="flex items-center select-none mb-8 text-7xl md:text-8xl font-display font-medium tracking-tight">
          <svg className="h-[0.85em] w-[0.85em] mr-0.5 self-center shrink-0" viewBox="0 0 24 24">
            <path fill="#4285f4" d="M23.745 12.27c0-.77-.07-1.54-.19-2.27H12v4.51h6.6c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
            <path fill="#4285f4" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.86-3c-1.08.72-2.45 1.16-4.1 1.16-3.16 0-5.83-2.14-6.79-5.02H1.28v3.11C3.26 21.3 7.31 24 12 24z"/>
            <path fill="#4285f4" d="M5.21 14.23c-.25-.72-.39-1.5-.39-2.3s.14-1.58.39-2.3V6.52H1.28C.46 8.16 0 10.01 0 12s.46 3.84 1.28 5.48l3.93-3.07z"/>
            <path fill="#4285f4" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.22 0 12 0 7.31 0 3.26 2.7 1.28 6.52l3.93 3.11c.96-2.88 3.63-5.02 6.79-5.02z"/>
          </svg>
          <span className="text-[#ea4335]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#4285f4]">g</span>
          <span className="text-[#34a853]">u</span>
          <span className="text-[#ea4335]">l</span>
        </div>

        {/* Search Bar & AI Mode Container */}
        <div className="w-full max-w-3xl relative mb-12">
          <div className={`w-full bg-white border rounded-full h-[54px] px-4 flex items-center shadow-md transition-all ${isAiMode ? 'ring-2 ring-indigo-400 border-transparent shadow-indigo-500/15' : 'border-[#dfe1e5] focus-within:shadow-lg focus-within:border-transparent'}`}>
            
            {/* Left Plus icon inside the search bar */}
            <div className="text-[#3c4043] hover:text-black mr-3 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center shrink-0">
              <Plus size={20} />
            </div>

            {/* Input Field with autotyping */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-grow bg-transparent outline-none border-none text-gray-900 text-[16px] placeholder-gray-500 font-sans"
              placeholder={isAiMode ? "Ask Google AI..." : "Ask Google"}
              autoFocus
            />

            {/* Right Icons inside search bar */}
            <div className="flex items-center space-x-3 pr-1 shrink-0">
              {/* Voice Search with Bottom Tooltip */}
              <div className="relative group/mic">
                <button type="button" className="text-[#3c4043] hover:text-black p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Mic size={20} />
                </button>
                <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 hidden group-hover/mic:block bg-black border-[1.5px] border-white/45 text-white text-[11px] px-2.5 py-1.5 rounded whitespace-nowrap shadow-md z-50 font-sans pointer-events-none">
                  Search by voice
                </div>
              </div>

              {/* Lens Search with Bottom Tooltip */}
              <div className="relative group/camera">
                <button type="button" className="text-[#3c4043] hover:text-black p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Camera size={20} />
                </button>
                <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 hidden group-hover/camera:block bg-black border-[1.5px] border-white/45 text-white text-[11px] px-2.5 py-1.5 rounded whitespace-nowrap shadow-md z-50 font-sans pointer-events-none">
                  Search by image
                </div>
              </div>

              {/* AI Mode integrated button with exact Google AI icon, glow and mouse tracking border */}
              <AiModeButton
                onClick={() => onSearch('ai-mode')}
                isAiMode={isAiMode}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#171717] border-t border-[#303134] text-xs text-gray-400 py-3 px-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <div className="flex space-x-4">
          <span>{country || 'Location unavailable'}</span>
        </div>
        <div className="flex space-x-6">
          <span>Terms & Credits</span>
        </div>
      </footer>
    </div>
  );
}
