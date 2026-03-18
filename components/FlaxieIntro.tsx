import React from 'react';
import { Reveal } from './ui/Reveal';

const FlaxieCard: React.FC = () => (
  <div className="card overflow-hidden max-w-xs mx-auto">
    <div className="bg-ink px-4 py-3 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-flax flex items-center justify-center shrink-0">
        <span className="font-serif font-black text-white text-sm select-none">F</span>
      </div>
      <div>
        <div className="font-mono text-[12px] text-white font-medium">Flaxie joined</div>
        <div className="font-mono text-[10px] text-white/40">Founder Sync · 10:00 AM</div>
      </div>
      <div className="ml-auto flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="font-mono text-[10px] text-white/40">Live</span>
      </div>
    </div>

    <div className="p-4 space-y-3 bg-surface">
      <div className="label">Commitments tracked</div>

      {[
        { name: 'Alex',  task: 'Send investor update',    due: 'Wed' },
        { name: 'Sam', task: 'Finalize pricing deck',   due: 'Thu' },
        { name: 'Nina', task: 'Schedule demo calls',     due: 'Fri' },
      ].map(c => (
        <div key={c.name} className="flex items-start gap-2.5">
          <div className="w-6 h-6 rounded-full bg-rule flex items-center justify-center shrink-0 mt-0.5">
            <span className="font-mono text-[9px] font-semibold text-ink-muted">{c.name[0]}</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-mono text-[11px] text-ink">{c.name}</span>
            <span className="font-mono text-[10px] text-ink-muted ml-1.5">· {c.task}</span>
          </div>
          <span className="font-mono text-[10px] text-ink-muted shrink-0">{c.due}</span>
        </div>
      ))}

      <div className="flex items-center gap-2.5 pt-2 border-t border-rule">
        <div className="w-6 h-6 rounded-full bg-flax flex items-center justify-center shrink-0">
          <span className="font-serif font-black text-white text-[9px]">F</span>
        </div>
        <span className="font-mono text-[12px] text-ink font-medium">Flaxie</span>
        <span className="label bg-paper border border-rule px-1.5 py-0.5 ml-auto">AI · Commitments</span>
      </div>
    </div>

    <div className="px-4 py-2.5 border-t border-rule bg-paper">
      <span className="font-mono text-[10px] text-ink-muted">
        Listening · She'll follow up when things go quiet
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
            She remembers everything<br />so your team doesn't have to.
          </h2>
          <p className="text-ink-muted text-base leading-relaxed mb-4">
            She reads your meeting notes, figures out who committed to what, builds a dashboard for your projects, and nudges people before things go quiet.
          </p>
          <p className="text-ink-muted text-base leading-relaxed">
            No new tools for your team. No workflows to set up. Works with whatever notetaker you already use.
          </p>
        </Reveal>

      </div>
    </div>
  </section>
);
