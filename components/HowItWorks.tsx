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
            <rect x="1" y="2" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M4 13l3-2 3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <div className="font-mono text-[12px] text-ink font-medium">Client Call · Tues notes</div>
          <div className="font-mono text-[10px] text-ink-muted mt-0.5">Pasted from Granola · 1,240 words</div>
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
    <div className="px-4 py-2.5 border-t border-rule bg-paper/70">
      <span className="font-mono text-[10px] text-ink-muted">
        Works with Granola, Otter, Fireflies, Google Meet, or plain text
      </span>
    </div>
  </div>
);

const Step2Visual = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Commitments · Client Call</span>
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
        { name: 'Alex', task: 'Send the proposal to investors', due: 'Wed' },
        { name: 'Sam', task: 'Loop in engineering on pricing', due: 'Thu' },
        { name: 'Nina', task: 'Get the deck done and share', due: 'Fri' },
      ].map((c, i) => (
        <div
          key={c.name}
          className={`px-4 py-3 grid grid-cols-[80px_1fr_40px] gap-2 items-start ${i < 2 ? 'border-b border-rule' : ''}`}
        >
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
      <span className="label">Flaxie · Actions drafted</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-flax animate-pulse" />
        <span className="label text-flax">3 ready</span>
      </div>
    </div>
    <div className="p-5 bg-surface space-y-3">
      {[
        {
          type: 'Email',
          to: 'Alex',
          detail: 'Re: Proposal   drafted and ready to send',
          icon: '✉',
        },
        {
          type: 'Calendar',
          to: 'Sam',
          detail: 'Follow-up call · Thursday 2pm · invite ready',
          icon: '⊙',
        },
        {
          type: 'Jira',
          to: 'Nina',
          detail: 'DECK-12 · Proposal deck · created in backlog',
          icon: '⬡',
        },
      ].map((action, i) => (
        <div key={i} className="flex items-start gap-3 border border-rule rounded-sm px-3 py-2.5 bg-paper">
          <span className="font-mono text-[13px] shrink-0 mt-0.5 text-ink-muted">{action.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-mono text-[10px] text-flax font-medium">{action.type}</span>
              <span className="font-mono text-[10px] text-ink-muted">→ {action.to}</span>
            </div>
            <div className="font-mono text-[10px] text-ink-muted leading-4">{action.detail}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="px-4 py-2.5 border-t border-rule bg-paper/70">
      <span className="font-mono text-[10px] text-ink-muted italic">Flaxie figured out what needed to happen. Without being asked.</span>
    </div>
  </div>
);

const Step4Visual = () => (
  <div className="card overflow-hidden">
    <div className="px-4 py-2.5 bg-paper border-b border-rule flex items-center justify-between">
      <span className="label">Flaxie · Waiting for your approval</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
        <span className="font-mono text-[10px] text-amber-700">Your turn</span>
      </div>
    </div>
    {/* Email preview */}
    <div className="bg-surface">
      <div className="px-4 pt-4 pb-3 border-b border-rule space-y-2">
        {[
          { label: 'To', value: 'alex@company.com' },
          { label: 'Subject', value: 'Re: Proposal   following up as promised' },
        ].map(row => (
          <div key={row.label} className="flex items-start gap-3">
            <span className="font-mono text-[10px] text-ink-muted w-12 shrink-0 pt-0.5">{row.label}</span>
            <span className="font-mono text-[11px] text-ink">{row.value}</span>
          </div>
        ))}
      </div>
      <div className="px-4 py-3">
        <p className="font-mono text-[11px] text-ink-muted leading-5">
          Hi Alex,<br /><br />
          Following up on our call   wanted to make sure the proposal
          makes it over today as we discussed. Let me know if you need
          anything from my end before you send it.<br /><br />
            [Your name]
        </p>
      </div>
    </div>
    {/* Approval buttons */}
    <div className="px-4 py-3 border-t border-rule bg-flax/5 flex items-center justify-between gap-3">
      <div className="flex gap-2">
        <button className="font-mono text-[10px] text-ink-muted border border-rule px-2.5 py-1.5 rounded-sm bg-surface hover:bg-paper transition-colors">
          Edit
        </button>
        <button className="font-mono text-[10px] text-ink-muted border border-rule px-2.5 py-1.5 rounded-sm bg-surface hover:bg-paper transition-colors">
          Skip
        </button>
        <button className="font-mono text-[10px] text-white bg-flax px-3 py-1.5 rounded-sm hover:bg-flax/90 transition-colors">
          Approve &amp; Send
        </button>
      </div>
      <span className="font-mono text-[10px] text-ink-muted hidden sm:block">2 more actions</span>
    </div>
  </div>
);

/* ── Steps ───────────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'Use whatever notetaker you already have.',
    body: 'Granola, Otter, Fireflies, Google Meet transcript, a raw paste. Flaxie reads all of it. No switching tools. No new setup for your team.',
    visual: <Step1Visual />,
    flip: false,
  },
  {
    num: '02',
    title: 'She extracts every commitment, automatically.',
    body: 'Names, tasks, deadlines   pulled out of your notes the moment the meeting ends. No summaries to write. No action items to copy. A clean list of who said what.',
    visual: <Step2Visual />,
    flip: true,
  },
  {
    num: '03',
    title: 'She figures out what needs to happen   and does it.',
    body: 'Flaxie doesn\'t wait to be told. She drafts the follow-up email, creates the Jira ticket, schedules the next call. She decides based on what was said. You didn\'t ask her to. She just did it.',
    visual: <Step3Visual />,
    flip: false,
  },
  {
    num: '04',
    title: 'You approve. She sends. Everything gets handled.',
    body: 'Nothing goes out without your say. Review the draft, edit if you want, and approve with one click. Or skip it. It\'s always your call. But the work is already done.',
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
          <h2
            className="font-serif font-black text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.12, letterSpacing: '-0.015em' }}
          >
            From meeting to{' '}
            <span style={{ color: '#5A53E1' }}>done.</span>
            <br />Without the follow-up chase.
          </h2>
        </div>
      </Reveal>

      <div className="space-y-24">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 60}>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center
                ${step.flip ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
            >
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
        <div className="mt-20 pt-10 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-ink-muted text-base max-w-xs leading-relaxed">
            Ready to stop being the person who follows everything up?
          </p>
          <button
            className="btn btn-primary shrink-0"
            data-tally-open="GxLXyQ"
            data-tally-layout="modal"
            data-tally-width="400"
            data-tally-form-events-forwarding="1"
          >
            Get Early Access   It's Free
          </button>
        </div>
      </Reveal>

    </div>
  </section>
);
