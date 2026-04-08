import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <footer className="bg-paper border-t border-rule">
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        <div className="flex items-center gap-3">
          <span className="font-serif font-black text-ink text-xl">Flax</span>
          <span className="text-rule">·</span>
          <span className="font-mono text-[11px] text-ink-muted">Nothing slips.</span>
        </div>

        <a href="mailto:contact@joinflax.com"
          className="font-mono text-[12px] text-ink-muted hover:text-ink transition-colors">
          contact@joinflax.com
        </a>

      </div>
      <div className="mt-6 pt-6 border-t border-rule flex items-center justify-between">
        <span className="font-mono text-[10px] text-ink-muted">© 2026 Flax. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link to="/ea"      className="font-mono text-[10px] text-ink-muted hover:text-ink transition-colors">AI Executive Assistant</Link>
          <Link to="/security" className="font-mono text-[10px] text-ink-muted hover:text-ink transition-colors">Security</Link>
          <Link to="/privacy"  className="font-mono text-[10px] text-ink-muted hover:text-ink transition-colors">Privacy Policy</Link>
          <Link to="/terms"    className="font-mono text-[10px] text-ink-muted hover:text-ink transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);
