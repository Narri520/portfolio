import React from 'react';
import { FileText, Download, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export const ResumeSection = ({ onOpenResume, onDownloadResume }) => {
  return (
    <section id="resume" className="py-20 md:py-24 relative bg-[#090d16] border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#0b101e] border border-cyan-500/30 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto shadow-lg shadow-cyan-500/20">
              <FileText className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              Want to know more about my work?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore my verified resume detailing my education at VVIIT, technical skill set in Python & full-stack web engineering, project architecture, certifications, and problem-solving achievements.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Eye className="w-5 h-5" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onDownloadResume}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700/80 font-semibold text-sm sm:text-base transition-all hover:border-slate-500"
              >
                <Download className="w-5 h-5 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Single Page Verified Format
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Updated 2026 Profile
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
