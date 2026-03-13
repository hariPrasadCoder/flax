import React, { useState } from 'react';

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-6">
            <span className="section-label block mb-4">Early Access</span>
            <h2 className="font-serif font-black text-ink text-3xl md:text-5xl leading-[1.12] mb-5">
              Give Flaxie<br />to your team.
            </h2>
            <p className="text-ink-muted text-sm leading-7 max-w-md">
              Join the waitlist. We're in private beta — early teams get full access and direct input into the product.
            </p>
            <div className="mt-8 space-y-2.5">
              {[
                'No setup for your teammates',
                'Works with Zoom, Meet, and Teams',
                'Connects to Notion, Confluence, Google Docs',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-ink-muted">
                  <span className="text-ink font-bold text-sm">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="card p-8">
              {submitted ? (
                <div className="py-6">
                  <div className="font-serif font-bold text-ink text-lg mb-2">You're on the list.</div>
                  <p className="text-ink-muted text-xs leading-6">
                    We'll reach out when early access opens. We're building in public — follow along on Twitter.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-serif font-bold text-ink text-lg mb-1">Join the waitlist</h3>
                  <p className="text-ink-muted text-xs mb-6">No spam. Email only when there's something real to share.</p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="section-label block mb-1.5" htmlFor="waitlist-email">Work email</label>
                      <input
                        id="waitlist-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full font-mono text-xs text-ink bg-paper border border-rule px-3 py-2.5 outline-none focus:border-ink transition-colors placeholder:text-ink-muted rounded-sm"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Request early access
                    </button>
                  </form>
                </>
              )}
            </div>
            <p className="text-[10px] text-ink-muted mt-3 font-mono leading-5">
              By joining you agree to receive occasional product updates. Unsubscribe at any time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
