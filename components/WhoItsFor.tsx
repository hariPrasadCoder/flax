import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';

const rolesRow1 = ['Account Executives', 'Consultants', 'Product Managers'];
const rolesRow2 = ['Chiefs of Staff', 'Founders', 'Operations Leads'];

const RolePill: React.FC<{ label: string; delay: number }> = ({ label, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontWeight: 500,
        fontSize: '0.8rem',
        color: hovered ? '#fff' : 'hsl(0,0%,20%)',
        background: hovered ? '#5A53E1' : '#fff',
        border: `1px solid ${hovered ? '#5A53E1' : 'hsl(0,0%,80%)'}`,
        padding: '10px 20px',
        borderRadius: '100px',
        letterSpacing: '0.01em',
        cursor: 'default',
        transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 6px 20px rgba(90,83,225,0.25)' : 'none',
        animationDelay: `${delay}ms`,
      }}
    >
      {label}
    </span>
  );
};

export const WhoItsFor: React.FC = () => (
  <section
    id="who"
    style={{
      minHeight: '65vh',
      background: 'hsl(42,24%,95%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 1.5rem',
    }}
  >
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

      <Reveal>
        <h2
          className="font-serif font-black"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: 'hsl(0,0%,10%)',
            marginBottom: '0.75rem',
          }}
        >
          If you live in meetings,
        </h2>
        <h2
          className="font-serif font-black"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: '#5A53E1',
            marginBottom: '1.5rem',
          }}
        >
          Flaxie is for you.
        </h2>
        <p
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.7rem',
            color: 'hsl(0,0%,48%)',
            letterSpacing: '0.02em',
            marginBottom: '3rem',
          }}
        >
          Technical or not. Startup or enterprise. Any industry.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {rolesRow1.map((role, i) => (
              <RolePill key={role} label={role} delay={i * 60} />
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {rolesRow2.map((role, i) => (
              <RolePill key={role} label={role} delay={(rolesRow1.length + i) * 60} />
            ))}
            <span
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontWeight: 500,
                fontSize: '0.8rem',
                color: 'hsl(0,0%,55%)',
                border: '1.5px dashed hsl(0,0%,75%)',
                background: 'transparent',
                padding: '10px 20px',
                borderRadius: '100px',
                letterSpacing: '0.01em',
              }}
            >
              & everyone in between
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={220}>
        <p
          style={{
            marginTop: '3.5rem',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.68rem',
            color: 'hsl(0,0%,55%)',
            letterSpacing: '0.01em',
          }}
        >
          Reading this and thinking of someone? That is the person who should see it.
        </p>
      </Reveal>

    </div>
  </section>
);
