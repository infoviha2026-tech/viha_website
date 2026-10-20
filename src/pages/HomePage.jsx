import React from 'react';
import Hero from '../components/Hero';
import BrandStatementSection from '../components/BrandStatementSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import SelectedWorkSection from '../components/SelectedWorkSection';
import AboutSection from '../components/AboutSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onNavigate, onSelectProject }) {
  return (
    <div className="w-full text-white bg-[#050508] relative">
      {/* 1. Hero Section - Sticky at top so the next black section slides UP and covers it like an overlapping curtain */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        <Hero onNavigate={onNavigate} onOpenProject={onSelectProject} />
      </div>

      {/* 2. Brand Statement Section - Slides UP over the hero section with a deep dark shadow, completely covering it */}
      <div className="relative z-10 bg-[#050508] shadow-[0_-60px_120px_rgba(0,0,0,0.98)]">
        <BrandStatementSection onNavigate={onNavigate} />
      </div>

      {/* 3. Continuation Section: What We Do Stacking Cards */}
      <div className="relative z-20 bg-black">
        <WhatWeDoSection onNavigate={onNavigate} />
      </div>

      {/* 4. Continuation Section: Selected Work Showcase with Looping Marquee */}
      <div className="relative z-20 bg-black">
        <SelectedWorkSection onNavigate={onNavigate} onSelectProject={onSelectProject} />
      </div>

      {/* 5. Continuation Section: About Viha Studio */}
      <div id="about" className="relative z-20 bg-black">
        <AboutSection onNavigate={onNavigate} />
      </div>

      {/* 6. Our Capabilities — 4-phase step cards */}
      <div className="relative z-20 bg-black">
        <CapabilitiesSection />
      </div>

      {/* 7. Get in Touch — inline contact section (no separate page) */}
      <div className="relative z-20 bg-black">
        <ContactSection />
      </div>
    </div>
  );
}
