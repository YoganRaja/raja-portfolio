import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

import gscLogo from '../assets/images/gsc_logo.png';
import ga4Logo from '../assets/images/GA4_logo.png';
import semrushLogo from '../assets/images/semrush_logo.png';
import screamingfrogLogo from '../assets/images/screamingfrog_logo.png';
import clarityLogo from '../assets/images/claritybyms_logo.png';
import wordpressLogo from '../assets/images/wordpress_logo.png';
import strapiLogo from '../assets/images/strapi_logo.png';

export interface ToolItem {
  id: string;
  name: string;
  src: string;
  tag: string;
}

const TOOLS: ToolItem[] = [
  { id: 'gsc', name: 'Google Search Console', src: gscLogo, tag: 'Search Indexing & Performance' },
  { id: 'ga4', name: 'Google Analytics 4', src: ga4Logo, tag: 'Analytics & Traffic Insights' },
  { id: 'semrush', name: 'Semrush', src: semrushLogo, tag: 'SEO & Keyword Intelligence' },
  { id: 'screamingfrog', name: 'Screaming Frog', src: screamingfrogLogo, tag: 'Technical Site Audits' },
  { id: 'clarity', name: 'Microsoft Clarity', src: clarityLogo, tag: 'User Behavior & Heatmaps' },
  { id: 'wordpress', name: 'WordPress', src: wordpressLogo, tag: 'CMS & Technical SEO' },
  { id: 'strapi', name: 'Strapi', src: strapiLogo, tag: 'Headless CMS Architecture' },
];

export interface CoverflowToolIconsProps {
  compact?: boolean;
}

export const CoverflowToolIcons: React.FC<CoverflowToolIconsProps> = ({ compact = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const initialTimeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % TOOLS.length);
      timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % TOOLS.length);
      }, 2000);
    }, 200);

    return () => {
      clearTimeout(initialTimeout);
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <div className={compact ? "flex items-center justify-start select-none overflow-hidden" : "w-full flex items-center justify-start pt-1 pb-2 select-none overflow-hidden"}>
      <div className={compact ? "relative h-10 w-36 sm:w-44 flex items-center" : "relative h-20 sm:h-24 w-64 sm:w-80 flex items-center"}>
        {TOOLS.map((tool, index) => {
          const count = TOOLS.length;
          const isCurrent = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + count) % count;
          const isNext = index === (activeIndex + 1) % count;

          let x = 0;
          let scale = 1;
          let opacity = 1;
          let filter = 'blur(0px)';
          let zIndex = 30;

          if (isCurrent) {
            // Center position
            x = compact ? 42 : 80;
            scale = compact ? 1.15 : 1.3;
            opacity = 1;
            filter = 'blur(0px)';
            zIndex = 30;
          } else if (isPrev) {
            // Back Right position
            x = compact ? 92 : 165;
            scale = 0.65;
            opacity = 0.5;
            filter = compact ? 'blur(1.5px)' : 'blur(2.5px)';
            zIndex = 10;
          } else if (isNext) {
            // Back Left position
            x = 0;
            scale = 0.65;
            opacity = 0.5;
            filter = compact ? 'blur(1.5px)' : 'blur(2.5px)';
            zIndex = 20;
          } else {
            // Queue / hidden offstage left
            x = compact ? -20 : -40;
            scale = 0.4;
            opacity = 0;
            filter = compact ? 'blur(4px)' : 'blur(6px)';
            zIndex = 0;
          }

          return (
            <motion.div
              key={tool.id}
              className={compact ? "absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center cursor-pointer" : "absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center cursor-pointer"}
              onClick={() => setActiveIndex(index)}
              initial={false}
              animate={{
                x,
                scale,
                opacity,
                filter,
                zIndex,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1], // Smooth cubic bezier easing
              }}
              title={tool.name}
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="w-full h-full object-contain pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
