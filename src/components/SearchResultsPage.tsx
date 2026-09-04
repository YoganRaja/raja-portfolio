import React, { useState, useEffect } from 'react';
import { Search, Mic, Camera, Plus, X, Menu, Settings, Grid, Sparkles, AlertCircle, ArrowUpRight, BarChart3, ChevronDown, ChevronUp, FileText, Github, Linkedin, Briefcase, Cpu, Award, GraduationCap, Mail, Share2 } from 'lucide-react';
import { SEARCH_RESULTS, PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, SUGGESTIONS } from '../data';
import { SearchTab, SearchResult } from '../types';
import SearchResultItem from './SearchResultItem';
import AIOverview from './AIOverview';
import SerpEntityHeader from './SerpEntityHeader';
import KnowledgePanel from './KnowledgePanel';
import ContactForm from './ContactForm';
import ProjectDashboard from './ProjectDashboard';
import EducationSite from './EducationSite';
import ExperienceSite from './ExperienceSite';
import ProjectsSite from './ProjectsSite';
import SkillsSite from './SkillsSite';
import ContactSite from './ContactSite';
import AiModeSite from './AiModeSite';
import { AiModeButton } from './AiModeButton';
import { useVisitorLocation } from '../utils/location';

interface SearchResultsPageProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onNavigate: (path: string, q?: string, program?: 'mba' | 'be') => void;
  onReset: () => void;
  onOpenResumeModal?: () => void;
}

export default function SearchResultsPage({ searchQuery, setSearchQuery, onNavigate, onReset, onOpenResumeModal }: SearchResultsPageProps) {
  const [activeTab, setActiveTab] = useState<SearchTab>(SearchTab.ALL);
  const [showSettingsBanner, setShowSettingsBanner] = useState(true);
  const [searchTime, setSearchTime] = useState('0.42');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('proj-1');
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isAiMode, setIsAiMode] = useState(false);
  const { city, country } = useVisitorLocation();

  const locationText = city && country
    ? `${city}, ${country}`
    : country
    ? country
    : 'Location unavailable';

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

  const handleTabChange = (tab: SearchTab) => {
    if (tab === SearchTab.AI_MODE) {
      onNavigate('/ai-mode');
    } else if (tab === SearchTab.EXPERIENCE) {
      onNavigate('/experience');
    } else if (tab === SearchTab.PROJECTS) {
      onNavigate('/projects');
    } else if (tab === SearchTab.SKILLS) {
      onNavigate('/skills');
    } else if (tab === SearchTab.EDUCATION) {
      onNavigate('/education');
    } else if (tab === SearchTab.CONTACT) {
      onNavigate('/contact');
    } else {
      setActiveTab(tab);
      // Update the search bar input based on tab to mimic actual search engine updates
      if (tab === SearchTab.ALL) {
        setSearchQuery('RAJA CHERA KESAREE');
      } else {
        setSearchQuery(`raja chera kesaree ${tab}`);
      }
    }
    // Randomize search time to look authentic
    setSearchTime((Math.random() * 0.3 + 0.2).toFixed(2));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Detect keywords to change tabs automatically
    const queryLower = (searchQuery || '').toLowerCase().trim();
    if (queryLower === 'experience' || queryLower.includes('work') || queryLower.includes('experience')) {
      onNavigate('/experience');
    } else if (queryLower === 'projects' || queryLower.includes('project') || queryLower.includes('case')) {
      onNavigate('/projects');
    } else if (queryLower === 'skills' || queryLower.includes('skill') || queryLower.includes('tool')) {
      onNavigate('/skills');
    } else if (queryLower === 'education' || queryLower.includes('college') || queryLower.includes('easwari')) {
      onNavigate('/education');
    } else if (queryLower === 'contact' || queryLower.includes('hire') || queryLower.includes('email')) {
      onNavigate('/contact');
    } else if (queryLower === 'ai mode' || queryLower === 'ai_mode' || queryLower === 'ai-mode') {
      onNavigate('/ai-mode');
    } else {
      onNavigate('/search', searchQuery);
    }
    setSearchTime((Math.random() * 0.3 + 0.2).toFixed(2));
  };

  const handleClearQuery = () => {
    setSearchQuery('');
  };

  // Filter main results based on active tab
  const getFilteredResults = (): SearchResult[] => {
    if (activeTab === SearchTab.ALL) {
      return SEARCH_RESULTS;
    }
    return SEARCH_RESULTS.filter(res => res.tab === activeTab);
  };

  return (
    <div className="min-h-screen bg-[#202124] text-[#bdc1c6] font-sans">
      {/* Top Header & Search Bar Bar */}
      <header className="sticky top-0 bg-[#202124] border-b border-[#3c4043] z-30 pt-3.5 pb-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-grow max-w-3xl">
            {/* Googul Logo */}
            <div
              onClick={onReset}
              className="flex items-center select-none text-2xl font-display font-semibold tracking-tight cursor-pointer pr-1 shrink-0 animate-fade-in"
              title="Go to Homepage"
            >
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

            {/* Dark Search Input Pill */}
            <form onSubmit={handleSearchSubmit} className="flex-grow max-w-[692px]">
              <div className="relative flex items-center bg-[#303134] hover:bg-[#383a3e] border border-[#4d5156] focus-within:bg-[#303134] focus-within:border-[#8ab4f8]/60 rounded-full h-11 px-4 shadow-sm transition-all">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow bg-transparent outline-none border-none text-[#e8eaed] text-[15px] font-sans placeholder-gray-400 pl-1"
                  placeholder="raja chera kesaree"
                />

                {/* Right controls inside search pill */}
                <div className="flex items-center text-[#9aa0a6] shrink-0">
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={handleClearQuery}
                      className="hover:text-white p-1 transition-colors cursor-pointer"
                      title="Clear"
                    >
                      <X size={18} />
                    </button>
                  )}
                  <span className="w-[1px] h-5 bg-[#5f6368] mx-2"></span>

                  <button
                    type="submit"
                    className="hover:text-white p-1 transition-colors cursor-pointer"
                    title="Search"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Utility Action Icons */}
          <div className="hidden md:flex items-center space-x-2 text-[#bdc1c6] shrink-0">
            {/* Share Button */}
            <button
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-[#bdc1c6] hover:text-white"
              title="Share search"
            >
              <Share2 size={18} />
            </button>

            {/* Apps Grid Icon */}
            <div className="apps-launcher-container relative">
              <button
                onClick={() => setIsAppsOpen(!isAppsOpen)}
                className={`p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-[#bdc1c6] hover:text-white ${isAppsOpen ? 'bg-white/10 text-white' : ''}`}
                title="Googul apps"
              >
                <Grid size={18} />
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
                        handleTabChange(SearchTab.EXPERIENCE);
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
                        handleTabChange(SearchTab.PROJECTS);
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
                        handleTabChange(SearchTab.SKILLS);
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
                        handleTabChange(SearchTab.EDUCATION);
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
                        handleTabChange(SearchTab.CONTACT);
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

            {/* Profile Avatar Circle */}
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-tr from-[#ea4335] via-[#fbbc05] to-[#4285f4] p-[1.5px] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center shrink-0 shadow-md">
              <div className="w-full h-full rounded-full bg-[#171717] flex items-center justify-center text-white font-bold text-xs">
                R
              </div>
            </div>
          </div>
        </div>

        {/* Search Categories / Navigation Tabs Bar */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:pl-[148px] mt-3 flex items-center overflow-x-auto whitespace-nowrap scrollbar-none gap-6 text-[14px]">
          {/* AI Mode */}
          <button
            type="button"
            onClick={() => handleTabChange(SearchTab.AI_MODE)}
            className={`pb-2.5 px-1 border-b-2 transition-all cursor-pointer ${
              activeTab === SearchTab.AI_MODE
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-[#9aa0a6] hover:text-white font-normal'
            }`}
          >
            <span>AI Mode</span>
          </button>

          {/* All */}
          <button
            type="button"
            onClick={() => handleTabChange(SearchTab.ALL)}
            className={`pb-2.5 px-1 border-b-2 transition-all cursor-pointer ${
              activeTab === SearchTab.ALL
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-[#9aa0a6] hover:text-white font-normal'
            }`}
          >
            <span>All</span>
          </button>

          {/* Images */}
          <button
            type="button"
            onClick={() => handleTabChange(SearchTab.EXPERIENCE)}
            className={`pb-2.5 px-1 border-b-2 transition-all cursor-pointer ${
              activeTab === SearchTab.EXPERIENCE
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-[#9aa0a6] hover:text-white font-normal'
            }`}
          >
            <span>Images</span>
          </button>

          {/* News */}
          <button
            type="button"
            onClick={() => handleTabChange(SearchTab.PROJECTS)}
            className={`pb-2.5 px-1 border-b-2 transition-all cursor-pointer ${
              activeTab === SearchTab.PROJECTS
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-[#9aa0a6] hover:text-white font-normal'
            }`}
          >
            <span>News</span>
          </button>

          {/* Videos */}
          <button
            type="button"
            onClick={() => handleTabChange(SearchTab.SKILLS)}
            className={`pb-2.5 px-1 border-b-2 transition-all cursor-pointer ${
              activeTab === SearchTab.SKILLS
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-[#9aa0a6] hover:text-white font-normal'
            }`}
          >
            <span>Videos</span>
          </button>

          {/* Shopping */}
          <button
            type="button"
            onClick={() => handleTabChange(SearchTab.EDUCATION)}
            className={`pb-2.5 px-1 border-b-2 transition-all cursor-pointer ${
              activeTab === SearchTab.EDUCATION
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-[#9aa0a6] hover:text-white font-normal'
            }`}
          >
            <span>Shopping</span>
          </button>

          {/* Forums */}
          <button
            type="button"
            onClick={() => handleTabChange(SearchTab.CONTACT)}
            className={`pb-2.5 px-1 border-b-2 transition-all cursor-pointer ${
              activeTab === SearchTab.CONTACT
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-[#9aa0a6] hover:text-white font-normal'
            }`}
          >
            <span>Forums</span>
          </button>

          {/* More dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="pb-2.5 px-1 border-b-2 border-transparent text-[#9aa0a6] hover:text-white transition-all cursor-pointer flex items-center gap-1 font-normal"
            >
              <span>More</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-[#303134] border border-[#4c4e52] rounded-xl py-2 shadow-xl z-50 min-w-[140px]">
              <button
                onClick={() => handleTabChange(SearchTab.EXPERIENCE)}
                className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-white/10 hover:text-white"
              >
                Experience
              </button>
              <button
                onClick={() => handleTabChange(SearchTab.PROJECTS)}
                className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-white/10 hover:text-white"
              >
                Projects
              </button>
              <button
                onClick={() => handleTabChange(SearchTab.SKILLS)}
                className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-white/10 hover:text-white"
              >
                Skills
              </button>
              <button
                onClick={() => handleTabChange(SearchTab.EDUCATION)}
                className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-white/10 hover:text-white"
              >
                Education
              </button>
              <button
                onClick={() => handleTabChange(SearchTab.CONTACT)}
                className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-white/10 hover:text-white"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Tools */}
          <button
            type="button"
            className="pb-2.5 px-1 border-b-2 border-transparent text-[#9aa0a6] hover:text-white transition-all cursor-pointer flex items-center gap-1 font-normal"
          >
            <span>Tools</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </header>

      {/* Main Results Body */}
      <main className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-4">
        {/* Search Statistics */}
        <p className="text-xs text-gray-500 font-sans mb-3 lg:pl-[148px]">
          About {getFilteredResults().length + 2} results ({searchTime} seconds)
        </p>

        {/* Content Container aligned at lg:pl-[148px] with exact 1052px width */}
        <div className="lg:pl-[148px]">
          <div className="max-w-[1052px] w-full">
            {/* Render Entity Header above the 2-column layout for ALL queries */}
            {activeTab === SearchTab.ALL && (
              <div className="mb-6">
                <SerpEntityHeader />
                <div className="border-b border-[#3c4043]/80 my-6"></div>
              </div>
            )}

            <div className="flex flex-col lg:flex-row items-start gap-8 justify-between">
              {/* Left Column: Search Results */}
              <div className="w-full lg:w-[652px] lg:max-w-[652px] shrink-0 space-y-6">

                {/* Render AI Overview at the top of ALL queries */}
                {activeTab === SearchTab.ALL && (
                  <AIOverview onNavigate={onNavigate} />
                )}

            {/* CV SPECIFIC SECTIONS based on the active tab */}
            {activeTab === SearchTab.EXPERIENCE && (
              <div className="space-y-5 bg-[#303134]/10 p-5 rounded-xl border border-[#3c4043]/40">
                <h2 className="text-lg font-bold text-white mb-2">Detailed Work History Timeline</h2>
                <div className="space-y-8 relative before:absolute before:inset-y-2 before:left-[11px] before:w-0.5 before:bg-[#3c4043]">
                  {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.id} className="relative pl-8">
                      {/* Timeline node */}
                      <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#303134] border-2 border-[#8ab4f8] flex items-center justify-center text-xs"></span>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-bold text-white text-[16px]">{exp.role}</h3>
                          <span className="text-xs font-sans px-2.5 py-0.5 bg-[#303134] text-gray-300 rounded-full">{exp.period}</span>
                        </div>
                        <p className="text-sm text-[#8ab4f8] font-semibold">{exp.company} &bull; <span className="text-xs text-gray-400 font-normal">{exp.location}</span></p>
                        <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-300 pt-2 pl-1 leading-relaxed">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 pt-3">
                          {exp.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="text-[10px] px-2 py-0.5 bg-white/5 rounded text-gray-400 border border-white/5">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === SearchTab.PROJECTS && (
              <div className="space-y-5">
                <div className="bg-[#303134]/10 p-5 rounded-xl border border-[#3c4043]/40">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-1">
                    <h2 className="text-lg font-bold text-white">Verified Performance Marketing Campaigns</h2>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/10 font-sans font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                      Real GSC &amp; Semrush Proof
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-6">Click any campaign card to expand and interact with actual Search Console, GA4 &amp; Semrush proof metrics.</p>

                  <div className="space-y-4">
                    {PROJECTS_DATA.map((proj) => {
                      const isExpanded = expandedProjectId === proj.id;
                      return (
                        <div 
                          key={proj.id} 
                          onClick={() => setExpandedProjectId(isExpanded ? null : proj.id)}
                          className={`p-5 bg-[#1f1f1f] rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                            isExpanded 
                              ? 'border-[#8ab4f8] bg-[#1f1f1f]' 
                              : 'border-[#3c4043] hover:border-gray-500'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[10px] font-semibold font-sans text-[#8ab4f8] bg-[#8ab4f8]/10 px-2.5 py-0.5 rounded-full">{proj.category}</span>
                                {proj.dashboardType && (
                                  <span className="text-[10px] font-sans text-emerald-400 bg-emerald-950/20 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-500/10">
                                    <BarChart3 size={10} /> Interactive Proof
                                  </span>
                                )}
                              </div>
                              <div className="text-gray-400 group-hover:text-white transition-colors">
                                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </div>
                            </div>
                            <h3 className="font-bold text-white text-[15px] group-hover:text-[#8ab4f8] transition-colors">{proj.title}</h3>
                            <p className="text-[11px] text-emerald-400 font-sans font-bold bg-emerald-950/20 px-2.5 py-1 rounded inline-block">{proj.metrics}</p>
                            <p className="text-xs text-gray-300 leading-relaxed pt-1">{proj.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mt-3">
                            {proj.technologies.map((tech, tIdx) => (
                              <span key={tIdx} className="text-[9px] px-2 py-0.5 bg-white/5 rounded text-gray-400 border border-white/5">
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Render the custom high-fidelity metrics dashboard if expanded */}
                          {isExpanded && proj.dashboardType && (
                            <div onClick={(e) => e.stopPropagation()} className="mt-4 pt-1">
                              <ProjectDashboard type={proj.dashboardType} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === SearchTab.SKILLS && (
              <div className="space-y-5 bg-[#303134]/10 p-5 rounded-xl border border-[#3c4043]/40">
                <h2 className="text-lg font-bold text-white mb-4">Channel & Technical Tool proficiency</h2>
                <div className="space-y-6">
                  {SKILLS_DATA.map((cat, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-xs font-semibold font-sans text-[#8ab4f8] border-b border-white/5 pb-1">{cat.category}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cat.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="bg-[#1f1f1f] p-3 rounded-lg border border-[#303134] space-y-1.5">
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-semibold text-white">{skill.name}</span>
                              <span className="text-[10px] font-sans text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-[#303134] h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-[#4285f4] to-[#8ab4f8] h-full rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === SearchTab.EDUCATION && (
              <div className="space-y-5 bg-[#303134]/10 p-5 rounded-xl border border-[#3c4043]/40 text-[#e8eaed]">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3 border-b border-white/5 pb-2">
                  <h2 className="text-lg font-bold text-white">Academic Timeline & Research</h2>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/10 font-sans font-semibold flex items-center gap-1.5 animate-pulse">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Portals Online
                  </span>
                </div>
                
                <p className="text-xs text-gray-400 mb-4">Click either credential card to enter and explore Raja&apos;s interactive institutional portal websites directly.</p>

                <div className="space-y-5">
                  {/* MBA section */}
                  <div 
                    onClick={() => onNavigate('/education', undefined, 'mba')}
                    className="space-y-2 border-l-2 border-[#4285f4] pl-4 py-3 hover:bg-white/5 rounded-r-xl transition-all cursor-pointer group border-t border-r border-b border-transparent hover:border-[#3c4043]/40"
                  >
                    <span className="text-xs font-sans text-gray-400 flex items-center justify-between">
                      <span>2023 - 2025</span>
                      <span className="text-[10px] text-[#8ab4f8] bg-[#4285f4]/10 px-2.5 py-0.5 rounded-full border border-[#4285f4]/20 opacity-85 group-hover:opacity-100 transition-opacity font-bold">Explore Program Site ↗</span>
                    </span>
                    <h3 className="text-md font-bold text-white group-hover:text-[#8ab4f8] transition-colors">Master of Business Administration (MBA)</h3>
                    <p className="text-sm font-semibold text-[#8ab4f8]">SRM Easwari Engineering College, Chennai</p>
                    <p className="text-xs text-emerald-400 font-sans">Major in Marketing &bull; First Class</p>
                    <p className="text-xs text-gray-300 leading-relaxed pt-1">
                      <strong>Paper Presented:</strong> &ldquo;SIGNIFICANCE OF DIGITAL MARKETING TOOLS IN THE PROMOTION OF E-COMMERCE WEBSITES&rdquo;. Understudied search engine mechanics, on-page visibility factors, and consumer behavior mapping across commercial commerce platforms.
                    </p>
                  </div>

                  {/* BE section */}
                  <div 
                    onClick={() => onNavigate('/education', undefined, 'be')}
                    className="space-y-2 border-l-2 border-[#34a853] pl-4 py-3 hover:bg-white/5 rounded-r-xl transition-all cursor-pointer group border-t border-r border-b border-transparent hover:border-[#3c4043]/40"
                  >
                    <span className="text-xs font-sans text-gray-400 flex items-center justify-between">
                      <span>2019 - 2023</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/20 px-2.5 py-0.5 rounded-full border border-emerald-500/10 opacity-85 group-hover:opacity-100 transition-opacity font-bold">Explore Program Site ↗</span>
                    </span>
                    <h3 className="text-md font-bold text-white group-hover:text-emerald-400 transition-colors">Bachelor of Engineering (B.E.)</h3>
                    <p className="text-sm font-semibold text-emerald-400">Anna University Regional Campus - Tirunelveli</p>
                    <p className="text-xs text-gray-400 font-sans">Computer Science and Engineering &bull; Second Class</p>
                    <p className="text-xs text-gray-300 leading-relaxed pt-1">
                      President of the Department&apos;s Tech Society. Acquired deep technical base including HTML/CSS, rendering pathways, crawl behaviors, and program logic that facilitates Technical SEO and JavaScript SEO troubleshooting.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === SearchTab.CONTACT && (
              <div className="space-y-5">
                <ContactForm />
              </div>
            )}

            {/* Standard Search Result List Items */}
            <div className="space-y-2 pt-4">
              <h3 className="text-xs font-sans font-semibold text-gray-500 mb-4">Web Search Results</h3>
              {getFilteredResults().map((result) => (
                <SearchResultItem
                  key={result.id}
                  result={result}
                  onTabChange={handleTabChange}
                  onSelectResultDetail={(id, program) => {
                    onNavigate('/education', undefined, program || 'mba');
                  }}
                />
              ))}
            </div>

            {/* Bottom Google OOOOOGLE Pagination styled section */}
            <div className="pt-10 pb-8 flex flex-col items-center space-y-4 border-t border-[#3c4043] select-none">
              <div className="flex text-2xl font-bold tracking-tight">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">u</span>
                <span className="text-[#ea4335]">l</span>
              </div>
              <div className="flex gap-2 text-xs text-gray-400">
                <span className="hover:underline cursor-pointer text-[#8ab4f8]">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>Next</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Knowledge Graph Panel */}
          <div className="shrink-0 lg:w-[368px] hidden lg:block">
            <KnowledgePanel
              onOpenResumeModal={onOpenResumeModal}
              onSearchConcept={(concept) => {
                if (concept === 'experience') handleTabChange(SearchTab.EXPERIENCE);
                else if (concept === 'projects') handleTabChange(SearchTab.PROJECTS);
                else if (concept === 'skills') handleTabChange(SearchTab.SKILLS);
                else if (concept === 'education') handleTabChange(SearchTab.EDUCATION);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </main>

      {/* Footer (Matches desktop results footer) */}
      <footer className="bg-[#171717] border-t border-[#3c4043] text-xs text-gray-400 py-4 px-6 mt-16">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-1.5 text-gray-500 font-sans text-[11px]">
            <AlertCircle size={12} className="text-gray-600" />
            <span>Search query mapped dynamically to portfolio data structure.</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-[#303134] pt-3">
            <div className="flex items-center space-x-2">
              <span>{locationText}</span>
              <span className="text-gray-500">&bull;</span>
              <span className="text-[#8ab4f8] hover:underline cursor-pointer" onClick={onReset}>From your IP address</span>
            </div>
            <div className="flex space-x-5">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">Contact</a>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
