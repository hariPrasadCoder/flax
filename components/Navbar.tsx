import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <span className="font-serif font-black text-ink text-xl tracking-tight select-none">
    Flax
  </span>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Who it\'s for', href: '#who' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-paper border-b border-rule'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-ink-muted hover:text-ink transition-colors font-mono tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#waitlist" className="btn-primary text-xs px-4 py-2">
              Join the waitlist
            </a>
          </div>

          <button
            className="md:hidden text-ink p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-paper pt-14 flex flex-col md:hidden">
          <div className="border-b border-rule" />
          <div className="flex flex-col px-5 py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-ink font-mono border-b border-rule pb-5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="btn-primary self-start mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the waitlist
            </a>
          </div>
        </div>
      )}
    </>
  );
};
