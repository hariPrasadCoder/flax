import React from 'react';
import { Reveal } from './ui/Reveal';

const ApprovalCard: React.FC = () => (
  <div
    style={{
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid hsl(0,0%,82%)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.09), 0 4px 16px rgba(0,0,0,0.06)',
    }}
  >
    {/* Header */}
    <div
      style={{
        background: 'hsl(0,0%,10%)',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: '#5A53E1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, color: '#fff', fontSize: '9px' }}>F</span>
        </div>
        <div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#fff', fontWeight: 500 }}>Flaxie</div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>Draft ready</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }} />
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>Waiting for you</span>
      </div>
    </div>

    {/* Email metadata */}
    <div
      style={{
        background: 'hsl(42,24%,97%)',
        padding: '16px 20px',
        borderBottom: '1px solid hsl(0,0%,88%)',
      }}
    >
      {[
        { label: 'To', value: 'alex@company.com' },
        { label: 'Subject', value: 'Following up on the proposal' },
      ].map(row => (
        <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px' }}>
          <span
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.6rem',
              color: 'hsl(0,0%,55%)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              width: '52px',
              flexShrink: 0,
            }}
          >
            {row.label}
          </span>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: 'hsl(0,0%,15%)' }}>
            {row.value}
          </span>
        </div>
      ))}
    </div>

    {/* Email body — left aligned */}
    <div style={{ background: '#fff', padding: '20px' }}>
      <p
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '12px',
          color: 'hsl(0,0%,28%)',
          lineHeight: 1.8,
          textAlign: 'left',
        }}
      >
        Hi Alex,<br /><br />
        Just following up on the proposal we discussed in Tuesday's call.
        You mentioned you'd send it over today. Let me know if there's
        anything you need from my end.<br /><br />
        Best,<br />
        [Your name]
      </p>
    </div>

    {/* Approval actions */}
    <div
      style={{
        background: 'hsl(42,24%,97%)',
        padding: '14px 20px',
        borderTop: '1px solid hsl(0,0%,88%)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <button
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '11px',
          fontWeight: 500,
          color: '#fff',
          background: '#5A53E1',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Approve and Send
      </button>
      <button
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '11px',
          color: 'hsl(0,0%,35%)',
          background: '#fff',
          border: '1px solid hsl(0,0%,82%)',
          padding: '8px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Edit
      </button>
      <button
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '11px',
          color: 'hsl(0,0%,55%)',
          background: 'transparent',
          border: 'none',
          padding: '8px 12px',
          cursor: 'pointer',
          marginLeft: 'auto',
        }}
      >
        Skip
      </button>
    </div>
  </div>
);

export const ApprovalSection: React.FC = () => (
  <section
    style={{
      minHeight: '80vh',
      background: 'hsl(42,24%,95%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 1.5rem',
    }}
  >
    <div style={{ width: '100%', maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>

      <Reveal>
        <span
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'hsl(0,0%,42%)',
            display: 'block',
            marginBottom: '1.5rem',
          }}
        >
          You stay in control
        </span>
        <h2
          className="font-serif font-black"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'hsl(0,0%,10%)',
            marginBottom: '3.5rem',
          }}
        >
          One click. <span style={{ color: '#5A53E1' }}>That is your whole job.</span>
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <ApprovalCard />
      </Reveal>

      <Reveal delay={220}>
        <p
          style={{
            marginTop: '2.5rem',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.7rem',
            color: 'hsl(0,0%,48%)',
            letterSpacing: '0.01em',
            lineHeight: 1.8,
          }}
        >
          Flaxie never sends an email, creates a ticket, or schedules a meeting
          <br />
          without your approval. Every single time.
        </p>
      </Reveal>

    </div>
  </section>
);
