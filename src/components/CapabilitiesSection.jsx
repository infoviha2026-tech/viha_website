import React, { useRef, useState, useEffect } from 'react';
import discoverImg from '../assets/discover.png';
import designImg from '../assets/design.png';
import buildImg from '../assets/bulid.png';
import evolveImg from '../assets/evlove.png';

/* ─── Step data ─────────────────────────────────────────────────────────── */
const STEPS = [
  {
    number: '01',
    title: 'Discover',
    image: discoverImg,
    description:
      'We understand the challenge, the audience, and the opportunity before shaping the solution.',
  },
  {
    number: '02',
    title: 'Design',
    image: designImg,
    description:
      'We turn ideas into clear visual systems, intuitive interfaces, and meaningful user experiences.',
  },
  {
    number: '03',
    title: 'Build',
    image: buildImg,
    description:
      'We develop websites, applications, digital products, and intelligent systems with purpose.',
  },
  {
    number: '04',
    title: 'Evolve',
    image: evolveImg,
    description:
      'We refine, improve, and expand digital experiences as your business grows.',
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function CapabilitiesSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const totalScrollable = rect.height - window.innerHeight;
          if (totalScrollable <= 0) return;
          const scrolled = -rect.top;
          const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Title fades out completely as cards start entering (0 to 0.09)
  const titleOpacity = Math.max(0, 1 - scrollProgress / 0.08);
  const titleTranslateY = Math.min(0, -(scrollProgress / 0.08) * 20);

  // Card 1: glides into visual center as title fades (progress 0.02 to 0.12), then stays locked in center
  const p1 = Math.max(0, Math.min(1, (scrollProgress - 0.02) / 0.10));
  const card1Y = (1 - p1) * 60; // starts 60px down, glides into center
  const card1Opacity = p1;

  // Card 2: glides up from bottom over Card 1 (progress 0.24 to 0.42), then stays locked in center
  const p2 = Math.max(0, Math.min(1, (scrollProgress - 0.24) / 0.16));
  const card2Y = (1 - p2) * 110; // in vh

  // Card 3: glides up from bottom over Card 2 (progress 0.48 to 0.66), then stays locked in center
  const p3 = Math.max(0, Math.min(1, (scrollProgress - 0.48) / 0.16));
  const card3Y = (1 - p3) * 110; // in vh

  // Card 4: glides up from bottom over Card 3 (progress 0.72 to 0.88), then stays locked in center
  const p4 = Math.max(0, Math.min(1, (scrollProgress - 0.72) / 0.16));
  const card4Y = (1 - p4) * 110; // in vh

  // Array of transforms for the 4 cards
  const cardTransforms = [
    { y: `${card1Y}px`, opacity: card1Opacity, isVisible: scrollProgress >= 0.01 },
    { y: `${card2Y}vh`, opacity: 1, isVisible: scrollProgress >= 0.22 },
    { y: `${card3Y}vh`, opacity: 1, isVisible: scrollProgress >= 0.46 },
    { y: `${card4Y}vh`, opacity: 1, isVisible: scrollProgress >= 0.70 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white select-none overflow-x-clip"
      aria-label="Our Capabilities"
      style={{ height: '390vh' }}
    >
      {/* ── STICKY LOCKED VIEWPORT STAGE ─────────────────────────────────── */}
      {/* Background stays 100% locked; flex-col structure properly partitions header and content */}
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        {/* ── 1. Locked Background Grid (Never moves!) ─────────────────── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.14 }}
          aria-hidden="true"
        >
          <defs>
            <pattern id="cap-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
            <pattern id="cap-cross" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="-4" y1="0" x2="4" y2="0" stroke="white" strokeWidth="0.8" />
              <line x1="0" y1="-4" x2="0" y2="4" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cap-grid)" />
          <rect width="100%" height="100%" fill="url(#cap-cross)" />
        </svg>

        {/* ── Locked Ambient Aurora Blobs (Never move!) ─────────────────── */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#9B94F1]/12 rounded-full blur-[170px] pointer-events-none"
          style={{ transform: 'translate(-30%, -20%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#E879B0]/10 rounded-full blur-[180px] pointer-events-none"
          style={{ transform: 'translate(20%, 20%)' }}
        />

        {/* ── 2. Section Heading Header: Comfortable spacing below navbar ── */}
        <div className="relative z-40 w-full flex-shrink-0 px-4 sm:px-8 pt-[104px] sm:pt-[112px] md:pt-[118px] pb-3 sm:pb-4 pointer-events-none">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="inline-flex items-center justify-center py-2 px-6 sm:px-8 border-t border-b border-white/25 text-white/90 text-xs sm:text-sm md:text-[15px] font-light tracking-[0.22em] uppercase bg-black/80 backdrop-blur-md">
              OUR CAPABILITIES
            </div>
          </div>
        </div>

        {/* ── 3. Available Content Area: Centers cards in the remaining screen space ── */}
        <div className="relative flex-1 w-full flex items-center justify-center px-4 pb-4 sm:pb-6 min-h-0">

          {/* Intro Title: Centered in the available content area beneath the heading */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center select-none pointer-events-none transition-opacity duration-200 ease-out"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleTranslateY}px)`,
              pointerEvents: titleOpacity > 0.05 ? 'auto' : 'none',
            }}
          >
            <div className="max-w-4xl mx-auto w-full">
              <h2 className="font-sans font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-white leading-tight">
                Everything You Need
              </h2>
              <p className="font-sans font-light text-xl sm:text-3xl md:text-4xl text-white/50 tracking-tight mt-2 sm:mt-3">
                to Build What&apos;s Next.
              </p>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/40 font-light leading-relaxed max-w-md sm:max-w-lg mx-auto px-4">
                From the first idea to the final experience, Viha brings creative direction, product thinking,
                engineering, and AI together under one roof.
              </p>
            </div>
          </div>

          {/* 4 Service Cards: Centered in available content area with enlarged illustrations */}
          {STEPS.map((step, index) => {
            const transform = cardTransforms[index];
            const zIndex = 20 + index * 5;

            return (
              <div
                key={step.title}
                className="absolute flex items-center justify-center pointer-events-none transition-opacity duration-150"
                style={{
                  zIndex,
                  opacity: transform.opacity,
                  transform: `translateY(${transform.y})`,
                  visibility: transform.isVisible ? 'visible' : 'hidden',
                  willChange: 'transform, opacity',
                }}
              >
                {/* ── Card Container with Metallic Gradient Bezel ── */}
                <div
                  className="pointer-events-auto relative w-[88vw] max-w-[390px] sm:max-w-[450px] md:max-w-[485px] h-[520px] sm:h-[560px] md:h-[585px] max-h-[68vh] rounded-[38px] sm:rounded-[46px] p-[11px] sm:p-[13px] border border-white/20"
                  style={{
                    background:
                      'linear-gradient(180deg, #444754 0%, #30333d 45%, #22242c 100%)',
                    boxShadow:
                      '0 30px 80px -15px rgba(0, 0, 0, 0.98), 0 0 40px rgba(155, 148, 241, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                  }}
                >
                  {/* ── Inner Card Body ── */}
                  <div
                    className="relative w-full h-full rounded-[28px] sm:rounded-[34px] bg-[#0c0c10] border border-white/[0.09] p-5 sm:p-7 md:p-8 flex flex-col items-center justify-between text-center overflow-hidden"
                    style={{
                      boxShadow:
                        'inset 0 2px 6px rgba(0, 0, 0, 0.7), inset 0 0 35px rgba(0, 0, 0, 0.85)',
                    }}
                  >
                    {/* Ambient subtle glow */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#9B94F1]/10 rounded-full blur-[80px] pointer-events-none"
                    />

                    {/* Card Top: Title */}
                    <div className="relative z-10 w-full pt-1">
                      <h3 className="font-sans font-medium text-3xl sm:text-4xl md:text-[42px] text-white tracking-tight leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    {/* Card Center: Graphic Illustration (Substantially Enlarged: ~1.8x) */}
                    <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[325px] lg:h-[325px] my-auto flex items-center justify-center">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_28px_rgba(155,148,241,0.5)]"
                        loading="eager"
                      />
                    </div>

                    {/* Card Bottom: Description */}
                    <div className="relative z-10 w-full pb-1">
                      <p className="text-xs sm:text-[13px] md:text-sm text-white/80 font-light leading-relaxed max-w-[320px] sm:max-w-[360px] mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
