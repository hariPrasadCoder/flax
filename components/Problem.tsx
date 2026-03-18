import React from 'react';
import { Reveal } from './ui/Reveal';

export const Problem: React.FC = () => (
  <section id="problem" className="border-t border-b border-rule py-24">
    <div className="max-w-5xl mx-auto px-6">

      <Reveal>
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif font-black text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            Decisions happen in meetings.<br />Nobody follows through.
          </h2>
        </div>
      </Reveal>

      {/* Visual contrast */}
      <Reveal delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] items-stretch gap-0 mb-10">

          {/* Meeting card */}
          <div className="card overflow-hidden">
            <div className="bg-ink px-4 py-2.5 flex items-center justify-between">
              <span className="label text-white/50">Meeting · Monday 10am</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="font-mono text-[10px] text-white/40">Untracked</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="font-mono text-[11px] text-ink-muted">Your team · 10:14 AM</div>
              <p className="font-serif italic text-ink text-base leading-7">
                "I'll send the proposal by Wednesday. Promise."
              </p>
              <div className="label border-t border-rule pt-4">Commitment recorded · Flaxie tracking</div>
            </div>
          </div>

          {/* Desktop gap */}
          <div className="hidden md:flex flex-col items-center justify-center gap-2">
            <div className="w-px flex-1 bg-rule" />
            <div className="card w-9 h-9 flex items-center justify-center shrink-0">
              <span className="font-serif font-black text-ink-muted text-base">→</span>
            </div>
            <div className="w-px flex-1 bg-rule" />
          </div>

          {/* Mobile gap */}
          <div className="md:hidden flex items-center gap-3 py-3">
            <div className="h-px flex-1 bg-rule" />
            <span className="font-serif font-black text-ink-muted text-base">→</span>
            <div className="h-px flex-1 bg-rule" />
          </div>

          {/* Silence card */}
          <div className="card overflow-hidden">
            <div className="bg-paper border-b border-rule px-4 py-2.5 flex items-center justify-between">
              <span className="label">Wednesday · 6pm</span>
              <span className="font-mono text-[10px] text-red-400/80">Nothing received</span>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-base text-ink leading-7">
                Still waiting.{' '}
                <span className="bg-red-50 text-red-600 px-0.5">No proposal. No update. No message.</span>
              </p>
              <div className="label border-t border-rule pt-4 text-ink-muted/70">
                Thursday · Someone is chasing them on Slack. That someone shouldn't be you.
              </div>
            </div>
          </div>

        </div>
      </Reveal>

      {/* Callout removed — Thursday line covers it */}

      {/* Pain points */}
      <Reveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule rounded-md overflow-hidden">
          {[
            { n: '01', h: 'Action items leave the meeting.', note: 'They don\'t always make it to Friday.' },
            { n: '02', h: 'You find out something slipped', note: 'when it\'s already too late.' },
            { n: '03', h: 'The follow-up always falls on the same person.', note: 'Every time. Without fail.' },
          ].map(item => (
            <div key={item.n} className="bg-paper px-6 py-6">
              <div className="label mb-3">{item.n}</div>
              <h3 className="font-serif font-bold text-ink text-[15px] leading-snug mb-2">{item.h}</h3>
              <p className="font-mono text-[11px] text-ink-muted leading-5">{item.note}</p>
            </div>
          ))}
        </div>
      </Reveal>

    </div>
  </section>
);
