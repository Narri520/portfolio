import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Award, Trophy, Brain, Zap, CheckCircle } from 'lucide-react';

const achievementIcons = {
  Award: Award,
  Trophy: Trophy,
  Brain: Brain,
  Zap: Zap
};

export const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 md:py-28 relative bg-[#090d16] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Key Accomplishments
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Proven milestones in competitive coding, problem solving, and technical practice.
          </p>
        </div>

        {/* Achievement Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const IconComp = achievementIcons[item.icon] || Award;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0b101d] border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition-all flex items-start gap-4 group shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 via-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                  <IconComp className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Resume Milestone</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
