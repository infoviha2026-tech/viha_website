import React, { useState, useEffect, useRef, useCallback } from 'react';
import heroBg from '../assets/hero.png';
import herosectionBg from '../assets/herosection.png';

// Extensive pool of 35+ non-repeating cards with authentic proportions
const UNIQUE_CARDS = [
  { src: herosectionBg, w: 205, h: 205 },
  { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=85', w: 180, h: 220 },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=85', w: 200, h: 200 },
  { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=85', w: 175, h: 225 },
  { src: heroBg, w: 210, h: 200 },
  { src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=85', w: 185, h: 220 },
  { src: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=600&q=85', w: 195, h: 205 },
  { src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=85', w: 210, h: 190 },
  { src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=85', w: 180, h: 220 },
  { src: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=85', w: 200, h: 200 },
  { src: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=85', w: 170, h: 230 },
  { src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=85', w: 190, h: 210 },
  { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=85', w: 180, h: 220 },
  { src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=85', w: 175, h: 225 },
  { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=85', w: 195, h: 215 },
  { src: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=600&q=85', w: 205, h: 195 },
  { src: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=85', w: 185, h: 220 },
  { src: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=85', w: 190, h: 210 },
  { src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=600&q=85', w: 180, h: 220 },
  { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=85', w: 200, h: 200 },
  { src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=85', w: 185, h: 215 },
  { src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=85', w: 180, h: 220 },
  { src: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=85', w: 200, h: 200 },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=85', w: 185, h: 220 },
  { src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=85', w: 195, h: 205 },
  { src: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=600&q=85', w: 180, h: 220 },
  { src: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=85', w: 190, h: 210 },
  { src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=85', w: 180, h: 220 },
  { src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=85', w: 200, h: 200 },
  { src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=85', w: 185, h: 220 },
  { src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=85', w: 190, h: 210 },
  { src: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=600&q=85', w: 180, h: 220 },
];

export default function SnapshotTrail({
  cards = UNIQUE_CARDS,
  spacing = 50, // Distance threshold before dropping next photo card
  lifetime = 1000, // Visible for 1 second ("cards can vissbel 1 min sec ok")
  maxSnapshots = 20,
  parentRef = null,
  className = ''
}) {
  const [snapshots, setSnapshots] = useState([]);
  const lastPosRef = useRef({ x: -1000, y: -1000 });
  const indexRef = useRef(0);
  const zIndexRef = useRef(10);
  const containerRef = useRef(null);

  const spawnCardAt = useCallback((x, y) => {
    const cardData = cards[indexRef.current % cards.length];
    indexRef.current += 1;
    zIndexRef.current += 1;

    const newSnapshot = {
      id: `${Date.now()}-${Math.random()}`,
      x,
      y,
      src: cardData.src,
      w: cardData.w,
      h: cardData.h,
      zIndex: zIndexRef.current,
      createdAt: Date.now()
    };

    setSnapshots((prev) => {
      const updated = [...prev, newSnapshot];
      if (updated.length > maxSnapshots) {
        return updated.slice(updated.length - maxSnapshots);
      }
      return updated;
    });
  }, [cards, maxSnapshots]);

  // Handle movement across the complete hero section
  const handleMove = useCallback((e) => {
    const el = parentRef?.current || containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - lastPosRef.current.x;
    const dy = y - lastPosRef.current.y;
    const distance = Math.hypot(dx, dy);

    if (distance >= spacing) {
      lastPosRef.current = { x, y };
      spawnCardAt(x, y);
    }
  }, [parentRef, spacing, spawnCardAt]);

  // Attach listener to parent container to capture 100% of hero space
  useEffect(() => {
    const target = parentRef?.current || containerRef.current;
    if (!target) return;

    const onPointerMove = (e) => handleMove(e);
    target.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      target.removeEventListener('pointermove', onPointerMove);
    };
  }, [parentRef, handleMove]);

  // Clean up snapshots that exceed lifetime (1.8s)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setSnapshots((prev) => prev.filter((s) => now - s.createdAt < lifetime));
    }, 80);

    return () => clearInterval(interval);
  }, [lifetime]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${className}`}
    >
      {snapshots.map((item) => {
        const age = Date.now() - item.createdAt;
        const progress = Math.min(age / lifetime, 1);

        // Active for first ~60%, then smoothly fades out over remaining time
        const isExiting = progress > 0.55;
        const exitOpacity = isExiting ? Math.max(0, (1 - progress) / 0.45) : 1;

        return (
          <div
            key={item.id}
            className="absolute pointer-events-none will-change-transform"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
              width: `${item.w}px`,
              height: `${item.h}px`,
              transform: `translate(-50%, -50%)`, // Upright rectangle, zero rotation
              opacity: exitOpacity,
              zIndex: item.zIndex,
              transition: 'opacity 0.4s ease-out',
            }}
          >
            {/* Crisp frameless photo card matching Noah Miles reference */}
            <div className="w-full h-full rounded-[4px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85),0_6px_16px_rgba(0,0,0,0.5)] border border-white/10 bg-[#121216] relative">
              <img
                src={item.src}
                alt="Work Snapshot"
                className="w-full h-full object-cover select-none filter contrast-[1.03]"
                loading="eager"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
