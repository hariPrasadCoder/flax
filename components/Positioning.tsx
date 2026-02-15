import React from 'react';
import { Section } from './ui/Section';
import { Network, Layers, Target, BarChart3 } from 'lucide-react';

export const Positioning: React.FC = () => {
  return (
    <Section id="positioning" className="bg-background relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
            Flax Is Not An
            <br />
            <span className="text-gray-600">Influencer Agency.</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl">
            We're LinkedIn creator marketing infrastructure. Here's the difference.
          </p>
        </div>

        {/* What Flax Is */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { icon: Network, title: "Curated LinkedIn Network", desc: "Vetted B2B creators with engaged professional audiences" },
            { icon: Layers, title: "Campaign Orchestration", desc: "Coordinated deployment, not random sponsored posts" },
            { icon: Target, title: "Strategic Partner", desc: "Distribution aligned with your business goals" },
            { icon: BarChart3, title: "Performance Tracked", desc: "Clear metrics tied to business outcomes" }
          ].map((item, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6 group hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                <item.icon size={20} />
              </div>
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-surface/50 rounded-3xl border border-white/5 overflow-hidden">
          <div className="grid grid-cols-3 border-b border-white/5">
            <div className="p-6"></div>
            <div className="p-6 text-center border-l border-white/5">
              <span className="text-gray-500 text-sm font-medium">Traditional Agency</span>
            </div>
            <div className="p-6 text-center border-l border-white/5 bg-primary/5">
              <span className="text-primary text-sm font-medium">Flax</span>
            </div>
          </div>
          
          {[
            { aspect: "Creator Selection", traditional: "Random influencer outreach", flax: "Curated LinkedIn creator network" },
            { aspect: "Campaign Management", traditional: "Manual spreadsheets", flax: "Structured orchestration" },
            { aspect: "Success Metrics", traditional: "Vanity metrics (likes)", flax: "Business impact (leads, pipeline)" },
            { aspect: "Timing", traditional: "Whenever creators are free", flax: "Synchronized launch windows" },
            { aspect: "Messaging", traditional: "Creator decides everything", flax: "Strategic narrative control" }
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 border-b border-white/5 last:border-b-0">
              <div className="p-6 flex items-center">
                <span className="text-white font-medium text-sm">{row.aspect}</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-white/5">
                <span className="text-gray-500 text-sm text-center">{row.traditional}</span>
              </div>
              <div className="p-6 flex items-center justify-center border-l border-white/5 bg-primary/5">
                <span className="text-white text-sm text-center">{row.flax}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};
