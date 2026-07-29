import { SearchResult, SearchTab } from '../types';

interface SearchResultItemProps {
  key?: string;
  result: SearchResult;
  onTabChange: (tab: SearchTab) => void;
  onSelectResultDetail?: (id: string, program?: 'mba' | 'be') => void;
}

export default function SearchResultItem({ result, onTabChange, onSelectResultDetail }: SearchResultItemProps) {
  return (
    <div className="mb-8 font-sans max-w-[652px] group">
      {/* Breadcrumb / URL */}
      <div className="flex items-center space-x-1.5 text-xs text-[#bdc1c6] mb-1.5">
        <span className="truncate">{result.breadcrumbs}</span>
        <button className="text-gray-500 hover:text-gray-300">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      {/* Main Title - Intercept non-LinkedIn clicks for internal navigation */}
      <h3 className="text-xl text-[#8ab4f8] group-hover:underline cursor-pointer font-normal line-clamp-1 mb-1.5">
        {result.id === 'res-linkedin' ? (
          <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-[#8ab4f8]">
            {result.title}
          </a>
        ) : (
          <a 
            href={result.url} 
            onClick={(e) => {
              e.preventDefault();
              if (onSelectResultDetail && (result.id === 'res-academics' || result.id === 'res-edu-mba' || result.id === 'res-edu-be')) {
                onSelectResultDetail(result.id, 'mba');
              } else {
                onTabChange(result.tab);
              }
            }} 
            className="text-[#8ab4f8]"
          >
            {result.title}
          </a>
        )}
      </h3>

      {/* Snippet / Description */}
      <p className="text-[#bdc1c6] text-[15px] leading-relaxed font-normal mb-3">
        {result.snippet}
      </p>

      {/* Interactive Sitelinks */}
      {result.sitelinks && result.sitelinks.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-4 pl-4 border-l border-[#303134]">
          {result.sitelinks.map((link, idx) => (
            <div key={idx} className="flex flex-col">
              <span
                onClick={() => {
                  if (link.program && onSelectResultDetail) {
                    onSelectResultDetail(result.id, link.program);
                  } else {
                    onTabChange(link.tabTarget);
                  }
                }}
                className="text-[15px] text-[#8ab4f8] hover:underline cursor-pointer mb-0.5"
              >
                {link.title}
              </span>
              <span className="text-[12px] text-[#9aa0a6] leading-normal line-clamp-2">
                {link.description}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
