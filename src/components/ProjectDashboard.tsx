import React, { useState, useEffect, useCallback } from 'react';
import { 
  BarChart2, TrendingUp, CheckCircle, ArrowUpRight, Globe, 
  Search, Calendar, Filter, Grid, Check, Sparkles, Bot,
  CheckCircle2, AlertCircle, ExternalLink, ChevronLeft, ChevronRight
} from 'lucide-react';
import pytGscBefore from '../assets/images/PYT-GSC-BEFORE-searchresult-db.webp';
import pytGscAfter from '../assets/images/PYT-GSC-AFTER-searchresult-db.webp';
import pytCeGscBefore from '../assets/images/PYT-CE-GSC-BEFORE-searchresult-db.webp';
import pytCeGscAfter from '../assets/images/PYT-CE-GSC-AFTER-searchresult-db.webp';
import chatgptIcon from '../assets/images/chatgpt-icon.svg';
import googleGeminiIcon from '../assets/images/google-gemini-icon.svg';
import perplexityAiIcon from '../assets/images/perplexity-ai-icon.png';

interface ProjectDashboardProps {
  type: 'gsc_core' | 'gsc_switzerland' | 'semrush_gap' | 'ga4_pyt' | 'ppc_ads' | 'aeo_geo' | 'orm_rep' | 'cro_conv';
}

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeAlt: string;
  afterAlt: string;
}

function BeforeAfterSlider({ beforeImg, afterImg, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [activeSlide, setActiveSlide] = useState<'before' | 'after'>('after');

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setActiveSlide('before');
    } else if (e.key === 'ArrowRight') {
      setActiveSlide('after');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3 sm:p-4 space-y-3 shadow-2xs relative">
      {/* Image Carousel Display */}
      <div className="relative bg-slate-950 rounded-xl overflow-hidden border border-slate-300 shadow-sm group">
        
        {/* Slide track */}
        <div className="relative w-full overflow-hidden min-h-[220px] sm:min-h-[300px] flex items-center justify-center">
          <div 
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: activeSlide === 'after' ? 'translateX(-100%)' : 'translateX(0%)' }}
          >
            {/* Before Image (Index 0) */}
            <div className="w-full flex-shrink-0 relative bg-slate-950">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-amber-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-amber-400/40">
                  <span className="w-2 h-2 rounded-full bg-amber-300"></span>
                  Before Optimization
                </span>
              </div>
              <img 
                src={beforeImg} 
                alt={beforeAlt} 
                className="w-full h-auto object-contain block max-h-[520px] mx-auto"
              />
            </div>

            {/* After Image (Index 1) */}
            <div className="w-full flex-shrink-0 relative bg-slate-950">
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-emerald-400/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  After Optimization
                </span>
              </div>
              <img 
                src={afterImg} 
                alt={afterAlt} 
                className="w-full h-auto object-contain block max-h-[520px] mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Left Arrow Button (Shown on After view to navigate to Before) */}
        {activeSlide === 'after' && (
          <button
            onClick={() => setActiveSlide('before')}
            title="View Before Baseline"
            aria-label="View Before Baseline"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-slate-900/85 hover:bg-slate-900 text-white px-3 py-2.5 rounded-full shadow-xl border border-white/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 group/btn cursor-pointer"
          >
            <ChevronLeft size={22} className="text-white group-hover/btn:-translate-x-0.5 transition-transform" />
            <span className="text-xs font-bold text-slate-100 pr-1">
              View Before
            </span>
          </button>
        )}

        {/* Right Arrow Button (Shown on Before view to navigate to After) */}
        {activeSlide === 'before' && (
          <button
            onClick={() => setActiveSlide('after')}
            title="View After Optimization"
            aria-label="View After Optimization"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-slate-900/85 hover:bg-slate-900 text-white px-3 py-2.5 rounded-full shadow-xl border border-white/20 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 group/btn cursor-pointer"
          >
            <span className="text-xs font-bold text-slate-100 pl-1">
              View After
            </span>
            <ChevronRight size={22} className="text-white group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        )}
        {/* Centered Dots Indicator Overlay at Bottom Center of Images */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg">
          <button 
            onClick={() => setActiveSlide('before')}
            title="Before Baseline"
            aria-label="Before Baseline"
            className={`h-2.5 rounded-full transition-all cursor-pointer ${activeSlide === 'before' ? 'bg-amber-400 w-6' : 'bg-white/40 w-2.5 hover:bg-white/70'}`}
          />
          <button 
            onClick={() => setActiveSlide('after')}
            title="After Optimization"
            aria-label="After Optimization"
            className={`h-2.5 rounded-full transition-all cursor-pointer ${activeSlide === 'after' ? 'bg-emerald-400 w-6' : 'bg-white/40 w-2.5 hover:bg-white/70'}`}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectDashboard({ type }: ProjectDashboardProps) {
  /* 1. Google Search Console Core Performance */
  if (type === 'gsc_core') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-50 p-2 rounded-lg text-[#1a73e8] border border-blue-100">
              <BarChart2 size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Google Search Console - Interactive Performance Comparison</div>
              <div className="text-xs text-slate-500">Property: <span className="font-semibold text-slate-700">pickyourtrail.com</span></div>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <BeforeAfterSlider 
          beforeImg={pytGscBefore} 
          afterImg={pytGscAfter}
          beforeAlt="Pickyourtrail GSC Search Performance - Before Optimization"
          afterAlt="Pickyourtrail GSC Search Performance - After Optimization"
        />
      </div>
    );
  }

  /* 2. Switzerland Campaign Growth */
  if (type === 'gsc_switzerland') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-teal-50 p-2 rounded-lg text-[#00B8A9] border border-teal-100">
              <Filter size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Switzerland Subfolder Campaign Growth</div>
              <div className="text-xs text-slate-500">Path: <span className="font-semibold text-slate-700">/packages/switzerland</span></div>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <BeforeAfterSlider 
          beforeImg={pytCeGscBefore} 
          afterImg={pytCeGscAfter}
          beforeAlt="Switzerland Subfolder Search Performance - Before Optimization"
          afterAlt="Switzerland Subfolder Search Performance - After Optimization"
        />
      </div>
    );
  }

  /* 3. Semrush Keyword Gap & Competitor Intelligence (Modern Minimal Black & White Identity) */
  if (type === 'semrush_gap') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-slate-100 p-2 rounded-lg text-slate-900 border border-slate-200">
              <Search size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Semrush Keyword Gap &amp; Competitor Intelligence</div>
              <div className="text-xs text-slate-500">Competitive overlap matrix &amp; search intent analysis</div>
            </div>
          </div>
        </div>

        {/* Authentic Semrush Dashboard Frame */}
        <div className="bg-[#F4F5F7] border-2 border-slate-900 rounded-2xl overflow-hidden shadow-xl select-none pointer-events-none cursor-default text-slate-800 space-y-0">
          <div className="p-4 sm:p-5 space-y-4">
            {/* Domain Overlap Comparison Bar */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Compared Competitor Profiles</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black text-white font-black rounded-md text-xs shadow-2xs flex items-center gap-1">
                  <span>★ pickyourtrail.com</span>
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-md text-xs border border-slate-200">
                  makemytrip.com
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-md text-xs border border-slate-200">
                  traveltriangle.com
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-md text-xs border border-slate-200">
                  thomascook.in
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-semibold rounded-md text-xs border border-slate-200">
                  thrillophilia.com
                </span>
              </div>
            </div>

            {/* Keyword Filter Tabs (Missing, Weak, Uncaptured) */}
            <div className="flex border-b border-slate-200 text-xs font-bold gap-4 px-1">
              <span className="pb-2 text-black border-b-2 border-black">Uncaptured Opportunities (18.7K)</span>
              <span className="pb-2 text-slate-500">Missing (4.2K)</span>
              <span className="pb-2 text-slate-500">Weak Ranks (9.1K)</span>
            </div>

            {/* Semrush Keyword Data Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="p-3 text-xs space-y-1">
                <div className="grid grid-cols-12 text-slate-500 font-bold pb-2 border-b border-slate-200">
                  <span className="col-span-4">Keyword</span>
                  <span className="col-span-1 text-center">Intent</span>
                  <span className="col-span-2 text-right">Volume</span>
                  <span className="col-span-2 text-center">KD %</span>
                  <span className="col-span-3 text-right">Opportunity Action</span>
                </div>

                <div className="grid grid-cols-12 text-slate-800 py-2 border-b border-slate-100 font-medium items-center">
                  <span className="col-span-4 font-bold text-slate-900">baga beach</span>
                  <span className="col-span-1 text-center">
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-1.5 py-0.5 rounded" title="Informational">I</span>
                  </span>
                  <span className="col-span-2 text-right font-extrabold text-slate-900">550,000</span>
                  <span className="col-span-2 text-center">
                    <span className="bg-orange-100 text-[#FF642D] font-extrabold px-2 py-0.5 rounded-full text-[11px] border border-orange-200">62%</span>
                  </span>
                  <span className="col-span-3 text-right">
                    <span className="bg-black text-white px-2.5 py-1 rounded font-bold text-[11px] shadow-2xs">New Landing Page</span>
                  </span>
                </div>

                <div className="grid grid-cols-12 text-slate-800 py-2 border-b border-slate-100 font-medium items-center">
                  <span className="col-span-4 font-bold text-slate-900">gateway of india mumbai</span>
                  <span className="col-span-1 text-center">
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-1.5 py-0.5 rounded" title="Informational">I</span>
                  </span>
                  <span className="col-span-2 text-right font-extrabold text-slate-900">550,000</span>
                  <span className="col-span-2 text-center">
                    <span className="bg-orange-100 text-[#FF642D] font-extrabold px-2 py-0.5 rounded-full text-[11px] border border-orange-200">58%</span>
                  </span>
                  <span className="col-span-3 text-right">
                    <span className="bg-black text-white px-2.5 py-1 rounded font-bold text-[11px] shadow-2xs">New Landing Page</span>
                  </span>
                </div>

                <div className="grid grid-cols-12 text-slate-800 py-2 border-b border-slate-100 font-medium items-center">
                  <span className="col-span-4 font-bold text-slate-900">hawa mahal</span>
                  <span className="col-span-1 text-center">
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-1.5 py-0.5 rounded" title="Informational">I</span>
                  </span>
                  <span className="col-span-2 text-right font-extrabold text-slate-900">550,000</span>
                  <span className="col-span-2 text-center">
                    <span className="bg-orange-100 text-[#FF642D] font-extrabold px-2 py-0.5 rounded-full text-[11px] border border-orange-200">55%</span>
                  </span>
                  <span className="col-span-3 text-right">
                    <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded font-bold text-[11px] border border-amber-300">Content Refresh (#48)</span>
                  </span>
                </div>

                <div className="grid grid-cols-12 text-slate-800 py-2 font-medium items-center">
                  <span className="col-span-4 font-bold text-slate-900">udupi</span>
                  <span className="col-span-1 text-center">
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-1.5 py-0.5 rounded" title="Commercial">C</span>
                  </span>
                  <span className="col-span-2 text-right font-extrabold text-slate-900">550,000</span>
                  <span className="col-span-2 text-center">
                    <span className="bg-emerald-100 text-emerald-700 font-extrabold px-2 py-0.5 rounded-full text-[11px] border border-emerald-200">48%</span>
                  </span>
                  <span className="col-span-3 text-right">
                    <span className="bg-black text-white px-2.5 py-1 rounded font-bold text-[11px] shadow-2xs">New Landing Page</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 4. Google Analytics 4 & Tracking Architecture (Authentic GA4 Brand Palette: Primary Blue #4285F4, Panels #F8F9FA, Text #202124, Chart #4285F4, #00ACC1, #FF6D01, #9C27B0) */
  if (type === 'ga4_pyt') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-[#E8F0FE] p-2 rounded-lg text-[#4285F4] border border-[#D2E3FC]">
              <Grid size={18} />
            </div>
            <div>
              <div className="font-bold text-[#202124] text-sm">Google Analytics 4 &amp; Tracking Architecture</div>
              <div className="text-xs text-slate-500">Property: <span className="font-semibold text-[#202124]">Pickyourtrail GA4</span> &bull; Web &amp; App Measurement</div>
            </div>
          </div>
        </div>

        {/* Authentic GA4 Interface Container */}
        <div className="bg-[#FFFFFF] border-2 border-slate-900 rounded-2xl overflow-hidden shadow-xl select-none pointer-events-none cursor-default text-[#202124] space-y-0">
          <div className="p-4 sm:p-5 space-y-4 bg-[#FFFFFF]">
            {/* Property Setup Card (Full Width) */}
            <div className="bg-[#F8F9FA] p-4 rounded-xl border border-[#DADCE0] shadow-2xs space-y-2">
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Property Setup</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center pt-1">
                <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#DADCE0]">
                  <div className="text-[10px] text-slate-500 font-medium">Google Signals</div>
                  <div className="text-sm font-bold text-[#1E8E3E] mt-0.5">Enabled</div>
                </div>
                <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#DADCE0]">
                  <div className="text-[10px] text-slate-500 font-medium">Key Events</div>
                  <div className="text-sm font-bold text-[#202124] mt-0.5">28</div>
                </div>
                <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#DADCE0]">
                  <div className="text-[10px] text-slate-500 font-medium">Audiences</div>
                  <div className="text-sm font-bold text-[#202124] mt-0.5">16</div>
                </div>
                <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#DADCE0]">
                  <div className="text-[10px] text-slate-500 font-medium">Search Console</div>
                  <div className="text-sm font-bold text-[#1E8E3E] mt-0.5">Linked</div>
                </div>
              </div>
            </div>

            {/* GA4 Multi-Metric Channel Acquisition Chart (Cycling Colors: #4285F4, #00ACC1, #FF6D01, #9C27B0) */}
            <div className="bg-[#F8F9FA] rounded-xl border border-[#DADCE0] p-4 space-y-3 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2">
                <span className="font-bold text-[#202124] text-xs">Session Channel Grouping Breakdown</span>
                <div className="flex gap-2 text-[10px] font-bold">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-xs bg-[#4285F4]"></span> Organic</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-xs bg-[#00ACC1]"></span> Direct</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-xs bg-[#FF6D01]"></span> Referral</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-xs bg-[#9C27B0]"></span> Social &amp; Email</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-[#202124] mb-1">
                    <span>Organic Search</span>
                    <span className="text-[#1E8E3E]">58.4K sessions (▲ +22.1%)</span>
                  </div>
                  <div className="w-full bg-[#FFFFFF] h-2.5 rounded-full border border-[#DADCE0] overflow-hidden">
                    <div className="h-full bg-[#4285F4] rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-[#202124] mb-1">
                    <span>Direct Traffic</span>
                    <span className="text-[#1E8E3E]">22.1K sessions (▲ +12.5%)</span>
                  </div>
                  <div className="w-full bg-[#FFFFFF] h-2.5 rounded-full border border-[#DADCE0] overflow-hidden">
                    <div className="h-full bg-[#00ACC1] rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-[#202124] mb-1">
                    <span>Organic Social / Referral</span>
                    <span className="text-[#D93025]">11.8K sessions (▼ -3.2%)</span>
                  </div>
                  <div className="w-full bg-[#FFFFFF] h-2.5 rounded-full border border-[#DADCE0] overflow-hidden">
                    <div className="h-full bg-[#FF6D01] rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-[#202124] mb-1">
                    <span>Email &amp; Direct Campaigns</span>
                    <span className="text-[#1E8E3E]">9.4K sessions (▲ +18.7%)</span>
                  </div>
                  <div className="w-full bg-[#FFFFFF] h-2.5 rounded-full border border-[#DADCE0] overflow-hidden">
                    <div className="h-full bg-[#9C27B0] rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Verification Matrix */}
            <div className="bg-[#F8F9FA] rounded-xl border border-[#DADCE0] p-4 space-y-3 shadow-2xs">
              <div className="font-bold text-[#202124] text-xs border-b border-[#DADCE0] pb-2 flex justify-between items-center">
                <span>Core Conversion &amp; Event Attribution Health</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 bg-[#FFFFFF] rounded-lg border border-[#DADCE0]">
                  <span className="font-semibold text-[#202124]">form_submit_lead</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">12.4K events</span>
                    <span className="bg-[#E6F4EA] text-[#1E8E3E] px-2 py-0.5 rounded font-bold text-[10px] border border-[#CEEAD6]">Key Event</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-[#FFFFFF] rounded-lg border border-[#DADCE0]">
                  <span className="font-semibold text-[#202124]">itinerary_customize_click</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">34.1K events</span>
                    <span className="bg-[#E8F0FE] text-[#4285F4] px-2 py-0.5 rounded font-bold text-[10px] border border-[#D2E3FC]">Custom Event</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 bg-[#FFFFFF] rounded-lg border border-[#DADCE0]">
                  <span className="font-semibold text-[#202124]">purchase_package</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">2.89K events</span>
                    <span className="bg-[#E6F4EA] text-[#1E8E3E] px-2 py-0.5 rounded font-bold text-[10px] border border-[#CEEAD6]">Key Event</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 5. Paid Search Campaign Performance */
  if (type === 'ppc_ads') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-50 p-2 rounded-lg text-[#1a73e8] border border-blue-100">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Paid Search Campaign Performance</div>
              <div className="text-xs text-slate-500">Google Ads &amp; Paid Funnel Management</div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 sm:p-5 shadow-xl select-none pointer-events-none cursor-default text-slate-800 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 font-semibold">Click Through Rate</div>
              <div className="text-lg font-black text-slate-900 mt-0.5">4.8%</div>
              <div className="text-[11px] text-emerald-600 font-bold">▲ Industry Avg: 3.1%</div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 font-semibold">Avg. CPC</div>
              <div className="text-lg font-black text-slate-900 mt-0.5">$0.32</div>
              <div className="text-[11px] text-emerald-600 font-bold">▼ Reduced by 18%</div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 font-semibold">Conversion Rate</div>
              <div className="text-lg font-black text-slate-900 mt-0.5">3.1%</div>
              <div className="text-[11px] text-emerald-600 font-bold">▲ High Conversion</div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 font-semibold">Quality Score</div>
              <div className="text-lg font-black text-slate-900 mt-0.5">9 / 10</div>
              <div className="text-[11px] text-emerald-600 font-bold">Max Ad Rank</div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-2">
            <div className="font-bold text-slate-900 text-xs border-b border-slate-200 pb-2">Campaign Optimizations Executed</div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Strict Negative Keyword Exclusions:</strong> Eliminated broad uncommercial terms to prevent budget waste.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Localized Bid Modifiers:</strong> Adjusted target bids based on regional purchasing power data.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  /* 6. GEO/AEO Optimization -> MUST HAVE BLACK BACKGROUND */
  if (type === 'aeo_geo') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-50 p-2 rounded-lg text-blue-600 border border-blue-100 flex items-center justify-center">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2Z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">GEO/AEO Optimization</div>
              <div className="text-xs text-slate-500">AI Search Visibility &amp; Citation Performance</div>
            </div>
          </div>
        </div>

        {/* PURE BLACK BACKGROUND CONTAINER */}
        <div className="bg-black border-2 border-slate-900 rounded-2xl p-4 sm:p-5 shadow-2xl select-none pointer-events-none cursor-default text-slate-100 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shadow-2xs">
              <div className="text-xs text-slate-400 font-semibold">LLM Share of Voice</div>
              <div className="text-lg font-black text-white mt-0.5">42.4%</div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shadow-2xs">
              <div className="text-xs text-slate-400 font-semibold">AI Citations / Mo</div>
              <div className="text-lg font-black text-white mt-0.5">12.4K</div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shadow-2xs">
              <div className="text-xs text-slate-400 font-semibold">Entity Score</div>
              <div className="text-lg font-black text-white mt-0.5">6.3 / 10</div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shadow-2xs">
              <div className="text-xs text-slate-400 font-semibold">Schema Index Match</div>
              <div className="text-lg font-black text-white mt-0.5">98.1%</div>
            </div>
          </div>

          <div className="bg-transparent p-4 rounded-xl border border-white/20 shadow-2xs space-y-3">
            <div className="text-xs font-normal text-slate-200">Brand Citation Share Across Major AI Models</div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-300 font-normal mb-1">
                  <span className="flex items-center gap-1.5">
                    <img src={chatgptIcon} alt="ChatGPT" className="w-3.5 h-3.5 object-contain shrink-0 filter brightness-0 invert" />
                    ChatGPT (OpenAI Search)
                  </span>
                  <span className="font-normal text-white">45% visibility</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 font-normal mb-1">
                  <span className="flex items-center gap-1.5">
                    <img src={googleGeminiIcon} alt="Googul Jemini" className="w-3.5 h-3.5 object-contain shrink-0" />
                    Googul Jemini
                  </span>
                  <span className="font-normal text-white">38% visibility</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: '38%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 font-normal mb-1">
                  <span className="flex items-center gap-1.5">
                    <img src={perplexityAiIcon} alt="Perplexity AI" className="w-3.5 h-3.5 object-contain shrink-0 filter brightness-0 invert" />
                    Perplexity AI
                  </span>
                  <span className="font-normal text-white">46% visibility</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '46%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 7. Online Reputation Management & Brand Sentiment (ORM) -> BLACK BACKGROUND POWER BI DASHBOARD */
  if (type === 'orm_rep') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-amber-500/10 p-2 rounded-lg text-amber-600 border border-amber-500/20">
              <Globe size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Online Reputation Management (ORM)</div>
              <div className="text-xs text-slate-500">Power BI Executive Brand Sentiment Dashboard</div>
            </div>
          </div>
        </div>

        {/* Black Power BI Dashboard Canvas */}
        <div className="bg-black border-2 border-slate-900 rounded-2xl overflow-hidden shadow-2xl select-none pointer-events-none cursor-default text-slate-100 space-y-0 p-4 sm:p-5">
          <div className="space-y-4">
            {/* Power BI Tile KPI Cards with Power BI Accent Borders */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-2xs border-t-4 border-t-[#F2C811]">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Positive Sentiment</div>
                <div className="text-xl font-black text-white mt-1">94.2%</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">▲ +4.2% vs last period</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-2xs border-t-4 border-t-teal-400">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Suppressed Links</div>
                <div className="text-xl font-black text-white mt-1">25 / 25</div>
                <div className="text-[10px] text-teal-400 font-bold mt-0.5">Page 2+ Pushed</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-2xs border-t-4 border-t-amber-400">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Review Score</div>
                <div className="text-xl font-black text-white mt-1">4.88 / 5.0</div>
                <div className="text-[10px] text-amber-400 font-bold mt-0.5">High Authority</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-2xs border-t-4 border-t-[#F2C811]">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Brand Score</div>
                <div className="text-xl font-black text-white mt-1">91 / 100</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">Top Tier Matrix</div>
              </div>
            </div>

            {/* Power BI Column Visual Tile (#06B6D4 Teal, #F2C811 Yellow & Dark Gray) */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-slate-100 flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Power BI Matrix &bull; SERP Page 1 Sentiment Breakdown</span>
                <span className="text-[11px] text-[#252423] font-black bg-[#F2C811] px-2 py-0.5 rounded">Filtered: Pickyourtrail Brand Query</span>
              </div>
              <div className="grid grid-cols-10 gap-1.5 h-9 pt-1">
                <div className="bg-teal-500 rounded text-xs text-slate-950 font-black flex items-center justify-center">1</div>
                <div className="bg-teal-500 rounded text-xs text-slate-950 font-black flex items-center justify-center">2</div>
                <div className="bg-teal-500 rounded text-xs text-slate-950 font-black flex items-center justify-center">3</div>
                <div className="bg-teal-500 rounded text-xs text-slate-950 font-black flex items-center justify-center">4</div>
                <div className="bg-[#F2C811] rounded text-xs text-[#252423] font-black flex items-center justify-center">5</div>
                <div className="bg-teal-500 rounded text-xs text-slate-950 font-black flex items-center justify-center">6</div>
                <div className="bg-teal-500 rounded text-xs text-slate-950 font-black flex items-center justify-center">7</div>
                <div className="bg-[#F2C811] rounded text-xs text-[#252423] font-black flex items-center justify-center">8</div>
                <div className="bg-teal-500 rounded text-xs text-slate-950 font-black flex items-center justify-center">9</div>
                <div className="bg-slate-700 rounded text-xs text-white font-black flex items-center justify-center">10</div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
                <span>Rank 1 (Top SERP)</span>
                <span className="flex items-center gap-3 font-semibold text-slate-300">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-teal-500 rounded-xs"></span> Positive</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#F2C811] rounded-xs"></span> Neutral</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-slate-700 rounded-xs"></span> Monitor</span>
                </span>
                <span>Rank 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 8. Conversion Rate Optimization (CRO) -> AUTHENTIC WHITE POWER BI DASHBOARD */
  if (type === 'cro_conv') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-50 p-2 rounded-lg text-blue-600 border border-blue-100">
              <ArrowUpRight size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Conversion Rate Optimization (CRO)</div>
              <div className="text-xs text-slate-500">Power BI Funnel &amp; E-Commerce Analytics</div>
            </div>
          </div>
        </div>

        {/* Authentic Light-Theme Power BI Report Canvas */}
        <div className="bg-[#F2F4F7] border border-slate-300 rounded-xl overflow-hidden shadow-md text-slate-800 font-sans select-none">
          {/* Top Blue Power BI Header Accent Bar */}
          <div className="bg-[#005A9E] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 border-b border-blue-900/20">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-wide text-white uppercase">
                CONVERSION RATE &amp; FUNNEL DASHBOARD
              </span>
            </div>
            {/* Power BI Slicers / Filter Controls */}
            <div className="flex items-center gap-2.5 text-xs">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/80 mb-0.5">Date Range</span>
                <div className="bg-white text-slate-800 px-2.5 py-0.5 rounded-xs flex items-center justify-between min-w-[100px] shadow-2xs border border-slate-200 text-[11px]">
                  <span>Last 30 Days</span>
                  <span className="text-[8px] text-blue-700 ml-1.5">▼</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/80 mb-0.5">Channel</span>
                <div className="bg-white text-slate-800 px-2.5 py-0.5 rounded-xs flex items-center justify-between min-w-[90px] shadow-2xs border border-slate-200 text-[11px]">
                  <span>All Channels</span>
                  <span className="text-[8px] text-blue-700 ml-1.5">▼</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/80 mb-0.5">Device</span>
                <div className="bg-white text-slate-800 px-2.5 py-0.5 rounded-xs flex items-center justify-between min-w-[80px] shadow-2xs border border-slate-200 text-[11px]">
                  <span>All Devices</span>
                  <span className="text-[8px] text-blue-700 ml-1.5">▼</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 space-y-4">
            {/* Power BI Metric KPI Tile Cards (White Background, Subtle Borders, Dark Text) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              <div className="bg-white p-3.5 rounded-md border border-slate-200 shadow-2xs text-center relative overflow-hidden">
                <div className="w-full h-1 bg-[#0078D4] absolute top-0 left-0"></div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Conversion Rate</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">2.41%</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center justify-center gap-0.5">
                  <span>▲</span> +22.4%
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-md border border-slate-200 shadow-2xs text-center relative overflow-hidden">
                <div className="w-full h-1 bg-teal-500 absolute top-0 left-0"></div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Cart Abandonment</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">55.7%</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center justify-center gap-0.5">
                  <span>▼</span> -18.0%
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-md border border-slate-200 shadow-2xs text-center relative overflow-hidden">
                <div className="w-full h-1 bg-amber-500 absolute top-0 left-0"></div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Session Duration</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">3m 45s</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center justify-center gap-0.5">
                  <span>▲</span> +25.0%
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-md border border-slate-200 shadow-2xs text-center relative overflow-hidden">
                <div className="w-full h-1 bg-[#0078D4] absolute top-0 left-0"></div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Core Web Vitals</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">1.4s LCP</div>
              </div>
            </div>

            {/* Power BI Funnel Visual Tile (White Background, Circular Progress Rings) */}
            <div className="bg-white p-4.5 rounded-md border border-slate-200 shadow-2xs space-y-4">
              <div className="text-xs font-bold text-slate-800 border-b border-slate-100 pb-2.5 flex flex-wrap justify-between items-center gap-2">
                <span className="text-slate-900 text-sm">Power BI Funnel Visual &bull; Booking Steps Conversion</span>
                <span className="text-xs text-blue-900 font-bold bg-blue-50 px-2.5 py-1 rounded border border-blue-200">Total Visitors: 120,000</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-1">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center p-3.5 bg-slate-50/80 rounded-lg border border-slate-200/80">
                  <div className="relative w-20 h-20 flex items-center justify-center mb-2.5">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 70 70">
                      <circle cx="35" cy="35" r="28" fill="none" stroke="#E2E8F0" strokeWidth="6" />
                      <circle cx="35" cy="35" r="28" fill="none" stroke="#14B8A6" strokeWidth="6" strokeDasharray="175.9 175.9" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm font-extrabold text-slate-900">100%</span>
                      <span className="text-[10px] text-slate-500 font-medium">120K</span>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-800">1. Landing Page Visit</div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center p-3.5 bg-slate-50/80 rounded-lg border border-slate-200/80">
                  <div className="relative w-20 h-20 flex items-center justify-center mb-2.5">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 70 70">
                      <circle cx="35" cy="35" r="28" fill="none" stroke="#E2E8F0" strokeWidth="6" />
                      <circle cx="35" cy="35" r="28" fill="none" stroke="#2563EB" strokeWidth="6" strokeDasharray="79.15 175.9" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm font-extrabold text-slate-900">45%</span>
                      <span className="text-[10px] text-slate-500 font-medium">54K</span>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-800">2. Package Details View</div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center p-3.5 bg-slate-50/80 rounded-lg border border-slate-200/80">
                  <div className="relative w-20 h-20 flex items-center justify-center mb-2.5">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 70 70">
                      <circle cx="35" cy="35" r="28" fill="none" stroke="#E2E8F0" strokeWidth="6" />
                      <circle cx="35" cy="35" r="28" fill="none" stroke="#F59E0B" strokeWidth="6" strokeDasharray="31.66 175.9" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm font-extrabold text-slate-900">18%</span>
                      <span className="text-[10px] text-slate-500 font-medium">21.6K</span>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-800">3. Itinerary Customization</div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center p-3.5 bg-slate-50/80 rounded-lg border border-slate-200/80">
                  <div className="relative w-20 h-20 flex items-center justify-center mb-2.5">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 70 70">
                      <circle cx="35" cy="35" r="28" fill="none" stroke="#E2E8F0" strokeWidth="6" />
                      <circle cx="35" cy="35" r="28" fill="none" stroke="#10B981" strokeWidth="6" strokeDasharray="4.24 175.9" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-sm font-extrabold text-emerald-700">2.41%</span>
                      <span className="text-[10px] text-slate-500 font-medium">2.89K</span>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-800">4. Complete Booking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
