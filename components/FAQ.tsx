import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How is Flax different from other influencer marketing agencies?",
    a: "Most agencies send cold outreach to random influencers and hope something sticks. We've built a curated network of creators we actually work with. We coordinate campaigns as synchronized bursts — your brand appears everywhere at once. It's infrastructure, not middleman services."
  },
  {
    q: "Do you guarantee impressions?",
    a: "We provide projected reach ranges based on the creators in your campaign. While we can't guarantee viral outcomes (no one honestly can), we can guarantee professional execution, quality creators, and transparent reporting on exactly what you get."
  },
  {
    q: "How do you measure ROI?",
    a: "We track impressions, engagement, click-throughs (where applicable), and provide full analytics. More importantly, we help you define what success looks like before the campaign — whether that's awareness, signups, or sales pipeline."
  },
  {
    q: "Do you work globally?",
    a: "Yes. Our creator network spans US, UK, Europe, and select international markets. We can target specific geographies or go broad depending on your goals."
  },
  {
    q: "What's the typical timeline?",
    a: "From kickoff to campaign completion: 30 days. Week 1 is strategy and creator matching. Week 2 is coordination and content prep. Weeks 3-4 are activation and amplification."
  },
  {
    q: "What if I'm not happy with the results?",
    a: "We're selective about who we work with precisely to avoid this. In the strategy call, we'll be honest about whether Flax is right for your situation. If we don't think we can deliver value, we'll tell you."
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
