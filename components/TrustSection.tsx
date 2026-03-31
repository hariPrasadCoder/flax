import React from 'react';
import { Reveal } from './ui/Reveal';

const pillars = [
  {
    headline: 'You approve every action.',
    body: 'Nothing goes out without your say. Every time.',
  },
  {
    headline: 'We never train on your data.',
    body: 'Your meetings stay yours. Not ours. Not anyone else.',
  },
  {
    headline: 'Enterprise infrastructure.',
    body: 'Supabase with row-level security. Hosted on AWS. Your data is isolated.',
  },
  {
    headline: 'Notes discarded after reading.',
    body: 'We extract commitments, then discard the raw text. We hold structure, not conversations.',
  },
];

export const TrustSection: React.FC = () => (
  <section
    className="px-6 py-20 border-t border-b"
    style={{ background: 'hsl(42,24%,95%)', borderColor: 'hsl(0,0%,82%)' }}
  >
    <div className="max-w-5xl mx-auto">

      <Reveal>
        <div className="mb-12">
          <span
            className="font-mono text-[11px] tracking-widest uppercase"
            style={{ color: 'hsl(0,0%,42%)' }}
          >
            Privacy and security
          </span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'hsl(0,0%,82%)' }}
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              className="px-6 py-6"
              style={{ background: 'hsl(42,24%,95%)' }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full bg-flax mb-4"
              />
              <h3
                className="font-serif font-bold mb-2"
                style={{ fontSize: '0.9rem', color: 'hsl(0,0%,10%)', lineHeight: 1.3 }}
              >
                {p.headline}
              </h3>
              <p
                className="font-mono"
                style={{ fontSize: '0.68rem', color: 'hsl(0,0%,42%)', lineHeight: 1.65 }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

    </div>
  </section>
);
