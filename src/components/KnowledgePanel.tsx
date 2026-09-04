import { Mail, Linkedin, Globe, MapPin, GraduationCap, Award, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS } from '../data';

interface KnowledgePanelProps {
  onSearchConcept: (concept: string) => void;
  onOpenResumeModal?: () => void;
}

export default function KnowledgePanel({ onSearchConcept, onOpenResumeModal }: KnowledgePanelProps) {
  const handleDownloadCV = () => {
    if (onOpenResumeModal) {
      onOpenResumeModal();
    } else {
      window.print();
    }
  };

  const peopleAlsoSearch = [
    { name: 'Pickyourtrail SEO', query: 'experience' },
    { name: 'Technical SEO Audits', query: 'skills' },
    { name: 'Conversion Rate Opt.', query: 'skills' },
    { name: 'Academic Research', query: 'education' },
  ];

  return (
    <div className="w-full lg:max-w-[368px] bg-[#171717] rounded-xl border border-[#303134] text-[#e8eaed] font-sans overflow-hidden sticky top-24">
      {/* Visual Header Banner - Styled to represent search engine knowledge card */}
      <div className="h-28 bg-gradient-to-tr from-indigo-900 via-[#1f1f1f] to-slate-800 relative flex items-end p-4">
        <div className="absolute inset-0 bg-black/25"></div>
        {/* Profile Initial Logo */}
        <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-tr from-[#8ab4f8] to-purple-400 text-[#001d35] font-extrabold text-xl flex items-center justify-center border-2 border-[#171717] shadow-md">
          RCK
        </div>
        <div className="relative z-10 ml-3 mb-1">
          <h2 className="text-lg font-bold leading-tight flex items-center gap-1.5">
            {PERSONAL_INFO.name}
            <Award size={14} className="text-[#8ab4f8]" title="Verified Specialist" />
          </h2>
          <p className="text-[11px] text-[#bdc1c6] uppercase font-sans font-medium">{PERSONAL_INFO.title}</p>
        </div>
      </div>

      <div className="p-4 space-y-4 text-[13px] leading-relaxed">
        {/* Short Bio */}
        <p className="text-[#bdc1c6] border-b border-[#303134] pb-3">
          {PERSONAL_INFO.bio}
        </p>

        {/* Structured Profile Stats */}
        <div className="space-y-3 pb-3 border-b border-[#303134]">
          <div className="flex items-start gap-2">
            <MapPin size={16} className="text-gray-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-400">Located: </span>
              <span className="text-[#8ab4f8]">{PERSONAL_INFO.location}</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <GraduationCap size={16} className="text-gray-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-400">Education: </span>
              <span className="hover:underline cursor-pointer text-[#8ab4f8]" onClick={() => onSearchConcept('education')}>
                SRM Easwari (MBA) &amp; Anna Univ (BE)
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Globe size={16} className="text-gray-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-400">Languages: </span>
              <span>English, Tamil (Fluent)</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Mail size={16} className="text-gray-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-gray-400">E-mail: </span>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yoganraja.126@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8ab4f8] hover:underline font-sans"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Certifications Quick View */}
        <div>
          <h4 className="font-semibold text-xs uppercase text-[#bdc1c6] mb-2 font-sans">Certifications</h4>
          <div className="space-y-2">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="bg-white/5 p-2 rounded border border-white/5 flex flex-col">
                <span className="font-medium text-[#e8eaed] text-xs">{cert.name}</span>
                <span className="text-[10px] text-gray-400">{cert.issuer} &bull; {cert.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2 border-t border-[#303134]">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-1.5 py-2 bg-[#303134] hover:bg-[#3c4043] rounded-md font-medium text-xs text-[#8ab4f8] transition-colors border border-white/5 cursor-pointer"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <button
              onClick={handleDownloadCV}
              className="flex items-center justify-center gap-1.5 py-2 bg-[#303134] hover:bg-[#3c4043] rounded-md font-medium text-xs text-white transition-colors border border-white/5 cursor-pointer"
            >
              Print / Save CV
            </button>
          </div>
        </div>

        {/* People Also Search For */}
        <div className="pt-3 border-t border-[#303134]">
          <h4 className="font-semibold text-xs uppercase text-gray-400 mb-2.5 font-sans">People also search for</h4>
          <div className="grid grid-cols-2 gap-2">
            {peopleAlsoSearch.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onSearchConcept(item.query)}
                className="p-2.5 bg-[#303134]/30 hover:bg-[#303134] rounded-lg border border-white/5 transition-colors cursor-pointer group/item flex items-center justify-between"
              >
                <span className="text-[11px] font-medium text-gray-300 group-hover/item:text-white truncate pr-1">{item.name}</span>
                <ArrowUpRight size={12} className="text-gray-500 group-hover/item:text-[#8ab4f8] shrink-0 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
