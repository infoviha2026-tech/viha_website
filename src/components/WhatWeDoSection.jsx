import React from 'react';
import {
  Bot,
  Layers,
  Layout,
  Smartphone,
  Sparkles,
  Server,
  PenTool,
  ArrowDown
} from 'lucide-react';

const SERVICES = [
  {
    number: '01',
    name: 'AI Agents & Intelligent Automation',
    description: 'Intelligent AI agents that automate workflows, handle conversations, and help businesses work smarter.',
    icon: Bot,
    isHighlighted: false,
  },
  {
    number: '02',
    name: 'Digital Product Design',
    description: 'Transform ideas into intuitive, user-focused digital products built for real-world needs.',
    icon: Layers,
    isHighlighted: false,
  },
  {
    number: '03',
    name: 'Website Design & Development',
    description: 'Create modern, responsive websites that combine strong visuals with seamless functionality.',
    icon: Layout,
    isHighlighted: false,
  },
  {
    number: '04',
    name: 'Mobile App Design & Development',
    description: 'Design and build intuitive mobile applications that connect people and simplify everyday tasks.',
    icon: Smartphone,
    isHighlighted: false,
  },
  {
    number: '05',
    name: 'Brand Identity & Graphic Design',
    description: 'Build memorable brands through logos, visual identities, posters, brochures, flyers, and editorial design.',
    icon: Sparkles,
    isHighlighted: false,
  },
  {
    number: '06',
    name: 'Backend Development & Integrations',
    description: 'Build reliable backend systems, APIs, databases, and server solutions that power digital products.',
    icon: Server,
    isHighlighted: false,
  },
  {
    number: '07',
    name: 'Custom Digital Solutions',
    description: 'Have a unique idea? We combine design, development, and AI to create a solution tailored to your vision.',
    icon: PenTool,
    isHighlighted: true, // Signature #9b94f1 card
  },
];

export default function WhatWeDoSection({ onNavigate }) {
  return (
    <section className="relative w-full bg-black text-white pt-20 sm:pt-28 pb-28 sm:pb-36 px-4 sm:px-8 lg:px-12 select-none overflow-x-clip">

      {/* ── HERO-MATCHING BACKGROUND: Grid line pattern + aurora blobs ── */}

      {/* SVG Grid — thin lines + crosshair markers, matching hero.png aesthetic */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.18 }}
        aria-hidden="true"
      >
        <defs>
          {/* Grid cell size: 80px */}
          <pattern id="wwd-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Horizontal & vertical grid lines */}
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
          {/* Crosshair marker at each grid intersection */}
          <pattern id="wwd-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* + cross: 6px wide centred at (0,0) */}
            <line x1="-4" y1="0" x2="4" y2="0" stroke="white" strokeWidth="0.8" />
            <line x1="0" y1="-4" x2="0" y2="4" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wwd-grid)" />
        <rect width="100%" height="100%" fill="url(#wwd-cross)" />
      </svg>

      {/* Aurora blobs – dull, very low opacity matching hero palette */}
      {/* Pink blob – bottom-left */}
      <div className="absolute bottom-0 left-0 w-[700px] h-[500px] bg-[#E879B0]/12 rounded-full blur-[160px] pointer-events-none" style={{ transform: 'translate(-30%, 30%)' }} />
      {/* Purple blob – centre */}
      <div className="absolute top-1/3 left-1/2 w-[800px] h-[400px] bg-[#9B94F1]/10 rounded-full blur-[180px] pointer-events-none" style={{ transform: 'translateX(-50%)' }} />
      {/* Blue blob – top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5B8DEF]/10 rounded-full blur-[150px] pointer-events-none" style={{ transform: 'translate(20%, -20%)' }} />
      {/* Violet blob – bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#7C3AED]/12 rounded-full blur-[140px] pointer-events-none" style={{ transform: 'translate(10%, 20%)' }} />

      {/* Main Content Container with Increased Width */}
      <div className="relative z-10 max-w-4xl lg:max-w-[880px] mx-auto w-full flex flex-col items-center">

        {/* --- EYEBROW SECTION: STICKY at top, stays visible as cards scroll behind it --- */}
        <div className="sticky top-[72px] z-50 w-full flex items-center justify-between pb-5 pt-4 bg-black border-b border-white/5">
          <div className="inline-flex items-center justify-center py-2 px-6 sm:px-8 border-t border-b border-white/25 text-white/90 text-xs sm:text-sm md:text-[15px] font-light tracking-[0.22em] uppercase">
            WHAT WE DO
          </div>

          <div className="text-xs font-mono text-white/40 tracking-widest hidden sm:block">
            01 — 07 DISCIPLINES
          </div>
        </div>

        {/* --- CARDS LIST: flow naturally, each card sticky just below the eyebrow --- */}
        {/* Cards stack and overlap as you scroll, exactly like Image 2 reference */}
        <div className="w-full flex flex-col pt-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            // Cards stick just below the eyebrow header (~150px from top).
            // Each card adds 12px offset to create the peeking stepped-deck effect.
            // Mobile base is 130px (smaller navbar), desktop 150px.
            const desktopTop = 150 + index * 12;
            const mobileTop = 130 + index * 10;

            return (
              <div
                key={service.number}
                className="sticky w-full mb-2 sm:mb-3 transition-all duration-200"
                style={{
                  top: `clamp(${mobileTop}px, ${desktopTop}px, ${desktopTop}px)`,
                  zIndex: 10 + index,
                }}
              >
                {/* Card Container: Increased width, generous padding, equal spacing */}
                <div
                  className={`w-full rounded-2xl sm:rounded-[22px] border transition-all ${service.isHighlighted
                      ? 'bg-[#9B94F1] border-[#8980EA] text-[#0F0C24] shadow-[0_20px_50px_rgba(155,148,241,0.32)]'
                      : 'bg-white border-neutral-200/90 text-neutral-900 shadow-[0_14px_36px_rgba(0,0,0,0.38)]'
                    }`}
                >
                  <div className="flex items-center gap-5 sm:gap-7 lg:gap-8 px-6 sm:px-8 lg:px-10 py-6 sm:py-7">

                    {/* Left Side Minimalist Floating Line Icon matching Reference Image 2 */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center shrink-0 ${service.isHighlighted
                          ? 'text-[#0F0C24]'
                          : 'text-neutral-700'
                        }`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[1.5]" />
                    </div>

                    {/* Title & Description with Increased Sizes */}
                    <div className="flex-1 flex flex-col text-left">
                      <h3 className="font-sans font-medium text-lg sm:text-xl md:text-[23px] tracking-tight text-neutral-900 leading-snug">
                        {service.isHighlighted ? (
                          <span className="text-[#0F0C24] font-medium">
                            <span className="opacity-45 mr-2 font-mono text-xs sm:text-sm font-normal">
                              {service.number}.
                            </span>
                            {service.name}
                          </span>
                        ) : (
                          <>
                            <span className="opacity-40 mr-2 font-mono text-xs sm:text-sm font-normal text-neutral-500">
                              {service.number}.
                            </span>
                            {service.name}
                          </>
                        )}
                      </h3>

                      <p
                        className={`font-sans text-xs sm:text-sm md:text-[15px] font-normal mt-1.5 sm:mt-2 leading-relaxed max-w-2xl ${service.isHighlighted
                            ? 'text-[#241A58]'
                            : 'text-neutral-500'
                          }`}
                      >
                        {service.description}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- BOTTOM CONCLUSION STATEMENT MATCHING REFERENCE IMAGE 4 --- */}
        {/* Placed naturally below the cards list with comfortable breathing room */}
        <div className="relative z-20 pt-20 sm:pt-28 pb-6 text-center flex flex-col items-center max-w-2xl mx-auto px-4">
          <p className="font-sans text-xl sm:text-2xl md:text-3xl font-normal text-white/95 leading-snug tracking-tight">
            We don’t offer a fixed stack. We adapt to what your product needs — fast or foundational, frontend or backend.
          </p>

          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="mt-8 w-11 h-11 rounded-full border border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer group"
            aria-label="Scroll to next section or contact"
          >
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
