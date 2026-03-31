import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // On dark hero until scrolled past it — use white text
  const onDark = !scrolled;

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: "Who it's for", href: '#who' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(245,241,233,0.96)' : 'transparent',
          borderBottom: scrolled ? '1px solid hsl(0,0%,82%)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <div style={{ flex: 1 }}>
            <a
              href="/"
              style={{
                fontFamily: 'Merriweather, Georgia, serif',
                fontWeight: 900,
                fontSize: '1.2rem',
                letterSpacing: '-0.02em',
                color: onDark ? '#fff' : 'hsl(0,0%,10%)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                userSelect: 'none',
              }}
            >
              Flax
            </a>
          </div>

          {/* Nav links — desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: onDark ? 'rgba(255,255,255,0.55)' : 'hsl(0,0%,42%)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = onDark ? '#fff' : 'hsl(0,0%,10%)')}
                onMouseLeave={e => (e.currentTarget.style.color = onDark ? 'rgba(255,255,255,0.55)' : 'hsl(0,0%,42%)')}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTAs — desktop */}
          <div
            style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}
            className="hidden md:flex"
          >
            <button
              className="btn btn-sm"
              style={{
                background: 'transparent',
                border: onDark ? '1px solid rgba(255,255,255,0.2)' : '1px solid hsl(0,0%,80%)',
                color: onDark ? 'rgba(255,255,255,0.6)' : 'hsl(0,0%,40%)',
                transition: 'all 0.2s ease',
              }}
              data-cal-link="joinflax/strategy-call"
              data-cal-namespace="strategy-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Book a demo
            </button>
            <button
              className="btn btn-primary btn-sm"
              data-tally-open="GxLXyQ"
              data-tally-layout="modal"
              data-tally-width="400"
              data-tally-form-events-forwarding="1"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-auto"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: onDark ? '#fff' : 'hsl(0,0%,10%)',
              transition: 'color 0.3s ease',
            }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: 'hsl(42,24%,95%)',
            paddingTop: '56px',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="md:hidden"
        >
          <div style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem 1.5rem', gap: '1.75rem' }}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: 'Merriweather, serif',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'hsl(0,0%,10%)',
                  textDecoration: 'none',
                  borderBottom: '1px solid hsl(0,0%,82%)',
                  paddingBottom: '1.5rem',
                }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              data-tally-open="GxLXyQ"
              data-tally-layout="modal"
              data-tally-width="400"
              data-tally-form-events-forwarding="1"
              onClick={() => setOpen(false)}
            >
              Get Early Access
            </button>
            <button
              className="btn btn-ghost"
              style={{ alignSelf: 'flex-start' }}
              data-cal-link="joinflax/strategy-call"
              data-cal-namespace="strategy-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              onClick={() => setOpen(false)}
            >
              Book a demo
            </button>
          </div>
        </div>
      )}
    </>
  );
};
