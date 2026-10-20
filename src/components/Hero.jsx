import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import SnapshotTrail from './SnapshotTrail';
import heroBg from '../assets/hero.png';

const WORDS = [
  'Startups',
  'Brands',
  'Products',
  'Businesses',
  'You',
  'Start'
];

export default function Hero({ onNavigate }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Trigger the vertical scroll up
      setNoTransition(false);
      setIsSliding(true);

      // 2. Complete scroll after 650ms, snap index forward cleanly
      setTimeout(() => {
        setNoTransition(true);
        setCurrentIdx((prev) => (prev + 1) % WORDS.length);
        setIsSliding(false);
      }, 650);

    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const nextIdx = (currentIdx + 1) % WORDS.length;

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-between pt-36 sm:pt-40 pb-10 px-6 sm:px-12 lg:px-20 overflow-hidden select-none bg-transparent cursor-default"
    >
      
      {/* 1. Complete Full-Width Background Image from src/assets/hero.png */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <img 
          src={heroBg} 
          alt="Hero Aurora Background" 
          className="w-full h-full object-cover object-center scale-[1.02] select-none"
        />
      </div>

      {/* 2. Black gradient from down (bottom) to middle at 30% opacity ("down to middel ok") */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/30 via-black/15 to-transparent pointer-events-none z-[1]" />

      {/* 3. Main Center/Right Placed Hero Content (z-10, behind the cards as requested: "thta cards text up sidle can palced it ok") */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1600px] mx-auto w-full py-12 pointer-events-none bg-transparent">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center bg-transparent">
          
          {/* Left Column (Negative space matching reference image 1) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

          {/* Right Column: Title placed in the exact same position as "MILES" in reference image 1 */}
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start pl-0 lg:pl-6 xl:pl-10 bg-transparent">
            
            {/* Primary Typography Matching Reference Image 2 - Pure white, NO dark drop-shadows */}
            <h1 className="font-sans font-normal text-white tracking-[-0.035em] text-[56px] sm:text-[84px] md:text-[108px] lg:text-[124px] xl:text-[144px] leading-[0.98]">
              
              {/* Line 1: "Designing" (stays fixed in place) */}
              <div className="text-white">
                Designing
              </div>

              {/* Line 2: "for " (fixed) + Animated Vertical Rolling Word */}
              <div className="flex items-baseline mt-1 sm:mt-2">
                {/* "for" stays fixed, clean muted white */}
                <span className="text-white/60 font-light mr-3 sm:mr-5">
                  for
                </span>

                {/* Only this text scrolls, moves and changes */}
                <span className="relative inline-flex flex-col overflow-hidden align-baseline h-[1.14em] -mb-[0.16em]">
                  <span 
                    className={`inline-flex flex-col ${
                      noTransition 
                        ? 'transition-none' 
                        : 'transition-transform duration-650 ease-[cubic-bezier(0.25,1,0.5,1)]'
                    }`}
                    style={{
                      transform: isSliding ? 'translateY(-50%)' : 'translateY(0%)'
                    }}
                  >
                    {/* Current Word */}
                    <span className="h-[1.14em] flex items-center text-white">
                      {WORDS[currentIdx]}
                    </span>
                    {/* Next Word rolling in from below */}
                    <span className="h-[1.14em] flex items-center text-white">
                      {WORDS[nextIdx]}
                    </span>
                  </span>
                </span>
              </div>

            </h1>

            {/* Subtitle Paragraph - Placed underneath the right side of the text matching reference image 1 */}
            <p className="mt-8 sm:mt-10 max-w-sm sm:max-w-md lg:ml-20 xl:ml-32 text-white/80 text-sm sm:text-base font-normal leading-relaxed">
              I craft clean, modern digital experiences that help brands tell their story with clarity and purpose.
            </p>

          </div>

        </div>
      </div>

      {/* 4. Snapshot Trail placed on the UP SIDE (in front of text: z-30), visible for 1s */}
      <SnapshotTrail 
        parentRef={heroRef}
        spacing={50}
        lifetime={1000}
        maxSnapshots={20}
        className="z-30"
      />

      {/* 5. Bottom Row - Matches Reference Image 1 */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full flex items-center justify-between text-xs text-white/60 tracking-wider pointer-events-none bg-transparent">
        <div className="flex items-center gap-2">
          <span>Based in London</span>
        </div>
        <div className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>

    </section>
  );
}
