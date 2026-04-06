import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

// ── Reveal (inline, no router dep) ───────────────────────────────────────────

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(18px)',
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

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: "Who it's for", href: '#who' },
    { label: 'Main site',    href: '/' },
  ]

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '14px 20px', zIndex: 50, pointerEvents: 'none' }}>
        <nav style={{
          maxWidth: '1060px',
          margin: '0 auto',
          height: '52px',
          borderRadius: '100px',
          background: scrolled ? 'rgba(248,246,242,0.96)' : 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.14)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.5rem',
          pointerEvents: 'auto',
          transition: 'background 0.3s ease, border-color 0.3s ease',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : '0 0 0 1px rgba(255,255,255,0.06) inset',
        }}>
          {/* Logo */}
          <div style={{ flex: 1 }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img src="/logo.svg" alt="Flax" style={{ height: '26px', width: 'auto', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'Merriweather, Georgia, serif',
                fontWeight: 900,
                fontSize: '1.15rem',
                letterSpacing: '-0.02em',
                color: onDark ? '#fff' : 'hsl(0,0%,10%)',
                transition: 'color 0.3s ease',
                userSelect: 'none',
              }}>Flax</span>
              <span style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                color: onDark ? 'rgba(255,255,255,0.35)' : 'hsl(0,0%,55%)',
                transition: 'color 0.3s ease',
              }}>/assistant</span>
            </a>
          </div>

          {/* Desktop links */}
          <div style={{ alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                color: onDark ? 'rgba(255,255,255,0.55)' : 'hsl(0,0%,42%)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = onDark ? '#fff' : 'hsl(0,0%,10%)')}
                onMouseLeave={e => (e.currentTarget.style.color = onDark ? 'rgba(255,255,255,0.55)' : 'hsl(0,0%,42%)')}
              >{l.label}</a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div style={{ flex: 1, alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }} className="hidden md:flex">
            <button className="btn btn-sm" style={{
              background: 'transparent',
              border: onDark ? '1px solid rgba(255,255,255,0.2)' : '1px solid hsl(0,0%,80%)',
              color: onDark ? 'rgba(255,255,255,0.6)' : 'hsl(0,0%,40%)',
              transition: 'all 0.2s ease',
              borderRadius: '100px',
            }}
              data-cal-link="joinflax/strategy-call"
              data-cal-namespace="strategy-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >Book a demo</button>
            <a className="btn btn-primary btn-sm" style={{ borderRadius: '100px' }}
              href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer"
            >Get Early Access</a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden ml-auto" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: onDark ? '#fff' : 'hsl(0,0%,10%)', transition: 'color 0.3s ease',
          }} onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'hsl(0,0%,10%)', paddingTop: '80px', display: 'flex', flexDirection: 'column' }} className="md:hidden">
          <div style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem 1.5rem', gap: '1.75rem' }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                fontFamily: 'Merriweather, serif', fontSize: '1.25rem', fontWeight: 700,
                color: '#fff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem',
              }} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            >Get Early Access</a>
          </div>
        </div>
      )}
    </>
  )
}

// ── Notification mockup (hero visual) ────────────────────────────────────────

const NudgeMockup: React.FC = () => (
  <div style={{
    width: '320px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '14px',
    padding: '0',
    overflow: 'hidden',
    boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06) inset',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  }}>
    {/* Header */}
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      padding: '14px 16px 12px',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{
        width: '28px', height: '28px', borderRadius: '8px',
        background: 'linear-gradient(135deg, #5A53E1, #7B74F0)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <span style={{ fontSize: '14px' }}>✦</span>
      </div>
      <div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
          Flaxie
        </div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
          now
        </div>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#5A53E1', boxShadow: '0 0 8px rgba(90,83,225,0.8)', animation: 'glow-pulse 2s ease-in-out infinite' }} />
      </div>
    </div>

    {/* Message */}
    <div style={{ padding: '14px 16px 12px' }}>
      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.85)',
        lineHeight: 1.55, margin: 0,
      }}>
        You set a goal to ship the landing page draft by 3pm. It's 2:40 now — 20 minutes left.
      </p>
    </div>

    {/* Task chip */}
    <div style={{ padding: '0 16px 12px' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: 'rgba(90,83,225,0.15)', border: '1px solid rgba(90,83,225,0.3)',
        borderRadius: '6px', padding: '6px 12px',
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5A53E1' }} />
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.02em' }}>
          Landing page draft
        </span>
      </div>
    </div>

    {/* Actions */}
    <div style={{
      display: 'flex', gap: '8px', padding: '8px 16px 14px',
    }}>
      <button style={{
        flex: 1, padding: '8px 0', borderRadius: '8px',
        background: '#5A53E1', border: 'none', cursor: 'pointer',
        fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#fff',
      }}>On it →</button>
      <button style={{
        flex: 1, padding: '8px 0', borderRadius: '8px',
        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
        fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)',
      }}>Need more time</button>
    </div>
  </div>
)

// ── Hero ──────────────────────────────────────────────────────────────────────

const AssistantHero: React.FC = () => (
  <section className="dot-grid" style={{
    minHeight: '100vh',
    backgroundColor: 'hsl(0,0%,10%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '80px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Glow orbs */}
    <div className="glow-drift" style={{
      position: 'absolute', top: '-5%', left: '50%', transform: 'translateX(-50%)',
      width: '1000px', height: '1000px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.2) 0%, rgba(90,83,225,0.05) 45%, transparent 68%)',
      pointerEvents: 'none', zIndex: 0,
    }} />
    <div style={{
      position: 'absolute', top: '40%', right: '-5%', width: '450px', height: '450px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.07) 0%, transparent 65%)',
      pointerEvents: 'none', zIndex: 0, animation: 'glow-drift 16s ease-in-out infinite reverse',
    }} />

    {/* Accent lines */}
    {([
      { top: '20%', left: '6%',   width: 64,  opacity: 0.08 },
      { top: '42%', right: '8%',  width: 48,  opacity: 0.06 },
      { top: '65%', left: '3%',   width: 80,  opacity: 0.05 },
    ] as Array<{top:string;left?:string;right?:string;width:number;opacity:number}>).map((l, i) => (
      <div key={i} style={{
        position: 'absolute', top: l.top, left: l.left, right: l.right,
        width: l.width, height: '1px',
        background: `rgba(255,255,255,${l.opacity})`,
        pointerEvents: 'none', zIndex: 0,
      }} />
    ))}

    {/* Content — two-column on large screens */}
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '1100px',
      padding: '4rem 2rem 3rem',
      position: 'relative',
      zIndex: 1,
      gap: '5rem',
    }} className="flex-col lg:flex-row">

      {/* Left: copy */}
      <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }} className="text-center lg:text-left">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-8 opacity-0-start animate-fade-in">
          <div className="w-1.5 h-1.5 rounded-full bg-flax animate-pulse" />
          <span style={{
            fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem',
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
          }}>Desktop App · macOS</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif font-black opacity-0-start animate-fade-in-up delay-100" style={{
          fontSize: 'clamp(2.2rem, 5.5vw, 4.75rem)',
          lineHeight: 1.06, letterSpacing: '-0.03em', color: '#fff',
        }}>
          You said you'd do it.
          <br />
          <span style={{ color: '#5A53E1' }}>Flaxie won't let you forget.</span>
        </h1>

        {/* Sub */}
        <p className="opacity-0-start animate-fade-in-up delay-200" style={{
          marginTop: '1.75rem',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 'clamp(0.68rem, 1.2vw, 0.82rem)',
          color: 'rgba(255,255,255,0.38)',
          letterSpacing: '0.02em', lineHeight: 2,
          maxWidth: '420px',
        }}>
          Not here to do your work.
          <br />
          Just here to make sure you actually do it.
          <br />
          Smart nudges. Daily reflections. Always in your corner.
        </p>

        {/* CTAs */}
        <div className="opacity-0-start animate-fade-in-up delay-300" style={{
          marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
        }}>
          <a className="btn btn-primary" href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">
            Request Early Access
          </a>
          <button className="btn" style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.18)',
            color: 'rgba(255,255,255,0.5)', padding: '0.65rem 1.5rem', fontSize: '0.875rem',
            transition: 'border-color 0.15s, color 0.15s',
          }}
            data-cal-link="joinflax/strategy-call"
            data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.4)'; el.style.color = 'rgba(255,255,255,0.85)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.18)'; el.style.color = 'rgba(255,255,255,0.5)' }}
          >Book a demo</button>
        </div>

        {/* Social proof line */}
        <p className="opacity-0-start animate-fade-in delay-500" style={{
          marginTop: '2rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem',
          color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em',
        }}>
          Backed by Antler · Built for people who get things done
        </p>
      </div>

      {/* Right: notification mockup */}
      <div className="opacity-0-start animate-fade-in-up delay-400" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <NudgeMockup />
      </div>
    </div>

    {/* Antler badge */}
    <div className="opacity-0-start animate-fade-in delay-600" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
      paddingBottom: '3rem', position: 'relative', zIndex: 1,
    }}>
      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)' }}>
        Supported by
      </span>
      <img src="/Antler_logo.svg" alt="Antler" style={{
        height: '20px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.22,
        transition: 'opacity 0.2s ease',
      }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '0.22')}
      />
    </div>
  </section>
)

// ── How It Works ──────────────────────────────────────────────────────────────

const steps = [
  {
    n: '01',
    title: 'Add your tasks',
    body: 'Just tell Flaxie what you\'re working on. A title is enough. No templates, no long forms — Flaxie figures out the rest from context.',
  },
  {
    n: '02',
    title: 'Get on with your work',
    body: 'Flaxie lives quietly in your menu bar. It watches your calendar, learns your patterns, and builds context around every task you add.',
  },
  {
    n: '03',
    title: 'Get nudged when it matters',
    body: 'When a deadline is creeping up or a task has been sitting too long, Flaxie taps you on the shoulder. Context-aware, not generic. Easy to act on.',
  },
]

const HowItWorksSection: React.FC = () => (
  <section
    id="how-it-works"
    style={{ background: 'hsl(42,24%,95%)', padding: '6rem 1.5rem', borderTop: '1px solid hsl(0,0%,82%)' }}
  >
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      <Reveal>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(0,0%,42%)' }}>
          How it works
        </span>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(1.9rem, 4vw, 3.25rem)',
          lineHeight: 1.1, letterSpacing: '-0.025em',
          color: 'hsl(0,0%,10%)', marginTop: '1.25rem', marginBottom: '3.5rem',
        }}>
          Three steps to actually
          <br />
          <span style={{ color: '#5A53E1' }}>finishing what you start.</span>
        </h2>
      </Reveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{
              display: 'grid', gridTemplateColumns: '72px 1fr',
              gap: '0 2rem', padding: '2rem 0',
              borderTop: i === 0 ? '2px solid hsl(0,0%,10%)' : '1px solid hsl(0,0%,82%)',
              alignItems: 'start',
            }}>
              {/* Number */}
              <span style={{
                fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem',
                letterSpacing: '0.08em', color: '#5A53E1', paddingTop: '4px',
              }}>{s.n}</span>

              {/* Content */}
              <div>
                <h3 className="font-serif font-bold" style={{ fontSize: '1.15rem', color: 'hsl(0,0%,10%)', marginBottom: '0.6rem', lineHeight: 1.25 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.72rem', color: 'hsl(0,0%,42%)', lineHeight: 1.8, letterSpacing: '0.01em', maxWidth: '520px' }}>
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

// ── Features ──────────────────────────────────────────────────────────────────

const features = [
  {
    title: 'Smart nudges',
    body: 'Not every hour on the hour. Flaxie knows what you\'re working on, when deadlines are approaching, and how long a task has been sitting idle. It nudges when there\'s a real reason to.',
    icon: '◎',
  },
  {
    title: 'Daily reflections',
    body: 'Every evening, Flaxie surfaces a brief — what you shipped, what slipped, and what to carry into tomorrow. Not a report. A thought partner checking in.',
    icon: '◑',
  },
  {
    title: 'Memory that learns',
    body: 'Flaxie builds a picture of how you work over time. Your patterns, your habits, your typical blockers. The longer you use it, the better the timing gets.',
    icon: '◐',
  },
  {
    title: 'Always there, never in the way',
    body: 'A single icon in your menu bar. Click to check in or chat. Hit Ctrl+Shift+F from anywhere. When you don\'t need it, it\'s invisible. When you do, it\'s there.',
    icon: '◉',
  },
]

const FeaturesSection: React.FC = () => (
  <section className="dot-grid" style={{
    background: 'hsl(0,0%,10%)', padding: '6rem 1.5rem',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Glow */}
    <div style={{
      position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
      width: '700px', height: '700px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(90,83,225,0.12) 0%, transparent 65%)',
      pointerEvents: 'none', zIndex: 0,
    }} />

    <div style={{ maxWidth: '920px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <Reveal>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
          What Flaxie does
        </span>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(1.9rem, 4vw, 3.25rem)',
          lineHeight: 1.1, letterSpacing: '-0.025em',
          color: '#fff', marginTop: '1.25rem', marginBottom: '3.5rem',
        }}>
          Accountability that fits
          <br />
          <span style={{ color: '#5A53E1' }}>how you actually work.</span>
        </h2>
      </Reveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
        gap: '1px',
        background: 'rgba(255,255,255,0.07)',
      }}>
        {features.map((f, i) => (
          <Reveal key={i} delay={i * 60}>
            <div style={{
              background: 'hsl(0,0%,10%)', padding: '2.5rem 2rem',
              transition: 'background 0.2s ease',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'hsl(0,0%,13%)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'hsl(0,0%,10%)')}
            >
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'rgba(90,83,225,0.15)', border: '1px solid rgba(90,83,225,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem', fontSize: '16px', color: '#5A53E1',
              }}>{f.icon}</div>

              <h3 className="font-serif font-bold" style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.85, letterSpacing: '0.01em' }}>
                {f.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

// ── Who It's For ──────────────────────────────────────────────────────────────

type RolePillProps = { label: string }
const RolePill: React.FC<RolePillProps> = ({ label }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'IBM Plex Mono, monospace', fontWeight: 500, fontSize: '0.8rem',
        color: hovered ? '#fff' : 'hsl(0,0%,20%)',
        background: hovered ? '#5A53E1' : '#fff',
        border: `1px solid ${hovered ? '#5A53E1' : 'hsl(0,0%,80%)'}`,
        padding: '10px 20px', borderRadius: '100px', letterSpacing: '0.01em',
        cursor: 'default', transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 6px 20px rgba(90,83,225,0.25)' : 'none',
      }}
    >{label}</span>
  )
}

const WhoSection: React.FC = () => (
  <section id="who" style={{
    background: 'hsl(42,24%,95%)',
    padding: '6rem 1.5rem',
    borderTop: '1px solid hsl(0,0%,82%)',
    borderBottom: '1px solid hsl(0,0%,82%)',
  }}>
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <Reveal>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(1.9rem, 4.5vw, 3.5rem)',
          lineHeight: 1.1, letterSpacing: '-0.025em', color: 'hsl(0,0%,10%)', marginBottom: '0.5rem',
        }}>
          If you have the drive
        </h2>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(1.9rem, 4.5vw, 3.5rem)',
          lineHeight: 1.1, letterSpacing: '-0.025em', color: '#5A53E1', marginBottom: '1.5rem',
        }}>
          but not the reminders,
        </h2>
        <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem', color: 'hsl(0,0%,48%)', letterSpacing: '0.02em', marginBottom: '3rem' }}>
          Flaxie is your accountability layer. Not an AI that does things for you. One that makes sure you do.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {['Solo founders', 'Product managers', 'Independent builders'].map(r => <RolePill key={r} label={r} />)}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {['Consultants', 'Operators', 'Anyone with too much to track'].map(r => (
              r === 'Anyone with too much to track' ? (
                <span key={r} style={{
                  fontFamily: 'IBM Plex Mono, monospace', fontWeight: 500, fontSize: '0.8rem',
                  color: 'hsl(0,0%,55%)', border: '1.5px dashed hsl(0,0%,75%)', background: 'transparent',
                  padding: '10px 20px', borderRadius: '100px', letterSpacing: '0.01em',
                }}>{r}</span>
              ) : <RolePill key={r} label={r} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={180}>
        <p style={{ marginTop: '3.5rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'hsl(0,0%,55%)', letterSpacing: '0.01em' }}>
          If you're reading this and thinking of someone, they're who this is for.
        </p>
      </Reveal>
    </div>
  </section>
)

// ── Trust ─────────────────────────────────────────────────────────────────────

const trustPillars = [
  {
    headline: 'Runs on your machine.',
    body: 'Flaxie is a Mac desktop app. Your tasks and patterns stay local by default. Nothing leaves unless you ask.',
  },
  {
    headline: 'No third-party training.',
    body: 'Your data is never used to train external models. What you share with Flaxie stays with Flaxie.',
  },
  {
    headline: 'You control what it knows.',
    body: 'View and delete anything Flaxie has learned about you at any time. One command to reset.',
  },
  {
    headline: 'Easy to leave.',
    body: 'No subscription lock-in. No data ransom. Quit the app and everything stays on your machine.',
  },
]

const AssistantTrustSection: React.FC = () => (
  <section style={{ background: 'hsl(42,24%,95%)', padding: '5rem 1.5rem', borderTop: '1px solid hsl(0,0%,82%)' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Reveal>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'hsl(0,0%,42%)' }}>
          Privacy and trust
        </span>
      </Reveal>

      <Reveal delay={60}>
        <div style={{
          marginTop: '2rem',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1px', background: 'hsl(0,0%,82%)',
        }}>
          {trustPillars.map((p, i) => (
            <div key={i} style={{ background: 'hsl(42,24%,95%)', padding: '1.75rem 1.5rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5A53E1', marginBottom: '1rem' }} />
              <h3 className="font-serif font-bold" style={{ fontSize: '0.9rem', color: 'hsl(0,0%,10%)', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                {p.headline}
              </h3>
              <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'hsl(0,0%,42%)', lineHeight: 1.65 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)

// ── CTA ───────────────────────────────────────────────────────────────────────

const AssistantCTASection: React.FC = () => (
  <section style={{
    minHeight: '65vh', background: 'hsl(0,0%,10%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', padding: '6rem 1.5rem',
  }}>
    <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto' }}>
      <Reveal>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', display: 'block', marginBottom: '2rem' }}>
          Early Access · Mac
        </span>
        <h2 className="font-serif font-black" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
          lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff', marginBottom: '1.5rem',
        }}>
          Stop dropping the ball.
          <br />
          <span style={{ color: '#5A53E1' }}>Start finishing things.</span>
        </h2>
        <p style={{
          fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.32)', letterSpacing: '0.02em', lineHeight: 2, marginBottom: '2.5rem',
        }}>
          Install Flaxie. Add your first task.
          <br />
          See how different it feels to have someone watching your back.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '2rem' }}>
          <a className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.8rem 2rem' }}
            href="https://app.joinflax.com/" target="_blank" rel="noopener noreferrer">
            Request Early Access
          </a>
          <button className="btn" style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.45)', padding: '0.8rem 2rem', fontSize: '0.875rem', transition: 'border-color 0.15s, color 0.15s',
          }}
            data-cal-link="joinflax/strategy-call"
            data-cal-namespace="strategy-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.35)'; el.style.color = 'rgba(255,255,255,0.8)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(255,255,255,0.15)'; el.style.color = 'rgba(255,255,255,0.45)' }}
          >Book a 30-min demo</button>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          {['Free to try', 'Mac app', 'No credit card'].map(t => (
            <span key={t} style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.2)' }}>
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)

// ── Footer ────────────────────────────────────────────────────────────────────

const AssistantFooter: React.FC = () => (
  <footer style={{ background: 'hsl(42,24%,95%)', borderTop: '1px solid hsl(0,0%,82%)' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 900, fontSize: '1.1rem', color: 'hsl(0,0%,10%)' }}>Flax</span>
          <span style={{ color: 'hsl(0,0%,82%)' }}>·</span>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'hsl(0,0%,55%)' }}>Assistant</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="/" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'hsl(0,0%,55%)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'hsl(0,0%,10%)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'hsl(0,0%,55%)')}
          >Main site →</a>
          <a href="mailto:contact@joinflax.com" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.68rem', color: 'hsl(0,0%,55%)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'hsl(0,0%,10%)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'hsl(0,0%,55%)')}
          >contact@joinflax.com</a>
        </div>
      </div>
      <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid hsl(0,0%,82%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,65%)' }}>© 2026 Flax. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a href="/privacy" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,65%)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/terms" style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', color: 'hsl(0,0%,65%)', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
)

// ── Main ──────────────────────────────────────────────────────────────────────

function AssistantApp() {
  // Cal.com embed init
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = (a: any, ar: any) => a.q.push(ar);
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true; }
        if (ar[0] === L) { const api: any = function () { p(api, arguments); }; const ns = ar[1]; api.q = api.q || []; if (typeof ns === 'string') { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ['initNamespace', ns]); } else p(cal, ar); return; } p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');
    const w = window as any;
    w.Cal('init', 'strategy-call', { origin: 'https://app.cal.com' });
    w.Cal.ns['strategy-call']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
  }, [])

  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <AssistantNavbar />
      <main>
        <AssistantHero />
        <HowItWorksSection />
        <FeaturesSection />
        <WhoSection />
        <AssistantTrustSection />
        <AssistantCTASection />
      </main>
      <AssistantFooter />
    </div>
  )
}

export default AssistantApp
