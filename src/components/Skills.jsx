import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { 
  Code, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  CheckCircle,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';

const categoryIcons = {
  PROGRAMMING: Code,
  WEB: Globe,
  DATABASE: Database,
  'CORE CS': Cpu,
  'TOOLS & DEVOPS': Wrench,
};

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredSkills = activeCategory === 'ALL' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#090d16] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Skills & Technology Stack
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Core programming languages, full-stack web frameworks, database systems, and CS fundamentals.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeCategory === 'ALL'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All Skills
            </button>

            {skills.map((group) => (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeCategory === group.category
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((group) => {
            const IconComp = categoryIcons[group.category] || Code;
            return (
              <div
                key={group.category}
                className="rounded-2xl bg-[#0d1322] border border-slate-800/90 p-6 shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-100 font-mono tracking-wide">
                          {group.category}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {group.items.length} Core Technologies
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Badges & Items List */}
                  <div className="space-y-4">
                    {group.items.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-200 font-medium font-sans flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            {skill.name}
                          </span>
                          
                          {skill.tag && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                              {skill.tag}
                            </span>
                          )}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/50 text-xs text-slate-400 font-mono flex items-center justify-between">
                  <span>Verified Competency</span>
                  <span className="text-cyan-400">Practiced</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
