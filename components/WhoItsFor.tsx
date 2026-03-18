import React from 'react';
import { Reveal } from './ui/Reveal';

export const WhoItsFor: React.FC = () => (
  <section id="who" className="py-24 border-b border-rule">
    <div className="max-w-5xl mx-auto px-6">

      <Reveal>
        <div className="label mb-16">Who it's for</div>
      </Reveal>

      <Reveal delay={60}>
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif font-black text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            For founders who can't afford to let things slip. And the people who keep them accountable.
          </h2>
          <p className="mt-6 text-ink-muted text-lg leading-relaxed">
            Founders wearing every hat. Chiefs of Staff managing too much. Ops leads who notice before anyone else does.
          </p>
          <p className="mt-4 text-ink-muted text-base leading-relaxed">
            If your team makes commitments in meetings and you're the one tracking them, Flaxie is for you.
          </p>
          <p className="mt-6 font-mono text-[11px] text-ink-muted border-t border-rule pt-6">
            Reading this and thinking of someone? That's the person who should see it.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-12 pt-10 border-t border-rule">
          <div className="label mb-5">Works with your existing notetaker. No switching. No setup.</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {['Granola', 'Otter', 'Fireflies', 'Google Meet', 'Zoom', 'Any format'].map(t => (
              <span key={t} className="font-mono text-[11px] text-ink-muted border border-rule
                px-2.5 py-1 bg-surface rounded-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

    </div>
  </section>
);
