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
    }}>
      {children}
    </div>
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
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img src="/logo.svg" alt="Flax" style={{ height: '24px', width: 'auto' }} />
              <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em', color: onDark ? '#fff' : 'hsl(0,0%,10%)', transition: 'color 0.3s' }}>Flax</span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.08em', color: onDark ? 'rgba(255,255,255,0.28)' : 'hsl(0,0%,62%)', transition: 'color 0.3s' }}>/assistant</span>
            </a>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'flex-end' }}>
            <a href="/" className="hidden md:inline" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: onDark ? 'rgba(255,255,255,0.4)' : 'hsl(0,0%,50%)', textDecoration: 'none', transition: 'color 0.2s' }}>Main site</a>
            <a className="btn btn-primary btn-sm" style={{ borderRadius: '100px' }} href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">Get Early Access</a>
          </div>
          <button className="md:hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', color: onDark ? '#fff' : 'hsl(0,0%,10%)', marginLeft: '12px' }} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'hsl(0,0%,10%)', padding: '88px 1.5rem 2rem' }} className="md:hidden">
          <a className="btn btn-primary" href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get Early Access</a>
        </div>
      )}
    </>
  )
}

// ── Nudge card — personal task ────────────────────────────────────────────────

const PersonalNudgeCard: React.FC = () => (
  <div style={{
    background: '#fff', borderRadius: '14px', overflow: 'hidden', width: '296px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.13)', border: '1px solid hsl(0,0%,88%)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '12px 14px 10px', borderBottom: '1px solid hsl(0,0%,92%)' }}>
      <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, #5A53E1, #7B74F0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', flexShrink: 0 }}>✦</div>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: 'hsl(0,0%,10%)' }}>Flaxie</span>
      <span style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', color: 'hsl(0,0%,62%)' }}>4:18 PM</span>
    </div>
    <div style={{ padding: '11px 14px 8px' }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.76rem', color: 'hsl(0,0%,22%)', lineHeight: 1.55, margin: 0 }}>
        "Follow up with investor" has been sitting since this morning. Still happening today?
      </p>
    </div>
    <div style={{ padding: '0 14px 8px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'hsl(240,60%,97%)', border: '1px solid rgba(90,83,225,0.18)', borderRadius: '5px', padding: '4px 9px' }}>
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#5A53E1', flexShrink: 0 }} />
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: '#5A53E1' }}>Follow up with investor</span>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '6px', padding: '4px 14px 12px' }}>
      <button style={{ flex: 1, padding: '7px 0', borderRadius: '7px', background: '#5A53E1', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, color: '#fff' }}>On it →</button>
      <button style={{ flex: 1, padding: '7px 0', borderRadius: '7px', background: 'transparent', border: '1px solid hsl(0,0%,86%)', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: 'hsl(0,0%,52%)' }}>Needs more time</button>
    </div>
  </div>
)

// ── Nudge card — team thread ──────────────────────────────────────────────────

const TeamNudgeCard: React.FC = () => (
  <div style={{
    background: '#fff', borderRadius: '14px', overflow: 'hidden', width: '296px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.09)', border: '1px solid hsl(0,0%,88%)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '12px 14px 10px', borderBottom: '1px solid hsl(0,0%,92%)' }}>
      <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, #5A53E1, #7B74F0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', flexShrink: 0 }}>✦</div>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: 'hsl(0,0%,10%)' }}>Flaxie</span>
      <span style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', color: 'hsl(0,0%,62%)' }}>2:31 PM</span>
    </div>
    <div style={{ padding: '11px 14px 10px' }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.76rem', color: 'hsl(0,0%,22%)', lineHeight: 1.55, margin: 0 }}>
        The proposal deck has been with the team since Tuesday — no response yet. Worth a nudge before the week closes?
      </p>
    </div>
    <div style={{ display: 'flex', gap: '6px', padding: '2px 14px 12px' }}>
      <button style={{ flex: 1, padding: '7px 0', borderRadius: '7px', background: '#5A53E1', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, color: '#fff' }}>Send a nudge</button>
      <button style={{ flex: 1, padding: '7px 0', borderRadius: '7px', background: 'transparent', border: '1px solid hsl(0,0%,86%)', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: 'hsl(0,0%,52%)' }}>I'll handle it</button>
    </div>
  </div>
)

// ── End-of-day reflection card ────────────────────────────────────────────────

const ReflectionCard: React.FC = () => (
  <div style={{
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: '14px', overflow: 'hidden', width: '296px',
    boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '12px 14px 10px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, #5A53E1, #7B74F0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✦</div>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>Flaxie</span>
      <span style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)' }}>6:00 PM</span>
    </div>
    <div style={{ padding: '11px 14px 14px' }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.74rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: '0 0 12px' }}>
        Here's where things stand before you close out.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { label: 'Wrapped up', color: 'hsl(142,50%,45%)', items: ['Follow up with investor', 'Review onboarding copy'] },
          { label: 'Still open', color: 'rgba(255,255,255,0.3)', items: ['Update pitch deck', 'Team sign-off on proposal'] },
        ].map(g => (
          <div key={g.label}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: g.color, display: 'block', marginBottom: '5px' }}>{g.label}</span>
            {g.items.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '2px 0' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)', textDecoration: g.label === 'Wrapped up' ? 'line-through' : 'none' }}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
)

// ── Hero ──────────────────────────────────────────────────────────────────────

const AssistantHero: React.FC = () => (
  <section className="dot-grid" style={{
    minHeight: '100vh', backgroundColor: 'hsl(0,0%,10%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    paddingTop: '72px', position: 'relative', overflow: 'hidden',
  }}>
    <div className="glow-drift" style={{
      position: 'absolute', top: '-15%', left: '50%', transform: 'translateX(-50%)',
      width: '800px', height: '800px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.16) 0%, transparent 65%)',
      pointerEvents: 'none', zIndex: 0,
    }} />

    <div style={{
      maxWidth: '1020px', width: '100%', padding: '3rem 2rem',
      position: 'relative', zIndex: 1,
      display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center',
    }} className="grid-cols-1 lg:grid-cols-2-auto">

      {/* Copy */}
      <div>
        <div className="inline-flex items-center gap-2 mb-8 opacity-0-start animate-fade-in">
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5A53E1', boxShadow: '0 0 8px rgba(90,83,225,0.8)' }} />
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Flax Assistant · macOS · Early Access</span>
        </div>

        <h1 className="font-serif font-black opacity-0-start animate-fade-in-up delay-100" style={{
          fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
          lineHeight: 1.1, letterSpacing: '-0.025em', color: '#fff', maxWidth: '520px',
        }}>
          You're in the meeting.
          <br />
          <span style={{ color: '#5A53E1' }}>Flaxie's watching everything else.</span>
        </h1>

        <p className="opacity-0-start animate-fade-in-up delay-200" style={{
          marginTop: '1.5rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem',
          color: 'rgba(255,255,255,0.3)', lineHeight: 1.9, maxWidth: '400px',
        }}>
          Tasks, follow-ups, team threads — Flaxie keeps them in motion
          <br />so nothing drifts while you're heads down.
        </p>

        <div className="opacity-0-start animate-fade-in-up delay-300" style={{ marginTop: '2.25rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">Request Early Access</a>
          <button className="btn" style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.14)',
            color: 'rgba(255,255,255,0.38)', padding: '0.65rem 1.4rem', fontSize: '0.875rem', transition: 'all 0.15s',
          }}
            data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.32)'; el.style.color = 'rgba(255,255,255,0.72)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.14)'; el.style.color = 'rgba(255,255,255,0.38)' }}
          >Book a demo</button>
        </div>

        <div className="opacity-0-start animate-fade-in delay-500" style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.14)' }}>Supported by</span>
          <img src="/Antler_logo.svg" alt="Antler" style={{ height: '16px', opacity: 0.18, filter: 'brightness(0) invert(1)', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.45')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.18')}
          />
        </div>
      </div>

      {/* Product visual — two cards, stacked and offset */}
      <div className="opacity-0-start animate-fade-in-up delay-300 hidden lg:block" style={{ position: 'relative', width: '296px', height: '340px', flexShrink: 0 }}>
        {/* Personal nudge card — behind */}
        <div style={{ position: 'absolute', top: '44px', left: '20px', transform: 'rotate(-2deg)', opacity: 0.55 }}>
          <PersonalNudgeCard />
        </div>
        {/* Team nudge card — front */}
        <div style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(1deg)' }}>
          <TeamNudgeCard />
        </div>
      </div>
    </div>
  </section>
)

// ── The moment — visual timeline ──────────────────────────────────────────────

const TimelineSection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '6rem 1.5rem', borderTop: '1px solid hsl(0,0%,82%)' }}>
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>

      <Reveal>
        <p className="font-serif font-black" style={{
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          lineHeight: 1.12, letterSpacing: '-0.02em', color: 'hsl(0,0%,10%)', marginBottom: '3.5rem',
        }}>
          Things don't slip because people stop caring.
          <br />
          <span style={{ color: 'hsl(0,0%,58%)' }}>They slip because nobody's watching the thread.</span>
        </p>
      </Reveal>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: '88px' }}>
        <div style={{ position: 'absolute', left: '40px', top: '12px', bottom: '8px', width: '1px', background: 'hsl(0,0%,82%)' }} />

        {/* 9:04 AM */}
        <Reveal>
          <div style={{ position: 'relative', marginBottom: '2.25rem' }}>
            <span style={{ position: 'absolute', left: '-56px', top: '3px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', color: 'hsl(0,0%,60%)', whiteSpace: 'nowrap' }}>9:04 AM</span>
            <div style={{ position: 'absolute', left: '-52px', top: '11px', width: '7px', height: '7px', borderRadius: '50%', background: 'hsl(0,0%,78%)', marginLeft: '3px' }} />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid hsl(0,0%,87%)', borderRadius: '8px', padding: '7px 12px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'hsl(0,0%,72%)' }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.66rem', color: 'hsl(0,0%,32%)' }}>Follow up with investor</span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.54rem', color: 'hsl(0,0%,62%)' }}>added</span>
            </div>
          </div>
        </Reveal>

        {/* The gap */}
        <Reveal delay={40}>
          <div style={{ position: 'relative', marginBottom: '2.25rem', paddingLeft: '2px' }}>
            {['Meeting overran by 40 minutes', 'Pulled into a different fire', 'Three Slack threads at once'].map((t, i) => (
              <p key={i} style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: 'hsl(0,0%,70%)', fontStyle: 'italic', lineHeight: 1.8, margin: 0 }}>— {t}</p>
            ))}
          </div>
        </Reveal>

        {/* 4:18 PM — nudge */}
        <Reveal delay={80}>
          <div style={{ position: 'relative', marginBottom: '2.25rem' }}>
            <span style={{ position: 'absolute', left: '-56px', top: '3px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', color: '#5A53E1', whiteSpace: 'nowrap' }}>4:18 PM</span>
            <div style={{ position: 'absolute', left: '-52px', top: '11px', width: '7px', height: '7px', borderRadius: '50%', background: '#5A53E1', marginLeft: '3px', boxShadow: '0 0 0 3px rgba(90,83,225,0.2)' }} />
            <PersonalNudgeCard />
          </div>
        </Reveal>

        {/* 4:19 PM — done */}
        <Reveal delay={120}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '-56px', top: '3px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', color: 'hsl(142,45%,38%)', whiteSpace: 'nowrap' }}>4:19 PM</span>
            <div style={{ position: 'absolute', left: '-52px', top: '11px', width: '7px', height: '7px', borderRadius: '50%', background: 'hsl(142,50%,45%)', marginLeft: '3px' }} />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'hsl(142,60%,96%)', border: '1px solid hsl(142,40%,80%)', borderRadius: '8px', padding: '7px 12px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'hsl(142,50%,45%)' }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.66rem', color: 'hsl(142,40%,28%)', textDecoration: 'line-through' }}>Follow up with investor</span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.54rem', color: 'hsl(142,40%,48%)' }}>done ✓</span>
            </div>
          </div>
        </Reveal>
      </div>

    </div>
  </section>
)

// ── Team threads section ──────────────────────────────────────────────────────

const TeamSection: React.FC = () => (
  <section style={{ background: 'hsl(0,0%,10%)', padding: '6rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="dot-grid">
    <div style={{
      maxWidth: '940px', margin: '0 auto',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center',
    }} className="grid-cols-1 lg:grid-cols-2">

      <Reveal>
        <div>
          <p className="font-serif font-black" style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            lineHeight: 1.12, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.25rem',
          }}>
            It's not just you.
            <br />
            <span style={{ color: '#5A53E1' }}>Flaxie watches the team too.</span>
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.32)', lineHeight: 1.9, maxWidth: '340px' }}>
            Decisions waiting on sign-off. Proposals sitting without a response. Threads that went quiet and took momentum with them.
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.22)', lineHeight: 1.9, maxWidth: '340px', marginTop: '1rem' }}>
            Flaxie surfaces them before they become problems — so you can act while there's still time to.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="hidden lg:flex" style={{ justifyContent: 'center' }}>
          <TeamNudgeCard />
        </div>
      </Reveal>
    </div>
  </section>
)

// ── End-of-day section ────────────────────────────────────────────────────────

const EndOfDaySection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '6rem 1.5rem', borderTop: '1px solid hsl(0,0%,82%)' }}>
    <div style={{
      maxWidth: '940px', margin: '0 auto',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center',
    }} className="grid-cols-1 lg:grid-cols-2">

      {/* Card first on large screens */}
      <Reveal>
        <div className="hidden lg:flex" style={{ justifyContent: 'flex-start' }}>
          {/* Wrap card in dark pill to show it properly on light bg */}
          <div style={{ background: 'hsl(0,0%,14%)', borderRadius: '20px', padding: '20px', display: 'inline-block' }}>
            <ReflectionCard />
          </div>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div>
          <p className="font-serif font-black" style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            lineHeight: 1.12, letterSpacing: '-0.02em', color: 'hsl(0,0%,10%)', marginBottom: '1.25rem',
          }}>
            End of day.
            <br />
            <span style={{ color: '#5A53E1' }}>Everything in view.</span>
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'hsl(0,0%,42%)', lineHeight: 1.9, maxWidth: '340px' }}>
            Not a report. A quick brief — what got done, what's still open, what needs a nudge tomorrow. Thirty seconds and you're done.
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'hsl(0,0%,58%)', lineHeight: 1.9, maxWidth: '340px', marginTop: '1rem' }}>
            The longer Flaxie runs, the more it knows about how your work actually flows — and the more precisely it can help.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
)

// ── CTA ───────────────────────────────────────────────────────────────────────

const AssistantCTASection: React.FC = () => (
  <section style={{
    background: 'hsl(0,0%,10%)', padding: '7rem 1.5rem',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', position: 'relative', overflow: 'hidden',
  }} className="dot-grid">
    <div style={{
      position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)',
      width: '600px', height: '600px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.14) 0%, transparent 65%)',
      pointerEvents: 'none',
    }} />
    <div style={{ maxWidth: '460px', width: '100%', position: 'relative', zIndex: 1 }}>
      <Reveal>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', marginBottom: '1.25rem',
        }}>
          Nothing slips.
          <br />
          <span style={{ color: '#5A53E1' }}>Not anymore.</span>
        </h2>
        <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', lineHeight: 1.9, marginBottom: '2.25rem' }}>
          Give Flaxie a week. See what stops falling through.
        </p>
      </Reveal>
      <Reveal delay={80}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <a className="btn btn-primary" style={{ padding: '0.75rem 2rem' }} href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">Request Early Access</a>
          <button className="btn" style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.13)',
            color: 'rgba(255,255,255,0.36)', padding: '0.75rem 2rem', fontSize: '0.875rem', transition: 'all 0.15s',
          }}
            data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.3)'; el.style.color = 'rgba(255,255,255,0.72)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.13)'; el.style.color = 'rgba(255,255,255,0.36)' }}
          >Book a demo</button>
        </div>
      </Reveal>
    </div>
  </section>
)

// ── Footer ────────────────────────────────────────────────────────────────────

const AssistantFooter: React.FC = () => (
  <footer style={{ background: 'hsl(42,24%,95%)', borderTop: '1px solid hsl(0,0%,82%)', padding: '1.5rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '0.95rem', color: 'hsl(0,0%,10%)' }}>Flax</span>
        <span style={{ color: 'hsl(0,0%,75%)' }}>·</span>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,55%)' }}>Assistant</span>
      </div>
      <div style={{ display: 'flex', gap: '1.25rem' }}>
        {[{ l: 'Main site', h: '/' }, { l: 'contact@joinflax.com', h: 'mailto:contact@joinflax.com' }, { l: 'Privacy', h: '/privacy' }].map(x => (
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
        <AssistantHero />
        <TimelineSection />
        <TeamSection />
        <EndOfDaySection />
        <AssistantCTASection />
      </main>
      <AssistantFooter />
    </div>
  )
}

export default AssistantApp
