import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Who it\'s for', href: '#who' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-paper/95 backdrop-blur-sm border-b border-rule' : 'bg-transparent'}
      `}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center">

          <div className="flex-1">
            <a href="/" className="font-serif font-black text-ink text-xl tracking-tight select-none">
              Flax
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex-1 hidden md:flex items-center gap-2 justify-end">
            <button className="btn btn-ghost btn-sm"
              data-cal-link="joinflax/strategy-call"
              data-cal-namespace="strategy-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>
              Book a demo
            </button>
            <button className="btn btn-primary btn-sm"
              data-tally-open="GxLXyQ" data-tally-layout="modal" data-tally-width="400" data-tally-form-events-forwarding="1">
              Get Early Access
            </button>
          </div>

          <button className="md:hidden text-ink ml-auto" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-paper pt-14 flex flex-col md:hidden">
          <div className="flex flex-col px-6 py-10 gap-7">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="text-xl font-serif font-bold text-ink border-b border-rule pb-6"
                onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <button className="btn btn-secondary self-start mt-2"
              data-tally-open="GxLXyQ" data-tally-layout="modal" data-tally-width="400" data-tally-form-events-forwarding="1"
              onClick={() => setOpen(false)}>
              Get Early Access
            </button>
            <button className="btn btn-primary self-start"
              data-cal-link="joinflax/strategy-call"
              data-cal-namespace="strategy-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              onClick={() => setOpen(false)}>
              Book a demo
            </button>
          </div>
        </div>
      )}
    </>
  );
};
