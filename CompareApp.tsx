import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Check, Minus, ChevronDown } from 'lucide-react'

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.05 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(12px)', transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms` }}>{children}</div>
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 60); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn) }, [])
  const dark = !scrolled
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '14px 20px', zIndex: 50, pointerEvents: 'none' }}>
        <nav style={{ maxWidth: '1060px', margin: '0 auto', height: '52px', borderRadius: '100px', background: scrolled ? 'rgba(248,246,242,0.96)' : 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', padding: '0 1.5rem', pointerEvents: 'auto', transition: 'background 0.3s, border-color 0.3s' }}>
          <div style={{ flex: 1 }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img src="/logo.svg" alt="Flax" style={{ height: '24px', width: 'auto' }} />
              <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em', color: dark ? '#fff' : 'hsl(0,0%,10%)', transition: 'color 0.3s' }}>Flax</span>
            </a>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'flex-end' }}>
            <a href="/" className="hidden md:inline" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: dark ? 'rgba(255,255,255,0.4)' : 'hsl(0,0%,50%)', textDecoration: 'none' }}>← Back</a>
            <a className="btn btn-primary btn-sm" style={{ borderRadius: '100px' }} href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">Get Early Access</a>
          </div>
          <button className="md:hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', color: dark ? '#fff' : 'hsl(0,0%,10%)', marginLeft: '12px' }} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </nav>
      </div>
      {open && <div style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'hsl(0,0%,10%)', padding: '88px 1.5rem 2rem' }} className="md:hidden"><a className="btn btn-primary" href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get Early Access</a></div>}
    </>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

type S = 'yes' | 'no' | 'partial'

const ROWS: { label: string; flax: S; cowork: S; notes: S; chat: S }[] = [
  { label: 'Proactive, acts without a prompt',          flax: 'yes', cowork: 'no',      notes: 'no',      chat: 'no'      },
  { label: 'Runs in the cloud, not your desktop',      flax: 'yes', cowork: 'no',      notes: 'yes',     chat: 'yes'     },
  { label: 'Extracts commitments from meeting notes',  flax: 'yes', cowork: 'partial', notes: 'partial', chat: 'partial' },
  { label: 'Executes across Gmail, Slack, Calendar',   flax: 'yes', cowork: 'yes',     notes: 'no',      chat: 'no'      },
  { label: 'Approval before every outgoing action',    flax: 'yes', cowork: 'yes',     notes: 'yes',     chat: 'yes'     },
  { label: 'Watches what others owe you',              flax: 'yes', cowork: 'no',      notes: 'no',      chat: 'no'      },
  { label: 'Nudges on stalled follow-ups',             flax: 'yes', cowork: 'no',      notes: 'no',      chat: 'no'      },
  { label: 'Learns your preferences over time',        flax: 'yes', cowork: 'no',      notes: 'no',      chat: 'no'      },
  { label: 'Custom workflows per team',                flax: 'yes', cowork: 'partial', notes: 'no',      chat: 'no'      },
]

const FAQS: { q: string; a: string }[] = [
  {
    q: "I already use Claude Cowork. Why do I need this?",
    a: "Cowork is a desktop agent. You open it and tell it what to do. Flaxie watches your meetings and acts before you remember to ask. It also runs in the cloud, so nothing depends on your laptop being open.",
  },
  {
    q: "Can't I just paste my notes into Claude.ai?",
    a: "You can. Claude will write a great email. Then you copy it to Gmail, switch tabs, find the recipient, and hit send. For every action, every meeting, every day. Flaxie removes that manual handoff entirely.",
  },
  {
    q: "I use Granola for meeting notes already.",
    a: "Great. Flaxie connects directly to Granola. It reads your notes automatically and turns them into sent emails, booked meetings, and updated Notion pages. They work together.",
  },
  {
    q: "Can't my team just build this with the Claude API?",
    a: "Technically yes. You would need OAuth flows for Gmail, Calendar, and Slack, an approval UX, a nudge scheduler, a vector memory system, and months of QA. Flaxie is that system, already running.",
  },
  {
    q: "What makes it better for teams, not just individuals?",
    a: "Flaxie tracks commitments made by everyone in the meeting, not just yours. If David said he would deliver the report by Thursday, Flaxie reminds you to check on Wednesday. No other tool watches the whole thread.",
  },
]

// ── Icon ──────────────────────────────────────────────────────────────────────

const Dot: React.FC<{ s: S; flax?: boolean }> = ({ s, flax }) => {
  if (s === 'yes') return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: flax ? '#5A53E1' : 'rgba(255,255,255,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Check size={12} color={flax ? '#fff' : 'rgba(255,255,255,0.45)'} strokeWidth={2.5} />
      </div>
    </div>
  )
  if (s === 'partial') return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(234,179,8,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Minus size={11} color="#92700a" strokeWidth={2.5} />
      </div>
    </div>
  )
  return <div style={{ display: 'flex', justifyContent: 'center' }}><div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} /></div>
}

// ── FAQ item ──────────────────────────────────────────────────────────────────

const FAQ: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '18px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', textAlign: 'left' }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{q}</span>
        <ChevronDown size={16} color="rgba(255,255,255,0.25)" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>
      {open && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.8, paddingBottom: '18px', margin: 0 }}>{a}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CompareApp() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: 'hsl(0,0%,9%)', color: '#fff', overflowX: 'hidden' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: '130px 1.5rem 56px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', background: 'radial-gradient(ellipse at 50% 0%, rgba(90,83,225,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '540px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Reveal>
            <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '1.5rem' }}>
              Flax vs. Cowork, Granola & AI chat
            </p>
            <h1 style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: 'clamp(1.9rem, 5vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#fff', marginBottom: '1rem' }}>
              They answer.<br /><span style={{ color: '#5A53E1' }}>Flaxie acts.</span>
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.32)', lineHeight: 1.8 }}>
              Every other tool waits for you to ask. Flaxie reads your meeting, drafts every action, and has it ready before your next call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Table */}
      <section style={{ padding: '0 1.5rem 64px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <Reveal delay={40}>
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <div style={{ minWidth: '560px' }}>

                {/* Header */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr repeat(4, 108px)', borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '2px' }}>
                  <div />
                  {[
                    { key: 'flax',   label: 'Flax',         sub: 'action agent', highlight: true },
                    { key: 'cowork', label: 'Cowork',        sub: 'desktop agent' },
                    { key: 'notes',  label: 'Note-takers',   sub: 'Granola · Otter' },
                    { key: 'chat',   label: 'AI chat',       sub: 'Claude · GPT' },
                  ].map(c => (
                    <div key={c.key} style={{ textAlign: 'center', padding: '10px 6px 14px', background: c.highlight ? 'rgba(90,83,225,0.07)' : 'transparent', borderRadius: c.highlight ? '6px 6px 0 0' : '0', borderTop: c.highlight ? '1px solid rgba(90,83,225,0.2)' : 'none', borderLeft: c.highlight ? '1px solid rgba(90,83,225,0.2)' : 'none', borderRight: c.highlight ? '1px solid rgba(90,83,225,0.2)' : 'none' }}>
                      <div style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: c.highlight ? '0.82rem' : '0.7rem', color: c.highlight ? '#5A53E1' : 'rgba(255,255,255,0.3)', marginBottom: '3px' }}>{c.label}</div>
                      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.5rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.03em' }}>{c.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {ROWS.map((r, i) => (
                  <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ display: 'grid', gridTemplateColumns: '1fr repeat(4, 108px)', borderBottom: '1px solid rgba(255,255,255,0.045)', background: hovered === i ? 'rgba(255,255,255,0.02)' : 'transparent', transition: 'background 0.12s' }}>
                    <div style={{ padding: '13px 16px 13px 0', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.4 }}>{r.label}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(90,83,225,0.05)', borderLeft: '1px solid rgba(90,83,225,0.15)', borderRight: '1px solid rgba(90,83,225,0.15)' }}><Dot s={r.flax} flax /></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Dot s={r.cowork} /></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Dot s={r.notes} /></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Dot s={r.chat} /></div>
                  </div>
                ))}

                {/* Flax col bottom border */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr repeat(4, 108px)' }}>
                  <div />
                  <div style={{ height: '6px', background: 'rgba(90,83,225,0.05)', borderLeft: '1px solid rgba(90,83,225,0.15)', borderRight: '1px solid rgba(90,83,225,0.15)', borderBottom: '1px solid rgba(90,83,225,0.15)', borderRadius: '0 0 5px 5px' }} />
                  <div /><div /><div />
                </div>

                {/* Legend */}
                <div style={{ display: 'flex', gap: '16px', paddingTop: '16px' }}>
                  {[{ s: 'yes' as S, t: 'Yes' }, { s: 'partial' as S, t: 'Partial' }, { s: 'no' as S, t: 'No' }].map(({ s, t }) => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Dot s={s} />
                      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.54rem', color: 'rgba(255,255,255,0.18)', letterSpacing: '0.04em' }}>{t}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 1.5rem 80px' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', marginBottom: '1.5rem' }}>Common questions</p>
          </Reveal>
          <Reveal delay={40}>
            {FAQS.map((f, i) => <FAQ key={i} q={f.q} a={f.a} />)}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '56px 1.5rem 72px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '0.75rem' }}>See it on your next meeting.</h2>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', marginBottom: '1.75rem', lineHeight: 1.8 }}>Paste any transcript. Flaxie handles the rest.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a className="btn btn-primary" href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.7rem 1.6rem', borderRadius: '100px', fontSize: '0.875rem' }}>Get Early Access</a>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)', textDecoration: 'none', padding: '0.7rem 0', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}>How it works →</a>
          </div>
        </Reveal>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '20px 1.5rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', justifyContent: 'center' }}>
          <a href="/" style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '0.76rem', color: 'rgba(255,255,255,0.22)', textDecoration: 'none' }}>Flax</a>
          {[{ l: 'Home', h: '/' }, { l: 'Privacy', h: '/privacy' }, { l: 'Terms', h: '/terms' }].map(x => (
            <a key={x.l} href={x.h} style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', color: 'rgba(255,255,255,0.14)', textDecoration: 'none', letterSpacing: '0.06em' }}>{x.l}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}
