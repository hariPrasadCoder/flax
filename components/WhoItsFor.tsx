import React from 'react';

const segments = [
  {
    label: 'Engineering Teams',
    headline: 'Stop rediscovering past decisions.',
    detail: 'Every technical choice, every tradeoff — in the doc, automatically.',
  },
  {
    label: 'Product Teams',
    headline: 'Specs that match what actually shipped.',
    detail: 'Flaxi keeps your PRDs in sync with engineering reality.',
  },
  {
    label: 'Founders & Leads',
    headline: 'Institutional memory that scales.',
    detail: 'From 5 people to 50, your team\'s knowledge grows with you.',
  },
];

export const WhoItsFor: React.FC = () => {
  return (
    <section id="who" className="border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20">

        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="section-label">Who It's For</span>
            <span className="section-label">§ 4</span>
          </div>
          <div className="rule-thick" />
        </div>

        <div className="mb-10">
          <h2 className="font-serif font-black text-ink text-3xl md:text-4xl leading-[1.15] max-w-xl">
            For teams that move fast<br />and can't afford to repeat themselves.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule shadow-editorial mb-10">
          {segments.map((seg, i) => (
            <div key={seg.label} className="bg-surface p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="section-label">0{i + 1}</span>
                <div className="h-px flex-1 bg-rule" />
              </div>
              <div className="section-label mb-2">{seg.label}</div>
              <h3 className="font-serif font-bold text-ink text-[15px] leading-snug mb-2">{seg.headline}</h3>
              <p className="text-[11px] text-ink-muted font-mono leading-5">{seg.detail}</p>
            </div>
          ))}
        </div>

        {/* Compatible tools */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="section-label mr-1">Works alongside:</span>
          {['Notion', 'Confluence', 'Google Docs', 'Linear', 'GitHub', 'Coda'].map((tool) => (
            <span key={tool} className="text-[10px] font-mono text-ink-muted border border-rule px-2 py-0.5 bg-surface">
              {tool}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
