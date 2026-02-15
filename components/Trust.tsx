import React from 'react';
import { Section } from './ui/Section';
import { ShieldCheck, Lock, Eye, CheckCircle2 } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <Section className="bg-background relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Transparent, Controlled, Safe</h2>
        <p className="text-secondary text-lg mb-8 leading-relaxed">
          Full visibility into every campaign. You approve everything before it goes live.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-white font-medium mb-3">Vetted Influencers</h3>
            <p className="text-sm text-gray-400">Every influencer in our network is verified for authenticity and engagement quality.</p>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
              <Lock size={20} />
            </div>
            <h3 className="text-white font-medium mb-3">Brand Safe</h3>
            <p className="text-sm text-gray-400">We match you with creators who align with your brand values and messaging.</p>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
              <Eye size={20} />
            </div>
            <h3 className="text-white font-medium mb-3">Full Transparency</h3>
            <p className="text-sm text-gray-400">See exactly where your budget goes. No hidden fees, no surprises.</p>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="text-white font-medium mb-3">Approval Required</h3>
            <p className="text-sm text-gray-400">Nothing goes live without your explicit approval. Full control, always.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
