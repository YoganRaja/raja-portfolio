export enum SearchTab {
  AI_MODE = 'ai_mode',
  ALL = 'all',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  EDUCATION = 'education',
  CONTACT = 'contact'
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  metrics: string;
  description: string;
  technologies: string[];
  link?: string;
  dashboardType?: 'gsc_core' | 'gsc_switzerland' | 'semrush_gap' | 'ga4_pyt' | 'ppc_ads' | 'aeo_geo' | 'orm_rep' | 'cro_conv';
  dashboardData?: any;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; iconName: string }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  link?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  breadcrumbs: string;
  snippet: string;
  tab: SearchTab;
  sitelinks?: { title: string; description: string; tabTarget: SearchTab; program?: 'mba' | 'be' }[];
}
