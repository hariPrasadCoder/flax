import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

// ── Reveal ────────────────────────────────────────────────────────────────────
const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(16px)',
      transition: `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`,
    }}>{children}</div>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────
const AssistantNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const onDark = !scrolled
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '14px 20px', zIndex: 50, pointerEvents: 'none' }}>
        <nav style={{
          maxWidth: '1060px', margin: '0 auto', height: '52px', borderRadius: '100px',
          background: scrolled ? 'rgba(248,246,242,0.96)' : 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          border: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.14)',
          display: 'flex', alignItems: 'center', padding: '0 1.5rem', pointerEvents: 'auto',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="/logo.svg" alt="Flax" style={{ height: '24px', width: 'auto' }} />
              <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em', color: onDark ? '#fff' : 'hsl(0,0%,10%)', transition: 'color 0.3s' }}>Flax</span>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'flex-end' }}>
            <button className="btn btn-primary btn-sm" style={{ borderRadius: '100px' }}
              data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >Book a demo</button>
          </div>
          <button className="md:hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', color: onDark ? '#fff' : 'hsl(0,0%,10%)', marginLeft: '12px' }} onClick={() => setOpen(!open)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'hsl(0,0%,10%)', padding: '88px 1.5rem 2rem' }} className="md:hidden">
          <button className="btn btn-primary"
            data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onClick={() => setOpen(false)}
          >Book a demo</button>
        </div>
      )}
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const EAHero: React.FC = () => {
  return (
    <section className="dot-grid" style={{
      minHeight: '100vh', backgroundColor: 'hsl(0,0%,10%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingTop: '80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Primary glow */}
      <div className="glow-drift" style={{
        position: 'absolute', top: '-5%', left: '50%', transform: 'translateX(-50%)',
        width: '1100px', height: '1100px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(90,83,225,0.22) 0%, rgba(90,83,225,0.06) 45%, transparent 68%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Off-axis secondary glow */}
      <div style={{
        position: 'absolute', top: '30%', right: '-8%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(90,83,225,0.08) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
        animation: 'glow-drift 16s ease-in-out infinite reverse',
      }} />
      {/* Decoration lines */}
      {([
        { top: '22%', left: '7%', width: 72, opacity: 0.09 },
        { top: '38%', right: '9%', width: 52, opacity: 0.07 },
        { top: '58%', left: '4%', width: 96, opacity: 0.06 },
        { top: '70%', right: '6%', width: 64, opacity: 0.08 },
      ] as any[]).map((l, i) => (
        <div key={i} style={{
          position: 'absolute', top: l.top, left: l.left, right: l.right,
          width: l.width, height: '1px',
          background: `rgba(255,255,255,${l.opacity})`,
          pointerEvents: 'none', zIndex: 0,
        }} />
      ))}

      {/* Main content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '3rem 2rem 2rem', position: 'relative', zIndex: 1,
        width: '100%', maxWidth: '900px',
      }}>
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-10 opacity-0-start animate-fade-in">
          <div className="w-1.5 h-1.5 rounded-full bg-flax animate-pulse" />
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
            AI Executive Assistant · Early Access
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif font-black opacity-0-start animate-fade-in-up delay-100" style={{
          fontSize: 'clamp(2rem, 6.5vw, 5.5rem)',
          lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff',
        }}>
          Your personal
          <br />
          <span style={{ color: '#5A53E1', whiteSpace: 'nowrap' }}>AI Executive Assistant.</span>
        </h1>

        {/* Sub */}
        <p className="opacity-0-start animate-fade-in-up delay-200" style={{
          marginTop: '2rem',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 'clamp(0.7rem, 1.3vw, 0.85rem)',
          color: 'rgba(255,255,255,0.38)',
          letterSpacing: '0.02em', lineHeight: 2,
          maxWidth: '420px',
        }}>
          For founders. For managers.
          <br />
          For everyone on your team with too much to track.
        </p>

        {/* CTA */}
        <div className="opacity-0-start animate-fade-in-up delay-300" style={{
          marginTop: '2.5rem', display: 'flex', alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button className="btn btn-primary" style={{ padding: '0.75rem 2.25rem', fontSize: '0.9rem' }}
            data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >Book a demo</button>
        </div>
      </div>

      {/* Antler */}
      <div className="opacity-0-start animate-fade-in delay-500" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', paddingBottom: '3rem', position: 'relative', zIndex: 1 }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>Supported by</span>
        <img src="/Antler_logo.svg" alt="Antler" style={{ height: '22px', filter: 'brightness(0) invert(1)', opacity: 0.25, transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.55')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.25')}
        />
      </div>
    </section>
  )
}

// ── Always-on awareness section ────────────────────────────────────────────────
const BriefSection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
      <Reveal>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(0,0%,42%)', display: 'block', marginBottom: '1.5rem' }}>
          Always watching
        </span>
        <h2 className="font-serif font-black" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'hsl(0,0%,10%)', marginBottom: '3.5rem' }}>
          Flaxie knows what's slipping.<br />
          <span style={{ color: '#5A53E1' }}>Before you do.</span>
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid hsl(0,0%,82%)', boxShadow: '0 20px 60px rgba(0,0,0,0.09), 0 4px 16px rgba(0,0,0,0.06)', textAlign: 'left' }}>
          <div style={{ background: 'hsl(0,0%,10%)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logo.svg" alt="Flax" style={{ height: '28px', width: '28px', objectFit: 'contain', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#fff', fontWeight: 500 }}>Flaxie</div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>In focus right now</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#5A53E1', animation: 'pulse 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>Live</span>
            </div>
          </div>
          <div style={{ background: '#fff', padding: '20px 20px 16px' }}>
            <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: 'hsl(0,0%,45%)', lineHeight: 1.8, margin: '0 0 16px' }}>
              Three things have gone quiet. You haven't touched them. I have.
            </p>
            {[
              { label: 'Investor follow-up.', sub: 'Day 3. No action yet.' },
              { label: 'Proposal deck.', sub: "Team hasn't responded since Tuesday." },
              { label: 'Marcus on pricing.', sub: 'You mentioned syncing. That thread went quiet.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#5A53E1', flexShrink: 0, marginTop: '1px' }}>→</span>
                <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: 'hsl(0,0%,20%)', lineHeight: 1.6, margin: 0 }}>
                  <strong>{item.label}</strong> <span style={{ color: 'hsl(0,0%,55%)' }}>{item.sub}</span>
                </p>
              </div>
            ))}
          </div>
          <div style={{ background: 'hsl(42,24%,97%)', padding: '12px 20px', borderTop: '1px solid hsl(0,0%,88%)' }}>
            <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'hsl(0,0%,48%)', lineHeight: 1.7, margin: 0 }}>
              I'll keep watching these. You stay focused. <span style={{ color: 'hsl(0,0%,68%)' }}>· Flaxie</span>
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={220}>
        <p style={{ marginTop: '2.5rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'hsl(0,0%,48%)', letterSpacing: '0.01em', lineHeight: 1.8 }}>
          Every open thread. Every unanswered conversation. Every item you handed off.<br />
          Flaxie holds all of it, and surfaces exactly what matters.
        </p>
      </Reveal>
    </div>
  </section>
)

// ── Positioning hook ───────────────────────────────────────────────────────────
const PositioningHook: React.FC = () => (
  <section className="dot-grid" style={{ background: 'hsl(0,0%,10%)', padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>
    <div className="glow-drift" style={{
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
      width: '700px', height: '700px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.12) 0%, transparent 65%)',
      pointerEvents: 'none',
    }} />
    <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <Reveal>
        <p className="font-serif font-black" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em', color: '#fff', marginBottom: '1.5rem' }}>
          Every CEO has an executive assistant.
        </p>
      </Reveal>
      <Reveal delay={80}>
        <p className="font-serif font-black" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em', color: 'rgba(255,255,255,0.25)', marginBottom: '1.5rem' }}>
          Nobody else does.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <p className="font-serif font-black" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em', color: '#5A53E1' }}>
          Flaxie changes that.
        </p>
      </Reveal>
    </div>
  </section>
)

// ── Agentic to-dos section ─────────────────────────────────────────────────────
const AgenticSection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
      <Reveal>
        <div>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(0,0%,52%)', display: 'block', marginBottom: '1.25rem' }}>Agentic to-dos</span>
          <h2 className="font-serif font-black" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'hsl(0,0%,10%)', marginBottom: '1.5rem' }}>
            Tell Flaxie once.<br />
            <span style={{ color: '#5A53E1' }}>It handles the follow-through.</span>
          </h2>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: 'hsl(0,0%,48%)', lineHeight: 1.9 }}>
            Drop a task in plain language. Flaxie logs it, sets a reminder, and checks in at the right moment. No app to open, no form to fill.
          </p>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="hidden lg:block">
          {/* Chat card — ApprovalCard style */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid hsl(0,0%,82%)', boxShadow: '0 20px 60px rgba(0,0,0,0.09), 0 4px 16px rgba(0,0,0,0.06)' }}>
            <div style={{ background: 'hsl(0,0%,10%)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="/logo.svg" alt="Flax" style={{ height: '24px', width: '24px', objectFit: 'contain', flexShrink: 0 }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#fff', fontWeight: 500 }}>Flaxie</span>
            </div>
            <div style={{ background: '#fff', padding: '16px' }}>
              {/* User bubble */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
                <div style={{ background: 'hsl(0,0%,92%)', borderRadius: '12px 12px 4px 12px', padding: '10px 14px', maxWidth: '220px' }}>
                  <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'hsl(0,0%,22%)', lineHeight: 1.6, margin: 0 }}>
                    Remind me to follow up on the investment proposal this week
                  </p>
                </div>
              </div>
              {/* Flaxie bubble */}
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <img src="/logo.svg" alt="Flax" style={{ height: '22px', width: '22px', objectFit: 'contain', flexShrink: 0 }} />
                <div style={{ background: 'hsl(240,60%,97%)', border: '1px solid rgba(90,83,225,0.15)', borderRadius: '4px 12px 12px 12px', padding: '10px 14px', maxWidth: '230px' }}>
                  <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'hsl(0,0%,22%)', lineHeight: 1.6, margin: '0 0 8px' }}>
                    Got it. I'll track it and check in with you Thursday if it's still open.
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: 'rgba(90,83,225,0.1)', border: '1px solid rgba(90,83,225,0.2)', borderRadius: '4px', padding: '3px 8px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#5A53E1' }} />
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: '#5A53E1' }}>Investment proposal · Thu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

// ── Proactive section ──────────────────────────────────────────────────────────
const ProactiveSection: React.FC = () => (
  <section className="dot-grid" style={{ background: 'hsl(0,0%,10%)', padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,83,225,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} className="glow-drift" />
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', position: 'relative', zIndex: 1 }} className="grid-cols-1 lg:grid-cols-2">
      {/* macOS mockup */}
      <Reveal>
        <div className="hidden lg:block">
          <div style={{ width: '320px', height: '230px', borderRadius: '14px', background: 'hsl(220,18%,16%)', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, rgba(90,83,225,0.1) 0%, transparent 60%)' }} />
            {/* Menu bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '22px', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: '5px' }}>
              {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />)}
            </div>
            {/* Dock */}
            <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', padding: '5px 10px', display: 'flex', gap: '7px' }}>
              {[...Array(5)].map((_, i) => <div key={i} style={{ width: '20px', height: '20px', borderRadius: '5px', background: 'rgba(255,255,255,0.1)' }} />)}
            </div>
            {/* Notification */}
            <div style={{ position: 'absolute', top: '32px', right: '10px', background: '#fff', borderRadius: '10px', overflow: 'hidden', width: '210px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 10px 6px', borderBottom: '1px solid hsl(0,0%,92%)' }}>
                <img src="/logo.svg" alt="Flax" style={{ height: '16px', width: '16px', objectFit: 'contain', flexShrink: 0 }} />
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', fontWeight: 600, color: 'hsl(0,0%,10%)' }}>Flaxie</span>
                <span style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'hsl(0,0%,58%)' }}>now</span>
              </div>
              <div style={{ padding: '7px 10px 9px' }}>
                <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'hsl(0,0%,25%)', lineHeight: 1.5, margin: 0 }}>
                  Still haven't heard back on the proposal. Thursday's almost over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <div>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: '1.25rem' }}>Proactive check-ins</span>
          <h2 className="font-serif font-black" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.5rem' }}>
            No input needed.<br />
            <span style={{ color: '#5A53E1' }}>Flaxie runs in the background.</span>
          </h2>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.9 }}>
            Every 15 minutes, Flaxie checks what's open, what's overdue, and what's quietly slipping. It surfaces the right thing before you even notice the gap.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
)

// ── Team visibility section ────────────────────────────────────────────────────
const TeamVisibilitySection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="grid-cols-1 lg:grid-cols-2">
      <Reveal>
        <div>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(0,0%,52%)', display: 'block', marginBottom: '1.25rem' }}>Team visibility</span>
          <h2 className="font-serif font-black" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'hsl(0,0%,10%)', marginBottom: '1.5rem' }}>
            Not just your list.<br />
            <span style={{ color: '#5A53E1' }}>The whole team's threads.</span>
          </h2>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: 'hsl(0,0%,48%)', lineHeight: 1.9 }}>
            Proposals waiting on sign-off. Decisions sitting without a response. Flaxie watches across your team and surfaces what's stuck before it becomes a problem.
          </p>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="hidden lg:block">
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid hsl(0,0%,82%)', boxShadow: '0 20px 60px rgba(0,0,0,0.09), 0 4px 16px rgba(0,0,0,0.06)' }}>
            <div style={{ background: 'hsl(0,0%,10%)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#5A53E1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, color: '#fff', fontSize: '8px' }}>F</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#fff', fontWeight: 500 }}>Flaxie</div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>2:31 PM</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }} />
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>Following up</span>
              </div>
            </div>
            <div style={{ background: '#fff', padding: '16px 16px 12px' }}>
              <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: 'hsl(0,0%,25%)', lineHeight: 1.8, margin: 0 }}>
                The proposal deck has been with the team since Tuesday, no response yet. Worth a follow-up before the week closes?
              </p>
            </div>
            <div style={{ background: 'hsl(42,24%,97%)', padding: '10px 16px 14px', borderTop: '1px solid hsl(0,0%,88%)', display: 'flex', gap: '8px' }}>
              <button style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', fontWeight: 500, color: '#fff', background: '#5A53E1', border: 'none', padding: '7px 14px', borderRadius: '6px', cursor: 'pointer' }}>Follow up with them</button>
              <button style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'hsl(0,0%,35%)', background: '#fff', border: '1px solid hsl(0,0%,82%)', padding: '7px 14px', borderRadius: '6px', cursor: 'pointer' }}>I'll handle it</button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

// ── People accountability section ──────────────────────────────────────────────
const PeopleSection: React.FC = () => (
  <section className="dot-grid" style={{ background: 'hsl(0,0%,10%)', padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,83,225,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} className="glow-drift" />
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', position: 'relative', zIndex: 1 }} className="grid-cols-1 lg:grid-cols-2">
      <Reveal>
        <div>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: '1.25rem' }}>People accountability</span>
          <h2 className="font-serif font-black" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.5rem' }}>
            You delegated it.<br />
            <span style={{ color: '#5A53E1' }}>Flaxie remembers.</span>
          </h2>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.9 }}>
            Tell Flaxie what you've handed off and to whom. It tracks every open item across your team, watches for progress, and steps in when something goes quiet.
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.22)', lineHeight: 1.9, marginTop: '1rem' }}>
            No spreadsheet. No status meetings. Just accountability that runs itself.
          </p>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="hidden lg:block">
          {/* Team board — dark glass style for dark section */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '12px 14px 10px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <img src="/logo.svg" alt="Flax" style={{ height: '24px', width: '24px', objectFit: 'contain', flexShrink: 0 }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#fff', fontWeight: 500 }}>Flaxie</span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)', marginLeft: '3px' }}>· team overview</span>
              <span style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>now</span>
            </div>
            <div style={{ padding: '8px 14px' }}>
              {[
                { initials: 'MC', color: '#6B66E8', name: 'Marcus Chen', task: 'Proposal review', meta: 'Day 4', statusLabel: 'Overdue', statusColor: '#F87171', statusBg: 'rgba(248,113,113,0.15)' },
                { initials: 'SK', color: '#34D399', name: 'Sarah Kim', task: 'Onboarding doc', meta: 'Due Fri', statusLabel: 'On track', statusColor: '#34D399', statusBg: 'rgba(52,211,153,0.15)' },
                { initials: 'RP', color: '#FBBF24', name: 'Raj Patel', task: 'Design sign-off', meta: 'Day 2', statusLabel: 'Pending', statusColor: 'rgba(255,255,255,0.4)', statusBg: 'rgba(255,255,255,0.06)' },
              ].map((p, i) => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: p.color + '22', border: '1px solid ' + p.color + '55', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', fontWeight: 700, color: p.color }}>{p.initials}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.75)', marginBottom: '2px' }}>{p.name}</div>
                    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>{p.task}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '3px' }}>
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>{p.meta}</span>
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: p.statusColor, background: p.statusBg, padding: '1px 6px', borderRadius: '3px' }}>{p.statusLabel}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '10px 14px 12px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(90,83,225,0.08)' }}>
              <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 8px' }}>
                Marcus hasn't updated the proposal in 4 days. Worth a check-in?
              </p>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button style={{ flex: 1, padding: '6px 0', borderRadius: '6px', background: '#5A53E1', border: 'none', cursor: 'pointer', fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', fontWeight: 600, color: '#fff' }}>Check in with Marcus</button>
                <button style={{ flex: 1, padding: '6px 0', borderRadius: '6px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}>I'll wait</button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

// ── Learns section ─────────────────────────────────────────────────────────────
const LearnsSection: React.FC = () => (
  <section className="dot-grid" style={{ background: 'hsl(0,0%,10%)', padding: '6rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '50%', right: '-5%', transform: 'translateY(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,83,225,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
    <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <Reveal>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: '1.25rem' }}>Adaptive intelligence</span>
        <h2 className="font-serif font-black" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.5rem' }}>
          It learns how you work.
        </h2>
        <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.9, maxWidth: '480px', marginBottom: '3.5rem' }}>
          The longer Flaxie runs, the more it fits. It adapts to how you and your team actually work, not how the org chart says it should.
        </p>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { text: '"Sarah responds faster on Slack than email"', delay: 0 },
          { text: '"Standups generate action items that never get logged"', delay: 80 },
          { text: '"Marcus usually needs a second follow-up on design reviews"', delay: 160 },
          { text: '"Fridays are quiet. Big decisions get buried"', delay: 240 },
        ].map((b, i) => (
          <Reveal key={i} delay={b.delay}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', padding: '10px 18px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#5A53E1', flexShrink: 0, boxShadow: '0 0 8px rgba(90,83,225,0.8)' }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.66rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.4 }}>{b.text}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

// ── End of day section ─────────────────────────────────────────────────────────
const EndOfDaySection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '6rem 1.5rem' }}>
    <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
      <Reveal>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(0,0%,42%)', display: 'block', marginBottom: '1.5rem' }}>Closed loop</span>
        <h2 className="font-serif font-black" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'hsl(0,0%,10%)', marginBottom: '3.5rem' }}>
          Nothing left behind.
          <br />
          <span style={{ color: '#5A53E1' }}>Flaxie closes the loop.</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid hsl(0,0%,82%)', boxShadow: '0 20px 60px rgba(0,0,0,0.09), 0 4px 16px rgba(0,0,0,0.06)', textAlign: 'left' }}>
          <div style={{ background: 'hsl(0,0%,10%)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/logo.svg" alt="Flax" style={{ height: '28px', width: '28px', objectFit: 'contain', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: '#fff', fontWeight: 500 }}>Flaxie</div>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.35)' }}>Wrapping up</div>
              </div>
            </div>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>6:00 PM</span>
          </div>
          <div style={{ background: '#fff', padding: '20px' }}>
            <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', color: 'hsl(0,0%,45%)', lineHeight: 1.8, margin: '0 0 16px' }}>
              Before you close the laptop. Here's what happened today.
            </p>
            {[
              { label: 'Wrapped up', color: 'hsl(142,45%,38%)', items: ['Follow up with investor', 'Review onboarding copy'], strike: true },
              { label: 'Still open', color: 'hsl(0,0%,52%)', items: ['Update pitch deck', 'Team sign-off on proposal'], strike: false },
            ].map(g => (
              <div key={g.label} style={{ marginBottom: '12px' }}>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: g.color, display: 'block', marginBottom: '6px' }}>{g.label}</span>
                {g.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '2px 0' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'hsl(0,0%,38%)', textDecoration: g.strike ? 'line-through' : 'none' }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ background: 'hsl(42,24%,97%)', padding: '12px 20px', borderTop: '1px solid hsl(0,0%,88%)' }}>
            <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'hsl(0,0%,48%)', lineHeight: 1.7, margin: 0 }}>
              What closed. What's still open. What needs your attention tomorrow. · Flaxie
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={220}>
        <p style={{ marginTop: '2.5rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'hsl(0,0%,48%)', letterSpacing: '0.01em', lineHeight: 1.8 }}>
          No status meeting. No end-of-day scramble. Just clarity.
        </p>
      </Reveal>
    </div>
  </section>
)

// ── CTA section ────────────────────────────────────────────────────────────────
const CTASection: React.FC = () => (
  <section className="dot-grid" style={{
    background: 'hsl(0,0%,10%)', padding: '7rem 1.5rem',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    textAlign: 'center', position: 'relative', overflow: 'hidden',
  }}>
    <div className="glow-drift" style={{
      position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)',
      width: '600px', height: '600px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.14) 0%, transparent 65%)',
      pointerEvents: 'none',
    }} />
    <div style={{ maxWidth: '460px', width: '100%', position: 'relative', zIndex: 1 }}>
      <Reveal>
        <h2 className="font-serif font-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', marginBottom: '1.25rem' }}>
          You've been one person short.
          <br />
          <span style={{ color: '#5A53E1' }}>That changes today.</span>
        </h2>
        <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.9, marginBottom: '2.25rem' }}>
          Give Flaxie a week. See what stops falling through.
        </p>
      </Reveal>
      <Reveal delay={80}>
        <button className="btn btn-primary" style={{ padding: '0.85rem 2.5rem', fontSize: '0.9rem' }}
          data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
        >Book a demo</button>
      </Reveal>
    </div>
  </section>
)

// ── Footer ────────────────────────────────────────────────────────────────────
const AssistantFooter: React.FC = () => (
  <footer style={{ background: 'hsl(42,24%,95%)', borderTop: '1px solid hsl(0,0%,82%)', padding: '1.5rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src="/logo.svg" alt="Flax" style={{ height: '20px', width: 'auto' }} />
        <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '0.95rem', color: 'hsl(0,0%,10%)' }}>Flax</span>
      </div>
      <div style={{ display: 'flex', gap: '1.25rem' }}>
        {[{ l: 'contact@joinflax.com', h: 'mailto:contact@joinflax.com' }, { l: 'Privacy', h: '/privacy' }].map(x => (
          <a key={x.l} href={x.h} style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,58%)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'hsl(0,0%,15%)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'hsl(0,0%,58%)')}
          >{x.l}</a>
        ))}
      </div>
      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: 'hsl(0,0%,68%)' }}>© 2026 Flax</span>
    </div>
  </footer>
)

// ── App ───────────────────────────────────────────────────────────────────────
function AssistantApp() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = (a: any, ar: any) => a.q.push(ar)
      let d = C.document
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true }
        if (ar[0] === L) { const api: any = function () { p(api, arguments) }; const ns = ar[1]; api.q = api.q || []; if (typeof ns === 'string') { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ['initNamespace', ns]) } else p(cal, ar); return } p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')
    const w = window as any
    w.Cal('init', 'strategy-call', { origin: 'https://app.cal.com' })
    w.Cal.ns['strategy-call']('ui', { hideEventTypeDetails: false, layout: 'month_view' })
  }, [])

  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <AssistantNavbar />
      <main>
        <EAHero />
        <BriefSection />
        <PositioningHook />
        <AgenticSection />
        <ProactiveSection />
        <TeamVisibilitySection />
        <PeopleSection />
        <LearnsSection />
        <EndOfDaySection />
        <CTASection />
      </main>
      <AssistantFooter />
    </div>
  )
}

export default AssistantApp
