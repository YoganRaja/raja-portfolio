import React from 'react';
import { 
  BarChart2, TrendingUp, CheckCircle, ArrowUpRight, Globe, 
  Search, Calendar, Filter, Grid, Check, Sparkles,
  CheckCircle2, AlertCircle, ExternalLink
} from 'lucide-react';

interface ProjectDashboardProps {
  type: 'gsc_core' | 'gsc_switzerland' | 'semrush_gap' | 'ga4_pyt' | 'ppc_ads' | 'aeo_geo' | 'orm_rep' | 'cro_conv';
}

export default function ProjectDashboard({ type }: ProjectDashboardProps) {
  /* 1. Google Search Console Core Performance */
  if (type === 'gsc_core') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-50 p-2 rounded-lg text-[#1a73e8] border border-blue-100">
              <BarChart2 size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Google Search Console Performance</div>
              <div className="text-xs text-slate-500">Property: <span className="font-semibold text-slate-700">pickyourtrail.com</span></div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 border border-slate-200 shadow-2xs">
            <Calendar size={13} className="text-slate-500" />
            <span>Last 3 Months</span>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 sm:p-5 shadow-xl select-none pointer-events-none cursor-default text-slate-800 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-slate-50 p-3.5 rounded-xl border-l-4 border-l-[#1a73e8] border-t border-r border-b border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 font-semibold flex items-center justify-between">
                <span>Total Clicks</span>
                <span className="w-2 h-2 rounded-full bg-[#1a73e8]"></span>
              </div>
              <div className="text-xl font-black text-slate-900 mt-1">459K</div>
              <div className="text-xs text-emerald-600 font-bold mt-0.5">▲ +24% vs Prev</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border-l-4 border-l-indigo-500 border-t border-r border-b border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 font-semibold flex items-center justify-between">
                <span>Total Impressions</span>
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              </div>
              <div className="text-xl font-black text-slate-900 mt-1">64M</div>
              <div className="text-xs text-emerald-600 font-bold mt-0.5">▲ +18.7M growth</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border-l-4 border-l-amber-500 border-t border-r border-b border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 font-semibold flex items-center justify-between">
                <span>Average CTR</span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              </div>
              <div className="text-xl font-black text-slate-900 mt-1">0.7%</div>
              <div className="text-xs text-slate-500 mt-0.5">Aligned with scale</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border-l-4 border-l-emerald-500 border-t border-r border-b border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 font-semibold flex items-center justify-between">
                <span>Average Position</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-xl font-black text-slate-900 mt-1">8.5</div>
              <div className="text-xs text-emerald-600 font-bold mt-0.5">▼ Improved from 20.2</div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-900">Search Click &amp; Impression Timeline</span>
              <div className="flex gap-3 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-[#1a73e8] rounded-full"></span> Clicks</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-indigo-500 rounded-full"></span> Impressions</span>
              </div>
            </div>
            <div className="h-32 relative">
              <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                <line x1="0" y1="25" x2="400" y2="25" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="#e2e8f0" strokeWidth="1" />
                
                <path 
                  d="M 0 85 Q 40 78 80 72 T 160 55 T 240 38 T 320 22 T 400 15 L 400 100 L 0 100 Z" 
                  fill="rgba(99, 102, 241, 0.1)" 
                />
                <path 
                  d="M 0 85 Q 40 78 80 72 T 160 55 T 240 38 T 320 22 T 400 15" 
                  fill="none" 
                  stroke="#6366f1" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />

                <path 
                  d="M 0 90 Q 40 85 80 82 T 160 68 T 240 45 T 320 28 T 400 19" 
                  fill="none" 
                  stroke="#1a73e8" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />

                <circle cx="400" cy="19" r="4" fill="#1a73e8" />
                <circle cx="400" cy="15" r="4" fill="#6366f1" />
              </svg>
              <span className="absolute left-1 bottom-1 text-[10px] text-slate-400 font-medium">Oct 2025</span>
              <span className="absolute right-1 bottom-1 text-[10px] text-slate-400 font-medium">Current</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
            <div className="flex border-b border-slate-200 bg-slate-50">
              <span className="px-4 py-2.5 font-bold text-xs border-b-2 border-[#1a73e8] text-[#1a73e8] bg-white">
                Top Queries &amp; Pages
              </span>
            </div>

            <div className="p-3 text-xs space-y-1">
              <div className="grid grid-cols-3 text-slate-500 font-bold pb-2 border-b border-slate-200">
                <span>Search Query</span>
                <span className="text-right">Clicks</span>
                <span className="text-right">Impressions</span>
              </div>
              <div className="grid grid-cols-3 text-slate-800 py-2 border-b border-slate-100 font-medium">
                <span>pick your trail</span>
                <span className="text-right font-bold text-[#1a73e8]">33,100</span>
                <span className="text-right text-slate-500">412,000</span>
              </div>
              <div className="grid grid-cols-3 text-slate-800 py-2 border-b border-slate-100 font-medium">
                <span>maldives package from india</span>
                <span className="text-right font-bold text-[#1a73e8]">18,400</span>
                <span className="text-right text-slate-500">245,000</span>
              </div>
              <div className="grid grid-cols-3 text-slate-800 py-2 border-b border-slate-100 font-medium">
                <span>switzerland tour package</span>
                <span className="text-right font-bold text-[#1a73e8]">11,900</span>
                <span className="text-right text-slate-500">2,370,000</span>
              </div>
              <div className="grid grid-cols-3 text-slate-800 py-2 font-medium">
                <span>europe tour packages</span>
                <span className="text-right font-bold text-[#1a73e8]">9,200</span>
                <span className="text-right text-slate-500">1,180,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 2. Switzerland Campaign Growth */
  if (type === 'gsc_switzerland') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
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

        <div className="bg-white border-2 border-slate-900 rounded-2xl p-4 sm:p-5 shadow-xl select-none pointer-events-none cursor-default text-slate-800 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-2">
              <div className="font-bold text-slate-500 text-xs uppercase tracking-wider">Before Campaign</div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <div className="text-[11px] text-slate-500">Clicks</div>
                  <div className="text-base font-bold text-slate-800 mt-0.5">3.99K</div>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <div className="text-[11px] text-slate-500">Impressions</div>
                  <div className="text-base font-bold text-slate-800 mt-0.5">871K</div>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200">
                  <div className="text-[11px] text-slate-500">Avg Pos</div>
                  <div className="text-base font-bold text-slate-800 mt-0.5">9.1</div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50/60 p-4 rounded-xl border border-teal-200 shadow-2xs space-y-2">
              <div className="font-bold text-teal-800 text-xs uppercase tracking-wider flex items-center justify-between">
                <span>Post Campaign Growth</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2 bg-white rounded-lg border border-teal-200 shadow-2xs">
                  <div className="text-[11px] text-slate-600">Clicks</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">11.9K</div>
                  <div className="text-[10px] text-emerald-600 font-bold">📈 +198%</div>
                </div>
                <div className="p-2 bg-white rounded-lg border border-teal-200 shadow-2xs">
                  <div className="text-[11px] text-slate-600">Impressions</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">2.37M</div>
                  <div className="text-[10px] text-emerald-600 font-bold">📈 +172%</div>
                </div>
                <div className="p-2 bg-white rounded-lg border border-teal-200 shadow-2xs">
                  <div className="text-[11px] text-slate-600">Ranked Terms</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">285</div>
                  <div className="text-[10px] text-teal-700 font-bold">Top 10</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-xs">High Yield Keywords Ranking Top 10</span>
              <span className="text-xs text-slate-500">285 Keywords Mapped</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="grid grid-cols-4 text-slate-500 font-bold pb-1.5 border-b border-slate-200">
                <span>Target Keyword</span>
                <span className="text-right">Volume</span>
                <span className="text-right">KD%</span>
                <span className="text-right">Rank</span>
              </div>
              <div className="grid grid-cols-4 text-slate-800 py-1.5 border-b border-slate-200/60 font-medium">
                <span className="truncate font-semibold">switzerland packages</span>
                <span className="text-right">22,200</span>
                <span className="text-right text-amber-600 font-semibold">58%</span>
                <span className="text-right text-emerald-600 font-extrabold">#3</span>
              </div>
              <div className="grid grid-cols-4 text-slate-800 py-1.5 border-b border-slate-200/60 font-medium">
                <span className="truncate font-semibold">switzerland tour from india</span>
                <span className="text-right">14,800</span>
                <span className="text-right text-amber-600 font-semibold">52%</span>
                <span className="text-right text-emerald-600 font-extrabold">#4</span>
              </div>
              <div className="grid grid-cols-4 text-slate-800 py-1.5 border-b border-slate-200/60 font-medium">
                <span className="truncate font-semibold">switzerland packages honeymoon</span>
                <span className="text-right">8,100</span>
                <span className="text-right text-emerald-600 font-semibold">42%</span>
                <span className="text-right text-emerald-600 font-extrabold">#5</span>
              </div>
              <div className="grid grid-cols-4 text-slate-800 py-1.5 font-medium">
                <span className="truncate font-semibold">trip to switzerland cost</span>
                <span className="text-right">9,900</span>
                <span className="text-right text-amber-600 font-semibold">60%</span>
                <span className="text-right text-emerald-600 font-extrabold">#7</span>
              </div>
            </div>
          </div>
        </div>
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

  /* 6. Generative AI & Search Engine Optimization (AEO/GEO) -> MUST HAVE BLACK BACKGROUND */
  if (type === 'aeo_geo') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-purple-50 p-2 rounded-lg text-purple-600 border border-purple-100">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Generative Engine Optimization (GEO/AEO)</div>
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
              <div className="text-[11px] text-emerald-400 font-bold">▲ Category Lead</div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shadow-2xs">
              <div className="text-xs text-slate-400 font-semibold">AI Citations / Mo</div>
              <div className="text-lg font-black text-white mt-0.5">12.4K</div>
              <div className="text-[11px] text-emerald-400 font-bold">Verified Links</div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shadow-2xs">
              <div className="text-xs text-slate-400 font-semibold">Entity Score</div>
              <div className="text-lg font-black text-white mt-0.5">9.4 / 10</div>
              <div className="text-[11px] text-purple-400 font-bold">High Authority</div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 shadow-2xs">
              <div className="text-xs text-slate-400 font-semibold">Schema Index Match</div>
              <div className="text-lg font-black text-white mt-0.5">98.1%</div>
              <div className="text-[11px] text-emerald-400 font-bold">Valid JSON LD</div>
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-2xs space-y-3">
            <div className="text-xs font-bold text-slate-200">Brand Citation Share Across Major AI Models</div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                  <span>ChatGPT (OpenAI Search)</span>
                  <span className="font-bold text-white">45% visibility</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                  <span>Google Gemini</span>
                  <span className="font-bold text-white">38% visibility</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: '38%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                  <span>Perplexity AI</span>
                  <span className="font-bold text-white">46% visibility</span>
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

  /* 8. Conversion Rate Optimization (CRO) -> BLACK BACKGROUND POWER BI DASHBOARD */
  if (type === 'cro_conv') {
    return (
      <div className="font-sans text-xs mt-1 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="bg-amber-500/10 p-2 rounded-lg text-amber-600 border border-amber-500/20">
              <ArrowUpRight size={18} />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Conversion Rate Optimization (CRO)</div>
              <div className="text-xs text-slate-500">Power BI Funnel &amp; E-Commerce Analytics</div>
            </div>
          </div>
        </div>

        {/* Black Power BI Dashboard Canvas */}
        <div className="bg-black border-2 border-slate-900 rounded-2xl overflow-hidden shadow-2xl select-none pointer-events-none cursor-default text-slate-100 space-y-0 p-4 sm:p-5">
          <div className="space-y-4">
            {/* Power BI KPI Tile Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-2xs border-t-4 border-t-[#F2C811]">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Conversion Rate</div>
                <div className="text-xl font-black text-white mt-1">2.41%</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">▲ +34.2% vs last period</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-2xs border-t-4 border-t-teal-400">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Cart Abandonment</div>
                <div className="text-xl font-black text-white mt-1">55.7%</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">▼ -18.0% vs last period</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-2xs border-t-4 border-t-amber-400">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Session Duration</div>
                <div className="text-xl font-black text-white mt-1">3m 45s</div>
                <div className="text-[10px] text-amber-400 font-bold mt-0.5">▲ +25.0% vs last period</div>
              </div>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 shadow-2xs border-t-4 border-t-[#F2C811]">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Core Web Vitals</div>
                <div className="text-xl font-black text-white mt-1">1.4s LCP</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">▲ 0.2s faster</div>
              </div>
            </div>

            {/* Power BI Funnel Visual Tile */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-2xs space-y-3">
              <div className="text-xs font-bold text-slate-100 border-b border-slate-800 pb-2 flex justify-between items-center">
                <span>Power BI Funnel Visual &bull; Booking Steps Conversion</span>
                <span className="text-[11px] text-amber-400 font-black bg-slate-800 px-2 py-0.5 rounded border border-slate-700">Total Visitors: 120,000</span>
              </div>
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                    <span>1. Landing Page Visit</span>
                    <span className="font-bold text-white">100% (120K)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                    <span>2. Package Details View</span>
                    <span className="font-bold text-white">45% (54K)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                    <span>3. Itinerary Customization</span>
                    <span className="font-bold text-white">18% (21.6K)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
                    <div className="h-full bg-[#F2C811] rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                    <span>4. Complete Booking</span>
                    <span className="text-emerald-400 font-extrabold">2.41% (2.89K)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '12%' }}></div>
                  </div>
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
