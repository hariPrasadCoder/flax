import React from 'react';
import { Reveal } from './ui/Reveal';

export const CTASection: React.FC = () => (
  <section
    id="waitlist"
    style={{
      minHeight: '72vh',
      background: 'hsl(0,0%,10%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '6rem 1.5rem',
    }}
  >
    <div style={{ maxWidth: '640px', width: '100%', margin: '0 auto' }}>

      <Reveal>
        <span
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            display: 'block',
            marginBottom: '2rem',
          }}
        >
          Early Access
        </span>

        <h2
          className="font-serif font-black"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: '#fff',
            marginBottom: '1.5rem',
          }}
        >
          Let Flaxie
          <br />
          <span style={{ color: '#5A53E1' }}>handle it.</span>
        </h2>

        <p
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.32)',
            letterSpacing: '0.02em',
            lineHeight: 2,
            marginBottom: '2.5rem',
          }}
        >
          Paste your meeting notes.
          <br />
          See what Flaxie does with them.
          <br />
          No setup for your team.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '2rem',
          }}
        >
          <button
            className="btn btn-primary"
            style={{ fontSize: '0.875rem', padding: '0.8rem 2rem' }}
            data-tally-open="GxLXyQ"
            data-tally-layout="modal"
            data-tally-width="400"
            data-tally-form-events-forwarding="1"
          >
            Get Early Access
          </button>
          <button
            className="btn"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.45)',
              padding: '0.8rem 2rem',
              fontSize: '0.875rem',
              transition: 'border-color 0.15s, color 0.15s',
            }}
            data-cal-link="joinflax/strategy-call"
            data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = 'rgba(255,255,255,0.35)';
              el.style.color = 'rgba(255,255,255,0.8)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.borderColor = 'rgba(255,255,255,0.15)';
              el.style.color = 'rgba(255,255,255,0.45)';
            }}
          >
            Book a 30-min demo
          </button>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {['Free plan available', '14-day Pro trial', 'No credit card needed'].map(t => (
            <span
              key={t}
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.05em',
                color: 'rgba(255,255,255,0.2)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

    </div>
  </section>
);
