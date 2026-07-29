import { SearchTab, ExperienceItem, ProjectItem, SkillCategory, CertificationItem, SearchResult } from './types';

export const PERSONAL_INFO = {
  name: 'RAJA CHERA KESAREE',
  fullName: 'Raja Chera Kesaree',
  title: 'SEO Specialist & Digital Marketer',
  location: 'Chennai, India',
  email: 'yoganraja.126@gmail.com',
  linkedin: 'https://linkedin.com/in/raja-chera-kesaree-4aa858278',
  github: 'https://github.com/rajacherakesaree',
  twitter: 'https://twitter.com/raja_growth',
  phone: '8870690397',
  bio: 'Enthusiastic Marketing Graduate skilled in On page, Off page & Technical SEO strategies, PPC, AB Testing branding, positioning and data analytics, with a keen eye for quality and delivering results. A strong problem solver with the eagerness to contribute to a dynamic marketing team to achieve the unified goal by executing detail oriented digital marketing practices to enhance content visibility, engagement and lead generation.',
  avatarUrl: '',
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'SEO Intern',
    company: 'Pickyourtrail',
    period: 'Oct 2025 to Present',
    location: 'Chennai, India',
    bullets: [
      'Spearheaded complete SEO optimization across IND/CE market regions by managing and optimizing 2,200+ URLs to improve organic rankings, crawl efficiency and search visibility at scale.',
      'Conducted in depth keyword research, search intent mapping and content structure analysis to align on page elements with user behavior, resulting in improved indexing rates, topical relevance and organic reach across target markets.',
      'Optimized full funnel performance by strategically integrating conversion focused CTAs, lead capture forms and landing page elements across various touchpoints, leading to measurable improvements in lead generation and bottom of funnel conversion rates to +22%.',
      'Maintained a technical SEO infrastructure comprising redirect links management, canonical tag implementation, internal linking architecture and entity mapping to maintain tight content clusters, minimize link equity dilution and strengthen authority signals within the site.',
      'Performed rigorous quality assurance, AEO / GEO (Answer Engine Optimization / Generative Engine Optimization) and SEO validation across 300+ URLs for zero click and AI search visibility by ensuring on page alignment with search intent, Schema markups, Mapping content to common AI prompt patterns and conversational queries, EEAT standards and content quality benchmarks prior to publication.',
      'Developed and executed an Online Reputation Management (ORM) strategy across digital channels, suppressing negative search results through authoritative content creation and strengthening positive brand narratives in SERPs.',
      'Contributed to brand positioning and digital identity by ensuring consistent messaging, tone of voice and brand value alignment across all optimized content, reinforcing brand authority and audience trust across target market regions.',
      'Leveraged structured data and schema markup implementation to enhance SERP visibility through rich results, improving click-through rates and brand prominence in competitive search landscapes.'
    ],
    skills: [
      'Technical SEO', 
      'On page/Off page SEO', 
      'Keyword Research', 
      'Intent Mapping', 
      'Competitor Analysis', 
      'ICP Segmentation', 
      'Conversion Rate Optimization', 
      'AEO / GEO', 
      'Online Reputation Management', 
      'Schema Markup Integration', 
      'Topical Authority Building', 
      'Crawl Budget Managment/Optimization', 
      'Internal linking Strategy'
    ]
  },
  {
    id: 'exp-2',
    role: 'Digital Marketing Intern',
    company: 'Shanthi IT Solutions',
    period: 'July 2024 to September 2024',
    location: 'Chennai, India',
    bullets: [
      'Assisted in managing Paid search campaigns to drive conversions through the sales pipeline and maintain optimal ROI.',
      'Monitored and generated reports on key performance metrics to measure the success of campaigns.',
      'Reached top search results by SEO best practices, enhancing user engagement and Clickthrough rates.'
    ],
    skills: ['Paid Search', 'Campaign Monitoring', 'SEO Best Practices', 'PPC Strategy', 'ROI Optimization']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Pickyourtrail Core SEO Performance & Crawl Scaling',
    category: 'Technical SEO & Performance',
    metrics: '459K Clicks | 64M Impressions | 8.5 Avg. Position',
    description: 'Spearheaded core organic growth and technical SEO optimization across pickyourtrail.com. Audited and mapped indexability status for 2,200+ URLs, resolved complex crawl bottlenecks, built XML sitemaps, and optimized canonical tags, resulting in 459,000+ organic clicks and 64 million impressions with a high average search position of 8.5.',
    technologies: ['Google Search Console', 'Crawl Audits', 'Redirect Logic', 'Canonical Mapping'],
    link: 'https://pickyourtrail.com',
    dashboardType: 'gsc_core'
  },
  {
    id: 'proj-2',
    title: 'Switzerland Destination SEO Growth Campaign',
    category: 'Subfolder & Content SEO',
    metrics: '11.9K Clicks | 2.37M Impressions | 285 High Yield Keywords',
    description: 'Executed an intensive destination subfolder SEO campaign targeting the "/packages/switzerland" path. Expanded organic rankings from 3.99K to 11.9K clicks (2.37M impressions) by aligning landing pages with commercial search intent, mapping high volume keywords, and resolving competing subfolder cannibalizations.',
    technologies: ['Semrush', 'GSC Page Filters', 'Keyword Mapping', 'On Page SEO'],
    link: 'https://pickyourtrail.com/packages/switzerland',
    dashboardType: 'gsc_switzerland'
  },
  {
    id: 'proj-6',
    title: 'Generative AI & Search Engine Optimization (AEO/GEO)',
    category: 'AI Search Visibility',
    metrics: '42% Share of Voice on Gemini & Copilot | 12.4K Citations',
    description: 'Developed an advanced Generative Engine Optimization (GEO) blueprint to secure brand citations in AI driven search models. Structured deep schema markups, integrated entity relationship graphs, and optimized long form answer formats, positioning the brand as an authoritative source in Gemini, ChatGPT, and perplexity answer engine queries.',
    technologies: ['Gemini API', 'LLM Citation Auditing', 'Entity Graphing', 'Schema Markup'],
    link: '#',
    dashboardType: 'aeo_geo'
  },
  {
    id: 'proj-3',
    title: 'Competitor Keyword Gap & SERP Dominance',
    category: 'Competitor Intelligence',
    metrics: '18.7K Overlapping Keywords | 550K Vol/Mo Target Terms',
    description: 'Conducted a comprehensive competitor keyword overlap analysis comparing Pickyourtrail against key market giants (MakeMyTrip, TravelTriangle, Thomas Cook, and Thrillophilia). Identified top organic search opportunities for premium travel terms like "baga beach", "udupi", and "hawa mahal" with 550,000+ monthly search volumes.',
    technologies: ['Semrush Keyword Gap', 'Competitive Research', 'SERP Analysis', 'Content Strategy'],
    link: 'https://pickyourtrail.com',
    dashboardType: 'semrush_gap'
  },
  {
    id: 'proj-4',
    title: 'Google Analytics 4 & Tracking Architecture',
    category: 'Web Analytics & Tracking',
    metrics: '28 Key Events | 16 Custom Audiences | Integrated Funnels',
    description: 'Architected and optimized the Google Analytics 4 (GA4) property for Pickyourtrail (Pickyourtrail GA4) to ensure high fidelity web tracking. Configured Google signals, mapped 28 critical key conversion events, structured 16 custom behavioral audiences, and linked Search Console & event pipelines to facilitate full funnel analytics attribution.',
    technologies: ['GA4 Property Setup', 'Google Tag Manager', 'Audience Definition', 'Funnel Tracking'],
    link: 'https://pickyourtrail.com',
    dashboardType: 'ga4_pyt'
  },
  {
    id: 'proj-7',
    title: 'Online Reputation Management & Brand Sentiment (ORM)',
    category: 'Brand Defense & Reputation',
    metrics: '94% Positive Brand Sentiment | 25+ Serp 1 Negative Links Suppressed',
    description: 'Architected a comprehensive Online Reputation Management (ORM) strategy to protect and elevate corporate search visibility. Suppressed low sentiment discussion threads, established highly authoritative PR entities, and optimized review schema listings, securing the top tier brand narrative across critical SERP queries.',
    technologies: ['SERP Domination', 'Power BI', 'PR Distribution', 'Brand Auditing', 'Review Schema'],
    link: '#',
    dashboardType: 'orm_rep'
  },
  {
    id: 'proj-8',
    title: 'Conversion Rate Optimization (CRO)',
    category: 'Conversion Rate Optimization',
    metrics: '+34% Funnel Conversion Uplift | -18% Cart Abandonment',
    description: 'Spearheaded conversion rate optimization audits for Pickyourtrail focusing on mobile first checkout paths. Designed high impact AB test variations for booking forms, optimized script load times to eliminate layout shifts, and streamlined visual user flows to minimize purchasing friction and capture lost organic lead drop offs.',
    technologies: ['AB Testing', 'Hotjar Heatmaps', 'Microsoft Clarity', 'Power BI', 'Core Web Vitals', 'User Journey Mapping'],
    link: 'https://pickyourtrail.com',
    dashboardType: 'cro_conv'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Search Engine Optimization (SEO)',
    skills: [
      { name: 'Technical SEO Auditing', level: 96, iconName: 'Cpu' },
      { name: 'On page SEO', level: 95, iconName: 'FileText' },
      { name: 'Keyword Research & Intent Mapping', level: 95, iconName: 'Key' },
      { name: 'Competitor/Market Analysis', level: 93, iconName: 'Compass' },
      { name: 'Schema Markup & Structured Data', level: 94, iconName: 'Code' },
      { name: 'Semantic SEO & Topical Authority', level: 93, iconName: 'TrendingUp' },
      { name: 'Crawl Budget & Indexability', level: 95, iconName: 'BarChart' },
      { name: 'Internal Linking Architecture', level: 92, iconName: 'GitBranch' },
      { name: 'Competitor Backlink Analysis', level: 90, iconName: 'Layers' },
      { name: 'Python SEO', level: 88, iconName: 'Code' },
      { name: 'AEO/GEO', level: 92, iconName: 'Search' },
      { name: 'Log File Analysis', level: 90, iconName: 'BarChart' },
      { name: 'JavaScript SEO & Rendering', level: 88, iconName: 'Cpu' }
    ]
  },
  {
    category: 'PPC, Branding & CRO',
    skills: [
      { name: 'PPC (Google / Meta / LinkedIn Ads)', level: 90, iconName: 'Search' },
      { name: 'A/B Testing & CRO', level: 92, iconName: 'Target' },
      { name: 'ICP Analysis', level: 93, iconName: 'Users' },
      { name: 'ABM', level: 91, iconName: 'Target' },
      { name: 'Funnel Optimization', level: 94, iconName: 'TrendingUp' },
      { name: 'Brand Strategy & Positioning', level: 93, iconName: 'Award' },
      { name: 'Digital Branding & ORM', level: 95, iconName: 'Shield' },
      { name: 'Lead Magnet & Gated Strategy', level: 89, iconName: 'FileText' },
      { name: 'Integrated Campaign Planning', level: 91, iconName: 'Compass' }
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'Fundamentals of Digital Marketing',
    issuer: 'Google Digital Academy',
    year: '2023',
    link: 'https://skillshop.exceedlms.com/student/award/oYJFzBwhfrKPLmmCVHrk6DJa?id=392267847'
  },
  {
    name: 'AEO Certification',
    issuer: 'HubSpot',
    year: '2024'
  },
  {
    name: 'SEO Certification',
    issuer: 'HubSpot',
    year: '2024'
  },
  {
    name: 'Digital Marketing L1 & L2',
    issuer: 'HubSpot',
    year: '2024'
  },
  {
    name: 'Social Media Marketing L1 & L2',
    issuer: 'HubSpot',
    year: '2023'
  },
  {
    name: 'Google Ads Search Certification',
    issuer: 'Google Digital Academy',
    year: '2024'
  },
  {
    name: 'Google Analytics Certification',
    issuer: 'Google Digital Academy',
    year: '2024'
  }
];

export const SEARCH_RESULTS: SearchResult[] = [
  {
    id: 'res-linkedin',
    title: 'Raja Chera Kesaree - SEO Specialist | Digital Marketer',
    url: 'https://in.linkedin.com/in/raja-chera-kesaree-4aa858278',
    breadcrumbs: 'LinkedIn India › raja-chera-kesaree-4aa858278',
    snippet: 'SEO Specialist | On-page, Off-page & Technical SEO strategies, PPC, A/B Testing branding, positioning and data analytics. Currently transforming index visibility and organic growth journeys.',
    tab: SearchTab.ALL,
    sitelinks: [
      { title: 'Work Experience', description: 'Explore Raja\'s professional internships at Pickyourtrail (SEO Intern) and Shanthi IT Solutions (Digital Marketing Intern).', tabTarget: SearchTab.EXPERIENCE },
      { title: 'Case Studies & Projects', description: 'Deep-dive into core Technical SEO performance, destination keyword campaigns, and competitive audits.', tabTarget: SearchTab.PROJECTS },
      { title: 'Technical Marketing Stack', description: 'View full set of tools (GA4, GTM, Microsoft Clarity, Screaming Frog, Semrush) and search marketing skills.', tabTarget: SearchTab.SKILLS },
      { title: 'Contact / Hire Raja', description: 'Inquire for audit consultancies, career placement, paid campaign scaling or freelance strategies.', tabTarget: SearchTab.CONTACT }
    ]
  },
  {
    id: 'res-experience',
    title: 'Professional Marketing Experience | Raja Chera Kesaree Portfolio',
    url: 'https://raja-chera-kesaree.netlify.app/experience',
    breadcrumbs: 'raja-chera-kesaree.netlify.app › experience',
    snippet: 'Read through the full work timeline: Pickyourtrail SEO Intern managing 2,200+ URLs and Shanthi IT Solutions Digital Marketing Intern scaling PPC. Focused on crawl efficiency, bottom-funnel conversion upticks, and search prominence.',
    tab: SearchTab.EXPERIENCE
  },
  {
    id: 'res-projects',
    title: 'SEO & Performance Marketing Projects Case Studies',
    url: 'https://raja-chera-kesaree.netlify.app/projects',
    breadcrumbs: 'raja-chera-kesaree.netlify.app › projects › case-studies',
    snippet: 'Detailed metrics of real campaigns. Understudied core organic performance metrics, destination SEO growths, competitor keyword overlaps, and GA4 analytical setups.',
    tab: SearchTab.PROJECTS
  },
  {
    id: 'res-skills',
    title: 'Technical Skills & Marketing Tools Stack',
    url: 'https://raja-chera-kesaree.netlify.app/skills',
    breadcrumbs: 'raja-chera-kesaree.netlify.app › skills › toolset',
    snippet: 'A look at Raja\'s fully audited SEO stack: advanced Screaming Frog, Microsoft Clarity, Semrush, Looker Studio, Google Search Console, Surfer SEO, and GT metrix.',
    tab: SearchTab.SKILLS
  },
  {
    id: 'res-academics',
    title: 'Academic Qualifications & Degrees | MBA & B.E. Computer Science',
    url: 'https://raja-chera-kesaree.netlify.app/education',
    breadcrumbs: 'raja-chera-kesaree.netlify.app › academic-qualifications',
    snippet: 'Academic credentials blending computer science technology and strategic marketing: Master of Business Administration (MBA in Marketing, SRM Easwari Engineering College) and Bachelor of Engineering (B.E. in Computer Science, Anna University).',
    tab: SearchTab.EDUCATION,
    sitelinks: [
      { 
        title: 'MBA in Marketing & Digital Strategy', 
        description: 'SRM Easwari Engineering College (2023–2025). Major research thesis on E-Commerce Digital Marketing Tools & SERP Visibility.', 
        tabTarget: SearchTab.EDUCATION,
        program: 'mba'
      },
      { 
        title: 'B.E. in Computer Science & Engineering', 
        description: 'Anna University Regional Campus (2019–2023). Focus on database architectures, client-side web rendering, and Technical SEO algorithms.', 
        tabTarget: SearchTab.EDUCATION,
        program: 'be'
      }
    ]
  },
  {
    id: 'res-contact',
    title: 'Contact Raja Chera Kesaree | Direct Campaign Audit Inquiry',
    url: 'https://raja-chera-kesaree.netlify.app/contact-and-hiring',
    breadcrumbs: 'raja-chera-kesaree.netlify.app › contact',
    snippet: 'Direct form pipeline. Send a message to Raja Chera Kesaree for custom digital audits, organic scale planning, or professional team hiring inquiries.',
    tab: SearchTab.CONTACT
  }
];

export const SUGGESTIONS = [
  'raja chera kesaree',
  'raja chera kesaree seo specialist',
  'raja chera kesaree pickyourtrail',
  'raja chera kesaree popcoune',
  'raja chera kesaree srm easwari mba',
  'raja chera kesaree tools stack'
];
