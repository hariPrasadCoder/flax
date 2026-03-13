import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20">

        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="section-label">The Problem</span>
            <span className="section-label">§ 1</span>
          </div>
          <div className="rule-thick" />
        </div>

        <div className="mb-12 max-w-2xl">
          <h2 className="font-serif font-black text-ink text-3xl md:text-4xl leading-[1.15]">
            Decisions happen in meetings.<br />Your docs don't know that.
          </h2>
        </div>

        {/* Visual contrast: The gap */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch mb-14">

          {/* Meeting side */}
          <div className="card p-0 overflow-hidden">
            <div className="px-4 py-2.5 bg-ink flex items-center justify-between">
              <span className="text-[10px] font-mono text-white/60 tracking-wider uppercase">Meeting · 12 Mar</span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/50">
                <span className="w-1.5 h-1.5 rounded-sm bg-green-400 inline-block" />
                Bot joined
              </span>
            </div>
            <div className="p-5 space-y-4">
              <div className="text-xs text-ink-muted leading-5">Engineering Lead · 14:22</div>
              <p className="text-sm text-ink leading-7 font-serif italic">
                "We're moving off MongoDB. Switching to PostgreSQL by end of Q1. Team agreed."
              </p>
              <div className="text-[10px] font-mono text-ink-muted border-t border-rule pt-3">Decision recorded · Flax analyzing</div>
            </div>
          </div>

          {/* Gap indicator */}
          <div className="hidden md:flex flex-col items-center justify-center px-6 gap-3">
            <div className="w-px flex-1 bg-rule" />
            <div className="card w-10 h-10 flex items-center justify-center shrink-0 shadow-editorial">
              <span className="font-serif font-black text-ink-muted text-lg">≠</span>
            </div>
            <div className="w-px flex-1 bg-rule" />
          </div>

          {/* Doc side */}
          <div className="card p-0 overflow-hidden">
            <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
              <span className="text-[10px] font-mono text-ink-muted tracking-wider uppercase">architecture.md</span>
              <span className="text-[10px] font-mono text-ink-muted/60">Last edited: 7 months ago</span>
            </div>
            <div className="p-5 space-y-3">
              <p className="text-sm text-ink leading-7">
                We use <span className="bg-red-50 px-0.5 text-red-700 line-through decoration-red-400">MongoDB</span> as our primary data store.
              </p>
              <p className="text-xs text-ink-muted leading-6">
                The database layer was chosen for its flexible schema and rapid prototyping capabilities...
              </p>
              <div className="text-[10px] font-mono text-ink-muted/60 border-t border-rule pt-3">
                This information is no longer accurate.
              </div>
            </div>
          </div>

        </div>

        {/* Short label below */}
        <p className="text-center text-xs text-ink-muted font-mono mb-14 md:hidden">
          The gap between what happened and what's documented.
        </p>

        {/* Three consequences — short labels only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule shadow-editorial">
          {[
            {
              num: '01',
              headline: 'Engineers repeat failed decisions.',
              note: 'No one wrote down why it was rejected last time.',
            },
            {
              num: '02',
              headline: 'Onboarding takes weeks, not days.',
              note: 'New hires navigate by asking, not reading.',
            },
            {
              num: '03',
              headline: 'Leadership loses decision history.',
              note: 'The reasoning was verbal. Now it\'s gone.',
            },
          ].map((item) => (
            <div key={item.num} className="bg-paper px-6 py-5">
              <span className="section-label block mb-3">{item.num}</span>
              <h3 className="font-serif font-bold text-ink text-[14px] leading-snug mb-2">{item.headline}</h3>
              <p className="text-[11px] text-ink-muted leading-5 font-mono">{item.note}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-10 pt-8 border-t border-rule flex flex-wrap gap-10">
          {[
            { stat: '~40%', label: 'engineering time lost to knowledge gaps' },
            { stat: '3×', label: 'slower onboarding with stale docs' },
            { stat: '60%', label: 'of decisions undocumented after 30 days' },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-serif font-black text-ink text-3xl">{item.stat}</div>
              <div className="text-[11px] text-ink-muted mt-0.5 leading-5 max-w-[160px] font-mono">{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
