import React from 'react';
import { Section } from './ui/Section';

export const Problem: React.FC = () => {
  return (
    <Section className="bg-background relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              The Old Playbook
              <br />
              <span className="text-gray-600">Is Broken.</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-1 h-full bg-red-500/50 rounded-full flex-shrink-0 mt-2"></div>
              <div>
                <p className="text-white font-medium mb-1">LinkedIn ads cost $30+ CPM</p>
                <p className="text-gray-500 text-sm">And people scroll right past them.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-1 h-full bg-red-500/50 rounded-full flex-shrink-0 mt-2"></div>
              <div>
                <p className="text-white font-medium mb-1">Cold outreach is ignored</p>
                <p className="text-gray-500 text-sm">Nobody replies to strangers anymore.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-1 h-full bg-red-500/50 rounded-full flex-shrink-0 mt-2"></div>
              <div>
                <p className="text-white font-medium mb-1">You're invisible</p>
                <p className="text-gray-500 text-sm">Great product, zero distribution.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-12 border-t border-white/5 text-center">
          <p className="text-2xl md:text-3xl text-white font-light max-w-3xl mx-auto leading-relaxed">
            The winners aren't running more ads.
            <br />
            <span className="text-primary font-medium">They're building distribution through content.</span>
          </p>
        </div>

      </div>
    </Section>
  );
};
