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
      transform: visible ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
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
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : '0 0 0 1px rgba(255,255,255,0.06) inset',
        }}>
          <div style={{ flex: 1 }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img src="/logo.svg" alt="Flax" style={{ height: '26px', width: 'auto', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Merriweather, Georgia, serif', fontWeight: 900, fontSize: '1.15rem', letterSpacing: '-0.02em', color: onDark ? '#fff' : 'hsl(0,0%,10%)', transition: 'color 0.3s ease' }}>Flax</span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.08em', color: onDark ? 'rgba(255,255,255,0.3)' : 'hsl(0,0%,60%)', transition: 'color 0.3s' }}>/assistant</span>
            </a>
          </div>
          <div style={{ alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {[{ label: 'Main site', href: '/' }].map(l => (
              <a key={l.label} href={l.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: onDark ? 'rgba(255,255,255,0.5)' : 'hsl(0,0%,42%)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = onDark ? '#fff' : 'hsl(0,0%,10%)')}
                onMouseLeave={e => (e.currentTarget.style.color = onDark ? 'rgba(255,255,255,0.5)' : 'hsl(0,0%,42%)')}
              >{l.label}</a>
            ))}
          </div>
          <div style={{ flex: 1, alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }} className="hidden md:flex">
            <a className="btn btn-primary btn-sm" style={{ borderRadius: '100px' }} href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">
              Get Early Access
            </a>
          </div>
          <button className="md:hidden ml-auto" style={{ background: 'none', border: 'none', cursor: 'pointer', color: onDark ? '#fff' : 'hsl(0,0%,10%)' }} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'hsl(0,0%,10%)', paddingTop: '80px', display: 'flex', flexDirection: 'column' }} className="md:hidden">
          <div style={{ padding: '2.5rem 1.5rem' }}>
            <a className="btn btn-primary" style={{ alignSelf: 'flex-start' }} href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Get Early Access</a>
          </div>
        </div>
      )}
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

const AssistantHero: React.FC = () => (
  <section className="dot-grid" style={{
    minHeight: '100vh', backgroundColor: 'hsl(0,0%,10%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    paddingTop: '80px', position: 'relative', overflow: 'hidden',
  }}>
    <div className="glow-drift" style={{
      position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
      width: '900px', height: '900px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.18) 0%, rgba(90,83,225,0.05) 45%, transparent 68%)',
      pointerEvents: 'none', zIndex: 0,
    }} />

    <div style={{
      maxWidth: '720px', width: '100%', padding: '4rem 2rem',
      position: 'relative', zIndex: 1, textAlign: 'center',
    }}>
      <div className="inline-flex items-center gap-2 mb-10 opacity-0-start animate-fade-in">
        <div className="w-1.5 h-1.5 rounded-full bg-flax animate-pulse" />
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
          Desktop App · macOS · Early Access
        </span>
      </div>

      <h1 className="font-serif font-black opacity-0-start animate-fade-in-up delay-100" style={{
        fontSize: 'clamp(2.4rem, 6vw, 5.2rem)',
        lineHeight: 1.06, letterSpacing: '-0.03em', color: '#fff',
      }}>
        You don't need AI
        <br />to do your work.
        <br />
        <span style={{ color: '#5A53E1' }}>Just to make sure you do.</span>
      </h1>

      <p className="opacity-0-start animate-fade-in-up delay-200" style={{
        marginTop: '2rem', fontFamily: 'IBM Plex Mono, monospace',
        fontSize: 'clamp(0.68rem, 1.2vw, 0.8rem)',
        color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em', lineHeight: 2.1,
        maxWidth: '460px', margin: '2rem auto 0',
      }}>
        Flaxie is an accountability partner that lives in your menu bar.
        <br />
        It doesn't do your work. It won't let you forget you said you would.
      </p>

      <div className="opacity-0-start animate-fade-in-up delay-300" style={{
        marginTop: '2.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap',
      }}>
        <a className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '0.9rem' }}
          href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">
          Request Early Access
        </a>
        <button className="btn" style={{
          background: 'transparent', border: '1px solid rgba(255,255,255,0.16)',
          color: 'rgba(255,255,255,0.45)', padding: '0.75rem 2rem', fontSize: '0.9rem', transition: 'border-color 0.15s, color 0.15s',
        }}
          data-cal-link="joinflax/strategy-call"
          data-cal-namespace="strategy-call"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.4)'; el.style.color = 'rgba(255,255,255,0.8)' }}
          onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.16)'; el.style.color = 'rgba(255,255,255,0.45)' }}
        >Book a demo</button>
      </div>

      <div className="opacity-0-start animate-fade-in delay-600" style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>Supported by</span>
        <img src="/Antler_logo.svg" alt="Antler" style={{ height: '20px', opacity: 0.2, filter: 'brightness(0) invert(1)', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.2')}
        />
      </div>
    </div>
  </section>
)

// ── The moment (recognition scene) ───────────────────────────────────────────

const NudgeCard: React.FC<{ time: string; message: string; task: string }> = ({ time, message, task }) => (
  <div style={{
    background: '#fff', border: '1px solid hsl(0,0%,82%)', borderRadius: '12px',
    padding: '0', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    maxWidth: '320px', width: '100%',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px 10px', borderBottom: '1px solid hsl(0,0%,90%)' }}>
      <div style={{ width: '26px', height: '26px', borderRadius: '7px', background: 'linear-gradient(135deg, #5A53E1, #7B74F0)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px' }}>✦</div>
      <div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: 'hsl(0,0%,10%)', lineHeight: 1.2 }}>Flaxie</div>
      </div>
      <div style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', color: 'hsl(0,0%,60%)', letterSpacing: '0.02em' }}>{time}</div>
    </div>
    <div style={{ padding: '12px 16px 10px' }}>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'hsl(0,0%,20%)', lineHeight: 1.6, margin: 0 }}>{message}</p>
    </div>
    <div style={{ padding: '0 16px 10px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'hsl(240,60%,96%)', border: '1px solid rgba(90,83,225,0.2)', borderRadius: '6px', padding: '5px 10px' }}>
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#5A53E1', flexShrink: 0 }} />
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: '#5A53E1' }}>{task}</span>
      </div>
    </div>
    <div style={{ display: 'flex', gap: '8px', padding: '6px 16px 14px' }}>
      <button style={{ flex: 1, padding: '7px 0', borderRadius: '7px', background: '#5A53E1', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#fff' }}>On it →</button>
      <button style={{ flex: 1, padding: '7px 0', borderRadius: '7px', background: 'transparent', border: '1px solid hsl(0,0%,85%)', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'hsl(0,0%,50%)' }}>Need more time</button>
    </div>
  </div>
)

const RecognitionSection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '7rem 1.5rem', borderTop: '1px solid hsl(0,0%,82%)' }}>
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>

      {/* Opening line — big and honest */}
      <Reveal>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(2rem, 5vw, 4.25rem)',
          lineHeight: 1.08, letterSpacing: '-0.03em', color: 'hsl(0,0%,10%)',
          maxWidth: '680px',
        }}>
          You had a plan at 9am.
          <br />
          <span style={{ color: 'hsl(0,0%,65%)' }}>The day had other ideas.</span>
        </h2>
      </Reveal>

      <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }} className="lg:grid-cols-2">

        {/* Story */}
        <Reveal delay={60}>
          <div>
            <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', color: 'hsl(0,0%,28%)', lineHeight: 2.1, letterSpacing: '0.01em' }}>
              You added it to your list. You fully intended to do it. Then a meeting ran long, someone needed something, the day shuffled itself around — and by 5pm, that task is still sitting there. Not because you're unambitious. Because nothing nudged you when you still had the chance.
            </p>
            <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', color: 'hsl(0,0%,28%)', lineHeight: 2.1, letterSpacing: '0.01em', marginTop: '1.5rem' }}>
              That's the only thing Flaxie does. It watches. It notices when something's been sitting too long. And it asks — once, at the right moment — "still happening?"
            </p>
          </div>
        </Reveal>

        {/* Nudge card as proof */}
        <Reveal delay={120}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <NudgeCard
              time="4:18pm"
              message="You added 'follow up with investor' this morning. Haven't seen it come up since. Still on for today?"
              task="Follow up with investor"
            />
          </div>
        </Reveal>
      </div>

    </div>
  </section>
)

// ── The day (how it actually works in practice) ───────────────────────────────

type DayMoment = { label: string; text: string; dim?: boolean }

const dayMoments: DayMoment[] = [
  { label: 'Morning', text: 'You add what you\'re working on. Could be one thing. Could be ten. Just a title is enough.' },
  { label: 'During the day', text: 'Flaxie stays out of the way. It\'s watching context — your calendar, what you\'ve said, how long tasks have been quiet.', dim: true },
  { label: 'When it matters', text: 'A task has been sitting untouched for hours. A deadline is two hours out. Flaxie sends one message. Just one.' },
  { label: 'End of day', text: 'A short reflection surfaces in your chat. What moved. What didn\'t. What to carry into tomorrow. Not a report — a thought partner checking in.' },
]

const DaySection: React.FC = () => (
  <section style={{ background: 'hsl(0,0%,10%)', padding: '7rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="dot-grid">
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <Reveal>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)' }}>
          A typical day with Flaxie
        </span>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          lineHeight: 1.1, letterSpacing: '-0.025em', color: '#fff',
          marginTop: '1.25rem', marginBottom: '4rem',
        }}>
          Quiet when you're in flow.
          <br />
          <span style={{ color: '#5A53E1' }}>There when it counts.</span>
        </h2>
      </Reveal>

      <div>
        {dayMoments.map((m, i) => (
          <Reveal key={i} delay={i * 70}>
            <div style={{
              display: 'grid', gridTemplateColumns: '140px 1fr', gap: '2rem',
              padding: '2rem 0',
              borderTop: i === 0 ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.06)',
              opacity: m.dim ? 0.5 : 1,
            }}>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.08em', color: m.dim ? 'rgba(255,255,255,0.25)' : '#5A53E1', paddingTop: '3px', textTransform: 'uppercase' }}>{m.label}</span>
              <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem', color: m.dim ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.7)', lineHeight: 1.85, margin: 0 }}>{m.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* After a few weeks */}
      <Reveal delay={360}>
        <div style={{
          marginTop: '4rem', padding: '2rem 2.5rem',
          background: 'rgba(90,83,225,0.08)', border: '1px solid rgba(90,83,225,0.2)', borderRadius: '12px',
        }}>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, margin: 0 }}>
            After a few weeks, Flaxie starts to know you. It notices you always procrastinate on email follow-ups. That you finish deep work around 11am. That Monday mornings run long. The nudges get better. The timing gets tighter. The longer you use it, the less you drop.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
)

// ── The honest section (who this is really for) ───────────────────────────────

const HonestSection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '7rem 1.5rem', borderTop: '1px solid hsl(0,0%,82%)' }}>
    <div style={{ maxWidth: '680px', margin: '0 auto' }}>

      <Reveal>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(1.9rem, 4.5vw, 3.5rem)',
          lineHeight: 1.1, letterSpacing: '-0.025em', color: 'hsl(0,0%,10%)', marginBottom: '2.5rem',
        }}>
          This isn't for people<br />
          who want AI to take over.
        </h2>
      </Reveal>

      <Reveal delay={60}>
        <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', color: 'hsl(0,0%,32%)', lineHeight: 2.1, letterSpacing: '0.01em' }}>
          Flaxie won't write your emails, book your meetings, or hand things off to anyone. It doesn't act on anything without you. It's for people who trust themselves to do the work — they just need something in their corner, watching, nudging, reflecting.
        </p>
        <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem', color: 'hsl(0,0%,32%)', lineHeight: 2.1, letterSpacing: '0.01em', marginTop: '1.5rem' }}>
          Founders running their own sprints. Builders who lose the thread between deep work sessions. Anyone whose to-do list is longer than their day, and whose only gap is accountability.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '2px solid hsl(0,0%,10%)' }}>
          <p className="font-serif font-black" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)', lineHeight: 1.35, letterSpacing: '-0.02em', color: 'hsl(0,0%,10%)', fontStyle: 'italic' }}>
            "I don't want the agent to do the work for me. I just need someone to keep nudging me until it's done."
          </p>
          <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'hsl(0,0%,55%)', letterSpacing: '0.06em', marginTop: '1rem' }}>
            — actual feedback from early users. that's what we're building.
          </p>
        </div>
      </Reveal>

    </div>
  </section>
)

// ── CTA ───────────────────────────────────────────────────────────────────────

const AssistantCTASection: React.FC = () => (
  <section style={{
    minHeight: '60vh', background: 'hsl(0,0%,10%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', padding: '6rem 1.5rem',
  }} className="dot-grid">
    <div style={{
      position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
      width: '600px', height: '600px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.15) 0%, transparent 65%)',
      pointerEvents: 'none',
    }} />
    <div style={{ maxWidth: '560px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <Reveal>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
          lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff', marginBottom: '1.5rem',
        }}>
          One week.
          <br />
          <span style={{ color: '#5A53E1' }}>You'll stop forgetting.</span>
        </h2>
        <p style={{
          fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em', lineHeight: 2,
          marginBottom: '2.5rem',
        }}>
          Install Flaxie. Add your first task.
          <br />
          See what it feels like to have someone watching your back.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <a className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.8rem 2.25rem' }}
            href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">
            Request Early Access
          </a>
          <button className="btn" style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.14)',
            color: 'rgba(255,255,255,0.4)', padding: '0.8rem 2.25rem', fontSize: '0.9rem', transition: 'border-color 0.15s, color 0.15s',
          }}
            data-cal-link="joinflax/strategy-call"
            data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.35)'; el.style.color = 'rgba(255,255,255,0.8)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.14)'; el.style.color = 'rgba(255,255,255,0.4)' }}
          >Book a demo</button>
        </div>
      </Reveal>
    </div>
  </section>
)

// ── Footer ────────────────────────────────────────────────────────────────────

const AssistantFooter: React.FC = () => (
  <footer style={{ background: 'hsl(42,24%,95%)', borderTop: '1px solid hsl(0,0%,82%)' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1.75rem 1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '1rem', color: 'hsl(0,0%,10%)' }}>Flax</span>
        <span style={{ color: 'hsl(0,0%,75%)' }}>·</span>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'hsl(0,0%,55%)' }}>Assistant</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <a href="/" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'hsl(0,0%,55%)', textDecoration: 'none' }}>Main site</a>
        <a href="mailto:contact@joinflax.com" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'hsl(0,0%,55%)', textDecoration: 'none' }}>contact@joinflax.com</a>
        <a href="/privacy" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'hsl(0,0%,55%)', textDecoration: 'none' }}>Privacy</a>
      </div>
      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,68%)' }}>© 2026 Flax</span>
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
        <RecognitionSection />
        <DaySection />
        <HonestSection />
        <AssistantCTASection />
      </main>
      <AssistantFooter />
    </div>
  )
}

export default AssistantApp
