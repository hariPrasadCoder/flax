import React from 'react';
import { Reveal } from './ui/Reveal';

const segments = [
  { label: 'Engineering Teams', tagline: 'Stop re-learning decisions you already made.' },
  { label: 'Product Teams',     tagline: 'PRDs that match what actually shipped.' },
  { label: 'Founders',          tagline: 'Institutional memory that scales with you.' },
];

export const WhoItsFor: React.FC = () => (
  <section id="who" className="py-24 border-b border-rule">
    <div className="max-w-5xl mx-auto px-6">

      <Reveal>
        <div className="label mb-16">Who it's for</div>
      </Reveal>

      <div className="space-y-0 divide-y divide-rule border-t border-b border-rule">
        {segments.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 py-8 hover:bg-surface/60
              transition-colors duration-200 px-4 -mx-4">
              <div className="flex items-baseline gap-4">
                <span className="label w-6 shrink-0">{String(i + 1).padStart(2,'0')}</span>
                <span className="font-serif font-bold text-ink text-lg">{s.label}</span>
              </div>
              <p className="text-ink-muted text-base leading-relaxed md:pl-4">{s.tagline}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="label">Works alongside</span>
          {['Notion','Confluence','Google Docs','Linear','GitHub','Coda'].map(t => (
            <span key={t} className="font-mono text-[11px] text-ink-muted border border-rule
              px-2.5 py-1 bg-surface rounded-sm">
              {t}
            </span>
          ))}
        </div>
      </Reveal>

    </div>
  </section>
);
