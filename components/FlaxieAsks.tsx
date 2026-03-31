import React from 'react';
import { Reveal } from './ui/Reveal';

const ProactiveCard = () => (
  <div className="card overflow-hidden" style={{ boxShadow: '0 8px 48px rgba(90,83,225,0.12), 0 2px 8px rgba(0,0,0,0.06)', borderColor: 'rgba(90,83,225,0.15)' }}>
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Flaxie · Right now</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-flax animate-pulse" />
        <span className="label text-flax">Working</span>
      </div>
    </div>
    <div className="p-5 bg-surface space-y-3">
      {[
        {
          text: 'Alex committed to this 8 days ago.',
          note: 'Drafted a nudge   waiting for your approval.',
          color: 'text-red-500',
          dot: 'bg-red-400',
        },
        {
          text: 'The pricing question came up in 3 meetings.',
          note: 'Still unresolved   flagging before the next call.',
          color: 'text-amber-600',
          dot: 'bg-amber-400',
        },
        {
          text: 'Sam hasn\'t updated since Thursday.',
          note: 'Drafted a check-in email   ready for you to review.',
          color: 'text-flax',
          dot: 'bg-flax',
        },
      ].map((item, i) => (
        <div key={i} className="flex gap-3 items-start">
          <div className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0 mt-1.5`} />
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
        You didn't ask her to do any of this. She just did.
      </span>
    </div>
  </div>
);

export const FlaxieAsks: React.FC = () => (
  <section className="py-24 border-b border-rule bg-surface">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <Reveal>
          <div className="label mb-5">Proactive, not reactive</div>
          <h2
            className="font-serif font-black text-ink mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}
          >
            She doesn't wait<br />to be told.
          </h2>
          <p className="text-ink-muted text-base leading-relaxed mb-4">
            Most tools wait for you to ask. Flaxie doesn't. She reads your meetings,
            decides what needs to happen, and starts working   before you even
            open your laptop the next morning.
          </p>
          <p className="text-ink-muted text-base leading-relaxed">
            Stale commitments, unresolved decisions, things quietly going sideways  
            she surfaces them and drafts the action. You just review and approve.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ProactiveCard />
        </Reveal>

      </div>
    </div>
  </section>
);
