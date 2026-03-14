import React from 'react';
import { Reveal } from './ui/Reveal';

export const Problem: React.FC = () => (
  <section id="problem" className="border-t border-b border-rule py-24">
    <div className="max-w-5xl mx-auto px-6">

      <Reveal>
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif font-black text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            Decisions happen in meetings.<br />Your docs don't know that.
          </h2>
        </div>
      </Reveal>

      {/* Visual contrast */}
      <Reveal delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] items-stretch gap-0 mb-16">

          {/* Meeting */}
          <div className="card overflow-hidden">
            <div className="bg-ink px-4 py-2.5 flex items-center justify-between">
              <span className="label text-white/50">Meeting · 12 Mar</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="font-mono text-[10px] text-white/40">Bot joined</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="font-mono text-[11px] text-ink-muted">Engineering Lead · 14:22</div>
              <p className="font-serif italic text-ink text-base leading-7">
                "We're moving off MongoDB. Switching to PostgreSQL by end of Q1. The whole team agreed."
              </p>
              <div className="label border-t border-rule pt-4">Decision recorded · Flaxie analyzing</div>
            </div>
          </div>

          {/* Desktop gap */}
          <div className="hidden md:flex flex-col items-center justify-center gap-2">
            <div className="w-px flex-1 bg-rule" />
            <div className="card w-9 h-9 flex items-center justify-center shrink-0">
              <span className="font-serif font-black text-ink-muted text-base">≠</span>
            </div>
            <div className="w-px flex-1 bg-rule" />
          </div>

          {/* Mobile gap */}
          <div className="md:hidden flex items-center gap-3 py-3">
            <div className="h-px flex-1 bg-rule" />
            <span className="font-serif font-black text-ink-muted text-base">≠</span>
            <div className="h-px flex-1 bg-rule" />
          </div>

          {/* Stale doc */}
          <div className="card overflow-hidden">
            <div className="bg-paper border-b border-rule px-4 py-2.5 flex items-center justify-between">
              <span className="label">architecture.md</span>
              <span className="font-mono text-[10px] text-ink-muted/60">Last edited: 7 months ago</span>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-base text-ink leading-7">
                We use{' '}
                <span className="bg-red-50 text-red-600 line-through decoration-red-300 px-0.5">MongoDB</span>
                {' '}as our primary data store. The database layer was chosen for its flexible schema…
              </p>
              <div className="label border-t border-rule pt-4 text-red-400/70">
                This information is no longer accurate.
              </div>
            </div>
          </div>

        </div>
      </Reveal>

      {/* Consequences */}
      <Reveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule rounded-md overflow-hidden">
          {[
            { n: '01', h: 'Engineers repeat past mistakes.',     note: 'Nobody wrote down why it was rejected.' },
            { n: '02', h: 'New hires navigate by asking, not reading.', note: 'Onboarding runs on Slack threads.' },
            { n: '03', h: 'Nobody knows why decisions were made.', note: 'The reasoning was verbal. Now it\'s gone.' },
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
