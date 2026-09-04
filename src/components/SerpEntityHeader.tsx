import React from 'react';
import { MoreVertical, Linkedin, Images, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

import headshotImg from '../assets/images/Nikon-DCIM-Headshot.jpg';
import patternDesign1Img from '../assets/images/pattern-design-1.webp';
import patternDesign2Img from '../assets/images/pattern-design-2.webp';

export default function SerpEntityHeader() {
  return (
    <div id="serp-entity-header" className="w-full font-sans text-[#e8eaed] animate-fade-in">
      {/* Title & Subtitle Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Raja Chera Kesaree
          </h1>
          <p className="text-sm text-[#9aa0a6] mt-1 font-medium">
            SEO Fresher &amp; Digital Marketer &bull; Chennai, India
          </p>
        </div>
        <button 
          className="text-[#9aa0a6] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          title="More options"
        >
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Entity Banner Cards Grid - Proportions matching reference image */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left Card: Multi-photo Showcase Grid (spans 6 of 12 cols, ~50%) */}
        <div className="md:col-span-6 relative bg-[#303134] rounded-2xl overflow-hidden border border-[#3c4043]/80 group flex flex-col justify-between min-h-[220px] shadow-sm">
          <div className="grid grid-cols-3 gap-0.5 h-full min-h-[210px]">
            {/* Main Left Photo (2 cols) */}
            <div className="col-span-2 relative overflow-hidden bg-black/40">
              <img 
                src={headshotImg} 
                alt="Raja Chera Kesaree Headshot" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Right Stacked Thumbnails (1 col) */}
            <div className="col-span-1 grid grid-rows-2 gap-0.5 h-full">
              <div className="relative overflow-hidden bg-black/40">
                <img 
                  src={patternDesign1Img} 
                  alt="Pattern Design 1" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative overflow-hidden bg-black/40">
                <img 
                  src={patternDesign2Img} 
                  alt="Pattern Design 2" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Overlays */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 flex items-center justify-between pointer-events-none">
            <span className="text-[11px] font-medium text-white/90 drop-shadow">
              Source: GitHub
            </span>
            <div className="p-1.5 rounded-lg bg-black/60 text-white border border-white/20 backdrop-blur-sm">
              <Images size={14} />
            </div>
          </div>
        </div>

        {/* Middle Card: Social Post Update Card (spans 3 of 12 cols, ~25%) */}
        <div className="md:col-span-3 bg-[#303134] rounded-2xl p-4 border border-[#3c4043]/80 flex flex-col justify-between space-y-3 shadow-sm">
          <div className="space-y-3">
            {/* Card Header with Social Badge */}
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow">
                <Linkedin size={16} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-xs font-bold text-white leading-tight truncate">Raja Chera Kesaree</h3>
                <p className="text-[11px] text-[#9aa0a6] truncate">@rajacherakesaree</p>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-xs text-[#bdc1c6] leading-relaxed line-clamp-5">
              Achieved <strong className="text-white">4.3M+ organic impressions</strong> &amp; <strong className="text-white">120k+ clicks</strong> for Pickyourtrail through technical SEO audits, site speed optimization, and high-converting keyword matrices.
            </p>
          </div>

          <div className="text-[11px] text-[#9aa0a6] pt-2 border-t border-[#3c4043]/60 flex items-center justify-between">
            <span>1 day ago</span>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8ab4f8] hover:underline flex items-center gap-1 font-medium"
            >
              View post <ExternalLink size={10} />
            </a>
          </div>
        </div>

        {/* Right Column: Attribute Cards + LinkedIn Highlight Card (spans 3 of 12 cols, ~25%) */}
        <div className="md:col-span-3 flex flex-col justify-between space-y-2.5">
          {/* Top Row: Attribute Cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#303134] rounded-2xl p-3.5 border border-[#3c4043]/80 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-[#9aa0a6] block">Experience</span>
              <div className="mt-1">
                <p className="text-sm font-bold text-white">9 months</p>
                <p className="text-[10px] text-[#9aa0a6] truncate">SEO &amp; Growth</p>
              </div>
            </div>
            <div className="bg-[#303134] rounded-2xl p-3.5 border border-[#3c4043]/80 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-[#9aa0a6] block">Recent Role</span>
              <div className="mt-1">
                <p className="text-sm font-bold text-white">SEO Intern</p>
                <p className="text-[10px] text-[#9aa0a6] truncate">Pickyourtrail</p>
              </div>
            </div>
          </div>

          {/* Bottom LinkedIn Highlight Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="bg-[#303134] hover:bg-[#383a3e] transition-colors rounded-2xl p-3.5 border border-[#3c4043]/80 flex-1 flex flex-col justify-between group cursor-pointer shadow-sm"
          >
            <div>
              <div className="flex items-center space-x-1.5 text-[#8ab4f8] text-[11px] font-semibold mb-1">
                <Linkedin size={13} className="text-[#0A66C2]" />
                <span>LinkedIn</span>
              </div>
              <h4 className="text-xs font-bold text-white group-hover:text-[#8ab4f8] transition-colors line-clamp-2 leading-snug">
                Raja Chera Kesaree - SEO Specialist | Digital Marketer
              </h4>
              <p className="text-[11px] text-[#9aa0a6] mt-1 line-clamp-2 leading-snug">
                SEO Specialist in Chennai. Technical SEO, Google Search Console, A/B Testing &amp; growth.
              </p>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

