import React from 'react';
import { Reveal } from './ui/Reveal';

export const Problem: React.FC = () => (
  <section id="problem" className="border-t border-b border-rule py-24">
    <div className="max-w-5xl mx-auto px-6">

      <Reveal>
        <div className="max-w-2xl mb-16">
          <h2
            className="font-serif font-black text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}
          >
            Meetings are full of promises.<br />Most of them die quietly.
          </h2>
        </div>
      </Reveal>

      {/* Visual contrast */}
      <Reveal delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] items-stretch gap-0 mb-10">

          {/* During the meeting */}
          <div className="card overflow-hidden">
            <div className="bg-ink px-4 py-2.5 flex items-center justify-between">
              <span className="label text-white/50">Tuesday · 10am · Client call</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="font-mono text-[10px] text-white/40">Untracked</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="font-mono text-[11px] text-ink-muted">Everyone in the meeting · 10:22 AM</div>
              <p className="font-serif italic text-ink text-base leading-7">
                "I'll follow up with the proposal by end of week."
              </p>
              <p className="font-serif italic text-ink text-base leading-7">
                "I'll loop in the team and get back to you Thursday."
              </p>
              <div className="label border-t border-rule pt-4 text-ink-muted/60">
                Nodding. Noted in someone's head.
              </div>
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

          {/* Friday */}
          <div className="card overflow-hidden">
            <div className="bg-paper border-b border-rule px-4 py-2.5 flex items-center justify-between">
              <span className="label">Friday · 4pm</span>
              <span className="font-mono text-[10px] text-red-400/80">Nothing sent</span>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-base text-ink leading-7">
                No proposal.{' '}
                <span className="bg-red-50 text-red-600 px-0.5">No follow-up. No update.</span>
              </p>
              <p className="text-base text-ink-muted leading-7">
                The client is waiting. You're the one who has to chase.
                Again.
              </p>
              <div className="label border-t border-rule pt-4 text-ink-muted/70">
                You become the person who remembers so everyone else doesn't have to.
              </div>
            </div>
          </div>

        </div>
      </Reveal>

      {/* Pain points */}
      <Reveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule rounded-md overflow-hidden">
          {[
            {
              n: '01',
              h: 'Things slip between meetings.',
              note: 'Not because people don\'t care. Because no one ever actually does anything about it.',
            },
            {
              n: '02',
              h: 'You find out too late.',
              note: 'By the time you know something slipped, the damage is already done.',
            },
            {
              n: '03',
              h: 'The follow-up always falls on one person.',
              note: 'That person is you. It shouldn\'t be.',
            },
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
