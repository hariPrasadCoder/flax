import React from 'react';
import { Reveal } from './ui/Reveal';

const IntelligenceCard = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Flaxie · Right now</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-flax animate-pulse" />
        <span className="label text-flax">Active</span>
      </div>
    </div>
    <div className="p-5 bg-surface space-y-3">
      {[
        {
          arrow: '→',
          text: 'Alex committed to this 8 days ago.',
          note: 'No update.',
          color: 'text-red-500',
        },
        {
          arrow: '→',
          text: 'This came up in 4 meetings.',
          note: 'Still unresolved.',
          color: 'text-amber-600',
        },
        {
          arrow: '→',
          text: '3 things need attention today.',
          note: 'Everything else is moving.',
          color: 'text-flax',
        },
      ].map((item, i) => (
        <div key={i} className="flex gap-3 items-start">
          <span className="font-mono text-[13px] text-ink-muted mt-0.5 shrink-0">{item.arrow}</span>
          <div>
            <span className="font-mono text-[12px] text-ink">{item.text}</span>
            {' '}
            <span className={`font-mono text-[12px] font-medium ${item.color}`}>{item.note}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="px-4 py-2.5 border-t border-rule bg-paper/70">
      <span className="font-mono text-[10px] text-ink-muted italic">
        Not a summary. Not a report. The thing that catches what everyone else missed.
      </span>
    </div>
  </div>
);

export const FlaxieAsks: React.FC = () => (
  <section className="py-24 border-b border-rule bg-surface">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <Reveal>
          <div className="label mb-5">Intelligence</div>
          <h2 className="font-serif font-black text-ink mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            Flaxie surfaces what matters.<br />Before you have to ask.
          </h2>
          <p className="text-ink-muted text-base leading-relaxed mb-4">
            Stale commitments, unresolved decisions, things that are quietly going sideways. She tells you before it becomes your problem.
          </p>
          <p className="text-ink-muted text-base leading-relaxed">
            Not a summary. Not a report. The thing that catches what everyone else missed.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <IntelligenceCard />
        </Reveal>

      </div>
    </div>
  </section>
);
