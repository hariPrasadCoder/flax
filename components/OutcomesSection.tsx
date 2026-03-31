import React, { useEffect, useRef, useState } from 'react';
import { Reveal } from './ui/Reveal';

// Phase 0: not in view
// Phase 1: in view — show label (no strike) + startValue
// Phase 2: strike line animates across, count ticks down
// Phase 3: settled at 0, "Flaxie handles it" fades in
type Phase = 0 | 1 | 2 | 3;

const CountdownStat: React.FC<{
  startValue: number;
  label: string;
  enterDelay: number; // ms to wait after entering view before animating
}> = ({ startValue, label, enterDelay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>(0);
  const [count, setCount] = useState(startValue);

  // Intersection observer
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setPhase(1); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Phase 1 → 2: pause, then start strike + countdown
  useEffect(() => {
    if (phase !== 1) return;
    const t = setTimeout(() => setPhase(2), enterDelay + 700);
    return () => clearTimeout(t);
  }, [phase, enterDelay]);

  // Phase 2: count down over ~1s, then go to phase 3
  useEffect(() => {
    if (phase !== 2) return;
    setCount(startValue); // reset in case of re-trigger
    const countDuration = 900;
    const intervalMs = countDuration / startValue;
    let current = startValue;
    const timer = setInterval(() => {
      current -= 1;
      setCount(current);
      if (current <= 0) {
        clearInterval(timer);
        // slight pause before "Flaxie handles it" fades in
        setTimeout(() => setPhase(3), 200);
      }
    }, intervalMs);
    return () => clearInterval(timer);
  }, [phase, startValue]);

  const striking = phase >= 2;
  const done = phase >= 3;

  return (
    <div
      ref={ref}
      style={{
        background: 'hsl(0,0%,10%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {/* Label with animated strikethrough — fixed height keeps cards aligned */}
      <div style={{ height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
        <div style={{ position: 'relative', textAlign: 'center' }}>
          {/* Base text — dims when striking */}
          <p
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.9rem',
              letterSpacing: '0.02em',
              lineHeight: 1.45,
              color: striking ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.65)',
              transition: 'color 0.4s ease 0.2s',
              margin: 0,
            }}
          >
            {label}
          </p>
          {/* Overlay: same text, transparent, with line-through decoration.
              clip-path reveals left→right, so the line draws across naturally
              across all lines of wrapped text. */}
          <p
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.9rem',
              letterSpacing: '0.02em',
              lineHeight: 1.45,
              margin: 0,
              color: 'transparent',
              textDecoration: 'line-through',
              textDecorationColor: 'rgba(255,255,255,0.55)',
              textDecorationThickness: '1.5px',
              clipPath: striking ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
              transition: striking ? 'clip-path 0.65s cubic-bezier(0.4,0,0.2,1)' : 'none',
            }}
          >
            {label}
          </p>
        </div>
      </div>

      {/* Big number */}
      <div
        className="font-serif font-black"
        style={{
          fontSize: 'clamp(4rem, 9vw, 7rem)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: '#fff',
          marginBottom: '1rem',
          fontVariantNumeric: 'tabular-nums',
          minWidth: '2ch',
        }}
      >
        {count}
      </div>

      {/* "Flaxie handles it" — fades in after count reaches 0 */}
      <p
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.88rem',
          fontWeight: 500,
          color: 'rgba(90,83,225,0.9)',
          opacity: done ? 1 : 0,
          transform: done ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}
      >
        Flaxie handles it
      </p>
    </div>
  );
};

const AnimatedStat: React.FC<{
  value: string;
  label: string;
  sub: string;
  color: string;
  delay: number;
}> = ({ value, label, sub, color, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: 'hsl(0,0%,10%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {/* Spacer matching the label height in CountdownStat so numbers align */}
      <div style={{ height: '3rem', marginBottom: '1.25rem' }} />
      <div
        className="font-serif font-black"
        style={{
          fontSize: 'clamp(4rem, 9vw, 7rem)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color,
          marginBottom: '1rem',
        }}
      >
        {value}
      </div>
      <p
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontWeight: 500,
          fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.65)',
          letterSpacing: '0.02em',
          marginBottom: '0.25rem',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.35)',
        }}
      >
        {sub}
      </p>
    </div>
  );
};

export const OutcomesSection: React.FC = () => (
  <section
    style={{
      minHeight: '80vh',
      background: 'hsl(0,0%,10%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 1.5rem',
    }}
  >
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>

      <Reveal>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            The outcome
          </span>
        </div>
      </Reveal>

      {/* Stats grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(255,255,255,0.07)',
        }}
      >
        <CountdownStat startValue={12} label="follow-up emails you write" enterDelay={0} />
        <CountdownStat startValue={8} label="tasks you create from scratch" enterDelay={150} />
        <AnimatedStat value="100%" label="of commitments" sub="done. Not just logged." color="#5A53E1" delay={240} />
      </div>

      <Reveal delay={400}>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p
            className="font-serif font-black"
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.65rem)',
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '-0.01em',
            }}
          >
            That is the world we are building.
          </p>
          <p
            style={{
              marginTop: '0.75rem',
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.68rem',
              color: 'rgba(255,255,255,0.28)',
            }}
          >
            Right now Flaxie handles your follow-up. Next, she handles everything after every meeting.
          </p>
        </div>
      </Reveal>

    </div>
  </section>
);
