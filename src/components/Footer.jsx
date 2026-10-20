import React from 'react';
import { ArrowUp, Twitter, Linkedin, Dribbble, Instagram } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 pt-16 pb-12 px-6 sm:px-12 text-white/70 overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-gradient-to-t from-pink-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white/5 p-1 border border-white/10">
                <img src="/assets/logo.png" alt="Viha" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wide">VIHA</span>
            </div>
            <p className="text-sm text-white/50 max-w-sm leading-relaxed">
              Crafting premium digital products, modern brand identities, and memorable web experiences for ambitious founders and brands worldwide.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('services'); scrollToTop(); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services &amp; Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-2.5 mb-5">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-white/40">
              Direct inquiries: <br />
              <a href="mailto:hello@viha.studio" className="text-white hover:underline">hello@viha.studio</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            &copy; {new Date().getFullYear()} Viha . All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white/70 transition-colors">Privacy Policy</span>
            <span className="hover:text-white/70 transition-colors">Terms of Service</span>
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
