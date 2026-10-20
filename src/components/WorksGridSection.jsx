import React, { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

const CATEGORIES = ['All', 'Branding & 3D', 'UI/UX & Web', 'Mobile Apps', 'Design Systems'];

export default function WorksGridSection({ onSelectProject, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section 
      id="works" 
      className="relative w-full bg-black text-white pt-20 sm:pt-28 pb-24 sm:pb-36 px-4 sm:px-8 lg:px-14 select-none overflow-x-clip"
      aria-label="Selected Works Portfolio"
    >
      {/* ── BACKGROUND: Coordinate Grid + Ambient Glows ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.16 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="works-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
          <pattern id="works-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="-4" y1="0" x2="4" y2="0" stroke="white" strokeWidth="0.8" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#works-grid)" />
        <rect width="100%" height="100%" fill="url(#works-cross)" />
      </svg>

      {/* Ambient gradient glow patches matching Viha theme */}
      <div 
        className="absolute top-10 right-10 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(155, 148, 241, 0.18) 0%, rgba(236, 72, 153, 0.08) 50%, transparent 70%)',
        }}
      />
      <div className="absolute bottom-20 left-10 w-[550px] h-[550px] bg-[#9B94F1]/10 rounded-full blur-[170px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* --- 1. SECTION HEADER (SIGNATURE TWO-LINE BORDER EYEBROW STYLE) --- */}
        <div className="max-w-7xl mb-10 sm:mb-14">
          <div className="w-full flex items-center justify-between pb-5 border-b border-white/10 mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center py-2 px-6 sm:px-8 border-t border-b border-white/25 text-white/90 text-xs sm:text-sm md:text-[15px] font-light tracking-[0.22em] uppercase">
              Portfolio &amp; Case Studies
            </div>

            <div className="text-xs font-mono text-white/40 tracking-widest hidden sm:block">
              01 — 06 PROJECTS
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight">
            Works
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal">
            A curated selection of digital products, visual systems, and interactive experiences designed for startups, brands, and digital pioneers.
          </p>
        </div>

        {/* --- 2. FILTER TABS (MATCHING USER SCREENSHOT) --- */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 sm:mb-16 border-b border-white/10 no-scrollbar">
          <Filter className="w-4 h-4 text-white/40 mr-1.5 shrink-0" />
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-black shadow-lg shadow-white/15 font-semibold'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* --- 3. PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="glass-card group rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-pink-500/40 transition-all duration-500 flex flex-col bg-[#0d0d14]/70 backdrop-blur-md shadow-[0_15px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Visual Container */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-gradient-to-br from-[#1b1429] to-[#0d0d12]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 select-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-transparent opacity-85" />
                
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white/80 border border-white/10">
                    {project.category}
                  </span>
                  <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-xs text-white/40 mb-2 font-mono">
                    <span>{project.client}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-pink-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/60 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
