import React from 'react';
import { Reveal } from './ui/Reveal';

const tools = ['Gmail', 'Slack', 'Jira', 'Notion', 'HubSpot', 'Google Calendar'];
const notetakers = ['Granola', 'Fireflies', 'Google Meet', 'Paste anything'];

export const WorksWith: React.FC = () => (
  <section
    style={{
      background: 'hsl(0,0%,10%)',
      padding: '5rem 1.5rem',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}
  >
    <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>

      <Reveal>
        <h2
          className="font-serif font-black"
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#fff',
            marginBottom: '0.75rem',
          }}
        >
          Works with every tool
          <br />you already use.
        </h2>
        <p
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.28)',
            marginBottom: '3.5rem',
          }}
        >
          Zero setup for your team.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px 32px',
            marginBottom: '3rem',
          }}
        >
          {tools.map(tool => (
            <span
              key={tool}
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontWeight: 500,
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.02em',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={180}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
          <span
            style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.2)',
              whiteSpace: 'nowrap',
            }}
          >
            Meeting notes from
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px 24px',
          }}
        >
          {notetakers.map((n, i) => (
            <span
              key={n}
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.78rem',
                color: i === notetakers.length - 1 ? '#5A53E1' : 'rgba(255,255,255,0.35)',
                letterSpacing: '0.02em',
              }}
            >
              {n}
            </span>
          ))}
        </div>
      </Reveal>

    </div>
  </section>
);
