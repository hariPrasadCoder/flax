import React from 'react';
import { Reveal } from './ui/Reveal';

const AmbiguityCard = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Flaxie needs your input</span>
      <span className="label text-amber-600">⚠ One question</span>
    </div>
    <div className="p-5 bg-surface space-y-3 font-mono text-[12px]">
      <p className="text-ink-muted text-[11px] leading-5 bg-amber-50 border border-amber-200 rounded-sm px-3 py-2.5">
        She found a decision about authentication but isn't sure whether it applies to{' '}
        <span className="text-ink font-medium">auth.md</span>
        {' '}or{' '}
        <span className="text-ink font-medium">security-overview.md</span>.
        Which document should she update?
      </p>
      <div className="space-y-1">
        <div className="diff-add px-1.5 py-0.5 rounded-sm">+ Session tokens expire after 24h (down from 7 days).</div>
        <div className="diff-add px-1.5 py-0.5 rounded-sm">+ Refresh token rotation enabled by default.</div>
      </div>
    </div>
    <div className="px-4 py-3 border-t border-rule bg-paper flex items-center gap-2">
      {/* Equal-weight option buttons — not confirm/reject styling */}
      {['auth.md', 'security-overview.md'].map(opt => (
        <button
          key={opt}
          className="font-mono text-[11px] text-ink border border-rule px-3 py-1.5
            bg-surface hover:bg-paper hover:border-ink transition-colors rounded-sm"
        >
          {opt}
        </button>
      ))}
      <button className="ml-auto font-mono text-[11px] text-ink-muted hover:text-ink transition-colors">
        Skip
      </button>
    </div>
  </div>
);

export const FlaxieAsks: React.FC = () => (
  <section className="py-24 border-b border-rule bg-surface">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <Reveal>
          <div className="label mb-5">The exception</div>
          <h2 className="font-serif font-black text-ink mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            When she isn't sure,<br />she asks.
          </h2>
          <p className="text-ink-muted text-base leading-relaxed mb-4">
            Ambiguous decisions surface as a single question: which document, which section. You answer in one click. She handles the rest.
          </p>
          <p className="text-ink-muted text-base leading-relaxed">
            You're never out of the loop. You're just not doing the work.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <AmbiguityCard />
        </Reveal>

      </div>
    </div>
  </section>
);
