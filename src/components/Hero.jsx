import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { 
  Code, 
  FileText, 
  ChevronRight, 
  Terminal, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Hero = ({ onOpenResume }) => {
  const { personalInfo } = portfolioData;
  const [activeTab, setActiveTab] = useState('python');

  const pythonCode = `# Developer Profile: Narendra Chamarthi
class Developer:
    def __init__(self):
        self.name = "Narendra Chamarthi"
        self.role = "Python Full-Stack Developer"
        self.degree = "B.Tech AI & Data Science (2023-2027)"
        self.cgpa = 8.6
        self.languages = ["Python", "SQL", "JavaScript"]
        self.dsa_solved = "300+ Problems"

    def build_application(self, stack):
        return f"Engineering scalable web apps with {stack}"

dev = Developer()
print(dev.build_application("Python FastAPI + React + MongoDB"))
# Output: Engineering scalable web apps with Python FastAPI + React + MongoDB`;

  const reactCode = `// React Component: NarendraPortfolio.jsx
import React from 'react';

export const DeveloperProfile = () => {
  const skills = ["Python", "React.js", "Node.js", "MySQL", "DSA"];
  
  return (
    <div className="developer-card">
      <h3>Narendra Chamarthi</h3>
      <p>Building practical applications & solving complex DSA problems.</p>
      <div className="skills-badge">
        {skills.map(skill => <span key={skill}>{skill}</span>)}
      </div>
    </div>
  );
};`;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle Glow Backdrop Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Developer Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
              <span className="text-xs font-mono font-semibold tracking-wide text-slate-300 uppercase pl-3">
                Open for Software & Full-Stack Opportunities
              </span>
            </div>

            {/* Main Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
                {personalInfo.name}
              </h1>
              
              {/* Positions / Roles */}
              <div className="mt-3 text-lg sm:text-xl lg:text-2xl font-semibold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Software Developer <span className="text-slate-500 font-sans mx-1">|</span> Python Full-Stack Developer <span className="text-slate-500 font-sans mx-1">|</span> Problem Solver
              </div>
            </div>

            {/* Concise Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-all hover:border-slate-500"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-all hover:border-slate-500"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-all hover:border-slate-500"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-500/40 text-sm font-medium transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Highlights Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-xl text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">300+</div>
                <div className="text-xs text-slate-400 mt-0.5">DSA Solved</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">8.6 / 10</div>
                <div className="text-xs text-slate-400 mt-0.5">B.Tech CGPA</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">2027</div>
                <div className="text-xs text-slate-400 mt-0.5">Graduation</div>
              </div>
            </div>

          </div>

          {/* Right Column: Code Terminal Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0b101d] border border-slate-800 shadow-2xl shadow-cyan-950/30 overflow-hidden text-left">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#080c16] border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-slate-400" />
                    narendra-workspace ~ bash
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-md border border-slate-800">
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-2.5 py-1 text-xs font-mono rounded ${
                      activeTab === 'python'
                        ? 'bg-cyan-500/20 text-cyan-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    main.py
                  </button>
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`px-2.5 py-1 text-xs font-mono rounded ${
                      activeTab === 'react'
                        ? 'bg-blue-500/20 text-blue-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Profile.jsx
                  </button>
                </div>
              </div>

              {/* Terminal Code Content */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed max-h-[380px] scrollbar-thin">
                <pre className="whitespace-pre">
                  <code>
                    {activeTab === 'python' ? pythonCode : reactCode}
                  </code>
                </pre>
              </div>

              {/* Terminal Footer Status Bar */}
              <div className="px-4 py-2.5 bg-[#080c16] border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Status: Ready for Opportunities
                </span>
                <span className="text-slate-400">UTF-8</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
