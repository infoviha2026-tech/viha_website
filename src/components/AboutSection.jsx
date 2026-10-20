import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import logoCardImg from '../assets/logocard.png';

export default function AboutSection({ onNavigate }) {
  return (
    <section 
      id="about" 
      className="relative w-full bg-black text-white pt-20 sm:pt-28 pb-24 sm:pb-36 px-4 sm:px-8 lg:px-14 select-none overflow-x-clip"
      aria-label="About Viha"
    >
      {/* ── BACKGROUND: Coordinate Grid + Ambient Glows ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.16 }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="about-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
          <pattern id="about-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="-4" y1="0" x2="4" y2="0" stroke="white" strokeWidth="0.8" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-grid)" />
        <rect width="100%" height="100%" fill="url(#about-cross)" />
      </svg>

      {/* Ambient gradient glow patches matching Viha theme */}
      <div 
        className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full blur-[170px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(155, 148, 241, 0.20) 0%, rgba(236, 72, 153, 0.10) 45%, transparent 70%)',
        }}
      />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#9B94F1]/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* --- 1. SECTION HEADER (SIGNATURE TWO-LINE BORDER EYEBROW STYLE) --- */}
        <div className="max-w-7xl mb-12 sm:mb-16">
          <div className="w-full flex items-center justify-between pb-5 border-b border-white/10 mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center py-2 px-6 sm:px-8 border-t border-b border-white/25 text-white/90 text-xs sm:text-sm md:text-[15px] font-light tracking-[0.22em] uppercase">
              About Viha
            </div>

            <div className="text-xs font-mono text-white/40 tracking-widest hidden sm:block">
              01 — 01 STUDIO
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.12]">
            Where obsessive craft meets modern engineering.
          </h2>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-normal">
            Viha is an independent creative studio operating at the intersection of brand identity, digital product design, and creative frontend development.
          </p>
        </div>

        {/* --- 2. MAIN STUDIO NARRATIVE BANNER --- */}
        <div className="relative rounded-3xl p-7 sm:p-12 md:p-14 glass-card border border-white/10 overflow-hidden bg-[#0c0c14]/75 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.85)]">
          {/* Subtle internal glow blob */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#9B94F1]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Manifesto Column */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-white/70 leading-relaxed">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 leading-tight">
                We believe great software should feel inevitable.
              </h3>
              
              <p>
                In a digital world crowded with derivative templates and fleeting design fads, we stand for work that is grounded in purpose, engineered for performance, and designed with unforgettable personality.
              </p>
              
              <p>
                Whether you are an early-stage startup trying to raise your Seed round or an established brand redefining your digital footprint, we partner with you to turn ambitious concepts into category-defining digital products.
              </p>

              {onNavigate && (
                <div className="pt-3">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-2 py-2 px-6 border-t border-b border-white/20 hover:border-white/50 text-xs sm:text-sm font-light text-white/80 hover:text-white transition-all cursor-pointer tracking-wide"
                  >
                    <span>Start a conversation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9B94F1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Emblem Card Column */}
            <div className="lg:col-span-5 flex justify-center">
              <img
                src={logoCardImg}
                alt="Viha Studio logo card"
                className="w-64 h-64 sm:w-72 sm:h-72 object-contain rounded-3xl select-none"
                draggable={false}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
