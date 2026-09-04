import { useState, useEffect } from 'react';
import SearchHomepage from './components/SearchHomepage';
import SearchResultsPage from './components/SearchResultsPage';
import ExperienceSite from './components/ExperienceSite';
import ProjectsSite from './components/ProjectsSite';
import SkillsSite from './components/SkillsSite';
import EducationSite from './components/EducationSite';
import ContactSite from './components/ContactSite';
import AiModeSite from './components/AiModeSite';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname;
    return path === '/index.html' ? '/' : path;
  });
  const [eduProgram, setEduProgram] = useState<'mba' | 'be'>('mba');
  const [searchQuery, setSearchQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') || 'RAJA CHERA KESAREE';
  });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path === '/index.html' ? '/' : path);
      const params = new URLSearchParams(window.location.search);
      setSearchQuery(params.get('q') || 'RAJA CHERA KESAREE');
      if (params.get('program') === 'be') setEduProgram('be');
      if (params.get('program') === 'mba') setEduProgram('mba');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string, q?: string, program?: 'mba' | 'be') => {
    if (program) {
      setEduProgram(program);
    } else if (path.includes('be')) {
      setEduProgram('be');
    } else if (path.includes('mba')) {
      setEduProgram('mba');
    }

    const url = new URL(window.location.origin + path);
    if (q) {
      url.searchParams.set('q', q);
    }
    if (program) {
      url.searchParams.set('program', program);
    }
    window.history.pushState(null, '', url.pathname + url.search);
    setCurrentPath(path);
    if (q) setSearchQuery(q);
  };

  const handleBack = () => {
    if (window.history.state || window.history.length > 1) {
      window.history.back();
    } else {
      navigateTo('/search', searchQuery);
    }
  };

  const handleSearch = (query: string) => {
    const queryLower = query.toLowerCase().trim();
    if (queryLower === 'experience') {
      navigateTo('/experience');
    } else if (queryLower === 'projects') {
      navigateTo('/projects');
    } else if (queryLower === 'skills') {
      navigateTo('/skills');
    } else if (queryLower === 'education') {
      navigateTo('/education');
    } else if (queryLower === 'contact') {
      navigateTo('/contact');
    } else if (queryLower === 'ai mode' || queryLower === 'ai_mode' || queryLower === 'ai-mode') {
      navigateTo('/ai-mode');
    } else {
      navigateTo('/search', query);
    }
  };

  const handleOpenResumeModal = () => setIsResumeModalOpen(true);

  let viewComponent;
  switch (currentPath) {
    case '/':
      viewComponent = <SearchHomepage onSearch={handleSearch} onOpenResumeModal={handleOpenResumeModal} />;
      break;
    case '/search':
      viewComponent = (
        <SearchResultsPage 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onNavigate={navigateTo}
          onReset={() => navigateTo('/')}
          onOpenResumeModal={handleOpenResumeModal}
        />
      );
      break;
    case '/experience':
      viewComponent = <ExperienceSite onBack={handleBack} onOpenResumeModal={handleOpenResumeModal} />;
      break;
    case '/projects':
      viewComponent = <ProjectsSite onBack={handleBack} onOpenResumeModal={handleOpenResumeModal} />;
      break;
    case '/skills':
      viewComponent = <SkillsSite onBack={handleBack} onOpenResumeModal={handleOpenResumeModal} />;
      break;
    case '/education':
      viewComponent = <EducationSite program={eduProgram} onBack={handleBack} onSwitchProgram={(p) => setEduProgram(p)} onNavigate={navigateTo} onOpenResumeModal={handleOpenResumeModal} />;
      break;
    case '/contact':
      viewComponent = <ContactSite onBack={handleBack} />;
      break;
    case '/ai-mode':
    case '/ai_mode':
      viewComponent = <AiModeSite onBack={handleBack} onNavigate={navigateTo} />;
      break;
    default:
      const pathStr = currentPath || '';
      if (pathStr.startsWith('/search')) {
        viewComponent = (
          <SearchResultsPage 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onNavigate={navigateTo}
            onReset={() => navigateTo('/')}
            onOpenResumeModal={handleOpenResumeModal}
          />
        );
      } else if (pathStr.includes('experience')) {
        viewComponent = <ExperienceSite onBack={handleBack} onOpenResumeModal={handleOpenResumeModal} />;
      } else if (pathStr.includes('projects')) {
        viewComponent = <ProjectsSite onBack={handleBack} onOpenResumeModal={handleOpenResumeModal} />;
      } else if (pathStr.includes('skills')) {
        viewComponent = <SkillsSite onBack={handleBack} onOpenResumeModal={handleOpenResumeModal} />;
      } else if (pathStr.includes('education')) {
        viewComponent = <EducationSite program={eduProgram} onBack={handleBack} onSwitchProgram={(p) => setEduProgram(p)} onNavigate={navigateTo} onOpenResumeModal={handleOpenResumeModal} />;
      } else if (pathStr.includes('contact')) {
        viewComponent = <ContactSite onBack={handleBack} />;
      } else if (pathStr.includes('ai-mode') || pathStr.includes('ai_mode')) {
        viewComponent = <AiModeSite onBack={handleBack} onNavigate={navigateTo} />;
      } else {
        viewComponent = <SearchHomepage onSearch={handleSearch} onOpenResumeModal={handleOpenResumeModal} />;
      }
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      {viewComponent}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        theme={
          currentPath.includes('experience')
            ? 'experience'
            : currentPath.includes('projects')
            ? 'projects'
            : currentPath.includes('education')
            ? 'education'
            : 'dark'
        }
      />
    </div>
  );
}
