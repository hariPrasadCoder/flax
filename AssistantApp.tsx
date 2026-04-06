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
              <img src="/logo.svg" alt="Flax" style={{ height: '24px', width: 'auto', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em', color: onDark ? '#fff' : 'hsl(0,0%,10%)', transition: 'color 0.3s' }}>Flax</span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.08em', color: onDark ? 'rgba(255,255,255,0.28)' : 'hsl(0,0%,62%)', transition: 'color 0.3s' }}>/assistant</span>
            </a>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
            <a href="/" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: onDark ? 'rgba(255,255,255,0.4)' : 'hsl(0,0%,50%)', textDecoration: 'none', marginRight: '1rem', transition: 'color 0.2s' }} className="hidden md:inline">Main site</a>
            <a className="btn btn-primary btn-sm" style={{ borderRadius: '100px' }} href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">Get Early Access</a>
          </div>
          <button className="md:hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', color: onDark ? '#fff' : 'hsl(0,0%,10%)', marginLeft: '12px' }} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'hsl(0,0%,10%)', paddingTop: '80px', padding: '80px 1.5rem 2rem' }} className="md:hidden">
          <a className="btn btn-primary" href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get Early Access</a>
        </div>
      )}
    </>
  )
}

// ── Nudge notification card ───────────────────────────────────────────────────

const NudgeCard: React.FC = () => (
  <div style={{
    background: '#fff', borderRadius: '14px', overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.14), 0 1px 0 rgba(255,255,255,0.8) inset',
    border: '1px solid hsl(0,0%,88%)', width: '300px',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '13px 15px 11px', borderBottom: '1px solid hsl(0,0%,92%)' }}>
      <div style={{ width: '25px', height: '25px', borderRadius: '7px', background: 'linear-gradient(135deg, #5A53E1, #7B74F0)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '11px' }}>✦</div>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.76rem', fontWeight: 600, color: 'hsl(0,0%,10%)' }}>Flaxie</span>
      <span style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', color: 'hsl(0,0%,62%)' }}>4:18 PM</span>
    </div>
    <div style={{ padding: '11px 15px 9px' }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'hsl(0,0%,22%)', lineHeight: 1.55, margin: 0 }}>
        You added "follow up with investor" this morning. Still on for today?
      </p>
    </div>
    <div style={{ padding: '0 15px 9px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'hsl(240,60%,97%)', border: '1px solid rgba(90,83,225,0.18)', borderRadius: '5px', padding: '4px 9px' }}>
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#5A53E1', flexShrink: 0 }} />
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: '#5A53E1' }}>Follow up with investor</span>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '7px', padding: '5px 15px 13px' }}>
      <button style={{ flex: 1, padding: '7px 0', borderRadius: '7px', background: '#5A53E1', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, color: '#fff' }}>On it →</button>
      <button style={{ flex: 1, padding: '7px 0', borderRadius: '7px', background: 'transparent', border: '1px solid hsl(0,0%,86%)', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: 'hsl(0,0%,52%)' }}>Need more time</button>
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

    {/* Two-column layout */}
    <div style={{
      maxWidth: '1040px', width: '100%', padding: '4rem 2rem',
      position: 'relative', zIndex: 1,
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center',
    }} className="grid-cols-1 lg:grid-cols-2">

      {/* Left: copy */}
      <div>
        <div className="inline-flex items-center gap-2 mb-8 opacity-0-start animate-fade-in">
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5A53E1', animation: 'glow-pulse 2s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' }}>Desktop App · macOS</span>
        </div>

        <h1 className="font-serif font-black opacity-0-start animate-fade-in-up delay-100" style={{
          fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
          lineHeight: 1.12, letterSpacing: '-0.025em', color: '#fff',
        }}>
          You don't need AI to do your work.
          <br />
          <span style={{ color: '#5A53E1' }}>Just to make sure you do.</span>
        </h1>

        <p className="opacity-0-start animate-fade-in-up delay-200" style={{
          marginTop: '1.5rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem',
          color: 'rgba(255,255,255,0.32)', letterSpacing: '0.01em', lineHeight: 1.9,
        }}>
          Flaxie lives in your menu bar. Add your tasks,
          <br />
          get nudged when they need attention.
        </p>

        <div className="opacity-0-start animate-fade-in-up delay-300" style={{ marginTop: '2.25rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">Request Early Access</a>
          <button className="btn" style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.4)', padding: '0.65rem 1.5rem', fontSize: '0.875rem', transition: 'all 0.15s',
          }}
            data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.35)'; el.style.color = 'rgba(255,255,255,0.75)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = 'rgba(255,255,255,0.4)' }}
          >Book a demo</button>
        </div>

        <div className="opacity-0-start animate-fade-in delay-500" style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.14)' }}>Supported by</span>
          <img src="/Antler_logo.svg" alt="Antler" style={{ height: '17px', opacity: 0.18, filter: 'brightness(0) invert(1)', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.45')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.18')}
          />
        </div>
      </div>

      {/* Right: product — the nudge notification is the story */}
      <div className="opacity-0-start animate-fade-in-up delay-200 hidden lg:flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <NudgeCard />
      </div>
    </div>
  </section>
)

// ── Visual timeline ───────────────────────────────────────────────────────────

const Timeline: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '6rem 1.5rem', borderTop: '1px solid hsl(0,0%,82%)' }}>
    <div style={{ maxWidth: '680px', margin: '0 auto' }}>

      <Reveal>
        <p className="font-serif font-black" style={{
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          lineHeight: 1.15, letterSpacing: '-0.02em', color: 'hsl(0,0%,10%)', marginBottom: '3.5rem',
        }}>
          You had a plan at 9am.
          <br />
          <span style={{ color: 'hsl(0,0%,60%)' }}>The day had other ideas.</span>
        </p>
      </Reveal>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: '80px' }}>
        {/* Vertical line */}
        <div style={{ position: 'absolute', left: '36px', top: '8px', bottom: '0', width: '1px', background: 'hsl(0,0%,82%)' }} />

        {/* 9:04 AM — task added */}
        <Reveal>
          <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
            <div style={{ position: 'absolute', left: '-50px', top: '2px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', color: 'hsl(0,0%,58%)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>9:04 AM</div>
            <div style={{ position: 'absolute', left: '-47px', top: '10px', width: '8px', height: '8px', borderRadius: '50%', background: 'hsl(0,0%,78%)', transform: 'translateX(-50%)', marginLeft: '3px' }} />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1px solid hsl(0,0%,86%)', borderRadius: '8px', padding: '8px 13px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'hsl(0,0%,72%)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'hsl(0,0%,30%)' }}>Follow up with investor</span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', color: 'hsl(0,0%,65%)', marginLeft: '4px' }}>added</span>
            </div>
          </div>
        </Reveal>

        {/* The quiet gap */}
        <Reveal delay={60}>
          <div style={{ position: 'relative', marginBottom: '2.5rem', paddingLeft: '0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '0' }}>
              {['Meeting overran', 'Someone needed something', 'Context switched'].map((t, i) => (
                <span key={i} style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,72%)', fontStyle: 'italic' }}>— {t}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 4:18 PM — nudge */}
        <Reveal delay={120}>
          <div style={{ position: 'relative', marginBottom: '2rem' }}>
            <div style={{ position: 'absolute', left: '-50px', top: '2px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', color: '#5A53E1', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>4:18 PM</div>
            <div style={{ position: 'absolute', left: '-47px', top: '10px', width: '8px', height: '8px', borderRadius: '50%', background: '#5A53E1', transform: 'translateX(-50%)', marginLeft: '3px', boxShadow: '0 0 0 3px rgba(90,83,225,0.18)' }} />
            <NudgeCard />
          </div>
        </Reveal>

        {/* 4:19 PM — task done */}
        <Reveal delay={180}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '-50px', top: '2px', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', color: 'hsl(142,45%,38%)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>4:19 PM</div>
            <div style={{ position: 'absolute', left: '-47px', top: '10px', width: '8px', height: '8px', borderRadius: '50%', background: 'hsl(142,50%,45%)', transform: 'translateX(-50%)', marginLeft: '3px' }} />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'hsl(142,60%,96%)', border: '1px solid hsl(142,40%,80%)', borderRadius: '8px', padding: '8px 13px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'hsl(142,50%,45%)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'hsl(142,40%,30%)', textDecoration: 'line-through' }}>Follow up with investor</span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', color: 'hsl(142,40%,48%)' }}>done</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={220}>
        <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'hsl(0,0%,48%)', lineHeight: 1.8, marginTop: '3rem', maxWidth: '440px' }}>
          That's the whole thing. One nudge, at the right moment. No lecture, no streak broken. Just a tap on the shoulder.
        </p>
      </Reveal>

    </div>
  </section>
)

// ── End of day reflection ─────────────────────────────────────────────────────

const ReflectionCard: React.FC = () => (
  <div style={{
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: '14px', overflow: 'hidden', width: '320px',
    boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '12px 15px 10px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, #5A53E1, #7B74F0)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✦</div>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>Flaxie</span>
      <span style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)' }}>6:01 PM</span>
    </div>
    <div style={{ padding: '12px 15px 15px' }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.76rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: '0 0 12px' }}>
        Quick check-in before you close the day.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        {[
          { label: 'Done', items: ['Follow up with investor', 'Review onboarding flow'], color: 'hsl(142,50%,45%)' },
          { label: 'Carried forward', items: ['Update pitch deck'], color: 'rgba(255,255,255,0.3)' },
        ].map(g => (
          <div key={g.label}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.56rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: g.color, display: 'block', marginBottom: '4px' }}>{g.label}</span>
            {g.items.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '3px 0' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.63rem', color: 'rgba(255,255,255,0.5)', textDecoration: g.label === 'Done' ? 'line-through' : 'none' }}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ReflectionSection: React.FC = () => (
  <section style={{ background: 'hsl(0,0%,10%)', padding: '6rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="dot-grid">
    <div style={{
      maxWidth: '900px', margin: '0 auto',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center',
    }} className="grid-cols-1 lg:grid-cols-2">

      <Reveal>
        <div>
          <p className="font-serif font-black" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#fff', marginBottom: '1.25rem' }}>
            End of day.
            <br />
            <span style={{ color: '#5A53E1' }}>A thought partner, not a report.</span>
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.85, maxWidth: '340px' }}>
            Every evening Flaxie surfaces what moved, what didn't, and what to carry forward. One message. Thirty seconds.
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.22)', lineHeight: 1.85, maxWidth: '340px', marginTop: '1.25rem' }}>
            After a few weeks, it knows your patterns well enough to nudge differently. Better timing, better framing. It gets smarter the longer you use it.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80} className="hidden lg:flex" >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReflectionCard />
        </div>
      </Reveal>
    </div>
  </section>
)

// ── Quote ─────────────────────────────────────────────────────────────────────

const QuoteSection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '6rem 1.5rem', borderTop: '1px solid hsl(0,0%,82%)' }}>
    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
      <Reveal>
        <blockquote className="font-serif font-black" style={{
          fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
          lineHeight: 1.3, letterSpacing: '-0.02em',
          color: 'hsl(0,0%,10%)', fontStyle: 'italic',
          margin: 0, borderLeft: '3px solid #5A53E1', paddingLeft: '1.75rem',
        }}>
          "I don't want the agent to do the work for me. I just need someone to keep nudging me until it's done."
        </blockquote>
        <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,55%)', letterSpacing: '0.06em', marginTop: '1.25rem', paddingLeft: '1.75rem' }}>
          — early user feedback. that's what we're building.
        </p>
      </Reveal>
    </div>
  </section>
)

// ── CTA ───────────────────────────────────────────────────────────────────────

const AssistantCTASection: React.FC = () => (
  <section style={{
    background: 'hsl(0,0%,10%)', padding: '6rem 1.5rem',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center',
  }} className="dot-grid">
    <div style={{
      position: 'absolute', left: '50%', top: '30%', transform: 'translateX(-50%)',
      width: '500px', height: '500px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.14) 0%, transparent 65%)',
      pointerEvents: 'none',
    }} />
    <div style={{ maxWidth: '480px', width: '100%', position: 'relative', zIndex: 1 }}>
      <Reveal>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
          lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', marginBottom: '1.25rem',
        }}>
          One week.
          <br />
          <span style={{ color: '#5A53E1' }}>You'll stop forgetting.</span>
        </h2>
        <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', lineHeight: 1.9, marginBottom: '2.25rem' }}>
          Install Flaxie. Add your first task.<br />See what it feels like to have someone watching your back.
        </p>
      </Reveal>
      <Reveal delay={80}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <a className="btn btn-primary" style={{ padding: '0.75rem 2rem' }} href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">Request Early Access</a>
          <button className="btn" style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.14)',
            color: 'rgba(255,255,255,0.38)', padding: '0.75rem 2rem', fontSize: '0.875rem', transition: 'all 0.15s',
          }}
            data-cal-link="joinflax/strategy-call" data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.3)'; el.style.color = 'rgba(255,255,255,0.75)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.14)'; el.style.color = 'rgba(255,255,255,0.38)' }}
          >Book a demo</button>
        </div>
      </Reveal>
    </div>
  </section>
)

// ── Footer ────────────────────────────────────────────────────────────────────

const AssistantFooter: React.FC = () => (
  <footer style={{ background: 'hsl(42,24%,95%)', borderTop: '1px solid hsl(0,0%,82%)', padding: '1.5rem 1.5rem' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '0.95rem', color: 'hsl(0,0%,10%)' }}>Flax</span>
        <span style={{ color: 'hsl(0,0%,75%)' }}>·</span>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,55%)' }}>Assistant</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        {[{ label: 'Main site', href: '/' }, { label: 'contact@joinflax.com', href: 'mailto:contact@joinflax.com' }, { label: 'Privacy', href: '/privacy' }].map(l => (
          <a key={l.label} href={l.href} style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,58%)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'hsl(0,0%,15%)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'hsl(0,0%,58%)')}
          >{l.label}</a>
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
        <Timeline />
        <ReflectionSection />
        <QuoteSection />
        <AssistantCTASection />
      </main>
      <AssistantFooter />
    </div>
  )
}

export default AssistantApp
