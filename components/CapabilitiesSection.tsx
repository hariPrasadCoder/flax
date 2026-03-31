import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from './ui/Reveal';

/* ── Mini mockups per tool ───────────────────────────────────── */

const GmailMockup = () => (
  <div style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
    <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: '10px' }}>Draft · ready to send</div>
    {[{ l: 'To', v: 'alex@client.com' }, { l: 'Re', v: 'Following up on proposal' }].map(r => (
      <div key={r.l} style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
        <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', width: '16px', flexShrink: 0 }}>{r.l}</span>
        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)' }}>{r.v}</span>
      </div>
    ))}
    <div style={{ marginTop: '10px', fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.7 }}>
      Hi Alex, wanted to follow up on the proposal<br />we discussed. Let me know if you need anything...
    </div>
  </div>
);

const CalendarMockup = () => (
  <div style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
    <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: '10px' }}>Invite · draft ready</div>
    {[
      { l: 'Event', v: 'Proposal Review' },
      { l: 'When', v: 'Thursday · 2:00 PM' },
      { l: 'Who', v: 'alex@client.com' },
    ].map(r => (
      <div key={r.l} style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
        <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', width: '28px', flexShrink: 0 }}>{r.l}</span>
        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)' }}>{r.v}</span>
      </div>
    ))}
    <div style={{ marginTop: '10px', fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)' }}>
      Also checked your calendar · no conflicts found
    </div>
  </div>
);

const SlackMockup = () => (
  <div style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
    <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: '10px' }}>#sales-team · message ready</div>
    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '6px', padding: '10px' }}>
      <div style={{ fontSize: '0.6rem', color: '#5A53E1', marginBottom: '4px' }}>Flaxie</div>
      <div style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
        Heads up — Alex committed to sending<br />the proposal today. Flagging for visibility.
      </div>
    </div>
  </div>
);

const NotionMockup = () => (
  <div style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
    <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: '10px' }}>Client Notes · updated</div>
    <div style={{ fontSize: '0.63rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
      <div style={{ marginBottom: '4px' }}>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>+</span> Action items added from Tuesday call
      </div>
      <div style={{ marginBottom: '4px' }}>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>+</span> Alex · Proposal · Wednesday
      </div>
      <div>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>+</span> Sam · Demo setup · Thursday
      </div>
    </div>
  </div>
);

const SheetsMockup = () => (
  <div style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
    <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: '10px' }}>Pipeline Tracker · row added</div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
      {['Client', 'Stage', 'Next step'].map(h => (
        <div key={h} style={{ padding: '5px 6px', background: 'rgba(255,255,255,0.05)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)' }}>{h}</div>
      ))}
      {['Acme Corp', 'Proposal', 'Follow-up Wed'].map((v, i) => (
        <div key={i} style={{ padding: '5px 6px', background: 'rgba(90,83,225,0.08)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.55)' }}>{v}</div>
      ))}
    </div>
  </div>
);

const SlidesMockup = () => (
  <div style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
    <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: '10px' }}>Q4 Review Deck · draft created</div>
    {['Executive Summary', 'Pipeline Overview', 'Action Items', 'Next Steps'].map((slide, i) => (
      <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '5px' }}>
        <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.2)', width: '14px' }}>{i + 1}</span>
        <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)' }}>{slide}</span>
      </div>
    ))}
    <div style={{ marginTop: '8px', fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)' }}>4 slides · ready to review</div>
  </div>
);

/* ── Capability cards ────────────────────────────────────────── */

const capabilities = [
  {
    tool: 'Gmail',
    logo: '/Gmail.png',
    label: 'Reads and sends emails',
    mockup: <GmailMockup />,
    live: true,
  },
  {
    tool: 'Google Calendar',
    logo: '/Google calendar.png',
    label: 'Creates invites · reads your schedule',
    mockup: <CalendarMockup />,
    live: true,
  },
  {
    tool: 'Slack',
    logo: '/Slack.png',
    label: 'Sends messages · searches channels',
    mockup: <SlackMockup />,
    live: true,
  },
  {
    tool: 'Notion',
    logo: '/Notion.png',
    label: 'Reads pages · adds action items',
    mockup: <NotionMockup />,
    live: true,
  },
  {
    tool: 'Google Sheets',
    logo: '/Google sheets.png',
    label: 'Updates your trackers automatically',
    mockup: <SheetsMockup />,
    live: true,
  },
  {
    tool: 'Google Slides',
    logo: '/Google slides.png',
    label: 'Creates presentation drafts',
    mockup: <SlidesMockup />,
    live: true,
  },
];

const comingSoon = [
  { tool: 'Jira', logo: '/jira.svg' },
  { tool: 'HubSpot', logo: '/hubspot.png' },
];

/* ── Card ────────────────────────────────────────────────────── */

const CapCard: React.FC<{ cap: typeof capabilities[0]; delay: number }> = ({ cap, delay }) => {
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
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        padding: '20px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={cap.logo}
            alt={cap.tool}
            style={{ width: '22px', height: '22px', objectFit: 'contain', flexShrink: 0 }}
            draggable={false}
          />
          <div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', fontWeight: 500, color: '#fff', marginBottom: '2px' }}>
              {cap.tool}
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)' }}>
              {cap.label}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>LIVE</span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

      {/* Mockup */}
      <div>{cap.mockup}</div>
    </div>
  );
};

const moreItems = [
  { logo: '/google drive.png', label: 'Search Drive files' },
  { logo: '/Google docs.png',  label: 'Write & update Docs' },
  { logo: '/Gmeet.avif',       label: 'Import Meet notes' },
  { logo: '/Gmail.png',        label: 'Write and send emails' },
  { logo: '/Slack.png',        label: 'Summarise threads' },
  { logo: '/Notion.png',       label: 'Query databases' },
];

/* ── Section ─────────────────────────────────────────────────── */

export const CapabilitiesSection: React.FC = () => (
  <section
    className="dot-grid"
    style={{
      backgroundColor: 'hsl(0,0%,10%)',
      padding: '6rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Ambient glow — bottom-left */}
    <div className="glow-drift" style={{
      position: 'absolute', bottom: '-15%', left: '-8%',
      width: '700px', height: '700px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.11) 0%, transparent 65%)',
      pointerEvents: 'none',
      animationDelay: '4s',
    }} />

    <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

      <Reveal>
        <div style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
            What Flaxie can handle
          </span>
          <h2
            className="font-serif font-black"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginTop: '1rem' }}
          >
            One meeting.
            <br />
            <span style={{ color: '#5A53E1' }}>Actions across your entire stack.</span>
          </h2>
        </div>
      </Reveal>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px',
          marginBottom: '3rem',
        }}
      >
        {capabilities.map((cap, i) => (
          <CapCard key={cap.tool} cap={cap} delay={i * 70} />
        ))}
      </div>

      {/* More actions strip */}
      <Reveal delay={300}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            padding: '16px 20px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '10px',
            marginBottom: '3rem',
          }}
        >
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginRight: '4px', flexShrink: 0 }}>
            Also handles
          </span>
          {moreItems.map(({ logo, label }) => (
            <span
              key={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.63rem',
                color: 'rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '4px 10px',
                borderRadius: '100px',
              }}
            >
              <img src={logo} alt="" style={{ width: '12px', height: '12px', objectFit: 'contain', opacity: 0.5, flexShrink: 0 }} draggable={false} />
              {label}
            </span>
          ))}
          <span
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.63rem',
              color: 'rgba(90,83,225,0.6)',
              background: 'rgba(90,83,225,0.08)',
              border: '1px solid rgba(90,83,225,0.18)',
              padding: '4px 10px',
              borderRadius: '100px',
              flexShrink: 0,
            }}
          >
            and more…
          </span>
        </div>
      </Reveal>

      {/* Coming soon */}
      <Reveal delay={500}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
            Coming soon
          </span>
          {comingSoon.map(({ tool, logo }) => (
            <span
              key={tool}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '4px 12px',
                borderRadius: '100px',
              }}
            >
              <img src={logo} alt={tool} style={{ width: '14px', height: '14px', objectFit: 'contain', opacity: 0.5 }} draggable={false} />
              {tool}
            </span>
          ))}
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.18)', marginLeft: 'auto' }}>
            More integrations every quarter
          </span>
        </div>
      </Reveal>

    </div>
  </section>
);
