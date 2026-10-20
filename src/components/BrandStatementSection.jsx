import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import vImg from '../assets/v.png';
import iImg from '../assets/i.png';
import hImg from '../assets/h.png';
import aImg from '../assets/a.png';

const STATEMENT_TEXT = "At VIHA, creativity meets intelligence to craft bold digital experiences, design intuitive products, and build intelligent solutions that bring your ideas to life.";
const WORDS = STATEMENT_TEXT.split(' ');

// Exact letter bounding box metrics (all 4 glyphs have natural height of 120px):
// v: 207x155 (glyph: minX 25, minY 23, w 180, h 120)
// i: 52x145  (glyph: minX 5,  minY 14, w 38,  h 120)
// h: 177x149 (glyph: minX 8,  minY 10, w 162, h 120)
// a: 186x203 (glyph: minX 3,  minY 52, w 174, h 120)
const GLYPH_METRICS = {
  v: { imgW: 207, imgH: 155, minX: 25, minY: 23, w: 180, h: 120 },
  i: { imgW: 52,  imgH: 145, minX: 5,  minY: 14, w: 38,  h: 120 },
  h: { imgW: 177, imgH: 149, minX: 8,  minY: 10, w: 162, h: 120 },
  a: { imgW: 186, imgH: 203, minX: 3,  minY: 52, w: 174, h: 120 },
};

export default function BrandStatementSection({ onNavigate }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  // Track scroll and responsive window dimensions
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowDimensions.width < 768;

  // --- 3-SCROLL COMPLETION TIMELINE ("that efrect cna complted the 3 soll ok") ---
  // Scroll 1 (0.00 to 0.20): Black curtain over Hero, enlarged single-line VIHA centered, NO text visible
  // Scroll 2 (0.20 to 0.58): Dispersal - 4 letters glide to framing positions, statement text fades in
  // Scroll 3 (0.58 to 0.95): Progressive illumination - words light up to 100% white, contact CTA appears
  const disperseProgress = Math.min(Math.max((scrollProgress - 0.18) / 0.38, 0), 1);
  const textFillProgress = Math.min(Math.max((scrollProgress - 0.56) / 0.38, 0), 1);

  // Statement text opacity strictly 0 during initial VIHA screen (removes any faint text leak)
  const statementOpacity = scrollProgress <= 0.20
    ? 0
    : Math.min((scrollProgress - 0.20) / 0.24, 1);

  // Smooth cubic-bezier ease for motion
  const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const p = easeInOutCubic(disperseProgress);

  // --- INCREASED GLYPH SIZE ("an can size inceing it ok and that scrren opnly can incering it ok") ---
  // Large, bold, cinematic presence on desktop (~110px-125px glyph height) and crisp ~56px on mobile
  const glyphH = isMobile
    ? Math.min(Math.max(windowDimensions.width * 0.14, 50), 65)
    : Math.min(Math.max(windowDimensions.width * 0.082, 95), 130);

  // Gap between letters in the initial wordmark
  const letterGap = glyphH * 0.22;

  // Calculate symmetrical initial center offsets for each letter
  const wV = glyphH * (GLYPH_METRICS.v.w / 120);
  const wI = glyphH * (GLYPH_METRICS.i.w / 120);
  const wH = glyphH * (GLYPH_METRICS.h.w / 120);
  const wA = glyphH * (GLYPH_METRICS.a.w / 120);

  const totalWordmarkW = wV + letterGap + wI + letterGap + wH + letterGap + wA;
  const centerW = totalWordmarkW / 2;

  const initXV = (wV / 2) - centerW;
  const initXI = (wV + letterGap + wI / 2) - centerW;
  const initXH = (wV + letterGap + wI + letterGap + wH / 2) - centerW;
  const initXA = (wV + letterGap + wI + letterGap + wH + letterGap + wA / 2) - centerW;

  // Responsive target offsets for Desktop framing (Image 3: media_1792283446839.png)
  const desktopTargetX = Math.min(Math.max(windowDimensions.width * 0.23, 310), 400);
  const desktopTargetY = Math.min(Math.max(windowDimensions.height * 0.20, 150), 195);

  const letterConfig = isMobile
    ? {
        v: { initX: initXV, initY: 0, initRot: 0, targetX: -75, targetY: -230, targetRot: -8, scale: 0.95 },
        i: { initX: initXI, initY: 0, initRot: 0, targetX: 75, targetY: -200, targetRot: 6, scale: 0.95 },
        h: { initX: initXH, initY: 0, initRot: 0, targetX: -75, targetY: 225, targetRot: 8, scale: 0.95 },
        a: { initX: initXA, initY: 0, initRot: 0, targetX: 75, targetY: 245, targetRot: -6, scale: 0.95 },
      }
    : {
        v: { initX: initXV, initY: 0, initRot: 0, targetX: -desktopTargetX, targetY: -desktopTargetY, targetRot: -8, scale: 0.92 },
        i: { initX: initXI, initY: 0, initRot: 0, targetX: desktopTargetX, targetY: -desktopTargetY + 12, targetRot: 6, scale: 0.92 },
        h: { initX: initXH, initY: 0, initRot: 0, targetX: -desktopTargetX + 12, targetY: desktopTargetY, targetRot: 6, scale: 0.92 },
        a: { initX: initXA, initY: 0, initRot: 0, targetX: desktopTargetX - 10, targetY: desktopTargetY + 14, targetRot: -8, scale: 0.92 },
      };

  const letters = [
    { key: 'v', img: vImg, alt: 'V', metric: GLYPH_METRICS.v, cfg: letterConfig.v },
    { key: 'i', img: iImg, alt: 'I', metric: GLYPH_METRICS.i, cfg: letterConfig.i },
    { key: 'h', img: hImg, alt: 'H', metric: GLYPH_METRICS.h, cfg: letterConfig.h },
    { key: 'a', img: aImg, alt: 'A', metric: GLYPH_METRICS.a, cfg: letterConfig.a },
  ];

  return (
    <section ref={containerRef} className="relative w-full h-[185vh] bg-[#050508]">
      {/* Sticky Fullscreen Canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#050508] select-none">
        
        {/* Ambient Colored Glows in Background */}
        <div 
          className="absolute top-1/4 left-1/6 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none transition-opacity duration-500"
          style={{ opacity: 0.25 + textFillProgress * 0.65 }}
        />
        <div 
          className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-gradient-to-tr from-pink-600/15 via-amber-600/10 to-transparent rounded-full blur-[150px] pointer-events-none transition-opacity duration-500"
          style={{ opacity: 0.25 + textFillProgress * 0.65 }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none transition-opacity duration-500"
          style={{ opacity: 0.2 + textFillProgress * 0.7 }}
        />

        {/* --- 4 3D LETTERS: V, I, H, A (ALL ONE SIZE) --- */}
        {/* Starts in a single-line centered lockup; glides into middle framing positions on scroll */}
        {letters.map(({ key, img, alt, metric, cfg }) => {
          const currentX = cfg.initX + (cfg.targetX - cfg.initX) * p;
          const currentY = cfg.initY + (cfg.targetY - cfg.initY) * p;
          const currentRot = cfg.initRot + (cfg.targetRot - cfg.initRot) * p;
          const currentScale = 1 + (cfg.scale - 1) * p;

          // Box dimensions matching glyph exactly (ALL 4 GLYPHS HAVE IDENTICAL HEIGHT = glyphH)
          const boxW = glyphH * (metric.w / 120);
          const boxH = glyphH;

          // Image scaled so its internal 120px glyph maps 1:1 to boxH, with transparent padding offset
          const scaledImgH = glyphH * (metric.imgH / 120);
          const offsetX = -glyphH * (metric.minX / 120);
          const offsetY = -glyphH * (metric.minY / 120);

          return (
            <div
              key={key}
              className="absolute z-20 pointer-events-none will-change-transform flex items-center justify-center"
              style={{
                transform: `translate(${currentX}px, ${currentY}px) rotate(${currentRot}deg) scale(${currentScale})`,
                transition: 'transform 0.05s linear',
              }}
            >
              {/* Container clipped to exact glyph bounds so all 4 letters are 100% equal in visual size */}
              <div
                className="relative overflow-visible flex items-center justify-center"
                style={{
                  width: `${boxW}px`,
                  height: `${boxH}px`,
                }}
              >
                <img
                  src={img}
                  alt={alt}
                  style={{
                    height: `${scaledImgH}px`,
                    width: 'auto',
                    maxWidth: 'none',
                    transform: `translate(${offsetX}px, ${offsetY}px)`,
                  }}
                  className="filter drop-shadow-[0_14px_32px_rgba(0,0,0,0.85)] select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}

        {/* --- CENTER STATEMENT: SCROLL-DRIVEN PROGRESSIVE WORD ILLUMINATION --- */}
        {/* Strictly hidden on the initial screen (opacity: 0) to keep the initial VIHA screen 100% clean */}
        <div
          className="relative z-10 max-w-xl md:max-w-2xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center justify-center transition-all duration-300"
          style={{
            opacity: statementOpacity,
            transform: `scale(${0.94 + disperseProgress * 0.06})`,
            pointerEvents: statementOpacity > 0.4 ? 'auto' : 'none',
          }}
        >
          {/* Statement text with word-by-word white illumination */}
          <p className="font-display font-medium text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-[1.28] sm:leading-[1.3] tracking-tight">
            {WORDS.map((word, idx) => {
              const wordThreshold = idx / WORDS.length;
              const isFilled = textFillProgress >= wordThreshold;

              return (
                <span
                  key={idx}
                  className={`inline-block mr-[0.26em] transition-colors duration-200 ${
                    isFilled 
                      ? 'text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.35)]' 
                      : 'text-white/20'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>

          {/* Contact Me Button with Top & Bottom Border Lines Matching Image 1 & Image 3 */}
          <div 
            className="mt-8 sm:mt-10 transition-all duration-500 flex justify-center w-full"
            style={{
              opacity: textFillProgress > 0.65 ? 1 : Math.max(0, (textFillProgress - 0.25) / 0.4),
              transform: `translateY(${textFillProgress > 0.65 ? 0 : 10}px)`
            }}
          >
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="group inline-flex items-center justify-center gap-2 py-2 px-8 border-t border-b border-white/20 hover:border-white/50 text-xs sm:text-sm font-light text-white/75 hover:text-white transition-all cursor-pointer tracking-wide"
              style={{ minWidth: '140px' }}
            >
              <span>contact me</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white/70 group-hover:text-white" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
