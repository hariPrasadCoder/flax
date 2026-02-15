import React from 'react';
import { Section } from './ui/Section';

export const Featured: React.FC = () => {
  // Placeholder for actual logos - using text for now
  const credentials = [
    { type: "metric", value: "47K+", label: "LinkedIn Followers" },
    { type: "metric", value: "10M+", label: "Impressions Generated" },
    { type: "metric", value: "100+", label: "Founders at Events" },
  ];

  return (
    <Section className="bg-background relative !py-12">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">Built by practitioners, not theorists</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {credentials.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-white/80 group-hover:text-white transition-colors">
                {item.value}
              </div>
              <div className="text-xs text-gray-600 font-mono mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Future: Add "As Featured In" logos here
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">As Featured In</span>
          </div>
          <div className="flex justify-center items-center gap-12 opacity-40">
            // Logo images would go here
          </div>
        </div>
        */}

      </div>
    </Section>
  );
};
