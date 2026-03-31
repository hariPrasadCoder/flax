import React, { useEffect, useRef, useState } from 'react';
import { Reveal } from './ui/Reveal';

const memories = [
  { label: 'Prefers bullet-point updates', detail: 'Learned from 3 Slack interactions' },
  { label: 'Alex always needs a follow-up nudge', detail: 'Noticed across 4 meetings' },
  { label: 'Tuesday calls = Notion updates', detail: 'Recurring pattern detected' },
  { label: 'Keep emails under 4 lines', detail: 'You edited longer drafts twice' },
  { label: 'Sam responds faster to Slack than email', detail: 'Inferred from response times' },
];

const MemoryRow: React.FC<{ mem: typeof memories[0]; index: number; visible: boolean }> = ({ mem, index, visible }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '14px',
      paddingBottom: '16px',
      borderBottom: index < memories.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
      marginBottom: index < memories.length - 1 ? '16px' : '0',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(-12px)',
      transition: `opacity 0.5s ease ${index * 90}ms, transform 0.5s ease ${index * 90}ms`,
    }}
  >
    <div
      style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: '#5A53E1',
        flexShrink: 0,
        marginTop: '6px',
        boxShadow: '0 0 8px rgba(90,83,225,0.6)',
      }}
    />
    <div>
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3px' }}>
        {mem.label}
      </div>
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)' }}>
        {mem.detail}
      </div>
    </div>
  </div>
);

const MemoryPanel: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '420px',
        width: '100%',
      }}
    >
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
        What Flaxie has learned about you
      </div>
      {memories.map((mem, i) => (
        <MemoryRow key={i} mem={mem} index={i} visible={visible} />
      ))}
    </div>
  );
};

export const LearnsSection: React.FC = () => (
  <section
    className="dot-grid"
    style={{
      backgroundColor: 'hsl(0,0%,10%)',
      padding: '6rem 1.5rem',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Ambient glow — center-right */}
    <div className="glow-drift" style={{
      position: 'absolute', top: '20%', right: '-10%',
      width: '550px', height: '550px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.1) 0%, transparent 65%)',
      pointerEvents: 'none',
      animationDelay: '2s',
    }} />

    <div
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Left: copy */}
      <div>
        <Reveal>
          <span
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
              display: 'block',
              marginBottom: '1.25rem',
            }}
          >
            Gets smarter with every meeting
          </span>
          <h2
            className="font-serif font-black"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#fff',
              marginBottom: '1.5rem',
            }}
          >
            Flaxie remembers
            <br />
            <span style={{ color: '#5A53E1' }}>so you do not have to.</span>
          </h2>
          <p
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 2,
              maxWidth: '380px',
            }}
          >
            Every meeting teaches Flaxie something new about how you work, who you work with, and what matters most.
            Over time, it stops asking. It just knows.
          </p>
        </Reveal>
      </div>

      {/* Right: memory panel */}
      <MemoryPanel />
    </div>
  </section>
);
