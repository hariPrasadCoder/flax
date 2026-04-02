import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './ui/Reveal';

const scopes = [
  {
    logo: '/Gmail.png',
    service: 'Gmail',
    scope: 'Read, draft & send emails',
    why: 'When a meeting action item involves an email — a follow-up, a recap, or a reply — Flaxie reads the relevant thread for context, writes the draft, and sends it only after you review and approve it.',
    never: 'Flaxie never deletes emails or sends anything without your explicit approval.',
  },
  {
    logo: '/Google calendar.png',
    service: 'Google Calendar',
    scope: 'Read schedule & create events',
    why: 'When a meeting commits to a future call or deadline, Flaxie checks your calendar for availability and creates the event. Read access prevents double-booking. Write access creates the invite.',
    never: 'Flaxie never modifies or deletes existing events without your approval.',
  },
  {
    logo: '/google drive.png',
    service: 'Google Drive',
    scope: 'Store & retrieve files',
    why: 'Drive is the underlying layer for Docs, Sheets, and Slides. Flaxie needs Drive access to save newly created files and locate files referenced during your meeting.',
    never: 'Flaxie never shares, moves, or deletes Drive files without your approval.',
  },
  {
    logo: '/Google docs.png',
    service: 'Google Docs',
    scope: 'Create & edit documents',
    why: 'When a meeting assigns a writing task — a brief, a proposal, a summary — Flaxie drafts the document. Read-only access is insufficient because the core feature produces new documents.',
    never: 'Flaxie never publishes or shares a document without your approval.',
  },
  {
    logo: '/Google sheets.png',
    service: 'Google Sheets',
    scope: 'Create & update spreadsheets',
    why: 'When a meeting assigns a data-tracking task — adding a row to the pipeline, logging a decision — Flaxie writes to the relevant sheet. Read-only access cannot fulfil this.',
    never: 'Flaxie never deletes rows or reformats sheets without your approval.',
  },
  {
    logo: '/Google slides.png',
    service: 'Google Slides',
    scope: 'Create presentations',
    why: "When a meeting commits to a deck — an investor update, a QBR — Flaxie generates the slide structure and draft content. This requires write access to create the file.",
    never: 'Flaxie never publishes or shares a deck without your approval.',
  },
];

export const GoogleDataSection: React.FC = () => (
  <section
    style={{
      background: 'hsl(42,24%,97%)',
      borderTop: '1px solid hsl(0,0%,84%)',
      padding: '5rem 1.5rem',
    }}
  >
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

      <Reveal>
        <span
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'hsl(0,0%,48%)',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          Data access & permissions
        </span>
        <h2
          style={{
            fontFamily: 'Merriweather, Georgia, serif',
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'hsl(0,0%,10%)',
            marginBottom: '0.75rem',
          }}
        >
          We only ask for what we need.
          <br />You decide what happens.
        </h2>
        <p
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.72rem',
            color: 'hsl(0,0%,42%)',
            lineHeight: 1.8,
            maxWidth: '560px',
            marginBottom: '3rem',
          }}
        >
          Flaxie connects to your Google account to carry out actions from your meetings.
          Every action is shown to you first — nothing is sent, created, or modified
          without your explicit approval. We never use your data to train models.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1px',
            background: 'hsl(0,0%,82%)',
            border: '1px solid hsl(0,0%,82%)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          {scopes.map((s) => (
            <div
              key={s.service}
              style={{
                background: 'hsl(42,24%,97%)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src={s.logo}
                  alt={s.service}
                  style={{ width: '20px', height: '20px', objectFit: 'contain', flexShrink: 0 }}
                  draggable={false}
                />
                <div>
                  <div
                    style={{
                      fontFamily: 'IBM Plex Mono, monospace',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'hsl(0,0%,10%)',
                    }}
                  >
                    {s.service}
                  </div>
                  <div
                    style={{
                      fontFamily: 'IBM Plex Mono, monospace',
                      fontSize: '0.6rem',
                      color: 'hsl(240,60%,55%)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {s.scope}
                  </div>
                </div>
              </div>

              {/* Why */}
              <p
                style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '0.65rem',
                  color: 'hsl(0,0%,35%)',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {s.why}
              </p>

              {/* Never */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '7px',
                  paddingTop: '8px',
                  borderTop: '1px solid hsl(0,0%,88%)',
                }}
              >
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    flexShrink: 0,
                    marginTop: '4px',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'hsl(0,0%,48%)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {s.never}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160}>
        <p
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.62rem',
            color: 'hsl(0,0%,52%)',
            marginTop: '1.75rem',
            lineHeight: 1.8,
          }}
        >
          For full details on how we collect, store, and protect your data, read our{' '}
          <Link
            to="/privacy"
            style={{ color: 'hsl(240,60%,50%)', textDecoration: 'underline' }}
          >
            Privacy Policy
          </Link>
          . Questions? Email{' '}
          <a
            href="mailto:contact@joinflax.com"
            style={{ color: 'hsl(240,60%,50%)', textDecoration: 'underline' }}
          >
            contact@joinflax.com
          </a>
          .
        </p>
      </Reveal>

    </div>
  </section>
);
