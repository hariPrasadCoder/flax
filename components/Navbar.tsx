import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC<{ forceLight?: boolean }> = ({ forceLight = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const onDark = !forceLight && !scrolled;

  const links = [
    { label: 'How it works', href: '/#how-it-works' },
    { label: "Who it's for", href: '/#who' },
    { label: 'Compare', href: '/compare', isRoute: true },
    { label: 'Privacy Policy', href: '/privacy', isRoute: true },
  ];

  return (
    <>
      {/* Floating pill wrapper — pointer-events none so gaps don't block scroll */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '14px 20px',
          zIndex: 50,
          pointerEvents: 'none',
        }}
      >
        <nav
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            height: '52px',
            borderRadius: '100px',
            background: scrolled
              ? 'rgba(248,246,242,0.96)'
              : 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: scrolled
              ? '1px solid rgba(0,0,0,0.08)'
              : '1px solid rgba(255,255,255,0.14)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 1.5rem',
            pointerEvents: 'auto',
            transition: 'background 0.3s ease, border-color 0.3s ease',
            boxShadow: scrolled
              ? '0 4px 24px rgba(0,0,0,0.08)'
              : '0 0 0 1px rgba(255,255,255,0.06) inset',
          }}
        >
          {/* Logo */}
          <div style={{ flex: 1 }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img
                src="/logo.svg"
                alt="Flax"
                style={{ height: '26px', width: 'auto', display: 'block', flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: 'Merriweather, Georgia, serif',
                  fontWeight: 900,
                  fontSize: '1.15rem',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  color: onDark ? '#fff' : 'hsl(0,0%,10%)',
                  transition: 'color 0.3s ease',
                  userSelect: 'none',
                }}
              >
                Flax
              </span>
            </a>
          </div>

          {/* Nav links — desktop only. No display:flex in inline style — relies on className to stay hidden on mobile */}
          <div style={{ alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {links.map(l => {
              const linkStyle = {
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                color: onDark ? 'rgba(255,255,255,0.55)' : 'hsl(0,0%,42%)',
                textDecoration: 'none' as const,
                transition: 'color 0.2s ease',
              };
              const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = onDark ? '#fff' : 'hsl(0,0%,10%)');
              const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = onDark ? 'rgba(255,255,255,0.55)' : 'hsl(0,0%,42%)');
              return l.isRoute ? (
                <Link key={l.label} to={l.href} style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href} style={linkStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* CTAs — desktop only */}
          <div
            style={{ flex: 1, alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}
            className="hidden md:flex"
          >
            <button
              className="btn btn-sm"
              style={{
                background: 'transparent',
                border: onDark ? '1px solid rgba(255,255,255,0.2)' : '1px solid hsl(0,0%,80%)',
                color: onDark ? 'rgba(255,255,255,0.6)' : 'hsl(0,0%,40%)',
                transition: 'all 0.2s ease',
                borderRadius: '100px',
              }}
              data-cal-link="joinflax/strategy-call"
              data-cal-namespace="strategy-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              Book a demo
            </button>
            <a
              className="btn btn-primary btn-sm"
              style={{ borderRadius: '100px' }}
              href="https://app.joinflax.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Early Access
            </a>
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
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            background: 'hsl(0,0%,10%)',
            paddingTop: '80px',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="md:hidden"
        >
          <div style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem 1.5rem', gap: '1.75rem' }}>
            {links.map(l => {
              const mobileStyle = {
                fontFamily: 'Merriweather, serif',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none' as const,
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '1.5rem',
              };
              return l.isRoute ? (
                <Link key={l.label} to={l.href} style={mobileStyle} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href} style={mobileStyle} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              );
            })}
            <a
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              href="https://app.joinflax.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Get Early Access
            </a>
            <button
              className="btn btn-ghost"
              style={{ alignSelf: 'flex-start', borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
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
