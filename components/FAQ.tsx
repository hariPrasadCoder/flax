import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Can I run a pilot campaign first?",
    a: "Absolutely. Most brands start with a single pilot campaign to see results before committing to ongoing work. No long-term contracts required upfront — just valuable insights and real distribution."
  },
  {
    q: "How much does a campaign cost?",
    a: "Campaign pricing depends on your goals, target audience, and scale. We'll scope everything on a strategy call and provide a clear proposal. We work with budgets from startups to enterprises — the key is alignment on objectives, not a specific number."
  },
  {
    q: "How is Flax different from other influencer agencies?",
    a: "Most agencies blast cold outreach to random influencers and hope something sticks. We've built a curated network of creators we actually work with. We coordinate campaigns as synchronized bursts — your brand appears everywhere at once. It's infrastructure, not middleman services."
  },
  {
    q: "Do you guarantee impressions or results?",
    a: "We provide projected reach ranges based on the creators in your campaign. While no one can honestly guarantee viral outcomes, we guarantee professional execution, quality creators, and transparent reporting on exactly what you get."
  },
  {
    q: "How do you measure success?",
    a: "We track impressions, engagement, click-throughs, and conversions where applicable. More importantly, we define what success looks like before the campaign — whether that's awareness, signups, pipeline, or press coverage."
  },
  {
    q: "What platforms do you cover?",
    a: "Our network spans LinkedIn, Twitter/X, Instagram, TikTok, YouTube, and newsletters. We match platforms to your audience — B2B typically means LinkedIn and Twitter, consumer products might lean Instagram and TikTok."
  },
  {
    q: "How long does a campaign take?",
    a: "From kickoff to completion: 30 days. Week 1 is strategy and creator matching. Week 2 is coordination and content prep. Weeks 3-4 are activation and amplification."
  },
  {
    q: "Do I need to talk to creators directly?",
    a: "No. We handle all creator communication, negotiation, briefing, and coordination. You approve the campaign plan and content direction — we manage everything else."
  },
  {
    q: "What if I want to continue after the pilot?",
    a: "Most clients do. After a successful pilot, we can move into an ongoing partnership with monthly campaigns, strategic planning, and priority access to our best creators. We'll discuss options based on your results."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-background relative border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
            Questions
          </h2>
          <p className="text-secondary">Straight answers.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/20' : ''}`}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white font-medium">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};
