import React from 'react';
import { Reveal } from './ui/Reveal';

/* ── Step visuals ────────────────────────────────────────────── */

const Step1Visual = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Meeting Notes · Granola</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="font-mono text-[10px] text-green-700">Reading</span>
      </div>
    </div>
    <div className="p-5 space-y-4 bg-surface">
      <div className="flex items-start gap-3 p-3 bg-paper rounded-sm border border-rule">
        <div className="w-8 h-8 rounded-sm bg-flax/10 border border-flax/20 flex items-center justify-center shrink-0 mt-0.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-flax">
            <rect x="1" y="2" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M4 13l3-2 3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="font-mono text-[12px] text-ink font-medium">Founder Sync · notes</div>
          <div className="font-mono text-[10px] text-ink-muted mt-0.5">Pasted from Granola · 847 words</div>
        </div>
      </div>
      <div className="rule-light" />
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full bg-flax flex items-center justify-center shrink-0">
          <span className="font-serif font-black text-white text-[9px]">F</span>
        </div>
        <div>
          <div className="font-mono text-[11px] text-ink font-medium">Flaxie is reading your notes</div>
          <div className="font-mono text-[10px] text-ink-muted">Extracting commitments · no setup needed</div>
        </div>
      </div>
    </div>
  </div>
);

const Step2Visual = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Commitments · Founder Sync</span>
      <span className="label text-flax">● Extracted</span>
    </div>
    <div className="bg-surface">
      <div className="px-4 py-2 border-b border-rule bg-paper/50">
        <div className="grid grid-cols-[80px_1fr_40px] gap-2">
          <span className="label">Person</span>
          <span className="label">Task</span>
          <span className="label">Due</span>
        </div>
      </div>
      {[
        { name: 'Alex',  task: 'Send the proposal to investors', due: 'Wed' },
        { name: 'Sam', task: 'Review and finalize pricing',    due: 'Thu' },
        { name: 'Nina', task: 'Set up demo environment',        due: 'Fri' },
      ].map((c, i) => (
        <div key={c.name} className={`px-4 py-3 grid grid-cols-[80px_1fr_40px] gap-2 items-start
          ${i < 2 ? 'border-b border-rule' : ''}`}>
          <span className="font-mono text-[11px] text-ink font-medium">{c.name}</span>
          <span className="font-mono text-[11px] text-ink-muted leading-4">{c.task}</span>
          <span className="font-mono text-[10px] text-ink-muted">{c.due}</span>
        </div>
      ))}
    </div>
    <div className="px-4 py-2.5 border-t border-rule bg-paper/70">
      <span className="font-mono text-[10px] text-ink-muted">
        3 commitments extracted · no notes to write
      </span>
    </div>
  </div>
);

const Step3Visual = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Flaxie · Nudge sent</span>
      <span className="font-mono text-[10px] text-green-700">✓ Delivered</span>
    </div>
    <div className="p-5 bg-surface space-y-4">
      <div className="flex gap-3">
        <div className="w-7 h-7 rounded-full bg-flax flex items-center justify-center shrink-0 mt-0.5">
          <span className="font-serif font-black text-white text-[9px]">F</span>
        </div>
        <div className="flex-1 bg-paper border border-rule rounded-sm px-3 py-2.5">
          <div className="font-mono text-[10px] text-ink-muted mb-1.5">Flaxie · Wednesday 9:00 AM</div>
          <p className="font-mono text-[11px] text-ink leading-5">
            Hey Alex, just a nudge. You committed to sending the proposal by today.
            Still open. Need help unblocking, or can you close this today?
          </p>
        </div>
      </div>
      <div className="rule-light" />
      <div className="flex items-center gap-2 text-[10px] font-mono text-ink-muted">
        <span className="text-green-600 font-medium">Alex replied</span>
        <span>· "On it, sending now"</span>
      </div>
    </div>
    <div className="px-4 py-2.5 border-t border-rule bg-paper/70">
      <span className="font-mono text-[10px] text-ink-muted">You weren't involved. Flaxie handled it.</span>
    </div>
  </div>
);

const Step4Visual = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-ink flex items-center justify-between">
      <span className="label text-white/50">War Room · Flaxie</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="font-mono text-[10px] text-white/40">Live</span>
      </div>
    </div>
    <div className="px-4 py-2.5 border-b border-rule bg-paper flex items-center gap-5">
      <span className="font-mono text-[11px] text-ink-muted">3 projects</span>
      <span className="font-mono text-[11px] text-red-500 font-medium">6 overdue</span>
      <span className="font-mono text-[11px] text-amber-600 font-medium">1 urgent</span>
    </div>
    <div className="p-5 bg-surface space-y-3">
      {[
        { name: 'Product Hunt Launch', pct: 72, color: 'bg-flax' },
        { name: 'Investor Deck',       pct: 40, color: 'bg-amber-400' },
        { name: 'Hiring Pipeline',     pct: 58, color: 'bg-flax' },
      ].map(p => (
        <div key={p.name}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[11px] text-ink">{p.name}</span>
            <span className="font-mono text-[10px] text-ink-muted">{p.pct}%</span>
          </div>
          <div className="h-1.5 bg-rule rounded-full overflow-hidden">
            <div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
    <div className="px-4 py-2.5 border-t border-rule bg-paper/70 space-y-1">
      <div className="font-mono text-[10px] text-ink-muted">⚡ Alex · 6 items open</div>
      <div className="font-mono text-[10px] text-ink-muted">👻 Sam · 14 days silent</div>
    </div>
  </div>
);

/* ── Steps ───────────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'Use whatever notetaker you already have.',
    body: 'Granola, Otter, Fireflies, Google Doc, raw paste. Flaxie reads it all. No switching tools. No new setup for your team.',
    visual: <Step1Visual />,
    flip: false,
  },
  {
    num: '02',
    title: 'She knows who owes what.',
    body: 'Names, tasks, deadlines. Extracted automatically. No notes to write. No summaries to copy. Just a clean list of who committed to what.',
    visual: <Step2Visual />,
    flip: true,
  },
  {
    num: '03',
    title: 'She follows up. So you don\'t have to.',
    body: 'Nudges at the right time. Reminders before deadlines. Escalations when things go silent. You stay out of it until you need to step in.',
    visual: <Step3Visual />,
    flip: false,
  },
  {
    num: '04',
    title: 'You get a dashboard built for your company.',
    body: 'Not a generic template. Flaxie figures out each project and builds the right view. A sales project looks like a pipeline. An ops project looks like a tracker. She decides based on your meetings.',
    visual: <Step4Visual />,
    flip: true,
  },
];

/* ── Section ─────────────────────────────────────────────────── */
export const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-24 border-b border-rule">
    <div className="max-w-5xl mx-auto px-6">

      <Reveal>
        <div className="mb-20">
          <div className="label mb-4">How it works</div>
          <h2 className="font-serif font-black text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}>
            Flaxie works<br />while you build.
          </h2>
        </div>
      </Reveal>

      <div className="space-y-24">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 60}>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center
              ${step.flip ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}>
              <div>
                <div className="label mb-4">{step.num}</div>
                <h3 className="font-serif font-bold text-ink text-2xl md:text-3xl leading-snug mb-4">
                  {step.title}
                </h3>
                <p className="text-ink-muted text-base leading-relaxed">{step.body}</p>
              </div>
              <div>{step.visual}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Mid-page CTA */}
      <Reveal delay={80}>
        <div className="mt-20 pt-10 border-t border-rule flex flex-col sm:flex-row
          items-start sm:items-center justify-between gap-5">
          <p className="text-ink-muted text-base max-w-xs leading-relaxed">
            Ready to stop being the person who remembers everything?
          </p>
          <button className="btn btn-primary shrink-0"
            data-cal-link="joinflax/strategy-call"
            data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>
            Get early access
          </button>
        </div>
      </Reveal>

    </div>
  </section>
);
