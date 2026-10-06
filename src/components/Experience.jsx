import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Layers, Terminal, ShieldCheck, GitBranch, Sparkles, CheckCircle } from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Terminal: Terminal,
  ShieldCheck: ShieldCheck,
  GitBranch: GitBranch
};

export const Experience = () => {
  const { learningAndDevelopment } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#090d16] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hands-on Engineering Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            {learningAndDevelopment.title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {learningAndDevelopment.subtitle} – Continuous practical practice in full-stack development, algorithms, and application security.
          </p>
        </div>

        {/* Learning Timeline / Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningAndDevelopment.areas.map((area, idx) => {
            const IconComponent = iconMap[area.icon] || Layers;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0b101d] border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-white font-sans">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Active Ongoing Practice & Project Application</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
