import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Code, ExternalLink, Flame, Trophy, Terminal, CheckCircle, Brain, Sparkles } from 'lucide-react';

export const DSA = () => {
  const { dsaStats } = portfolioData;
  const { liveData } = dsaStats;

  // Percentage calculation relative to target difficulty benchmarks
  const easyPct = Math.min(Math.round((liveData.easySolved / 100) * 100), 100);
  const medPct = Math.min(Math.round((liveData.mediumSolved / 50) * 100), 100);
  const hardPct = Math.min(Math.round((liveData.hardSolved / 10) * 100), 100);

  return (
    <section id="dsa" className="py-20 md:py-28 relative bg-[#070a12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Algorithmic Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Problem Solving & DSA
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Continuous problem-solving practice on LeetCode and competitive programming platforms in Python.
          </p>
        </div>

        {/* Top Banner: Resume Achievement (300+ Solved across platforms) */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Overall Achievement</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
              {dsaStats.resumeAchievement}
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              {dsaStats.resumeNote}
            </p>
          </div>

          <div className="z-10 shrink-0">
            <a
              href={dsaStats.leetcodeProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <Code className="w-4 h-4" />
              <span>View LeetCode Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Live LeetCode Statistics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Solved Counter & Profile Info */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0b101d] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold font-mono">
                    LC
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-mono">@{dsaStats.leetcodeUsername}</h4>
                    <span className="text-xs text-slate-400">LeetCode Profile</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400">
                  {liveData.topLanguage}
                </span>
              </div>

              {/* Total Solved Highlight */}
              <div className="text-center py-6 bg-slate-900/60 rounded-xl border border-slate-800/80 mb-6">
                <div className="text-5xl font-extrabold text-white font-mono tracking-tight">
                  {liveData.totalSolved}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mt-2">
                  LeetCode Solved
                </div>
                <div className="mt-2 text-xs text-cyan-400 font-mono">
                  Rank ~{liveData.globalRanking}
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono space-y-1.5 text-left border-t border-slate-800/80 pt-4">
              <div className="flex justify-between">
                <span>Primary Language:</span>
                <span className="text-slate-200 font-semibold">{liveData.topLanguage}</span>
              </div>
              <div className="flex justify-between">
                <span>Verification:</span>
                <span className="text-emerald-400 font-semibold">Live Public API Verified</span>
              </div>
            </div>
          </div>

          {/* Difficulty Breakdown Cards */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Easy Card */}
              <div className="rounded-2xl bg-[#0b101d] border border-emerald-500/30 p-5 text-left shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono uppercase font-bold text-emerald-400">Easy</span>
                  <span className="text-xs font-mono text-slate-400">Target 100+</span>
                </div>
                <div className="text-3xl font-bold font-mono text-white mb-2">
                  {liveData.easySolved}
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${easyPct}%` }} />
                </div>
              </div>

              {/* Medium Card */}
              <div className="rounded-2xl bg-[#0b101d] border border-amber-500/30 p-5 text-left shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono uppercase font-bold text-amber-400">Medium</span>
                  <span className="text-xs font-mono text-slate-400">Target 50+</span>
                </div>
                <div className="text-3xl font-bold font-mono text-white mb-2">
                  {liveData.mediumSolved}
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${medPct}%` }} />
                </div>
              </div>

              {/* Hard Card */}
              <div className="rounded-2xl bg-[#0b101d] border border-rose-500/30 p-5 text-left shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono uppercase font-bold text-rose-400">Hard</span>
                  <span className="text-xs font-mono text-slate-400">Advanced</span>
                </div>
                <div className="text-3xl font-bold font-mono text-white mb-2">
                  {liveData.hardSolved}
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: `${hardPct}%` }} />
                </div>
              </div>

            </div>

            {/* Core DSA Topics Grid */}
            <div className="rounded-2xl bg-[#0b101d] border border-slate-800 p-6 text-left shadow-xl">
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span>Core Algorithmic Topics Practiced</span>
              </h4>

              <div className="flex flex-wrap gap-2">
                {liveData.topicsCovered.map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5 hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
