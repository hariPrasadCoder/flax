import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How do I know which path is right for me?",
    a: "It depends on your stage and goals. Early-stage founders often start by building their own voice. It's more affordable and builds long-term equity. Funded startups ready to scale fast typically go the creator route for immediate reach. We'll help you figure this out on the strategy call."
  },
  {
    q: "Can I start with one and add the other later?",
    a: "Absolutely. Many founders start by building their voice, then add creator campaigns when they're ready to scale. Or vice versa. Some use creator reach first, then invest in building their own presence. We're flexible."
  },
  {
    q: "How much does this cost?",
    a: "It depends on scope. We'll discuss your goals on the strategy call and put together a custom proposal. We work with everyone from bootstrapped founders to funded startups. The key is finding the right fit for your situation."
  },
  {
    q: "Can I try this without a long commitment?",
    a: "Yes. We offer pilot engagements so you can see results before committing to anything ongoing. No long-term contracts required to get started."
  },
  {
    q: "Why LinkedIn specifically?",
    a: "LinkedIn is the #1 B2B platform with 1 billion professionals. It has 2x conversion rates compared to other channels. For B2B founders, it's where your buyers and partners actually are."
  },
  {
    q: "How much of my time does this take?",
    a: "Minimal. For the 'Build Your Voice' path, we extract content from your existing work like calls, docs, and thoughts. You spend maybe 30 minutes a week. For creator campaigns, even less. You approve the plan and we handle execution."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-background relative border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Questions
          </h2>
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
