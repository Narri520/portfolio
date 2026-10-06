import React from 'react';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, BookOpen, Target, Code2, Database, Brain, Sparkles, Check } from 'lucide-react';

export const About = () => {
  const { education, personalInfo } = portfolioData;

  const coreFocusAreas = [
    {
      title: "Python & Backend Systems",
      desc: "Architecting clean, modular REST APIs and backend logic with Python and FastAPI / Node.js.",
      icon: Code2,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10"
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Solving algorithmic problems daily with strong emphasis on optimized time & space complexity.",
      icon: Brain,
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      title: "Full-Stack Web Development",
      desc: "Building responsive, modern user interfaces with React.js, Tailwind CSS, and full MERN stack workflow.",
      icon: Sparkles,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10"
    },
    {
      title: "Database Engineering",
      desc: "Designing normalized relational schemas in MySQL and document collections in MongoDB.",
      icon: Database,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#070a12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Engineering Practical Solutions Through Code
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            I am a B.Tech Artificial Intelligence and Data Science undergraduate with a passion for software engineering, web technologies, and algorithmic problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Education Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0b101e] p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-slate-700 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Education</span>
                  <h3 className="text-xl font-bold text-white font-sans">{education.degree}</h3>
                  <p className="text-slate-300 font-medium text-sm">{education.field}</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Institution</span>
                  <span className="text-slate-200 font-medium">{education.institution}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Duration</span>
                  <span className="text-slate-200 font-mono font-medium">{education.duration}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Academic Standing</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono font-bold">
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5">
                {education.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Core Focus */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="prose prose-invert max-w-none text-slate-300 text-base leading-relaxed space-y-4">
              <p>
                My technical journey centers around building practical, full-stack software applications while continuously honing core problem-solving fundamentals. I enjoy taking an idea from concept to execution—designing clean database schemas, writing backend API services in Python or Node.js, and crafting responsive user interfaces.
              </p>
              <p>
                As an Artificial Intelligence & Data Science student, I apply analytical rigor to software design. I regularly practice Data Structures and Algorithms to keep my computational logic sharp, allowing me to build systems that are not just functional, but efficient and scalable.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {coreFocusAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-3.5"
                  >
                    <div className={`p-2.5 rounded-lg ${area.bg} ${area.color} shrink-0`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-100">{area.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">{area.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
