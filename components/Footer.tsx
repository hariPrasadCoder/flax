import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">
        <div className="rule-thick mb-6" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Logo + tagline */}
          <div className="flex items-center gap-4">
            <span className="font-serif font-black text-ink text-xl">Flax</span>
            <span className="text-rule">|</span>
            <span className="text-xs text-ink-muted font-mono">Documentation that keeps up.</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-5">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Contact', href: 'mailto:hello@flaxhq.com' },
              { label: 'Twitter', href: 'https://twitter.com/flaxhq' },
              { label: 'GitHub', href: 'https://github.com/flaxhq' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-ink-muted hover:text-ink transition-colors font-mono"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        <div className="mt-6 rule-thin pt-5 flex items-center justify-between">
          <span className="text-[10px] text-ink-muted font-mono">© 2026 Flax. All rights reserved.</span>
          <span className="text-[10px] text-ink-muted font-mono">Made with care.</span>
        </div>
      </div>
    </footer>
  );
};
