import React from 'react';
import { Reveal } from './ui/Reveal';

/* ── Step visuals ────────────────────────────────────────────── */

const Step1Visual = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Calendar · Zoom</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="font-mono text-[10px] text-green-700">In progress</span>
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
          <div className="font-mono text-[12px] text-ink font-medium">Backend Sync</div>
          <div className="font-mono text-[10px] text-ink-muted mt-0.5">Today · 2:00 PM · 45 min</div>
        </div>
      </div>
      <div className="rule-light" />
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full bg-flax flex items-center justify-center shrink-0">
          <span className="font-serif font-black text-white text-[9px]">F</span>
        </div>
        <div>
          <div className="font-mono text-[11px] text-ink font-medium">Flaxie joined your meeting</div>
          <div className="font-mono text-[10px] text-ink-muted">She'll update your docs after the call</div>
        </div>
      </div>
    </div>
  </div>
);

const Step2Visual = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Transcript · Backend Sync</span>
      <span className="label text-flax">● Analyzing</span>
    </div>
    <div className="p-5 space-y-4 bg-surface">
      <div>
        <div className="font-mono text-[10px] text-ink-muted mb-1.5">Engineering Lead · 14:22</div>
        <p className="font-mono text-[12px] text-ink leading-5">
          "We decided to{' '}
          <span className="bg-yellow-100 border-b border-yellow-400 px-0.5">switch to PostgreSQL</span>
          {' '}by end of Q1. Team agreed."
        </p>
      </div>
      <div className="rule-light" />
      <div>
        <div className="font-mono text-[10px] text-ink-muted mb-1.5">Product Lead · 14:35</div>
        <p className="font-mono text-[12px] text-ink leading-5">
          "We're also{' '}
          <span className="bg-yellow-100 border-b border-yellow-400 px-0.5">deprecating v1 REST</span>
          {' '}for all new integrations."
        </p>
      </div>
    </div>
    <div className="px-4 py-2.5 border-t border-rule bg-paper/70">
      <span className="font-mono text-[10px] text-ink-muted">
        Flaxie found <span className="text-ink font-medium">2 decisions</span> · updating 1 document
      </span>
    </div>
  </div>
);

const Step3Visual = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">architecture.md</span>
      <span className="font-mono text-[10px] text-green-700">✓ Updated by Flaxie</span>
    </div>
    <div className="p-5 bg-surface space-y-3 font-mono text-[12px] leading-5">
      <div className="label mb-1">Database Layer</div>
      <div className="diff-remove px-1.5 py-0.5 rounded-sm line-through text-[11px]">
        We use MongoDB as our primary data store.
      </div>
      <div className="diff-add px-1.5 py-0.5 rounded-sm text-[11px]">
        + PostgreSQL as primary data store (Q1 2026).
      </div>
      <div className="rule-light my-1" />
      <div className="label mb-1">API Layer</div>
      <div className="diff-remove px-1.5 py-0.5 rounded-sm line-through text-[11px]">
        v1 REST API is our primary integration layer.
      </div>
      <div className="diff-add px-1.5 py-0.5 rounded-sm text-[11px]">+ v1 REST deprecated, Q1 2026.</div>
      <div className="diff-add px-1.5 py-0.5 rounded-sm text-[11px]">+ GraphQL for all new endpoints.</div>
    </div>
    <div className="px-4 py-2.5 border-t border-rule bg-paper/70">
      <span className="font-mono text-[10px] text-ink-muted">Flaxie was confident · no review needed</span>
    </div>
  </div>
);

/* ── Steps ───────────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'A bot joins your call.',
    body: 'Invite Flaxie to any Zoom, Google Meet, or Teams link. She shows up as a participant. No setup required for your team.',
    visual: <Step1Visual />,
    flip: false,
  },
  {
    num: '02',
    title: 'She reads what changed.',
    body: 'She reads the conversation, identifies decisions, pivots, and technical changes, then maps them to the right documents.',
    visual: <Step2Visual />,
    flip: true,
  },
  {
    num: '03',
    title: 'Docs updated. Automatically.',
    body: 'When she\'s confident, she updates the doc directly. No copy-paste, no manual input, no action required from you.',
    visual: <Step3Visual />,
    flip: false,
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
            Flaxie works<br />while you meet.
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
            Ready to give Flaxie to your team?
          </p>
          <a href="#waitlist" className="btn btn-primary shrink-0">Request access</a>
        </div>
      </Reveal>

    </div>
  </section>
);
