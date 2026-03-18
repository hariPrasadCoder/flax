import React from 'react';
import { Reveal } from './ui/Reveal';

const NudgeCard: React.FC<{
  time: string;
  body: React.ReactNode;
}> = ({ time, body }) => (
  <div className="card overflow-hidden">
    <div className="flex gap-3 p-4 bg-surface">
      <div className="w-8 h-8 rounded-full bg-flax flex items-center justify-center shrink-0 mt-0.5">
        <span className="font-serif font-black text-white text-[10px] select-none">F</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-mono text-[11px] text-ink font-medium">Flaxie</span>
          <span className="font-mono text-[10px] text-ink-muted">{time}</span>
        </div>
        <div className="font-mono text-[12px] text-ink leading-5 space-y-1">
          {body}
        </div>
      </div>
    </div>
  </div>
);

export const NudgeSection: React.FC = () => (
  <section className="py-24 border-b border-rule">
    <div className="max-w-5xl mx-auto px-6">

      <Reveal>
        <div className="max-w-2xl mb-16">
          <div className="label mb-4">Automated follow-ups</div>
          <h2 className="font-serif font-black text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            The nudges nobody sends.<br />Flaxie sends them.
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal delay={80}>
          <NudgeCard
            time="Today 9:00 AM"
            body={
              <p>
                Hey Alex, just a nudge. You committed to sending the proposal last Monday.
                Still open. Need help unblocking, or can you close this today?
              </p>
            }
          />
        </Reveal>

        <Reveal delay={140}>
          <NudgeCard
            time="Friday 5:00 PM"
            body={
              <div className="space-y-1.5">
                <p className="text-ink-muted">Weekly wrap for you.</p>
                <p className="text-green-700">✓ 4 items closed this week</p>
                <p className="text-ink-muted">→ 3 items still open</p>
                <p className="text-red-500">⚠ 1 item overdue by 8 days · needs your attention</p>
              </div>
            }
          />
        </Reveal>
      </div>

      <Reveal delay={180}>
        <p className="mt-10 font-mono text-[12px] text-ink-muted max-w-lg leading-relaxed">
          At the right time. Right tone. Through Slack, email, or wherever your team lives.
          You stay out of it until you actually need to step in.
        </p>
      </Reveal>

    </div>
  </section>
);
