import React from 'react';
import { Section } from './ui/Section';
import { Check, X } from 'lucide-react';

export const VsAds: React.FC = () => {
  const comparisons = [
    { aspect: "Trust & Authenticity", creator: "Built on real relationships", ads: "Perceived as interruption" },
    { aspect: "Cost Efficiency", creator: "Lower CPM, higher engagement", ads: "Expensive ($30+ CPM on LinkedIn)" },
    { aspect: "Reach Type", creator: "Organic, algorithm-friendly", ads: "Paid, stops when budget stops" },
    { aspect: "Audience Experience", creator: "Value-add content", ads: "Disruptive, often ignored" },
    { aspect: "Storytelling", creator: "Rich, authentic narratives", ads: "Limited by format" },
    { aspect: "Longevity", creator: "Content lives on, compounds", ads: "Disappears when spend stops" },
  ];

  return (
    <Section className="bg-background relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4">
            Ditch the Ad Spend.
            <br />
            <span className="text-gray-600">Build Real Trust.</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            People trust people, not ads. Creator marketing reaches your buyers through voices they already follow.
          </p>
        </div>

        <div className="bg-surface/30 rounded-3xl border border-white/5 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/5 bg-surface/50">
            <div className="p-5"></div>
            <div className="p-5 text-center border-l border-white/5">
              <div className="text-xs font-mono text-gray-500 mb-1">TRADITIONAL</div>
              <span className="text-white font-medium">Paid Ads</span>
            </div>
            <div className="p-5 text-center border-l border-white/5 bg-primary/5">
              <div className="text-xs font-mono text-primary mb-1">FLAX</div>
              <span className="text-white font-medium">Creator Marketing</span>
            </div>
          </div>
          
          {/* Rows */}
          {comparisons.map((row, i) => (
            <div key={i} className="grid grid-cols-3 border-b border-white/5 last:border-b-0 group hover:bg-white/[0.02] transition-colors">
              <div className="p-5 flex items-center">
                <span className="text-white text-sm font-medium">{row.aspect}</span>
              </div>
              <div className="p-5 flex items-center justify-center gap-2 border-l border-white/5 text-center">
                <X size={14} className="text-red-400/60 flex-shrink-0" />
                <span className="text-gray-500 text-sm">{row.ads}</span>
              </div>
              <div className="p-5 flex items-center justify-center gap-2 border-l border-white/5 bg-primary/5 text-center">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-white text-sm">{row.creator}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            LinkedIn Ads average $33.80 CPM. Creator content often achieves 5-10x the engagement at a fraction of the cost.
          </p>
        </div>

      </div>
    </Section>
  );
};
