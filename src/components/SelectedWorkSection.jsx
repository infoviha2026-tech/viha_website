import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

import landscape1 from '../assets/landscape1.png';
import landscape2 from '../assets/landscape2.png';
import landscape4 from '../assets/landscape4.png';
import landscape5 from '../assets/landscape5.png';

const CATEGORIES = [
  {
    id: 'web',
    index: '01',
    label: 'Web Design',
    subLabel: 'Websites & Web Apps',
    marqueeWord: 'Web Design',
    marqueePhrase: 'Websites & Web Apps',
    image: landscape1,
    description: 'We build high-performance websites and digital experiences that combine striking visuals with seamless functionality.',
    tags: ['Websites', 'Web Apps', 'Interactive 3D', 'Performance'],
    accentColor: '#9B94F1',
  },
  {
    id: 'brand',
    index: '02',
    label: 'Brand Design',
    subLabel: 'Branding & Logos',
    marqueeWord: 'Brand Design',
    marqueePhrase: 'Branding & Logos',
    image: landscape2,
    description: 'We build bold, cohesive brand identities, logos, and visual systems that leave a lasting impression.',
    tags: ['Visual Identity', 'Style Guides', 'Brand Strategy', 'Logo Systems'],
    accentColor: '#9B94F1',
  },
  {
    id: 'product',
    index: '03',
    label: 'Product Design',
    subLabel: 'UI/UX & Prototyping',
    marqueeWord: 'Product Design',
    marqueePhrase: 'UI/UX & Prototyping',
    image: landscape4,
    description: 'Transform ideas into intuitive, scalable digital products and design systems built around real user needs.',
    tags: ['UI/UX Design', 'Prototyping', 'Design Systems', 'User Research'],
    accentColor: '#9B94F1',
  },
  {
    id: 'app',
    index: '04',
    label: 'App Development',
    subLabel: 'Mobile Apps & Experiences',
    marqueeWord: 'App Development',
    marqueePhrase: 'Mobile Apps & Experiences',
    image: landscape5,
    description: 'Design and build intuitive mobile applications that connect people, simplify tasks, and elevate engagement.',
    tags: ['iOS & Android', 'React Native', 'Mobile UX', 'API Integration'],
    accentColor: '#9B94F1',
  },
];

export default function SelectedWorkSection({ onNavigate, onSelectProject }) {
  const [activeIdx, setActiveIdx] = useState(1); // Default to Brand Design matching reference screenshot
  const [isHovered, setIsHovered] = useState(false);

  const activeCategory = CATEGORIES[activeIdx];

  // Auto-cycle categories every 6s unless user is hovering/interacting
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % CATEGORIES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleCardClick = () => {
    const worksEl = document.getElementById('works');
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: 'smooth' });
    } else if (onSelectProject) {
      onSelectProject({
        title: activeCategory.label,
        category: activeCategory.subLabel,
        heroImage: activeCategory.image,
        description: activeCategory.description,
        tags: activeCategory.tags,
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white pt-20 sm:pt-28 pb-24 sm:pb-36 px-4 sm:px-8 lg:px-14 select-none overflow-x-clip">
      
      {/* ── BACKGROUND: Coordinate Grid + Aurora Glows matching previous section ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.16 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="sw-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
          <pattern id="sw-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="-4" y1="0" x2="4" y2="0" stroke="white" strokeWidth="0.8" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sw-grid)" />
        <rect width="100%" height="100%" fill="url(#sw-cross)" />
      </svg>

      {/* Top-left purple/lavender gradient glow patch */}
      <div 
        className="absolute -top-36 -left-36 w-[650px] sm:w-[800px] h-[650px] sm:h-[800px] rounded-full blur-[160px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(155, 148, 241, 0.28) 0%, rgba(123, 114, 227, 0.12) 45%, transparent 70%)',
        }}
      />
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-[#9B94F1]/10 rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* --- 1. EYEBROW (MATCHING PREVIOUS SECTIONS' SIGNATURE TWO-LINE BORDER STYLE) --- */}
        <div className="w-full flex items-center justify-between pb-5 border-b border-white/10 mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center py-2 px-6 sm:px-8 border-t border-b border-white/25 text-white/90 text-xs sm:text-sm md:text-[15px] font-light tracking-[0.22em] uppercase">
            SELECTED WORK
          </div>

          <div className="text-xs font-mono text-white/40 tracking-widest hidden sm:block">
            01 — 04 DISCIPLINES
          </div>
        </div>

        {/* --- 2. SUB-NAVIGATION CATEGORY BAR (4 CATEGORIES) --- */}
        {/* Spaced across the container matching the reference image layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full pb-6 sm:pb-10 text-sm sm:text-base">
          {CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2.5 transition-all text-left py-2 px-1 cursor-pointer group ${
                  isActive ? 'text-[#9B94F1] font-medium' : 'text-white/45 hover:text-white/80'
                }`}
              >
                {/* Active Indicator Dot */}
                <span
                  className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#9B94F1] shadow-[0_0_12px_#9B94F1] scale-100'
                      : 'bg-transparent scale-0 group-hover:scale-75 group-hover:bg-white/40'
                  }`}
                />
                
                <span className="font-sans text-xs sm:text-sm tracking-tight flex items-baseline">
                  <span className="font-mono opacity-50 mr-1.5 text-[11px]">{cat.index}.</span>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- 3. CENTERPIECE STAGE: GIANT BACKGROUND TEXT MARQUEE + FLOATING ARTWORK --- */}
        <div 
          className="relative w-full flex flex-col items-center justify-center my-4 sm:my-8 min-h-[380px] sm:min-h-[480px] md:min-h-[540px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* BACKSIDE GIANT SCROLLING TEXT MARQUEE (MOVING LEFT TO RIGHT IN SEAMLESS LOOP) */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            <div className="animate-marquee-ltr opacity-30 select-none">
              {/* Set 1 */}
              <div className="flex shrink-0 items-center gap-8 sm:gap-14 pr-8 sm:pr-14">
                {[...Array(3)].map((_, i) => (
                  <React.Fragment key={`s1-${i}`}>
                    <span 
                      className="font-sans font-black text-[60px] sm:text-[105px] md:text-[150px] lg:text-[190px] xl:text-[215px] tracking-tight text-transparent bg-clip-text whitespace-nowrap"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #9B94F1 0%, #D8D4FF 40%, #8075E8 75%, #9B94F1 100%)',
                      }}
                    >
                      {activeCategory.marqueeWord}
                    </span>
                    
                    {/* 4-petal star separator icon matching reference image */}
                    <svg 
                      className="w-7 h-7 sm:w-11 sm:h-11 md:w-14 md:h-14 text-[#9B94F1] shrink-0" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
                    </svg>
                  </React.Fragment>
                ))}
              </div>

              {/* Set 2 (Identical twin for 100% seamless hardware-accelerated loop) */}
              <div className="flex shrink-0 items-center gap-8 sm:gap-14 pr-8 sm:pr-14" aria-hidden="true">
                {[...Array(3)].map((_, i) => (
                  <React.Fragment key={`s2-${i}`}>
                    <span 
                      className="font-sans font-black text-[60px] sm:text-[105px] md:text-[150px] lg:text-[190px] xl:text-[215px] tracking-tight text-transparent bg-clip-text whitespace-nowrap"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #9B94F1 0%, #D8D4FF 40%, #8075E8 75%, #9B94F1 100%)',
                      }}
                    >
                      {activeCategory.marqueeWord}
                    </span>
                    
                    {/* 4-petal star separator icon matching reference image */}
                    <svg 
                      className="w-7 h-7 sm:w-11 sm:h-11 md:w-14 md:h-14 text-[#9B94F1] shrink-0" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
                    </svg>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* FOREGROUND FLOATING ARTWORK (NO CARD CONTAINER/SCREEN - JUST IMAGE PLACED DIRECTLY) */}
          <div 
            onClick={handleCardClick}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[820px] flex items-center justify-center cursor-pointer group transition-transform duration-500 hover:scale-[1.02]"
          >
            {/* Active Image placed directly in center */}
            <img
              key={activeCategory.id}
              src={activeCategory.image}
              alt={activeCategory.label}
              className="w-full h-auto object-contain select-none transition-all duration-700 filter drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
              draggable={false}
            />

            {/* Subtle interactive hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black/75 border border-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-medium tracking-wide shadow-2xl">
                <span>View Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9B94F1]" />
              </span>
            </div>
          </div>

          {/* --- 4. DESCRIPTION CAPTION UNDERNEATH IMAGE --- */}
          <p className="relative z-10 mt-7 sm:mt-9 text-center text-xs sm:text-sm md:text-base text-white/75 max-w-lg leading-relaxed font-normal px-4">
            {activeCategory.description}
          </p>

          {/* --- 5. CATEGORY PILL TAGS UNDERNEATH DESCRIPTION --- */}
          <div className="relative z-10 mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-xl px-4">
            {activeCategory.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-4 py-1.5 rounded-full bg-[#1b1a24] hover:bg-[#252433] border border-white/10 text-white/80 hover:text-white text-[11px] sm:text-xs font-medium tracking-tight transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
