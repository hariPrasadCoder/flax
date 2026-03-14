import React from 'react';
import { Reveal } from './ui/Reveal';

const people = [
  { name: 'Alex Chen',   initial: 'A' },
  { name: 'Maya Patel',  initial: 'M' },
  { name: 'Rohan Mehta', initial: 'R' },
];

const FlaxieCard: React.FC = () => (
  <div className="card overflow-hidden max-w-xs mx-auto">
    <div className="bg-ink px-4 py-3 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-flax flex items-center justify-center shrink-0">
        <span className="font-serif font-black text-white text-sm select-none">F</span>
      </div>
      <div>
        <div className="font-mono text-[12px] text-white font-medium">Flaxie joined</div>
        <div className="font-mono text-[10px] text-white/40">Backend Sync · 2:14 PM</div>
      </div>
      <div className="ml-auto flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="font-mono text-[10px] text-white/40">Live</span>
      </div>
    </div>

    <div className="p-4 space-y-3 bg-surface">
      <div className="label">Participants</div>

      {people.map(p => (
        <div key={p.name} className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-rule flex items-center justify-center shrink-0">
            <span className="font-mono text-[9px] font-semibold text-ink-muted">{p.initial}</span>
          </div>
          <span className="font-mono text-[12px] text-ink-muted">{p.name}</span>
        </div>
      ))}

      <div className="flex items-center gap-2.5 pt-2 border-t border-rule">
        <div className="w-6 h-6 rounded-full bg-flax flex items-center justify-center shrink-0">
          <span className="font-serif font-black text-white text-[9px]">F</span>
        </div>
        <span className="font-mono text-[12px] text-ink font-medium">Flaxie</span>
        <span className="label bg-paper border border-rule px-1.5 py-0.5 ml-auto">AI · Docs</span>
      </div>
    </div>

    <div className="px-4 py-2.5 border-t border-rule bg-paper">
      <span className="font-mono text-[10px] text-ink-muted">
        Listening · She'll update docs after the call
      </span>
    </div>
  </div>
);

export const FlaxieIntro: React.FC = () => (
  <section className="py-24 border-b border-rule">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <Reveal className="order-2 md:order-1">
          <FlaxieCard />
        </Reveal>

        <Reveal delay={100} className="order-1 md:order-2">
          <div className="label mb-5">Meet Flaxie</div>
          <h2 className="font-serif font-black text-ink mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.015em' }}>
            Your team's AI<br />documentation agent.
          </h2>
          <p className="text-ink-muted text-base leading-relaxed mb-4">
            She joins, listens, and updates your docs, without being asked.
          </p>
          <p className="text-ink-muted text-base leading-relaxed">
            No workflows to configure. No summaries to copy-paste. She just works.
          </p>
        </Reveal>

      </div>
    </div>
  </section>
);
