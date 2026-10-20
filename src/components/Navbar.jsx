import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'works', label: 'Works' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    if (id !== 'about' && id !== 'works' && id !== 'contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-8 transition-all duration-300">
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
        scrolled 
          ? 'glass-nav px-6 py-3 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/20' 
          : 'bg-transparent py-2'
      }`}>
        
        {/* Brand Logo - Left (Normal placement, no glow as requested) */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group cursor-pointer focus:outline-none text-left"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
            {/* Pure normal logo, no ambient glow filter */}
            <img 
              src="/assets/logo.png" 
              alt="Viha Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-white transition-colors">
              VIHA
            </span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase font-medium -mt-1 hidden sm:block">
            
            </span>
          </div>
        </button>

        {/* Center Nav Links - With Pure White Active Line */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-1 py-1 transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  /* White colored active line ("navabar ineed the line is can porved the white colured ok") */
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className={`group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activePage === 'contact'
                ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
            }`}
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/15 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 glass-nav rounded-2xl border border-white/15 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base py-2 px-3 rounded-lg transition-colors ${
                  activePage === link.id
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="mt-2 w-full py-3 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
