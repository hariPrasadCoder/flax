import React from 'react';
import { Reveal } from './ui/Reveal';

const FlaxieCard: React.FC = () => (
  <div className="card overflow-hidden max-w-xs mx-auto" style={{ boxShadow: '0 8px 48px rgba(90,83,225,0.12), 0 2px 8px rgba(0,0,0,0.06)', borderColor: 'rgba(90,83,225,0.15)' }}>
    <div className="bg-ink px-4 py-3 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-flax flex items-center justify-center shrink-0">
        <span className="font-serif font-black text-white text-sm select-none">F</span>
      </div>
      <div>
        <div className="font-mono text-[12px] text-white font-medium">Flaxie</div>
        <div className="font-mono text-[10px] text-white/40">Client Call · ended 9 min ago</div>
      </div>
      <div className="ml-auto flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-flax animate-pulse" />
        <span className="font-mono text-[10px] text-white/40">Working</span>
      </div>
    </div>

    <div className="p-4 space-y-2.5 bg-surface">
      <div className="label">Actions in progress</div>

      {[
        { icon: '✉', name: 'Alex', action: 'Draft email · proposal follow-up', status: 'Ready' },
        { icon: '⊙', name: 'Sam', action: 'Calendar invite · Thu 2pm sync', status: 'Ready' },
        { icon: '⬡', name: 'Nina', action: 'Jira ticket · DECK-12 created', status: 'Done' },
      ].map((c, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <span className="font-mono text-[13px] text-ink-muted shrink-0 mt-0.5 w-4">{c.icon}</span>
          <div className="flex-1 min-w-0">
            <span className="font-mono text-[11px] text-ink font-medium">{c.name}</span>
            <span className="font-mono text-[10px] text-ink-muted ml-1.5 leading-4">· {c.action}</span>
          </div>
          <span className={`font-mono text-[10px] shrink-0 ${c.status === 'Done' ? 'text-green-700' : 'text-flax'}`}>
            {c.status}
          </span>
        </div>
      ))}

      <div className="flex items-center gap-2 pt-2 border-t border-rule">
        <div className="w-6 h-6 rounded-full bg-flax flex items-center justify-center shrink-0">
          <span className="font-serif font-black text-white text-[9px]">F</span>
        </div>
        <span className="font-mono text-[12px] text-ink font-medium">Flaxie</span>
        <span className="label bg-paper border border-rule px-1.5 py-0.5 ml-auto">Awaiting approval</span>
      </div>
    </div>

    <div className="px-4 py-2.5 border-t border-rule bg-flax/5">
      <span className="font-mono text-[10px] text-flax">
        3 actions drafted · nothing sent yet · waiting for you
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
          <h2
            className="font-serif font-black text-ink mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.015em' }}
          >
            Not a tracker.<br /><span style={{ color: '#5A53E1' }}>An operator.</span>
          </h2>
          <p className="text-ink-muted text-base leading-relaxed mb-4">
            Flaxie reads your meeting notes, figures out who committed to what, and
            immediately starts drafting the follow-up actions   emails, tasks,
            calendar invites, Slack messages.
          </p>
          <p className="text-ink-muted text-base leading-relaxed">
            She doesn't wait for instructions. She decides what needs to happen
            and gets to work. You approve before anything goes out.
            No new tools for your team. No workflows to set up.
          </p>
        </Reveal>

      </div>
    </div>
  </section>
);
